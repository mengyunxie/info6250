import products from './stateOfProducts';
import * as cartsState from './stateOfCarts';
import {PAGES, setCurrentPage, isViewCartPage} from './stateOfPage';
import {renderProducts, renderViewCart} from './view';

const productsEl = document.querySelector('.products');
const viewCartEl = document.querySelector('.view-cart');

function init() {
  // Render the products' list Html
  renderProducts({products, productsEl});

  // Render the view cart Html
  renderViewCart({products, carts: cartsState.getCarts(), isViewCartPage: isViewCartPage(), viewCartEl});
}

/* Load the page */
init();

productsEl.addEventListener('click', (e) => {
  if(e.target.classList.contains('product-add')) { // Click the "Add to Cart" button
    const name = e.target.dataset.name;

    if(cartsState.hasItemInCarts(name)) { // Exist item, increase the quantity by one
      cartsState.addQuantityByOne(name);
    } else { // Add new item to carts, create this item
      cartsState.addItemToCarts(name);
    }

    // Update related HTML
    renderViewCart({products, carts: cartsState.getCarts(), isViewCartPage: isViewCartPage(), viewCartEl});
    return;
  }
});

viewCartEl.addEventListener('click', (e) => {
  if(e.target.classList.contains('to-view')) { // Click the "View Cart" button

    // Change the current page to 'carts' page.
    setCurrentPage(PAGES.CARTS);

    // Update related HTML
    renderViewCart({products, carts: cartsState.getCarts(), isViewCartPage: isViewCartPage(), viewCartEl});
    return;
  }

  if(e.target.classList.contains('to-hide')) { // Click the "Hide Cart" button

    // Change the current page to 'products' page.
    setCurrentPage(PAGES.PRODUCTS);

    // Update related HTML
    renderViewCart({products, carts: cartsState.getCarts(), isViewCartPage: isViewCartPage(), viewCartEl});
    return;
  }

  if(e.target.classList.contains('to-checkout')) { // Click the "Checkout" button

    // Change the current page to 'products' page.
    setCurrentPage(PAGES.PRODUCTS);

    // Remove all items from the carts
    cartsState.resetCarts();

    // Update related HTML
    renderViewCart({products, carts: cartsState.getCarts(), isViewCartPage: isViewCartPage(), viewCartEl});
    return;
  }
});

viewCartEl.addEventListener('input', (e) => {
  if(e.target.classList.contains('to-edit-quantity')) { // The value of the quantity input has changed
    const name = e.target.dataset.name;
    const quantity = parseInt(e.target.value);
    
    if(cartsState.isValidQuantity(quantity)) { // If the quantity is valid, update the item's quantity
      cartsState.setQuantity({name, quantity});
    } else { // If this quantity (eg: not an integer or less than 0) is not valid, delete this item from carts
      cartsState.deleteItemFromCarts(name);
    }

    // Update related HTML
    renderViewCart({products, carts: cartsState.getCarts(), isViewCartPage: isViewCartPage(), viewCartEl});
    return;
  }
});