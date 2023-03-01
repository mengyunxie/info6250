/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/stateOfCarts.js":
/*!*****************************!*\
  !*** ./src/stateOfCarts.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCartQuantityByOne": () => (/* binding */ addCartQuantityByOne),
/* harmony export */   "createCart": () => (/* binding */ createCart),
/* harmony export */   "deleteCart": () => (/* binding */ deleteCart),
/* harmony export */   "getCartQuantity": () => (/* binding */ getCartQuantity),
/* harmony export */   "getCarts": () => (/* binding */ getCarts),
/* harmony export */   "hasCart": () => (/* binding */ hasCart),
/* harmony export */   "resetCarts": () => (/* binding */ resetCarts),
/* harmony export */   "setCartQuantity": () => (/* binding */ setCartQuantity)
/* harmony export */ });
var carts = {};
function createCart(name) {
  carts[name] = {
    name: name,
    quantity: 1
  };
}
;
function deleteCart(name) {
  delete carts[name];
}
;
function resetCarts() {
  carts = {};
}
;
function addCartQuantityByOne(name) {
  carts[name].quantity = carts[name].quantity + 1;
}
;
function setCartQuantity(_ref) {
  var name = _ref.name,
    quantity = _ref.quantity;
  carts[name].quantity = quantity;
}
;
function getCartQuantity(name) {
  return carts[name].quantity;
}
;
function getCarts() {
  return carts;
}
function hasCart(name) {
  return carts[name] ? true : false;
}

/***/ }),

/***/ "./src/stateOfPage.js":
/*!****************************!*\
  !*** ./src/stateOfPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PAGES": () => (/* binding */ PAGES),
/* harmony export */   "isViewCartPage": () => (/* binding */ isViewCartPage),
/* harmony export */   "setCurrentPage": () => (/* binding */ setCurrentPage)
/* harmony export */ });
var PAGES = {
  PRODUCTS: 'products',
  CARTS: 'carts'
};
var currentPage = PAGES.PRODUCTS;
function setCurrentPage(page) {
  currentPage = page;
}
function isViewCartPage() {
  return currentPage == PAGES.CARTS ? true : false;
}

/***/ }),

/***/ "./src/stateOfProducts.js":
/*!********************************!*\
  !*** ./src/stateOfProducts.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var products = {
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
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (products);

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
function generateNavigateHtml(_ref) {
  var isViewCartPage = _ref.isViewCartPage,
    totalItems = _ref.totalItems;
  var totalInfo = totalItems == 0 ? "" : " (".concat(totalItems, ")");
  return isViewCartPage ? "<button type=\"button\" class=\"navigate-button to-hide\">Hide Cart</button>" : "<button type=\"button\" class=\"navigate-button to-view\">View Cart".concat(totalInfo, "</button>");
}
function generateCartsHtml(_ref2) {
  var products = _ref2.products,
    carts = _ref2.carts;
  if (Object.keys(carts).length == 0) {
    return "<p class=\"no-data\">Nothing in the cart</p>";
  }
  var listHtml = Object.keys(carts).map(function (name) {
    var priceOfItem = (products[name].price * carts[name].quantity).toFixed(2);
    return "\n      <li class=\"cart\">\n        <img class=\"cart-avatar\" alt=\"avatar of ".concat(carts[name].name, "\" src=").concat(products[name].pic, "/>\n        <span class=\"cart-name\">Name: ").concat(carts[name].name, ",</span>\n        <label class=\"cart-quantity\">Quantity: <input type=\"number\" min=\"0\" class=\"to-edit-quantity\" data-name=").concat(carts[name].name, " value=").concat(carts[name].quantity, "> ,</label>\n        <span class=\"cart-price\">Price: $").concat(priceOfItem, "</span>\n      </li>\n    ");
  }).join('');
  return "<ul class=\"carts\">".concat(listHtml, "</ul>");
}
function generateCheckoutHtml(totalPrice) {
  return "\n  <div class=\"checkout\">\n    <span class=\"checkout-price\"> Total Price: $".concat(totalPrice, "</span>\n    <button type=\"button\" class=\"to-checkout\">Checkout</button>\n  </div>\n ");
}
function renderProducts(_ref3) {
  var products = _ref3.products,
    productsEl = _ref3.productsEl;
  var productsHtml = generateProductsHtml(products);
  productsEl.innerHTML = "".concat(productsHtml);
}
function renderViewCart(_ref4) {
  var products = _ref4.products,
    carts = _ref4.carts,
    isViewCartPage = _ref4.isViewCartPage,
    navigateCartEl = _ref4.navigateCartEl;
  var hideClass = isViewCartPage ? "" : "hide";
  var totalItems = 0;
  var totalPrice = 0;
  Object.keys(carts).forEach(function (name) {
    totalItems += carts[name].quantity;
    totalPrice += carts[name].quantity * products[name].price;
  });
  totalPrice = totalPrice.toFixed(2);
  var navigateHtml = generateNavigateHtml({
    isViewCartPage: isViewCartPage,
    totalItems: totalItems
  });
  var cartsHtml = generateCartsHtml({
    products: products,
    carts: carts
  });
  var checkoutHtml = generateCheckoutHtml(totalPrice);
  navigateCartEl.innerHTML = "\n  ".concat(navigateHtml, "\n  <div class=\"view-carts ").concat(hideClass, "\">\n    ").concat(!isViewCartPage ? "" : cartsHtml, "\n    ").concat(!isViewCartPage || totalItems == 0 ? "" : checkoutHtml, "\n  </div>\n  ");
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
/* harmony import */ var _stateOfProducts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stateOfProducts */ "./src/stateOfProducts.js");
/* harmony import */ var _stateOfCarts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stateOfCarts */ "./src/stateOfCarts.js");
/* harmony import */ var _stateOfPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stateOfPage */ "./src/stateOfPage.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view */ "./src/view.js");




var productsEl = document.querySelector('.products');
var navigateCartEl = document.querySelector('.navigate-carts');
function init() {
  (0,_view__WEBPACK_IMPORTED_MODULE_3__.renderProducts)({
    products: _stateOfProducts__WEBPACK_IMPORTED_MODULE_0__["default"],
    productsEl: productsEl
  });
  (0,_view__WEBPACK_IMPORTED_MODULE_3__.renderViewCart)({
    products: _stateOfProducts__WEBPACK_IMPORTED_MODULE_0__["default"],
    carts: _stateOfCarts__WEBPACK_IMPORTED_MODULE_1__.getCarts(),
    isViewCartPage: (0,_stateOfPage__WEBPACK_IMPORTED_MODULE_2__.isViewCartPage)(),
    navigateCartEl: navigateCartEl
  });
}
init();
productsEl.addEventListener('click', function (e) {
  if (e.target.classList.contains('product-add')) {
    var name = e.target.dataset.name;
    if (!_stateOfCarts__WEBPACK_IMPORTED_MODULE_1__.hasCart(name)) {
      _stateOfCarts__WEBPACK_IMPORTED_MODULE_1__.createCart(name);
    } else {
      _stateOfCarts__WEBPACK_IMPORTED_MODULE_1__.addCartQuantityByOne(name);
    }
    (0,_view__WEBPACK_IMPORTED_MODULE_3__.renderViewCart)({
      products: _stateOfProducts__WEBPACK_IMPORTED_MODULE_0__["default"],
      carts: _stateOfCarts__WEBPACK_IMPORTED_MODULE_1__.getCarts(),
      isViewCartPage: (0,_stateOfPage__WEBPACK_IMPORTED_MODULE_2__.isViewCartPage)(),
      navigateCartEl: navigateCartEl
    });
    return;
  }
});
navigateCartEl.addEventListener('click', function (e) {
  if (e.target.classList.contains('to-view')) {
    (0,_stateOfPage__WEBPACK_IMPORTED_MODULE_2__.setCurrentPage)(_stateOfPage__WEBPACK_IMPORTED_MODULE_2__.PAGES.CARTS);
    (0,_view__WEBPACK_IMPORTED_MODULE_3__.renderViewCart)({
      products: _stateOfProducts__WEBPACK_IMPORTED_MODULE_0__["default"],
      carts: _stateOfCarts__WEBPACK_IMPORTED_MODULE_1__.getCarts(),
      isViewCartPage: (0,_stateOfPage__WEBPACK_IMPORTED_MODULE_2__.isViewCartPage)(),
      navigateCartEl: navigateCartEl
    });
    return;
  }
  if (e.target.classList.contains('to-hide')) {
    (0,_stateOfPage__WEBPACK_IMPORTED_MODULE_2__.setCurrentPage)(_stateOfPage__WEBPACK_IMPORTED_MODULE_2__.PAGES.PRODUCTS);
    (0,_view__WEBPACK_IMPORTED_MODULE_3__.renderViewCart)({
      products: _stateOfProducts__WEBPACK_IMPORTED_MODULE_0__["default"],
      carts: _stateOfCarts__WEBPACK_IMPORTED_MODULE_1__.getCarts(),
      isViewCartPage: (0,_stateOfPage__WEBPACK_IMPORTED_MODULE_2__.isViewCartPage)(),
      navigateCartEl: navigateCartEl
    });
    return;
  }
  if (e.target.classList.contains('to-checkout')) {
    (0,_stateOfPage__WEBPACK_IMPORTED_MODULE_2__.setCurrentPage)(_stateOfPage__WEBPACK_IMPORTED_MODULE_2__.PAGES.PRODUCTS);
    _stateOfCarts__WEBPACK_IMPORTED_MODULE_1__.resetCarts();
    (0,_view__WEBPACK_IMPORTED_MODULE_3__.renderViewCart)({
      products: _stateOfProducts__WEBPACK_IMPORTED_MODULE_0__["default"],
      carts: _stateOfCarts__WEBPACK_IMPORTED_MODULE_1__.getCarts(),
      isViewCartPage: (0,_stateOfPage__WEBPACK_IMPORTED_MODULE_2__.isViewCartPage)(),
      navigateCartEl: navigateCartEl
    });
    return;
  }
});
navigateCartEl.addEventListener('input', function (e) {
  if (e.target.classList.contains('to-edit-quantity')) {
    var name = e.target.dataset.name;
    var quantity = parseInt(e.target.value);
    _stateOfCarts__WEBPACK_IMPORTED_MODULE_1__.setCartQuantity({
      name: name,
      quantity: quantity
    });
    if (_stateOfCarts__WEBPACK_IMPORTED_MODULE_1__.getCartQuantity(name) == 0) {
      _stateOfCarts__WEBPACK_IMPORTED_MODULE_1__.deleteCart(name);
      (0,_view__WEBPACK_IMPORTED_MODULE_3__.renderViewCart)({
        products: _stateOfProducts__WEBPACK_IMPORTED_MODULE_0__["default"],
        carts: _stateOfCarts__WEBPACK_IMPORTED_MODULE_1__.getCarts(),
        isViewCartPage: (0,_stateOfPage__WEBPACK_IMPORTED_MODULE_2__.isViewCartPage)(),
        navigateCartEl: navigateCartEl
      });
    }
    return;
  }
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map