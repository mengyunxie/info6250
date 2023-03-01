export const PAGES = {
  PRODUCTS: 'products',
  CARTS: 'carts',
};

let currentPage = PAGES.PRODUCTS;

export function setCurrentPage(page) {
  currentPage = page;
}

/* If currentPage is PAGES.CARTS, return true */
export function isViewCartPage() {
  return currentPage == PAGES.CARTS ? true : false;
}