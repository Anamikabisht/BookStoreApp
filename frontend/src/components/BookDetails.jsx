import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../utils/api';
import toast from 'react-hot-toast';
import Navbar from './Navbar';
import Footer from './Footer';
import { addToCart, readBookList, toggleWishlist } from '../utils/bookLists';
import fallbackBooks from '../../public/list.json';

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const loadBook = async () => {
      try {
        const res = await api.get('/book');
        const list = Array.isArray(res.data) && res.data.length ? res.data : fallbackBooks;
        const selected = list.find((item) => String(item._id || item.id) === String(id));
        const foundBook = selected || fallbackBooks.find((item) => String(item.id) === String(id)) || null;
        setBook(foundBook);
        setIsSaved(foundBook ? readBookList('bookstore_wishlist').some((item) => String(item._id || item.id || item.title) === String(foundBook._id || foundBook.id || foundBook.title)) : false);
      } catch {
        const selected = fallbackBooks.find((item) => String(item.id) === String(id));
        setBook(selected || null);
        setIsSaved(selected ? readBookList('bookstore_wishlist').some((item) => String(item.id || item.title) === String(selected.id || selected.title)) : false);
      }
    };

    loadBook();
  }, [id]);

  if (!book) {
    return (
      <div className='min-h-screen flex items-center justify-center text-2xl text-pink-500'>
        Book not found
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gray-900 text-white'>
      <Navbar />
      <main className='px-6 pt-32 pb-10'>
      <div className='max-w-6xl mx-auto'>
        <div className='mb-6'>
          <Link to='/course' className='inline-block bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg'>
            ← Back to Courses
          </Link>
        </div>

        <div className='grid md:grid-cols-2 gap-10 items-center'>
          <div className='bg-white/5 rounded-3xl p-4'>
            <img
              src={book.image || '/book-cover.svg'}
              alt={book.title}
              className='w-full h-[500px] object-cover rounded-2xl'
              onError={(event) => {
                event.currentTarget.onerror = null
                event.currentTarget.src = '/book-cover.svg'
              }}
            />
          </div>

          <div>
            <span className='inline-flex px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-sm font-semibold mb-3'>
              {book.category}
            </span>
            <h1 className='text-4xl font-bold mb-4'>{book.title}</h1>
            <p className='text-xl text-gray-300 mb-4'>by {book.name}</p>

            <div className='flex items-center gap-4 mb-6'>
              <span className='text-3xl font-bold text-green-400'>
                {book.price === 0 ? 'Free' : `$${book.price}`}
              </span>
              <span className='text-sm text-gray-400'>Digital access included</span>
            </div>

            <p className='text-lg text-gray-200 leading-8 mb-8'>
              {book.description || 'A captivating read filled with insight, imagination, and memorable characters for every kind of reader.'}
            </p>

            <div className='flex gap-4'>
              <Link
                to='/cart'
                onClick={() => {
                  addToCart(book)
                  toast.success('Added to cart')
                }}
                className='bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl font-semibold'
              >
                Buy / Add to Cart
              </Link>
              <button
                onClick={() => {
                  const saved = toggleWishlist(book)
                  setIsSaved(saved)
                  toast.success(saved ? 'Added to your list' : 'Removed from your list')
                }}
                className='bg-white text-gray-900 hover:bg-gray-200 px-6 py-3 rounded-xl font-semibold'
              >
                {isSaved ? 'Remove from List' : 'Add to List'}
              </button>
            </div>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
}

export default BookDetails;
