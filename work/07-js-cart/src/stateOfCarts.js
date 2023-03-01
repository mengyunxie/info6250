let carts = {};

/* Add a new item to cart, each item only has name and quantity. */
export function createCart(name) {
  carts[name] = {
    name,
    quantity: 1
  }
};

export function deleteCart(name) {
  delete carts[name];
};

/* Clear the carts object */
export function resetCarts() {
  carts = {};
};

export function addCartQuantityByOne(name) {
  carts[name].quantity = carts[name].quantity + 1;
};

export function setCartQuantity({name, quantity}) {
  carts[name].quantity = quantity;
};

export function getCartQuantity(name) {
  return carts[name].quantity;
};

export function getCarts() {
  return carts;
}

/* If the item exist, return true */
export function hasCart(name) {
  return carts[name] ? true : false;
}

/* If the quantity is valid, return true */
export function isValidQuantity(quantity) {
  return (quantity && quantity > 0) ? true : false;
}