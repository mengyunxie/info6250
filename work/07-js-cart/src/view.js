function generateProductsHtml(products) {
  const listHtml = Object.keys(products).map( name => {
    return `
      <li class="product">
        <img class="product-avatar" alt="avatar of ${products[name].name}" src=${products[name].pic} />
        <p class="product-name">${products[name].name}</p>
        <p class="product-price">Price: $${products[name].price} / each</p>
        <button type="button" class="product-add" data-name=${products[name].name}>Add to Cart</button>
      </li>
    `;
  }).join('');
  return listHtml;
}

function generateNavigateHtml(page, totalItems) {
  const totalInfo = totalItems == 0 ? "" : ` (${totalItems})`;
  if(page === 'carts') {
    return `<button type="button" class="navigate-button to-hide">Hide Cart</button>`;
  }
  return `<button type="button" class="navigate-button to-view">View Cart${totalInfo}</button>`
}

function generateCartsHtml(page, carts) {
  if(Object.keys(carts).length == 0) {
    return `<p class="no-data">Nothing in the cart</p>`;
  }
  const listHtml = Object.keys(carts).map( name => {
    const priceOfItem = (carts[name].price * carts[name].quantity).toFixed(2);
    return `
      <li class="cart">
        <img class="cart-avatar" alt="avatar of ${carts[name].name}" src=${carts[name].pic}/>
        <span class="cart-name">Name: ${carts[name].name},</span>
        <label class="cart-quantity">Quantity: <input type="number" class="to-edit-quantity" data-name=${carts[name].name} value=${carts[name].quantity}> ,</label>
        <span class="cart-price">Price: $${priceOfItem}</span>
      </li>
    `;
  }).join('');
  return `<ul class="carts">${listHtml}</ul>`;
}

function generateCheckoutHtml(totalPrice) {
 return `
  <div class="checkout">
    <span class="checkout-price"> Total Price: $${totalPrice}</span>
    <button type="button" class="to-checkout">Checkout</button>
  </div>
 `;
}

export function renderProducts(state, productsEl) {
  const {products} = state;
  const productsHtml = generateProductsHtml(products);
  productsEl.innerHTML = `${productsHtml}`;
}

export function renderViewCart(state, viewCartEl) {
  const {carts, page} = state;
  const hideClass = page === 'products' ? "hide" : "";
  let totalItems = 0;
  let totalPrice = 0;
  Object.keys(carts).forEach(name => {
    totalItems += carts[name].quantity;
    totalPrice += carts[name].quantity * carts[name].price;
  });
  totalPrice = totalPrice.toFixed(2);
  const navigateHtml = generateNavigateHtml(page, totalItems);
  const cartsHtml = generateCartsHtml(page, carts);
  const checkoutHtml = generateCheckoutHtml(totalPrice);

  viewCartEl.innerHTML = `
  ${navigateHtml}
  <div class="view-carts ${hideClass}">
    ${page === 'products' ? "" : cartsHtml}
    ${page === 'products' || totalItems == 0 ? "" : checkoutHtml}
  </div>
  `;
}
