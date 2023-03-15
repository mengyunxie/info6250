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
  REQUIRED_MESSAGE: 'required-message'
};
var CLIENT = {
  NETWORK_ERROR: 'network-error',
  NO_SESSION: 'noSession'
};
var MESSAGES = (_MESSAGES = {}, _defineProperty(_MESSAGES, CLIENT.NETWORK_ERROR, 'Trouble connecting to the network.  Please try again'), _defineProperty(_MESSAGES, SERVER.AUTH_MISSING, 'Session id is invalid'), _defineProperty(_MESSAGES, SERVER.AUTH_INSUFFICIENT, 'Your username/password combination does not match any records, please try again.'), _defineProperty(_MESSAGES, SERVER.REQUIRED_USERNAME, 'Please enter a valid (letters and/or numbers) username'), _defineProperty(_MESSAGES, SERVER.REQUIRED_MESSAGE, 'Please enter the message to do'), _defineProperty(_MESSAGES, "default", 'Something went wrong.  Please try again'), _MESSAGES);

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
    (0,_state__WEBPACK_IMPORTED_MODULE_1__.waitOnLogin)();
    (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderLoginPage)({
      state: state,
      rootEl: rootEl
    }); // show loading state
    (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchLogin)(username).then(function (res) {
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.login)(username);
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.waitOnUsers)();
      (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderHomePage)({
        state: state,
        rootEl: rootEl
      });
      return (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchLoggedInUsers)();
    }).then(function (users) {
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.setUsers)(users);
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.waitOnMessages)();
      (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderHomePage)({
        state: state,
        rootEl: rootEl
      });
      return (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchMessages)();
    }).then(function (messages) {
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.setMessages)(messages);
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
    (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderLoginPage)({
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
    (0,_state__WEBPACK_IMPORTED_MODULE_1__.waitOnMessages)();
    (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderHomePage)({
      state: state,
      rootEl: rootEl
    }); // show loading state
    (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchAddMessage)(message).then(function (newMessage) {
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.addMessage)(newMessage);
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
function generateHomePageHtml(state) {
  return "\n      <div class=\"home\">\n        <p class=\"user-greeting\">Hello <span class=\"user-title\">".concat(state.username, "</span></p>\n        <div class=\"logout-form\">\n          <button type=\"submit\" class=\"logout-to-submit\">Logout</button>\n        </div>\n        ").concat(generateMessageListHtml(state), "\n        ").concat(generateUserListHtml(state), "\n        ").concat(generateOutgoingHtml(), "\n      </div>\n    ");
}
function generateMessageListHtml(state) {
  if (state.isMessagesPending) {
    return "\n        <div class=\"messages\">Loading messages...</div>\n      ";
  }
  return "<ol class=\"messages\">" + state.messages.map(function (msg) {
    return "\n      <li>\n        <div class=\"message\">\n          <div class=\"sender-info\">\n            <img class=\"avatar\" alt=\"avatar of ".concat(msg.username, "\" src=\"images/cat.png\"/>\n            <span class=\"username\">").concat(msg.username, "</span>\n          </div>\n          <p class=\"message-text\">").concat(msg.message, "</p>\n        </div>\n      </li>\n    ");
  }).join('') + "</ol>";
}
function generateUserListHtml(state) {
  if (state.isUsersPending) {
    return "\n        <div class=\"users\">Loading users...</div>\n      ";
  }
  return "<ul class=\"users\">" + state.users.map(function (user) {
    return "\n      <li>\n        <div class=\"user\">\n          <span class=\"username\">".concat(user.username, "</span>\n        </div>\n      </li>\n    ");
  }).join('') + "</ul>";
}
function generateOutgoingHtml() {
  return "<div class=\"outgoing\">\n      <div class=\"outgoing-form\">\n        <input type=\"text\" name=\"text\" class=\"outgoing-to-send\" value=\"\" placeholder=\"Enter message to send\"/>\n        <button type=\"submit\" class=\"outgoing-to-submit\">Send</button>\n      </div>\n    </div>";
}
function generateLoginPageHtml(state) {
  if (state.isLoginPending) {
    return "\n        <div class=\"login\">Loading user...</div>\n      ";
  }
  return "\n      <div class=\"login\">\n        <p class=\"login-greeting\">Welcome to JS Chat!</p>\n        <div class=\"login-main\">\n          ".concat(state.error ? "<p class=\"login-message\">".concat(state.error, "</p>") : "", "\n          <div class=\"login-form\">\n            <label class=\"login-label\">\n              <span>Username:</span>\n              <input type=\"text\" name=\"username\" class=\"login-to-send\" value=\"\" placeholder=\"Enter your username\"/>\n            </label>\n            <button type=\"submit\" class=\"login-to-submit\">Login</button>\n          </div>\n        </div>\n      </div>\n    ");
}
function renderHomePage(_ref) {
  var state = _ref.state,
    rootEl = _ref.rootEl;
  var homePageHtml = generateHomePageHtml(state);
  rootEl.innerHTML = "".concat(homePageHtml);
}
function renderLoginPage(_ref2) {
  var state = _ref2.state,
    rootEl = _ref2.rootEl;
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
  users: []
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
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/state.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ "./src/render.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "./src/services.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listeners */ "./src/listeners.js");

 // Offer the render methods to generate HTML
 // Offer fetch() calls to communicate with the server


var rootEl = document.querySelector('.root');
(0,_listeners__WEBPACK_IMPORTED_MODULE_4__.addListenerToLogin)({
  state: _state__WEBPACK_IMPORTED_MODULE_0__["default"],
  rootEl: rootEl
});
(0,_listeners__WEBPACK_IMPORTED_MODULE_4__.addListenerToLogout)({
  state: _state__WEBPACK_IMPORTED_MODULE_0__["default"],
  rootEl: rootEl
});
(0,_listeners__WEBPACK_IMPORTED_MODULE_4__.addListenerToOutgoing)({
  state: _state__WEBPACK_IMPORTED_MODULE_0__["default"],
  rootEl: rootEl
});
function checkForSession() {
  // Check for an existing session
  (0,_state__WEBPACK_IMPORTED_MODULE_0__.waitOnLogin)();
  (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderLoginPage)({
    state: _state__WEBPACK_IMPORTED_MODULE_0__["default"],
    rootEl: rootEl
  }); // show loading state
  (0,_services__WEBPACK_IMPORTED_MODULE_2__.fetchSession)().then(function (res) {
    // The returned object from the service call
    (0,_state__WEBPACK_IMPORTED_MODULE_0__.login)(res.username);
    (0,_state__WEBPACK_IMPORTED_MODULE_0__.waitOnUsers)();
    (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderHomePage)({
      state: _state__WEBPACK_IMPORTED_MODULE_0__["default"],
      rootEl: rootEl
    }); // Show we are logged in but don't have todos
    return (0,_services__WEBPACK_IMPORTED_MODULE_2__.fetchLoggedInUsers)(); // By returning this promise we can chain the original promise
  })["catch"](function (err) {
    if ((err === null || err === void 0 ? void 0 : err.error) === _constants__WEBPACK_IMPORTED_MODULE_3__.SERVER.AUTH_MISSING) {
      return Promise.reject({
        error: _constants__WEBPACK_IMPORTED_MODULE_3__.CLIENT.NO_SESSION
      }); // Expected, not a problem
    }

    return Promise.reject(err); // Pass any other error unchanged
  }).then(function (users) {
    (0,_state__WEBPACK_IMPORTED_MODULE_0__.setUsers)(users);
    (0,_state__WEBPACK_IMPORTED_MODULE_0__.waitOnMessages)();
    (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderHomePage)({
      state: _state__WEBPACK_IMPORTED_MODULE_0__["default"],
      rootEl: rootEl
    });
    return (0,_services__WEBPACK_IMPORTED_MODULE_2__.fetchMessages)();
  }).then(function (messages) {
    (0,_state__WEBPACK_IMPORTED_MODULE_0__.setMessages)(messages);
    (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderHomePage)({
      state: _state__WEBPACK_IMPORTED_MODULE_0__["default"],
      rootEl: rootEl
    });
  })["catch"](function (err) {
    (0,_state__WEBPACK_IMPORTED_MODULE_0__.logout)();
    if ((err === null || err === void 0 ? void 0 : err.error) == _constants__WEBPACK_IMPORTED_MODULE_3__.CLIENT.NO_SESSION) {
      // expected "error"
      // No longer waiting, set to logged out case
      (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderLoginPage)({
        state: _state__WEBPACK_IMPORTED_MODULE_0__["default"],
        rootEl: rootEl
      });
      return;
    }
    // For unexpected errors, report them
    (0,_state__WEBPACK_IMPORTED_MODULE_0__.setError)((err === null || err === void 0 ? void 0 : err.error) || 'ERROR'); // Ensure that the error ends up truthy
    (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderLoginPage)({
      state: _state__WEBPACK_IMPORTED_MODULE_0__["default"],
      rootEl: rootEl
    });
  });
}
function load() {
  checkForSession(); // fetch and use data
  setTimeout(load, 5000);
}

/* Runs on load */
load();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map