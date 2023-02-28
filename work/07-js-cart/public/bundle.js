/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/state.js":
/*!**********************!*\
  !*** ./src/state.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var PAGES = {
  PRODUCTS: 'products',
  CARTS: 'carts'
};
var state = {
  products: {
    'Fluffball': {
      name: 'Fluffball',
      price: 0.99,
      pic: 'http://placekitten.com/150/150?image=1'
    },
    'Sunny': {
      name: 'Sunny',
      price: 3.14,
      pic: 'http://placekitten.com/150/150?image=2'
    },
    'Kiki': {
      name: 'Kiki',
      price: 2.73,
      pic: 'http://placekitten.com/150/150?image=3'
    }
  },
  carts: {},
  page: PAGES.PRODUCTS
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
/* harmony export */   "renderProducts": () => (/* binding */ renderProducts),
/* harmony export */   "renderViewCart": () => (/* binding */ renderViewCart)
/* harmony export */ });
function generateProductsHtml(products) {
  var listHtml = Object.keys(products).map(function (name) {
    return "\n      <li class=\"product\">\n        <img class=\"product-avatar\" alt=\"avatar of ".concat(products[name].name, "\" src=").concat(products[name].pic, " />\n        <p class=\"product-name\">").concat(products[name].name, "</p>\n        <p class=\"product-price\">Price: $").concat(products[name].price, " / each</p>\n        <button type=\"button\" class=\"product-add\" data-name=").concat(products[name].name, ">Add to Cart</button>\n      </li>\n    ");
  }).join('');
  return listHtml;
}
function generateNavigateHtml(page, totalItems) {
  var totalInfo = totalItems == 0 ? "" : " (".concat(totalItems, ")");
  if (page === 'carts') {
    return "<button type=\"button\" class=\"navigate-button to-hide\">Hide Cart</button>";
  }
  return "<button type=\"button\" class=\"navigate-button to-view\">View Cart".concat(totalInfo, "</button>");
}
function generateCartsHtml(page, carts) {
  if (Object.keys(carts).length == 0) {
    return "<p class=\"no-data\">Nothing in the cart</p>";
  }
  var listHtml = Object.keys(carts).map(function (name) {
    var priceOfItem = (carts[name].price * carts[name].quantity).toFixed(2);
    return "\n      <li class=\"cart\">\n        <img class=\"cart-avatar\" alt=\"avatar of ".concat(carts[name].name, "\" src=").concat(carts[name].pic, "/>\n        <span class=\"cart-name\">Name: ").concat(carts[name].name, ",</span>\n        <label class=\"cart-quantity\">Quantity: <input type=\"number\" class=\"to-edit-quantity\" data-name=").concat(carts[name].name, " value=").concat(carts[name].quantity, "> ,</label>\n        <span class=\"cart-price\">Price: $").concat(priceOfItem, "</span>\n      </li>\n    ");
  }).join('');
  return "<ul class=\"carts\">".concat(listHtml, "</ul>");
}
function generateCheckoutHtml(totalPrice) {
  return "\n  <div class=\"checkout\">\n    <span class=\"checkout-price\"> Total Price: $".concat(totalPrice, "</span>\n    <button type=\"button\" class=\"to-checkout\">Checkout</button>\n  </div>\n ");
}
function renderProducts(state, productsEl) {
  var products = state.products;
  var productsHtml = generateProductsHtml(products);
  productsEl.innerHTML = "".concat(productsHtml);
}
function renderViewCart(state, viewCartEl) {
  var carts = state.carts,
    page = state.page;
  var hideClass = page === 'products' ? "hide" : "";
  var totalItems = 0;
  var totalPrice = 0;
  Object.keys(carts).forEach(function (name) {
    totalItems += carts[name].quantity;
    totalPrice += carts[name].quantity * carts[name].price;
  });
  totalPrice = totalPrice.toFixed(2);
  var navigateHtml = generateNavigateHtml(page, totalItems);
  var cartsHtml = generateCartsHtml(page, carts);
  var checkoutHtml = generateCheckoutHtml(totalPrice);
  viewCartEl.innerHTML = "\n  ".concat(navigateHtml, "\n  <div class=\"view-carts ").concat(hideClass, "\">\n    ").concat(page === 'products' ? "" : cartsHtml, "\n    ").concat(page === 'products' || totalItems == 0 ? "" : checkoutHtml, "\n  </div>\n  ");
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
  !*** ./src/cats.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/state.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/view.js");


var productsEl = document.querySelector('.products');
var navigateCartEl = document.querySelector('.navigate-carts');
productsEl.addEventListener('click', function (e) {
  if (e.target.classList.contains('product-add')) {
    var name = e.target.dataset.name;
    var products = _state__WEBPACK_IMPORTED_MODULE_0__["default"].products,
      carts = _state__WEBPACK_IMPORTED_MODULE_0__["default"].carts;
    if (!carts[name]) {
      carts[name] = {
        name: products[name].name,
        price: products[name].price,
        pic: products[name].pic,
        quantity: 1
      };
    } else {
      carts[name].quantity = carts[name].quantity + 1;
    }
    console.log(carts[name]);
    (0,_view__WEBPACK_IMPORTED_MODULE_1__.renderViewCart)(_state__WEBPACK_IMPORTED_MODULE_0__["default"], navigateCartEl);
    return;
  }
});
navigateCartEl.addEventListener('input', function (e) {
  if (e.target.classList.contains('to-edit-quantity')) {
    var name = e.target.dataset.name;
    var carts = _state__WEBPACK_IMPORTED_MODULE_0__["default"].carts;
    console.log(e.target.value);
    carts[name].quantity = parseInt(e.target.value);
    if (carts[name].quantity == 0) {
      delete carts[name];
    }
    (0,_view__WEBPACK_IMPORTED_MODULE_1__.renderViewCart)(_state__WEBPACK_IMPORTED_MODULE_0__["default"], navigateCartEl);
    return;
  }
});
navigateCartEl.addEventListener('click', function (e) {
  if (e.target.classList.contains('to-view')) {
    _state__WEBPACK_IMPORTED_MODULE_0__["default"].page = "carts";
    (0,_view__WEBPACK_IMPORTED_MODULE_1__.renderViewCart)(_state__WEBPACK_IMPORTED_MODULE_0__["default"], navigateCartEl);
    return;
  }
  if (e.target.classList.contains('to-hide')) {
    _state__WEBPACK_IMPORTED_MODULE_0__["default"].page = "products";
    (0,_view__WEBPACK_IMPORTED_MODULE_1__.renderViewCart)(_state__WEBPACK_IMPORTED_MODULE_0__["default"], navigateCartEl);
    return;
  }
  if (e.target.classList.contains('to-checkout')) {
    // No longer show the View Cart content
    // Remove any items from the cart
    // Update any related HTML (such as the count in the View Cart button)
    _state__WEBPACK_IMPORTED_MODULE_0__["default"].page = "products";
    _state__WEBPACK_IMPORTED_MODULE_0__["default"].carts = {};
    (0,_view__WEBPACK_IMPORTED_MODULE_1__.renderViewCart)(_state__WEBPACK_IMPORTED_MODULE_0__["default"], navigateCartEl);
    return;
  }
});
(0,_view__WEBPACK_IMPORTED_MODULE_1__.renderProducts)(_state__WEBPACK_IMPORTED_MODULE_0__["default"], productsEl);
(0,_view__WEBPACK_IMPORTED_MODULE_1__.renderViewCart)(_state__WEBPACK_IMPORTED_MODULE_0__["default"], navigateCartEl);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map