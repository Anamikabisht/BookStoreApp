import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import Navbar from './Navbar';
import Footer from './Footer';
import { clearCart, readBookList, removeFromList, setCartQuantity, subscribeToBookLists } from '../utils/bookLists';

function Cart() {
  const [cart, setCart] = useState(() => readBookList('bookstore_cart'));

  useEffect(() => subscribeToBookLists(() => setCart(readBookList('bookstore_cart'))), []);

  const total = cart.reduce((sum, book) => sum + Number(book.price || 0) * (book.quantity || 1), 0);

  const completeDemoPurchase = () => {
    clearCart();
    toast.success('Demo purchase complete — no payment was processed.');
  };

  return (
    <div className='min-h-screen bg-gray-900 text-white'>
      <Navbar />
      <main className='max-w-5xl mx-auto px-6 pt-32 pb-12 min-h-[70vh]'>
        <h1 className='text-4xl font-bold text-pink-400 mb-8'>Your Cart</h1>
        {cart.length === 0 ? (
          <div className='rounded-2xl bg-white/10 p-8 text-center'>
            <p className='text-xl mb-5'>Your cart is empty.</p>
            <Link to='/course' className='inline-block rounded-xl bg-pink-500 px-5 py-3 font-semibold hover:bg-pink-600'>Browse books</Link>
          </div>
        ) : (
          <>
            <div className='space-y-4'>
              {cart.map((book) => {
                const id = String(book._id || book.id || book.title);
                return (
                  <article key={id} className='flex flex-col sm:flex-row gap-5 items-center rounded-2xl bg-white/10 p-4'>
                    <img src={book.image || '/book-cover.svg'} alt={book.title} className='w-24 h-32 rounded-lg object-cover' onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = '/book-cover.svg'; }} />
                    <div className='flex-1 text-center sm:text-left'>
                      <h2 className='text-xl font-semibold'>{book.title}</h2>
                      <p className='text-gray-300'>{book.name} · {book.price === 0 ? 'Free' : `$${book.price}`}</p>
                    </div>
                    <div className='flex items-center gap-3'>
                      <button aria-label={`Decrease ${book.title} quantity`} onClick={() => setCartQuantity(id, (book.quantity || 1) - 1)} className='rounded-full bg-gray-700 w-9 h-9'>−</button>
                      <span>{book.quantity || 1}</span>
                      <button aria-label={`Increase ${book.title} quantity`} onClick={() => setCartQuantity(id, (book.quantity || 1) + 1)} className='rounded-full bg-gray-700 w-9 h-9'>+</button>
                    </div>
                    <button onClick={() => removeFromList('bookstore_cart', id)} className='text-pink-300 hover:text-pink-100 underline'>Remove</button>
                  </article>
                );
              })}
            </div>
            <div className='mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-white/20 pt-6'>
              <p className='text-2xl font-bold'>Total: ${total.toFixed(2)}</p>
              <button onClick={completeDemoPurchase} className='rounded-xl bg-pink-500 px-6 py-3 font-semibold hover:bg-pink-600'>Complete demo purchase</button>
            </div>
            <p className='text-sm text-gray-400 mt-3 text-right'>Demo only. No payment will be collected.</p>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Cart;
