/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/services.js":
/*!*************************!*\
  !*** ./src/services.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchLogin": () => (/* binding */ fetchLogin),
/* harmony export */   "fetchLogout": () => (/* binding */ fetchLogout),
/* harmony export */   "fetchSession": () => (/* binding */ fetchSession),
/* harmony export */   "fetchWord": () => (/* binding */ fetchWord),
/* harmony export */   "updateWord": () => (/* binding */ updateWord)
/* harmony export */ });
// This is a sample file that demonstrates
// how you can write an abstraction around
// a fetch() call
// This exported function returns a promise
// that resolves with data
// or rejects with an error object
//
// The caller of this function can decide
// what to do with the data
// or what to do with the error
//
// You can add to this file and use this function
// or write your own files/functions

function fetchLogin(username) {
  return fetch('/api/session/', {
    method: 'POST',
    headers: {
      'content-type': 'application/json' // set this header when sending JSON in the body of request
    },

    body: JSON.stringify({
      username: username
    })
  })
  // fetch() rejects on network error
  // So we convert that to a formatted error object
  // so our caller can handle all "errors" in a similar way
  ["catch"](function (err) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      // response.ok checks the status code from the service
      // This service returns JSON on errors,
      // so we use that as the error object and reject
      return response.json().then(function (err) {
        return Promise.reject(err);
      });
    }
    return response.json(); // happy status code means resolve with data from service
  });
}

function fetchLogout() {
  return fetch('/api/session', {
    method: 'DELETE'
  })["catch"](function (err) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      // response.ok checks the status code from the service
      return response.json().then(function (err) {
        return Promise.reject(err);
      });
    }
    return response.json(); // happy status code means resolve with data from service
  });
}

function fetchSession() {
  return fetch('/api/session')["catch"](function (err) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      // response.ok checks the status code from the service
      return response.json().then(function (err) {
        return Promise.reject(err);
      });
    }
    return response.json(); // happy status code means resolve with data from service
  });
}

function fetchWord() {
  return fetch('/api/word')["catch"](function (err) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      // response.ok checks the status code from the service
      return response.json().then(function (err) {
        return Promise.reject(err);
      });
    }
    return response.json(); // happy status code means resolve with data from service
  });
}

function updateWord(word) {
  return fetch('/api/word/', {
    method: 'POST',
    headers: {
      'content-type': 'application/json' // set this header when sending JSON in the body of request
    },

    body: JSON.stringify({
      word: word
    })
  })["catch"](function (err) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      // response.ok checks the status code from the service
      return response.json().then(function (err) {
        return Promise.reject(err);
      });
    }
    return response.json(); // happy status code means resolve with data from service
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var state = {
  username: "",
  storedWord: ""
};
state.clear = function () {
  state.username = "";
  state.storedWord = "";
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (state);

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderErrorPage": () => (/* binding */ renderErrorPage),
/* harmony export */   "renderHomePage": () => (/* binding */ renderHomePage),
/* harmony export */   "renderLoginPage": () => (/* binding */ renderLoginPage)
/* harmony export */ });
function generateHomePageHtml(_ref) {
  var username = _ref.username,
    storedWord = _ref.storedWord;
  return "\n    <div class=\"user\">\n      <p class=\"user-greeting\">Hello <span class=\"user-title\">".concat(username, "</span></p>\n      <div class=\"logout-form\">\n        <button type=\"submit\" class=\"logout-to-submit\">Logout</button>\n      </div>\n      <div class=\"word\">\n        <p class=\"current-word\">\n          ").concat(storedWord ? "<span>Stored word:</span><span class=\"current-word-content\">".concat(storedWord, "</span>") : "<span>You don't have a stored word, please update your word.</span>", "\n        </p>\n        <div class=\"word-form\">\n          <label class=\"word-label\">\n            <span>Update Your Word:</span>\n            <input type=\"text\" name=\"word\" class=\"word-to-send\" value=\"").concat(storedWord, "\" placeholder=\"Enter your word\" />\n          </label>\n          <button type=\"submit\" class=\"word-to-submit\">Save</button>\n        </div>\n      </div>\n    </div>\n  ");
}
function generateLoginPageHtml() {
  return "\n    <div class=\"login\">\n      <p class=\"login-greeting\">Welcome to Service Calls!</p>\n      <div class=\"login-form\">\n        <label class=\"login-label\">\n          <span>Username:</span>\n          <input type=\"text\" name=\"username\" class=\"login-to-send\" value=\"\" placeholder=\"Enter your username\"/>\n        </label>\n        <button type=\"submit\" class=\"login-to-submit\">Login</button>\n      </div>\n    </div>\n  ";
}
function generateErrorPageHtml(_ref2) {
  var statusCode = _ref2.statusCode,
    message = _ref2.message;
  return "\n    <div class=\"error\">\n      <p class=\"error-code\">".concat(statusCode, "</p>\n      <p class=\"error-message\">").concat(message, "</p>\n      <p class=\"error-link\">Please jump to the <a href=\"/\">login</a> page.</p>\n    </div>\n  ");
}
function renderHomePage(_ref3) {
  var username = _ref3.username,
    storedWord = _ref3.storedWord,
    rootEl = _ref3.rootEl;
  var homePageHtml = generateHomePageHtml({
    username: username,
    storedWord: storedWord
  });
  rootEl.innerHTML = "".concat(homePageHtml);
}
function renderLoginPage(rootEl) {
  var loginPageHtml = generateLoginPageHtml();
  rootEl.innerHTML = "".concat(loginPageHtml);
}
function renderErrorPage(_ref4) {
  var statusCode = _ref4.statusCode,
    message = _ref4.message,
    rootEl = _ref4.rootEl;
  var errorPageHtml = generateErrorPageHtml({
    statusCode: statusCode,
    message: message
  });
  rootEl.innerHTML = "".concat(errorPageHtml);
}

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
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/view.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/state.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "./src/services.js");



var rootEl = document.querySelector('.root');
function init() {
  // Below runs on load
  (0,_services__WEBPACK_IMPORTED_MODULE_2__.fetchSession)().then(function (res) {
    return (0,_services__WEBPACK_IMPORTED_MODULE_2__.fetchWord)();
  }).then(function (res) {
    _state__WEBPACK_IMPORTED_MODULE_1__["default"].storedWord = res.storedWord;
    _state__WEBPACK_IMPORTED_MODULE_1__["default"].username = res.username;
    (0,_view__WEBPACK_IMPORTED_MODULE_0__.renderHomePage)({
      username: _state__WEBPACK_IMPORTED_MODULE_1__["default"].username,
      storedWord: _state__WEBPACK_IMPORTED_MODULE_1__["default"].storedWord,
      rootEl: rootEl
    });
  })["catch"](function (error) {
    logout();
    console.warn("replace this with actual error reporting", error);
  });
}

/* Load the page */
init();
rootEl.addEventListener('click', function (e) {
  if (e.target.classList.contains('login-to-submit')) {
    (0,_services__WEBPACK_IMPORTED_MODULE_2__.fetchLogin)(_state__WEBPACK_IMPORTED_MODULE_1__["default"].username).then(function (res) {
      return (0,_services__WEBPACK_IMPORTED_MODULE_2__.fetchWord)();
    }).then(function (res) {
      _state__WEBPACK_IMPORTED_MODULE_1__["default"].storedWord = res.storedWord;
      _state__WEBPACK_IMPORTED_MODULE_1__["default"].username = res.username;
      (0,_view__WEBPACK_IMPORTED_MODULE_0__.renderHomePage)({
        username: _state__WEBPACK_IMPORTED_MODULE_1__["default"].username,
        storedWord: _state__WEBPACK_IMPORTED_MODULE_1__["default"].storedWord,
        rootEl: rootEl
      });
    })["catch"](function (error) {
      logout();
      console.warn("replace this with actual error reporting", error);
    });
    return;
  }
  if (e.target.classList.contains('word-to-submit')) {
    (0,_services__WEBPACK_IMPORTED_MODULE_2__.updateWord)(_state__WEBPACK_IMPORTED_MODULE_1__["default"].storedWord).then(function (res) {
      // TODO--: update the word string html
      (0,_view__WEBPACK_IMPORTED_MODULE_0__.renderHomePage)({
        username: _state__WEBPACK_IMPORTED_MODULE_1__["default"].username,
        storedWord: _state__WEBPACK_IMPORTED_MODULE_1__["default"].storedWord,
        rootEl: rootEl
      });
    })["catch"](function (error) {
      // TODO---: Error message
      logout();
      console.warn("replace this with actual error reporting", error);
    });
    return;
  }
  if (e.target.classList.contains('logout-to-submit')) {
    (0,_services__WEBPACK_IMPORTED_MODULE_2__.fetchLogout)().then(function (res) {
      logout();
    })["catch"](function (error) {
      logout();
      console.warn("replace this with actual error reporting", error);
    });
    return;
  }
});
rootEl.addEventListener('input', function (e) {
  if (e.target.classList.contains('login-to-send')) {
    _state__WEBPACK_IMPORTED_MODULE_1__["default"].username = e.target.value;
    return;
  }
  if (e.target.classList.contains('word-to-send')) {
    _state__WEBPACK_IMPORTED_MODULE_1__["default"].storedWord = e.target.value;
    return;
  }
});
function logout() {
  _state__WEBPACK_IMPORTED_MODULE_1__["default"].clear();
  (0,_view__WEBPACK_IMPORTED_MODULE_0__.renderLoginPage)(rootEl);
}
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map