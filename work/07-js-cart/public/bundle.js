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
/* harmony export */   "addItemToCarts": () => (/* binding */ addItemToCarts),
/* harmony export */   "addQuantityByOne": () => (/* binding */ addQuantityByOne),
/* harmony export */   "deleteItemFromCarts": () => (/* binding */ deleteItemFromCarts),
/* harmony export */   "getCarts": () => (/* binding */ getCarts),
/* harmony export */   "hasItemInCarts": () => (/* binding */ hasItemInCarts),
/* harmony export */   "isValidQuantity": () => (/* binding */ isValidQuantity),
/* harmony export */   "resetCarts": () => (/* binding */ resetCarts),
/* harmony export */   "setQuantity": () => (/* binding */ setQuantity)
/* harmony export */ });
var carts = {};
function getCarts() {
  return carts;
}

/* Clear the carts */
function resetCarts() {
  carts = {};
}
;

/* Add a new item to carts, each item only has name as key and quantity. */
function addItemToCarts(name) {
  carts[name] = {
    name: name,
    quantity: 1
  };
}
;
function deleteItemFromCarts(name) {
  delete carts[name];
}
;

/* If the item exist, return true */
function hasItemInCarts(name) {
  return carts[name] ? true : false;
}

/* Increase the quantity by one */
function addQuantityByOne(name) {
  carts[name].quantity = carts[name].quantity + 1;
}
;
function setQuantity(_ref) {
  var name = _ref.name,
    quantity = _ref.quantity;
  carts[name].quantity = quantity;
}
;

/* If the quantity is valid, return true */
function isValidQuantity(quantity) {
  return quantity && quantity > 0 ? true : false;
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

/* If currentPage is PAGES.CARTS, return true */
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
function generateProductsListHtml(products) {
  var listHtml = Object.keys(products).map(function (name) {
    return "\n      <li class=\"product\">\n        <img class=\"product-avatar\" alt=\"avatar of ".concat(products[name].name, "\" src=").concat(products[name].pic, " />\n        <p class=\"product-name\">").concat(products[name].name, "</p>\n        <p class=\"product-price\">Price: $").concat(products[name].price, " / each</p>\n        <button type=\"button\" class=\"product-add\" data-name=").concat(products[name].name, ">Add to Cart</button>\n      </li>\n    ");
  }).join('');
  return listHtml;
}
function generateNavigateHtml(_ref) {
  var isViewCartPage = _ref.isViewCartPage,
    totalItems = _ref.totalItems;
  if (isViewCartPage) {
    return "<button type=\"button\" class=\"navigate-button to-hide\">Hide Cart</button>";
  }
  var totalInfo = totalItems == 0 ? "" : " (".concat(totalItems, ")");
  return "<button type=\"button\" class=\"navigate-button to-view\">View Cart".concat(totalInfo, "</button>");
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
function generateCheckoutHtml(_ref3) {
  var carts = _ref3.carts,
    totalPrice = _ref3.totalPrice;
  if (Object.keys(carts).length == 0) {
    return "";
  }
  return "\n    <div class=\"checkout\">\n      <span class=\"checkout-price\"> Total Price: $".concat(totalPrice, "</span>\n      <button type=\"button\" class=\"to-checkout\">Checkout</button>\n    </div>\n  ");
}
function generateViewCartContentHtml(_ref4) {
  var products = _ref4.products,
    carts = _ref4.carts,
    isViewCartPage = _ref4.isViewCartPage,
    totalPrice = _ref4.totalPrice;
  if (!isViewCartPage) {
    return "";
  }
  var cartsHtml = generateCartsHtml({
    products: products,
    carts: carts
  });
  var checkoutHtml = generateCheckoutHtml({
    carts: carts,
    totalPrice: totalPrice
  });
  return "\n    <div class=\"view-cart-content\">\n      ".concat(cartsHtml, "\n      ").concat(checkoutHtml, "\n    </div>\n  ");
}
function renderProducts(_ref5) {
  var products = _ref5.products,
    productsEl = _ref5.productsEl;
  var productsHtml = generateProductsListHtml(products);
  productsEl.innerHTML = "".concat(productsHtml);
}
function renderViewCart(_ref6) {
  var products = _ref6.products,
    carts = _ref6.carts,
    isViewCartPage = _ref6.isViewCartPage,
    viewCartEl = _ref6.viewCartEl;
  // Calculate total items and price in the carts
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
  var viewCartContentHtml = generateViewCartContentHtml({
    products: products,
    carts: carts,
    isViewCartPage: isViewCartPage,
    totalPrice: totalPrice
  });
  viewCartEl.innerHTML = "\n    ".concat(navigateHtml, "\n    ").concat(viewCartContentHtml, "\n  ");
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
var viewCartEl = document.querySelector('.view-cart');
function init() {
  // Render the products' list Html
  (0,_view__WEBPACK_IMPORTED_MODULE_3__.renderProducts)({
    products: _stateOfProducts__WEBPACK_IMPORTED_MODULE_0__["default"],
    productsEl: productsEl
  });

  // Render the view cart Html
  (0,_view__WEBPACK_IMPORTED_MODULE_3__.renderViewCart)({
    products: _stateOfProducts__WEBPACK_IMPORTED_MODULE_0__["default"],
    carts: _stateOfCarts__WEBPACK_IMPORTED_MODULE_1__.getCarts(),
    isViewCartPage: (0,_stateOfPage__WEBPACK_IMPORTED_MODULE_2__.isViewCartPage)(),
    viewCartEl: viewCartEl
  });
}

/* Load the page */
init();
productsEl.addEventListener('click', function (e) {
  if (e.target.classList.contains('product-add')) {
    // Click the "Add to Cart" button
    var name = e.target.dataset.name;
    if (_stateOfCarts__WEBPACK_IMPORTED_MODULE_1__.hasItemInCarts(name)) {
      // Exist item, increase the quantity by one
      _stateOfCarts__WEBPACK_IMPORTED_MODULE_1__.addQuantityByOne(name);
    } else {
      // Add new item to carts, create this item
      _stateOfCarts__WEBPACK_IMPORTED_MODULE_1__.addItemToCarts(name);
    }

    // Update related HTML
    (0,_view__WEBPACK_IMPORTED_MODULE_3__.renderViewCart)({
      products: _stateOfProducts__WEBPACK_IMPORTED_MODULE_0__["default"],
      carts: _stateOfCarts__WEBPACK_IMPORTED_MODULE_1__.getCarts(),
      isViewCartPage: (0,_stateOfPage__WEBPACK_IMPORTED_MODULE_2__.isViewCartPage)(),
      viewCartEl: viewCartEl
    });
    return;
  }
});
viewCartEl.addEventListener('click', function (e) {
  if (e.target.classList.contains('to-view')) {
    // Click the "View Cart" button

    // Change the current page to 'carts' page.
    (0,_stateOfPage__WEBPACK_IMPORTED_MODULE_2__.setCurrentPage)(_stateOfPage__WEBPACK_IMPORTED_MODULE_2__.PAGES.CARTS);

    // Update related HTML
    (0,_view__WEBPACK_IMPORTED_MODULE_3__.renderViewCart)({
      products: _stateOfProducts__WEBPACK_IMPORTED_MODULE_0__["default"],
      carts: _stateOfCarts__WEBPACK_IMPORTED_MODULE_1__.getCarts(),
      isViewCartPage: (0,_stateOfPage__WEBPACK_IMPORTED_MODULE_2__.isViewCartPage)(),
      viewCartEl: viewCartEl
    });
    return;
  }
  if (e.target.classList.contains('to-hide')) {
    // Click the "Hide Cart" button

    // Change the current page to 'products' page.
    (0,_stateOfPage__WEBPACK_IMPORTED_MODULE_2__.setCurrentPage)(_stateOfPage__WEBPACK_IMPORTED_MODULE_2__.PAGES.PRODUCTS);

    // Update related HTML
    (0,_view__WEBPACK_IMPORTED_MODULE_3__.renderViewCart)({
      products: _stateOfProducts__WEBPACK_IMPORTED_MODULE_0__["default"],
      carts: _stateOfCarts__WEBPACK_IMPORTED_MODULE_1__.getCarts(),
      isViewCartPage: (0,_stateOfPage__WEBPACK_IMPORTED_MODULE_2__.isViewCartPage)(),
      viewCartEl: viewCartEl
    });
    return;
  }
  if (e.target.classList.contains('to-checkout')) {
    // Click the "Checkout" button

    // Change the current page to 'products' page.
    (0,_stateOfPage__WEBPACK_IMPORTED_MODULE_2__.setCurrentPage)(_stateOfPage__WEBPACK_IMPORTED_MODULE_2__.PAGES.PRODUCTS);

    // Remove all items from the carts
    _stateOfCarts__WEBPACK_IMPORTED_MODULE_1__.resetCarts();

    // Update related HTML
    (0,_view__WEBPACK_IMPORTED_MODULE_3__.renderViewCart)({
      products: _stateOfProducts__WEBPACK_IMPORTED_MODULE_0__["default"],
      carts: _stateOfCarts__WEBPACK_IMPORTED_MODULE_1__.getCarts(),
      isViewCartPage: (0,_stateOfPage__WEBPACK_IMPORTED_MODULE_2__.isViewCartPage)(),
      viewCartEl: viewCartEl
    });
    return;
  }
});
viewCartEl.addEventListener('input', function (e) {
  if (e.target.classList.contains('to-edit-quantity')) {
    // The value of the quantity input has changed
    var name = e.target.dataset.name;
    var quantity = parseInt(e.target.value);
    if (_stateOfCarts__WEBPACK_IMPORTED_MODULE_1__.isValidQuantity(quantity)) {
      // If the quantity is valid, update the item's quantity
      _stateOfCarts__WEBPACK_IMPORTED_MODULE_1__.setQuantity({
        name: name,
        quantity: quantity
      });
    } else {
      // If this quantity (eg: not an integer or less than 0) is not valid, delete this item from carts
      _stateOfCarts__WEBPACK_IMPORTED_MODULE_1__.deleteItemFromCarts(name);
    }

    // Update related HTML
    (0,_view__WEBPACK_IMPORTED_MODULE_3__.renderViewCart)({
      products: _stateOfProducts__WEBPACK_IMPORTED_MODULE_0__["default"],
      carts: _stateOfCarts__WEBPACK_IMPORTED_MODULE_1__.getCarts(),
      isViewCartPage: (0,_stateOfPage__WEBPACK_IMPORTED_MODULE_2__.isViewCartPage)(),
      viewCartEl: viewCartEl
    });
    return;
  }
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map