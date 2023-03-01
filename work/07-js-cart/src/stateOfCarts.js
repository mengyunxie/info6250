let carts = {};

export function createCart(name) {
  carts[name] = {
    name,
    quantity: 1
  }
};

export function deleteCart(name) {
  delete carts[name];
};

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

export function hasCart(name) {
  return carts[name] ? true : false;
}