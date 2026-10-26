import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Cards from './Cards';
import { readBookList, removeFromList, subscribeToBookLists } from '../utils/bookLists';

function Wishlist() {
  const [books, setBooks] = useState(() => readBookList('bookstore_wishlist'));

  useEffect(() => subscribeToBookLists(() => setBooks(readBookList('bookstore_wishlist'))), []);

  return (
    <div className='min-h-screen bg-gray-900 text-white'>
      <Navbar />
      <main className='max-w-6xl mx-auto px-6 pt-32 pb-12 min-h-[70vh]'>
        <h1 className='text-4xl font-bold text-pink-400 mb-8'>My Reading List</h1>
        {books.length ? (
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
            {books.map((book) => (
              <div key={book._id || book.id || book.title}>
                <Cards item={book} />
                <button
                  onClick={() => removeFromList('bookstore_wishlist', book._id || book.id || book.title)}
                  className='block mx-auto -mt-8 mb-5 text-pink-300 underline hover:text-white'
                >
                  Remove from list
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className='rounded-2xl bg-white/10 p-8 text-center'>
            <p className='text-xl mb-5'>Your reading list is empty.</p>
            <Link to='/course' className='inline-block rounded-xl bg-pink-500 px-5 py-3 font-semibold hover:bg-pink-600'>Explore books</Link>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Wishlist;
