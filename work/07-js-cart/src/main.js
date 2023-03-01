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

/* Load the page */
init();

productsEl.addEventListener('click', (e) => {
  if(e.target.classList.contains('product-add')) { // Click the "Add to Cart" button
    const name = e.target.dataset.name;

    if(cartsState.hasCart(name)) { // Exist item, increase the quantity by one
      cartsState.addCartQuantityByOne(name);
    } else { // Add new item to carts, create this item
      cartsState.createCart(name);
    }

    renderViewCart({products, carts: cartsState.getCarts(), isViewCartPage: isViewCartPage(), navigateCartEl});
    return;
  }
});

navigateCartEl.addEventListener('click', (e) => {
  if(e.target.classList.contains('to-view')) { // Click the "View Cart" button
    setCurrentPage(PAGES.CARTS);
    renderViewCart({products, carts: cartsState.getCarts(), isViewCartPage: isViewCartPage(), navigateCartEl});
    return;
  }

  if(e.target.classList.contains('to-hide')) { // Click the "Hide Cart" button
    setCurrentPage(PAGES.PRODUCTS);
    renderViewCart({products, carts: cartsState.getCarts(), isViewCartPage: isViewCartPage(), navigateCartEl});
    return;
  }

  if(e.target.classList.contains('to-checkout')) { // Click the "Checkout" button
    setCurrentPage(PAGES.PRODUCTS);
    cartsState.resetCarts(); // Remove all items from the carts
    renderViewCart({products, carts: cartsState.getCarts(), isViewCartPage: isViewCartPage(), navigateCartEl});
    return;
  }
});

navigateCartEl.addEventListener('input', (e) => {
  if(e.target.classList.contains('to-edit-quantity')) { // Change the quantity input of each item
    const name = e.target.dataset.name;
    const quantity = parseInt(e.target.value);
    
    if(cartsState.isValidQuantity(quantity)) { // If the quantity is valid, update the item's quantity
      cartsState.setCartQuantity({name, quantity});
    } else { // If this quantity is not valid, delete this item object from carts
      cartsState.deleteCart(name);
    }

    renderViewCart({products, carts: cartsState.getCarts(), isViewCartPage: isViewCartPage(), navigateCartEl});
    return;
  }
});