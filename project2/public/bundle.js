/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CLIENT": () => (/* binding */ CLIENT),
/* harmony export */   "MESSAGES": () => (/* binding */ MESSAGES),
/* harmony export */   "SERVER": () => (/* binding */ SERVER)
/* harmony export */ });
var _MESSAGES;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SERVER = {
  AUTH_MISSING: 'auth-missing',
  AUTH_INSUFFICIENT: 'auth-insufficient',
  REQUIRED_USERNAME: 'required-username',
  REQUIRED_TASK: 'required-task',
  TASK_MISSING: 'noSuchId' // Someone was inconsistent!
};

var CLIENT = {
  NETWORK_ERROR: 'networkError',
  NO_SESSION: 'noSession'
};
var MESSAGES = (_MESSAGES = {}, _defineProperty(_MESSAGES, CLIENT.NETWORK_ERROR, 'Trouble connecting to the network.  Please try again'), _defineProperty(_MESSAGES, SERVER.AUTH_INSUFFICIENT, 'Your username/password combination does not match any records, please try again.'), _defineProperty(_MESSAGES, SERVER.REQUIRED_USERNAME, 'Please enter a valid (letters and/or numbers) username'), _defineProperty(_MESSAGES, SERVER.REQUIRED_TASK, 'Please enter the task to do'), _defineProperty(_MESSAGES, "default", 'Something went wrong.  Please try again'), _MESSAGES);

/***/ }),

/***/ "./src/listeners.js":
/*!**************************!*\
  !*** ./src/listeners.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addListenerToLogin": () => (/* binding */ addListenerToLogin),
/* harmony export */   "addListenerToLogout": () => (/* binding */ addListenerToLogout),
/* harmony export */   "addListenerToOutgoing": () => (/* binding */ addListenerToOutgoing)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./src/services.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/state.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ "./src/render.js");



function addListenerToLogin(_ref) {
  var state = _ref.state,
    rootEl = _ref.rootEl;
  // Using 'submit' so we can get both submit via button-click and by "enter"
  rootEl.addEventListener('click', function (e) {
    if (!e.target.classList.contains('login-to-submit')) {
      return;
    }
    var username = rootEl.querySelector('.login-to-send').value;
    //   waitOnUsers();
    //   waitOnMessages();
    (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderHomePage)({
      state: state,
      rootEl: rootEl
    }); // show loading state
    (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchLogin)(username).then(function (todos) {
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.login)(username);
      // setUsers(users);
      // setMessages(messages);
      (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderHomePage)({
        state: state,
        rootEl: rootEl
      });
    })["catch"](function (err) {
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.setError)((err === null || err === void 0 ? void 0 : err.error) || 'ERROR'); // Ensure that the error ends up truthy
      (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderLoginPage)({
        state: state,
        rootEl: rootEl
      });
    });
  });
}
function addListenerToLogout(_ref2) {
  var state = _ref2.state,
    rootEl = _ref2.rootEl;
  rootEl.addEventListener('click', function (e) {
    if (!e.target.classList.contains('logout-to-submit')) {
      return;
    }
    (0,_state__WEBPACK_IMPORTED_MODULE_1__.logout)();
    (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderHomePage)({
      state: state,
      rootEl: rootEl
    });
    (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchLogout)() // We don't really care about results
    ["catch"](function (err) {
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.setError)((err === null || err === void 0 ? void 0 : err.error) || 'ERROR'); // Ensure that the error ends up truthy
      (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderLoginPage)({
        state: state,
        rootEl: rootEl
      });
    });
  });
}
function addListenerToOutgoing(_ref3) {
  var state = _ref3.state,
    rootEl = _ref3.rootEl;
  // Using 'submit' so we can get both submit via button-click and by "enter"
  rootEl.addEventListener('click', function (e) {
    if (!e.target.classList.contains('outgoing-to-submit')) {
      return;
    }
    var message = rootEl.querySelector('.outgoing-to-send').value;
    console.log(message);
    //   waitOnUsers();
    //   waitOnMessages();
    //   renderHomePage({ state, rootEl }); // show loading state
    //   fetchLogin( username )
    //   .then( todos => {
    //     login(username);
    //     // setUsers(users);
    //     // setMessages(messages);
    //     renderHomePage({ state, rootEl });
    //   })
    //   .catch( err => {
    //     setError(err?.error || 'ERROR'); // Ensure that the error ends up truthy
    //     renderLoginPage({ state, rootEl });
    //   });
  });
}

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderHomePage": () => (/* binding */ renderHomePage),
/* harmony export */   "renderLoginPage": () => (/* binding */ renderLoginPage)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function generateHomePageHtml(state) {
  return "\n      <div class=\"home\">\n        <p class=\"user-greeting\">Hello <span class=\"user-title\">".concat(state.username, "</span></p>\n        <div class=\"logout-form\">\n          <button type=\"submit\" class=\"logout-to-submit\">Logout</button>\n        </div>\n        ").concat(generateMessageListHtml(state), "\n        ").concat(generateUserListHtml(state), "\n        ").concat(generateOutgoingHtml(), "\n      </div>\n    ");
}
function generateMessageListHtml(state) {
  return "<ol class=\"messages\">" + state.messages.map(function (msg) {
    return "\n      <li>\n        <div class=\"message\">\n          <div class=\"sender-info\">\n            <img class=\"avatar\" alt=\"avatar of ".concat(msg.username, "\" src=\"images/avatar-").concat(msg.username, ".jpg\"/>\n            <span class=\"username\">").concat(msg.username, "</span>\n          </div>\n          <p class=\"message-text\">").concat(msg.message, "</p>\n        </div>\n      </li>\n    ");
  }).join('') + "</ol>";
}
function generateUserListHtml(state) {
  return "<ul class=\"users\">" + Object.entries(state.users).filter(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      username = _ref2[0],
      value = _ref2[1];
    return value === null || value === void 0 ? void 0 : value.isLoggedIn;
  }).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      username = _ref4[0],
      value = _ref4[1];
    return "\n      <li>\n        <div class=\"user\">\n          <span class=\"username\">".concat(username, "</span>\n        </div>\n      </li>\n    ");
  }).join('') + "</ul>";
}
function generateOutgoingHtml() {
  return "<div class=\"outgoing\">\n      <div class=\"outgoing-form\">\n        <input type=\"text\" name=\"text\" class=\"outgoing-to-send\" value=\"\" placeholder=\"Enter message to send\"/>\n        <button type=\"submit\" class=\"outgoing-to-submit\">Send</button>\n      </div>\n    </div>";
}
function generateLoginPageHtml(state) {
  return "\n      <div class=\"login\">\n        <p class=\"login-greeting\">Welcome to JS Chat!</p>\n        <div class=\"login-main\">\n          ".concat(state.error ? "<p class=\"login-message\">".concat(state.error, "</p>") : "", "\n          <div class=\"login-form\">\n            <label class=\"login-label\">\n              <span>Username:</span>\n              <input type=\"text\" name=\"username\" class=\"login-to-send\" value=\"\" placeholder=\"Enter your username\"/>\n            </label>\n            <button type=\"submit\" class=\"login-to-submit\">Login</button>\n          </div>\n        </div>\n      </div>\n    ");
}
function renderHomePage(_ref5) {
  var state = _ref5.state,
    rootEl = _ref5.rootEl;
  var homePageHtml = generateHomePageHtml(state);
  rootEl.innerHTML = "".concat(homePageHtml);
}
function renderLoginPage(_ref6) {
  var state = _ref6.state,
    rootEl = _ref6.rootEl;
  var loginPageHtml = generateLoginPageHtml(state);
  rootEl.innerHTML = "".concat(loginPageHtml);
}

/***/ }),

/***/ "./src/services.js":
/*!*************************!*\
  !*** ./src/services.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchLogin": () => (/* binding */ fetchLogin),
/* harmony export */   "fetchLogout": () => (/* binding */ fetchLogout),
/* harmony export */   "fetchSession": () => (/* binding */ fetchSession)
/* harmony export */ });
function fetchLogin(username) {
  return fetch('/api/v1/session', {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json'
    }),
    body: JSON.stringify({
      username: username
    })
  })["catch"](function () {
    return Promise.reject({
      error: 'networkError'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }
    return response.json()["catch"](function (error) {
      return Promise.reject({
        error: error
      });
    }).then(function (err) {
      return Promise.reject(err);
    });
  });
}
function fetchLogout() {
  return fetch('/api/v1/session', {
    method: 'DELETE'
  })["catch"](function () {
    return Promise.reject({
      error: 'networkError'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }
    return response.json()["catch"](function (error) {
      return Promise.reject({
        error: error
      });
    }).then(function (err) {
      return Promise.reject(err);
    });
  });
}
function fetchSession() {
  return fetch('/api/v1/session', {
    method: 'GET'
  })["catch"](function () {
    return Promise.reject({
      error: 'networkError'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }
    return response.json()["catch"](function (error) {
      return Promise.reject({
        error: error
      });
    }).then(function (err) {
      return Promise.reject(err);
    });
  });
}

/***/ }),

/***/ "./src/state.js":
/*!**********************!*\
  !*** ./src/state.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addMessage": () => (/* binding */ addMessage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "login": () => (/* binding */ login),
/* harmony export */   "logout": () => (/* binding */ logout),
/* harmony export */   "setError": () => (/* binding */ setError),
/* harmony export */   "setMessages": () => (/* binding */ setMessages),
/* harmony export */   "setUsers": () => (/* binding */ setUsers),
/* harmony export */   "waitOnLogin": () => (/* binding */ waitOnLogin),
/* harmony export */   "waitOnMessages": () => (/* binding */ waitOnMessages),
/* harmony export */   "waitOnUsers": () => (/* binding */ waitOnUsers)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");

var state = {
  username: '',
  isLoggedIn: false,
  isLoginPending: true,
  // We start with our login status unknown
  isMessagesPending: false,
  isUsersPending: false,
  error: '',
  messages: [],
  users: {}
};
function waitOnLogin() {
  state.isLoggedIn = false;
  state.isLoginPending = true;
  state.username = '';
  state.error = '';
}
function login(username) {
  state.isLoggedIn = true;
  state.isLoginPending = false;
  state.username = username;
  state.error = '';
}
function logout() {
  state.isLoggedIn = false;
  state.isLoginPending = false;
  state.username = '';
  state.error = '';
}
function waitOnUsers() {
  state.users = {};
  state.isUsersPending = true;
  state.error = '';
}
function setUsers(users) {
  state.users = users;
  state.isUsersPending = false;
  state.error = '';
}
function waitOnMessages() {
  state.messages = [];
  state.isMessagesPending = true;
  state.error = '';
}
function setMessages(messages) {
  state.messages = messages;
  state.isMessagesPending = false;
  state.error = '';
}
function addMessage(message) {
  state.messages.push(message);
  state.error = '';
}
function setError(error) {
  console.log(error);
  if (!error) {
    state.error = '';
    return;
  }
  state.error = _constants__WEBPACK_IMPORTED_MODULE_0__.MESSAGES[error] || _constants__WEBPACK_IMPORTED_MODULE_0__.MESSAGES["default"];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (state);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/chat.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./src/render.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/state.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "./src/services.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listeners */ "./src/listeners.js");
 // Offer the render methods to generate HTML
 // 'state' holds the user's state
 // Offer fetch() calls to communicate with the server
// import MESSAGES from './constants'; // 'MESSAGES' translate the server's Error Messages to user friendly


var rootEl = document.querySelector('.root');
(0,_listeners__WEBPACK_IMPORTED_MODULE_4__.addListenerToLogin)({
  state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
  rootEl: rootEl
});
(0,_listeners__WEBPACK_IMPORTED_MODULE_4__.addListenerToLogout)({
  state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
  rootEl: rootEl
});
(0,_listeners__WEBPACK_IMPORTED_MODULE_4__.addListenerToOutgoing)({
  state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
  rootEl: rootEl
});
function load() {
  // Check for an existing session
  (0,_services__WEBPACK_IMPORTED_MODULE_2__.fetchSession)()
  // .then( res => {
  //     // If there is a session, call to get the stored word
  //     return fetchWord();
  // })
  .then(function (res) {
    // If the call to get stored word is successful, update the user's state and show the Word View  

    (0,_render__WEBPACK_IMPORTED_MODULE_0__.renderHomePage)({
      state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
      rootEl: rootEl
    });
  })["catch"](function (err) {
    // If there is not an existing session or the call to get stored word is unsuccessful, show Login Page
    (0,_render__WEBPACK_IMPORTED_MODULE_0__.renderLoginPage)({
      state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
      rootEl: rootEl
    });
  });
}

/* Runs on load */
load();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map