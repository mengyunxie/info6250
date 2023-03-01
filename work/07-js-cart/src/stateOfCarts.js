let carts = {};

export function getCarts() {
  return carts;
}

/* Clear the carts */
export function resetCarts() {
  carts = {};
};

/* Add a new item to carts, each item only has name as key and quantity. */
export function addItemToCarts(name) {
  carts[name] = {
    name,
    quantity: 1
  }
};

export function deleteItemFromCarts(name) {
  delete carts[name];
};

/* If the item exist, return true */
export function hasItemInCarts(name) {
  return carts[name] ? true : false;
}

/* Increase the quantity by one */
export function addQuantityByOne(name) {
  carts[name].quantity = carts[name].quantity + 1;
};

export function setQuantity({name, quantity}) {
  carts[name].quantity = quantity;
};

/* If the quantity is valid, return true */
export function isValidQuantity(quantity) {
  return (quantity && quantity > 0) ? true : false;
}