import products from './stateOfProducts';
import * as cartsState from './stateOfCarts';
import {PAGES, setCurrentPage, isViewCartPage} from './stateOfPage';
import {renderProducts, renderViewCart} from './view';

const productsEl = document.querySelector('.products');
const navigateCartEl = document.querySelector('.navigate-carts');

function init() {
  renderProducts({products, productsEl});
  renderViewCart({products, carts: cartsState.getCarts(), isViewCartPage: isViewCartPage(), navigateCartEl});
}

init();

productsEl.addEventListener('click', (e) => {
  if(e.target.classList.contains('product-add')) {
    const name = e.target.dataset.name;

    if(!cartsState.hasCart(name)) {
      cartsState.createCart(name);
    } else {
      cartsState.addCartQuantityByOne(name);
    }

    renderViewCart({products, carts: cartsState.getCarts(), isViewCartPage: isViewCartPage(), navigateCartEl});
    return;
  }
});

navigateCartEl.addEventListener('click', (e) => {
  if(e.target.classList.contains('to-view')) {
    setCurrentPage(PAGES.CARTS);
    renderViewCart({products, carts: cartsState.getCarts(), isViewCartPage: isViewCartPage(), navigateCartEl});
    return;
  }

  if(e.target.classList.contains('to-hide')) {
    setCurrentPage(PAGES.PRODUCTS);
    renderViewCart({products, carts: cartsState.getCarts(), isViewCartPage: isViewCartPage(), navigateCartEl});
    return;
  }

  if(e.target.classList.contains('to-checkout')) {
    setCurrentPage(PAGES.PRODUCTS);
    cartsState.resetCarts();
    renderViewCart({products, carts: cartsState.getCarts(), isViewCartPage: isViewCartPage(), navigateCartEl});
    return;
  }
});

navigateCartEl.addEventListener('input', (e) => {
  if(e.target.classList.contains('to-edit-quantity')) {
    const name = e.target.dataset.name;
    const quantity = parseInt(e.target.value);

    cartsState.setCartQuantity({name, quantity});

    if(cartsState.getCartQuantity(name) == 0) {
      cartsState.deleteCart(name);
      renderViewCart({products, carts: cartsState.getCarts(), isViewCartPage: isViewCartPage(), navigateCartEl});
    }
    return;
  }
});




