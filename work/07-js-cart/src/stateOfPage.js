export const PAGES = {
  PRODUCTS: 'products',
  CARTS: 'carts',
};

let currentPage = PAGES.PRODUCTS;

export function setCurrentPage(page) {
  currentPage = page;
}

export function isViewCartPage() {
  return currentPage == PAGES.CARTS ? true : false;
}