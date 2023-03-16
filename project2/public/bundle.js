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
  INVALID_USERNAME: 'invalid-username'
};
var CLIENT = {
  NETWORK_ERROR: 'network-error',
  NO_SESSION: 'noSession'
};
var MESSAGES = (_MESSAGES = {}, _defineProperty(_MESSAGES, CLIENT.NETWORK_ERROR, 'Trouble connecting to the network.  Please try again'), _defineProperty(_MESSAGES, SERVER.AUTH_MISSING, 'Session id is invalid'), _defineProperty(_MESSAGES, SERVER.AUTH_INSUFFICIENT, 'Your username/password combination does not match any records, please try again.'), _defineProperty(_MESSAGES, SERVER.REQUIRED_USERNAME, 'The username can not be empty, please try again.'), _defineProperty(_MESSAGES, SERVER.INVALID_USERNAME, 'Please enter a valid (letters and/or numbers) username of up to 20 characters'), _defineProperty(_MESSAGES, "default", 'Something went wrong.  Please try again'), _MESSAGES);

/***/ }),

/***/ "./src/listeners.js":
/*!**************************!*\
  !*** ./src/listeners.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addListenerToLogin": () => (/* binding */ addListenerToLogin),
/* harmony export */   "addListenerToLoginSend": () => (/* binding */ addListenerToLoginSend),
/* harmony export */   "addListenerToLogout": () => (/* binding */ addListenerToLogout),
/* harmony export */   "addListenerToOutgoing": () => (/* binding */ addListenerToOutgoing),
/* harmony export */   "addListenerToOutgoingSend": () => (/* binding */ addListenerToOutgoingSend)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./src/services.js");
/* harmony import */ var _refreshList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./refreshList */ "./src/refreshList.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ "./src/render.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state */ "./src/state.js");




function load(_ref) {
  var state = _ref.state,
    rootEl = _ref.rootEl;
  (0,_refreshList__WEBPACK_IMPORTED_MODULE_1__["default"])({
    state: state,
    rootEl: rootEl
  }); // fetch and use data
  var id = setTimeout(load, 5000, {
    state: state,
    rootEl: rootEl
  });
  (0,_state__WEBPACK_IMPORTED_MODULE_3__.setTimeoutId)(id);
}
function addListenerToLogin(_ref2) {
  var state = _ref2.state,
    rootEl = _ref2.rootEl;
  // Using 'submit' so we can get both submit via button-click and by "enter"
  rootEl.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!e.target.classList.contains('login-form')) {
      return;
    }
    var username = rootEl.querySelector('.login-to-send').value;
    (0,_state__WEBPACK_IMPORTED_MODULE_3__.waitOnLogin)();
    (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderLoginPage)({
      state: state,
      rootEl: rootEl
    }); // show loading state
    (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchLogin)(username).then(function (res) {
      (0,_state__WEBPACK_IMPORTED_MODULE_3__.login)(res.username);
      (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderHomePage)({
        state: state,
        rootEl: rootEl
      });
      load({
        state: state,
        rootEl: rootEl
      });
    })["catch"](function (err) {
      (0,_state__WEBPACK_IMPORTED_MODULE_3__.logout)();
      (0,_state__WEBPACK_IMPORTED_MODULE_3__.setError)((err === null || err === void 0 ? void 0 : err.error) || 'ERROR'); // Ensure that the error ends up truthy
      (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderLoginPage)({
        state: state,
        rootEl: rootEl
      });
    });
  });
}
function addListenerToLogout(_ref3) {
  var state = _ref3.state,
    rootEl = _ref3.rootEl;
  rootEl.addEventListener('click', function (e) {
    if (!e.target.classList.contains('logout-to-submit')) {
      return;
    }
    (0,_state__WEBPACK_IMPORTED_MODULE_3__.logout)();
    (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderLoginPage)({
      state: state,
      rootEl: rootEl
    });
    (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchLogout)() // We don't really care about results
    ["catch"](function (err) {
      (0,_state__WEBPACK_IMPORTED_MODULE_3__.setError)((err === null || err === void 0 ? void 0 : err.error) || 'ERROR'); // Ensure that the error ends up truthy
      (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderLoginPage)({
        state: state,
        rootEl: rootEl
      });
    });
  });
}
function addListenerToOutgoing(_ref4) {
  var state = _ref4.state,
    rootEl = _ref4.rootEl;
  // Using 'submit' so we can get both submit via button-click and by "enter"
  rootEl.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!e.target.classList.contains('outgoing-form')) {
      return;
    }
    var toSendEl = rootEl.querySelector('.outgoing-to-send');
    var sendButtonEl = rootEl.querySelector('.outgoing-to-submit');
    var messagesEl = rootEl.querySelector('.messages');
    (0,_state__WEBPACK_IMPORTED_MODULE_3__.waitOnMessages)();
    (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderMessageList)({
      state: state,
      messagesEl: messagesEl
    }); // show loading state
    (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchAddMessage)(toSendEl.value).then(function (newMessage) {
      (0,_state__WEBPACK_IMPORTED_MODULE_3__.addMessage)(newMessage);
      (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderMessageList)({
        state: state,
        messagesEl: messagesEl
      });
      messagesEl.scrollTop = messagesEl.scrollHeight;
      toSendEl.value = '';
      sendButtonEl.disabled = !toSendEl.value;
    })["catch"](function (err) {
      (0,_state__WEBPACK_IMPORTED_MODULE_3__.logout)();
      (0,_state__WEBPACK_IMPORTED_MODULE_3__.setError)((err === null || err === void 0 ? void 0 : err.error) || 'ERROR'); // Ensure that the error ends up truthy
      (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderLoginPage)({
        state: state,
        rootEl: rootEl
      });
    });
  });
}
function addListenerToLoginSend(rootEl) {
  rootEl.addEventListener('input', function (e) {
    if (!e.target.classList.contains('login-to-send')) {
      return;
    }
    var sendButtonEl = rootEl.querySelector('.login-to-submit');
    sendButtonEl.disabled = !e.target.value;
  });
}
function addListenerToOutgoingSend(rootEl) {
  rootEl.addEventListener('input', function (e) {
    if (!e.target.classList.contains('outgoing-to-send')) {
      return;
    }
    var sendButtonEl = rootEl.querySelector('.outgoing-to-submit');
    sendButtonEl.disabled = !e.target.value;
  });
}

/***/ }),

/***/ "./src/refreshList.js":
/*!****************************!*\
  !*** ./src/refreshList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ refreshList)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/state.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ "./src/render.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "./src/services.js");

 // Offer the render methods to generate HTML
 // Offer fetch() calls to communicate with the server

function refreshList(_ref) {
  var state = _ref.state,
    rootEl = _ref.rootEl;
  // Check for an existing session
  var usersEl = rootEl.querySelector('.users');
  var messagesEl = rootEl.querySelector('.messages');
  (0,_state__WEBPACK_IMPORTED_MODULE_0__.waitOnUsers)();
  (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderUserList)({
    state: state,
    usersEl: usersEl
  });
  (0,_services__WEBPACK_IMPORTED_MODULE_2__.fetchLoggedInUsers)().then(function (users) {
    (0,_state__WEBPACK_IMPORTED_MODULE_0__.setUsers)(users);
    (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderUserList)({
      state: state,
      usersEl: usersEl
    });
    usersEl.scrollTop = usersEl.scrollHeight; // scrollIntoBottom
    (0,_state__WEBPACK_IMPORTED_MODULE_0__.waitOnMessages)();
    (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderMessageList)({
      state: state,
      messagesEl: messagesEl
    });
    return (0,_services__WEBPACK_IMPORTED_MODULE_2__.fetchMessages)();
  }).then(function (messages) {
    (0,_state__WEBPACK_IMPORTED_MODULE_0__.setMessages)(messages);
    (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderMessageList)({
      state: state,
      messagesEl: messagesEl
    });
    messagesEl.scrollTop = messagesEl.scrollHeight; // scrollIntoBottom
  })["catch"](function (err) {
    (0,_state__WEBPACK_IMPORTED_MODULE_0__.logout)();
    (0,_state__WEBPACK_IMPORTED_MODULE_0__.setError)((err === null || err === void 0 ? void 0 : err.error) || 'ERROR');
    (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderLoginPage)({
      state: state,
      rootEl: rootEl
    });
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
/* harmony export */   "renderLoginPage": () => (/* binding */ renderLoginPage),
/* harmony export */   "renderMessageList": () => (/* binding */ renderMessageList),
/* harmony export */   "renderUserList": () => (/* binding */ renderUserList)
/* harmony export */ });
function generateHomePageHtml(state) {
  if (state.isLoginPending) {
    return generateSpinnerHtml();
  }
  return "\n    <div class=\"home\">\n      <p class=\"user-greeting\">Hello <span class=\"user-title\">".concat(state.username, "</span></p>\n      <div class=\"logout-form\">\n        <button type=\"submit\" class=\"logout-to-submit\">Logout</button>\n      </div>\n      <div class=\"messages\">\n        ").concat(generateMessageListHtml(state), "\n      </div>\n      <div class=\"users\">\n        ").concat(generateUserListHtml(state), "\n      </div>\n      ").concat(generateOutgoingHtml(), "\n    </div>\n  ");
}
function generateMessageListHtml(state) {
  if (state.isMessagesPending) {
    return generateSpinnerHtml();
  }
  if (state.messages.length == 0) {
    return "<p class=\"no-data\">No Message</p>";
  }
  var listHtml = state.messages.map(function (msg) {
    return "\n    <li>\n      <div class=\"message\">\n        <div class=\"message-info\">\n          <img class=\"messages-avatar\" alt=\"avatar of ".concat(msg.username, "\" src=\"images/cat.png\"/>\n          <span class=\"messages-username\">").concat(msg.username, "</span>\n        </div>\n        <p class=\"message-text\">").concat(msg.message, "</p>\n      </div>\n    </li>\n  ");
  }).join('');
  return "\n    <ul class=\"messages-list\">\n      ".concat(listHtml, "\n    </ul>\n  ");
}
function generateUserListHtml(state) {
  if (state.isUsersPending) {
    return generateSpinnerHtml();
  }
  if (state.users.length == 0) {
    return "<p class=\"no-data\">No Message</p>";
  }
  var listHtml = state.users.map(function (user) {
    return "\n    <li>\n      <div class=\"user\">\n        <img class=\"user-avatar\" alt=\"avatar of ".concat(user.username, "\" src=\"images/cat.png\"/>\n        <span class=\"user-username\">").concat(user.username, "</span>\n      </div>\n    </li>\n  ");
  }).join('');
  return "\n    <ul class=\"users-list\">\n      ".concat(listHtml, "\n    </ul>\n  ");
}
function generateOutgoingHtml() {
  return "<div class=\"outgoing\">\n    <form class=\"outgoing-form\" action=\"#/add\">\n      <input type=\"text\" name=\"text\" class=\"outgoing-to-send\" value=\"\" placeholder=\"Enter message to send\"/>\n      <button type=\"submit\" class=\"outgoing-to-submit\" disabled>Send</button>\n    </form>\n  </div>";
}
function generateLoginPageHtml(state) {
  if (state.isLoginPending) {
    return generateSpinnerHtml();
  }
  return "\n    <div class=\"login\">\n      <p class=\"login-greeting\">Welcome to JS Chat!</p>\n      <div class=\"login-main\">\n        ".concat(state.error ? "<p class=\"login-error\">".concat(state.error, "</p>") : "", "\n        <form class=\"login-form\" action=\"#/login\">\n          <label class=\"login-label\">\n            <span>Username:</span>\n            <input type=\"text\" name=\"username\" class=\"login-to-send\" value=\"\" placeholder=\"Enter your username\"/>\n          </label>\n          <button type=\"submit\" class=\"login-to-submit\" disabled>Login</button>\n        </form>\n      </div>\n    </div>\n  ");
}
function generateSpinnerHtml() {
  return "\n    <div class=\"spinner\">\n      <img class=\"spinner-img\" alt=\"loading\" src=\"images/loading.gif\"/>\n    </div>\n  ";
}
function renderHomePage(_ref) {
  var state = _ref.state,
    rootEl = _ref.rootEl;
  var homePageHtml = generateHomePageHtml(state);
  rootEl.innerHTML = "".concat(homePageHtml);
}
function renderMessageList(_ref2) {
  var state = _ref2.state,
    messagesEl = _ref2.messagesEl;
  var messageListHtml = generateMessageListHtml(state);
  messagesEl.innerHTML = "".concat(messageListHtml);
}
function renderUserList(_ref3) {
  var state = _ref3.state,
    usersEl = _ref3.usersEl;
  var userListHtml = generateUserListHtml(state);
  usersEl.innerHTML = "".concat(userListHtml);
}
function renderLoginPage(_ref4) {
  var state = _ref4.state,
    rootEl = _ref4.rootEl;
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
/* harmony export */   "fetchAddMessage": () => (/* binding */ fetchAddMessage),
/* harmony export */   "fetchLoggedInUsers": () => (/* binding */ fetchLoggedInUsers),
/* harmony export */   "fetchLogin": () => (/* binding */ fetchLogin),
/* harmony export */   "fetchLogout": () => (/* binding */ fetchLogout),
/* harmony export */   "fetchMessages": () => (/* binding */ fetchMessages),
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
function fetchLoggedInUsers() {
  return fetch('/api/v1/users')["catch"](function () {
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
function fetchAddMessage(message) {
  return fetch('/api/v1/messages', {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json'
    }),
    body: JSON.stringify({
      message: message
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
function fetchMessages() {
  return fetch('/api/v1/messages')["catch"](function () {
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
/* harmony export */   "setTimeoutId": () => (/* binding */ setTimeoutId),
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
  isMessagesPending: false,
  isUsersPending: false,
  error: '',
  messages: [],
  users: [],
  timeoutId: ''
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
  clearTimeout(state.timeoutId);
  state.timeoutId = '';
  state.username = '';
  state.isLoggedIn = false;
  state.isLoginPending = false;
  state.isMessagesPending = false;
  state.isUsersPending = false;
  state.error = '';
  state.users = [];
  state.messages = [];
}
function waitOnUsers() {
  state.isUsersPending = true;
  state.error = '';
}
function setUsers(users) {
  state.users = users;
  state.isUsersPending = false;
  state.error = '';
}
function waitOnMessages() {
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
  state.isMessagesPending = false;
  state.error = '';
}
function setTimeoutId(timeoutId) {
  state.timeoutId = timeoutId;
}
function setError(error) {
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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "./src/services.js");
/* harmony import */ var _refreshList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./refreshList */ "./src/refreshList.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render */ "./src/render.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state */ "./src/state.js");
/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listeners */ "./src/listeners.js");

 // Offer fetch() calls to communicate with the server

 // Offer the render methods to generate HTML



var rootEl = document.querySelector('.root');
(0,_listeners__WEBPACK_IMPORTED_MODULE_5__.addListenerToLogin)({
  state: _state__WEBPACK_IMPORTED_MODULE_4__["default"],
  rootEl: rootEl
});
(0,_listeners__WEBPACK_IMPORTED_MODULE_5__.addListenerToLogout)({
  state: _state__WEBPACK_IMPORTED_MODULE_4__["default"],
  rootEl: rootEl
});
(0,_listeners__WEBPACK_IMPORTED_MODULE_5__.addListenerToOutgoing)({
  state: _state__WEBPACK_IMPORTED_MODULE_4__["default"],
  rootEl: rootEl
});
(0,_listeners__WEBPACK_IMPORTED_MODULE_5__.addListenerToLoginSend)(rootEl);
(0,_listeners__WEBPACK_IMPORTED_MODULE_5__.addListenerToOutgoingSend)(rootEl);
checkForSession();
function checkForSession() {
  // Check for an existing session
  (0,_state__WEBPACK_IMPORTED_MODULE_4__.waitOnLogin)();
  (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderHomePage)({
    state: _state__WEBPACK_IMPORTED_MODULE_4__["default"],
    rootEl: rootEl
  }); // show loading state
  (0,_services__WEBPACK_IMPORTED_MODULE_1__.fetchSession)()["catch"](function (err) {
    if ((err === null || err === void 0 ? void 0 : err.error) === _constants__WEBPACK_IMPORTED_MODULE_0__.SERVER.AUTH_MISSING) {
      return Promise.reject({
        error: _constants__WEBPACK_IMPORTED_MODULE_0__.CLIENT.NO_SESSION
      }); // Expected, not a problem
    }

    return Promise.reject(err); // Pass any other error unchanged
  }).then(function (res) {
    (0,_state__WEBPACK_IMPORTED_MODULE_4__.login)(res.username);
    (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderHomePage)({
      state: _state__WEBPACK_IMPORTED_MODULE_4__["default"],
      rootEl: rootEl
    });
    (0,_refreshList__WEBPACK_IMPORTED_MODULE_2__["default"])({
      state: _state__WEBPACK_IMPORTED_MODULE_4__["default"],
      rootEl: rootEl
    });
  })["catch"](function (err) {
    (0,_state__WEBPACK_IMPORTED_MODULE_4__.logout)();
    if ((err === null || err === void 0 ? void 0 : err.error) == _constants__WEBPACK_IMPORTED_MODULE_0__.CLIENT.NO_SESSION) {
      // expected "error"
      // No longer waiting, set to logged out case
      (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderLoginPage)({
        state: _state__WEBPACK_IMPORTED_MODULE_4__["default"],
        rootEl: rootEl
      });
      return;
    }
    // For unexpected errors, report them
    (0,_state__WEBPACK_IMPORTED_MODULE_4__.setError)((err === null || err === void 0 ? void 0 : err.error) || 'ERROR'); // Ensure that the error ends up truthy
    (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderLoginPage)({
      state: _state__WEBPACK_IMPORTED_MODULE_4__["default"],
      rootEl: rootEl
    });
  });
}
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map