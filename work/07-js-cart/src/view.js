function generateProductsListHtml(products) {
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

function generateNavigateHtml({isViewCartPage, totalItems}) {
  if(isViewCartPage) {
      return `<button type="button" class="navigate-button to-hide">Hide Cart</button>`;
  }
  const totalInfo = totalItems == 0 ? "" : ` (${totalItems})`;
  return `<button type="button" class="navigate-button to-view">View Cart${totalInfo}</button>`
}

function generateCartsHtml({products, carts}) {
  if(Object.keys(carts).length == 0) {
    return `<p class="no-data">Nothing in the cart</p>`;
  }

  const listHtml = Object.keys(carts).map( name => {

    const priceOfItem = (products[name].price * carts[name].quantity).toFixed(2);
    return `
      <li class="cart">
        <img class="cart-avatar" alt="avatar of ${carts[name].name}" src=${products[name].pic}/>
        <span class="cart-name">Name: ${carts[name].name},</span>
        <label class="cart-quantity">Quantity: <input type="number" min="0" class="to-edit-quantity" data-name=${carts[name].name} value=${carts[name].quantity}> ,</label>
        <span class="cart-price">Price: $${priceOfItem}</span>
      </li>
    `;
  }).join('');
  return `<ul class="carts">${listHtml}</ul>`;
}

function generateCheckoutHtml({carts, totalPrice}) {
  if(Object.keys(carts).length == 0) {
    return "";
  }

  return `
    <div class="checkout">
      <span class="checkout-price"> Total Price: $${totalPrice}</span>
      <button type="button" class="to-checkout">Checkout</button>
    </div>
  `;
}

function generateViewCartContentHtml({products, carts, isViewCartPage, totalPrice}) {
  if(!isViewCartPage) {
    return "";
  }

  const cartsHtml = generateCartsHtml({products, carts});
  const checkoutHtml = generateCheckoutHtml({carts, totalPrice});

  return `
    <div class="view-cart-content">
      ${cartsHtml}
      ${checkoutHtml}
    </div>
  `;
}

export function renderProducts({products, productsEl}) {
  const productsHtml = generateProductsListHtml(products);
  productsEl.innerHTML = `${productsHtml}`;
}

export function renderViewCart({products, carts, isViewCartPage, viewCartEl}) {

  // Calculate total items and price in the carts
  let totalItems = 0;
  let totalPrice = 0;
  Object.keys(carts).forEach(name => {
    totalItems += carts[name].quantity;
    totalPrice += carts[name].quantity * products[name].price;
  });
  totalPrice = totalPrice.toFixed(2);

  const navigateHtml = generateNavigateHtml({isViewCartPage, totalItems});
  const viewCartContentHtml = generateViewCartContentHtml({products, carts, isViewCartPage, totalPrice});

  viewCartEl.innerHTML = `
    ${navigateHtml}
    ${viewCartContentHtml}
  `;
}