const CART_KEY = 'bookstore_cart';
const WISHLIST_KEY = 'bookstore_wishlist';
const UPDATE_EVENT = 'bookstore:lists-updated';

const getBookId = (book) => String(book?._id || book?.id || book?.title || '');

export function readBookList(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || '[]');
    return Array.isArray(value) ? value : [];
  } catch (error) {
    console.error(`Unable to read ${key} from local storage`, error);
    return [];
  }
}

function saveBookList(key, books) {
  localStorage.setItem(key, JSON.stringify(books));
  window.dispatchEvent(new Event(UPDATE_EVENT));
}

export function addToCart(book) {
  const id = getBookId(book);
  if (!id) return;

  const cart = readBookList(CART_KEY);
  const existing = cart.find((item) => getBookId(item) === id);
  const updated = existing
    ? cart.map((item) => getBookId(item) === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item)
    : [...cart, { ...book, quantity: 1 }];

  saveBookList(CART_KEY, updated);
}

export function toggleWishlist(book) {
  const id = getBookId(book);
  if (!id) return false;

  const wishlist = readBookList(WISHLIST_KEY);
  const isSaved = wishlist.some((item) => getBookId(item) === id);
  saveBookList(
    WISHLIST_KEY,
    isSaved ? wishlist.filter((item) => getBookId(item) !== id) : [...wishlist, book]
  );
  return !isSaved;
}

export function removeFromList(key, id) {
  saveBookList(key, readBookList(key).filter((item) => getBookId(item) !== String(id)));
}

export function setCartQuantity(id, quantity) {
  const updated = readBookList(CART_KEY)
    .map((item) => getBookId(item) === String(id) ? { ...item, quantity } : item)
    .filter((item) => item.quantity > 0);
  saveBookList(CART_KEY, updated);
}

export function clearCart() {
  saveBookList(CART_KEY, []);
}

export function subscribeToBookLists(callback) {
  window.addEventListener(UPDATE_EVENT, callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener(UPDATE_EVENT, callback);
    window.removeEventListener('storage', callback);
  };
}
