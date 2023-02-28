import state from './state';
import {renderProducts, renderViewCart} from './view';

const productsEl = document.querySelector('.products');
const navigateCartEl = document.querySelector('.navigate-carts');

productsEl.addEventListener('click', (e) => {
  if(e.target.classList.contains('product-add')) {
    
    const name = e.target.dataset.name;
    const {products, carts} = state;

    if(!carts[name]) {
      carts[name] = {
        name: products[name].name,
        price: products[name].price,
        pic: products[name].pic,
        quantity: 1
      }
    } else {
      carts[name].quantity = carts[name].quantity + 1;
    }
    console.log(carts[name])
    renderViewCart(state, navigateCartEl);
    return;
  }
});

navigateCartEl.addEventListener('input', (e) => {
  if(e.target.classList.contains('to-edit-quantity')) {
    const name = e.target.dataset.name;
    const {carts} = state;
    console.log(e.target.value);
    carts[name].quantity = parseInt(e.target.value);
    if(carts[name].quantity == 0) {
      delete carts[name];
    }
    renderViewCart(state, navigateCartEl);
    return;
  }
});

navigateCartEl.addEventListener('click', (e) => {
  if(e.target.classList.contains('to-view')) {
    state.page = "carts";
    renderViewCart(state, navigateCartEl);
    return;
  }

  if(e.target.classList.contains('to-hide')) {
    state.page = "products";
    renderViewCart(state, navigateCartEl);
    return;
  }

  if(e.target.classList.contains('to-checkout')) {
    // No longer show the View Cart content
    // Remove any items from the cart
    // Update any related HTML (such as the count in the View Cart button)
    state.page = "products";
    state.carts = {};
    renderViewCart(state, navigateCartEl);
    return;
  }
});

renderProducts(state, productsEl);
renderViewCart(state, navigateCartEl);
