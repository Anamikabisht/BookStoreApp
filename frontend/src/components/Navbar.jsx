import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import Logout from './Logout'
import { useAuth } from '../context/AuthContext'
import { readBookList, subscribeToBookLists } from '../utils/bookLists'

function Navbar() {
  const [authUser] = useAuth()
  const [theme] = useState(localStorage.getItem('theme') || 'light')
  const [cartCount, setCartCount] = useState(() => readBookList('bookstore_cart').reduce((sum, book) => sum + (book.quantity || 1), 0))
  const [wishlistCount, setWishlistCount] = useState(() => readBookList('bookstore_wishlist').length)

  useEffect(() => {
    const element = document.documentElement
    if (theme === 'dark') {
      element.classList.add('dark')
      element.classList.remove('light')
    } else {
      element.classList.add('light')
      element.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => subscribeToBookLists(() => {
    setCartCount(readBookList('bookstore_cart').reduce((sum, book) => sum + (book.quantity || 1), 0))
    setWishlistCount(readBookList('bookstore_wishlist').length)
  }), [])

  const navItems = (
    <>
      <li className='text-lg xl:text-xl font-semibold px-3'>
        <Link to='/'>Home</Link>
      </li>
      <li className='text-lg xl:text-xl font-semibold px-3'>
        <Link to='/course'>Course</Link>
      </li>
      <li className='text-lg xl:text-xl font-semibold px-3'>
        <Link to='/contact'>Contact</Link>
      </li>
      <li className='text-lg xl:text-xl font-semibold px-3'>
        <Link to='/about'>About</Link>
      </li>
      <li className='text-lg xl:text-xl font-semibold px-3'>
        <Link to='/wishlist'>My List ({wishlistCount})</Link>
      </li>
      <li className='text-lg xl:text-xl font-semibold px-3'>
        <Link to='/cart'>Cart ({cartCount})</Link>
      </li>
    </>
  )

  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-gray-800 text-white shadow-lg'>
      <div className='mx-auto max-w-7xl px-8 md:px-12'>
        <div className='navbar h-24 flex items-center justify-between'>
          <div className='navbar-start flex items-center gap-4'>
            <div className='dropdown lg:hidden'>
              <button tabIndex={0} className='btn btn-ghost' aria-label='Open menu'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-7 w-7' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' />
                </svg>
              </button>
              <ul tabIndex={0} className='menu menu-sm dropdown-content bg-base-100 text-base-content rounded-box mt-3 w-56 p-4 shadow'>
                {navItems}
              </ul>
            </div>
            <Link to='/' className='text-4xl md:text-5xl font-extrabold italic tracking-wide cursor-pointer text-pink-400 hover:text-pink-500 transition duration-200'>
              bookHooked
            </Link>
          </div>

          <div className='navbar-center hidden lg:flex'>
            <ul className='menu menu-horizontal px-4 gap-6'>{navItems}</ul>
          </div>

          <div className='navbar-end flex items-center gap-5'>
            {authUser ? (
              <Logout />
            ) : (
              <>
                <button
                  className='btn bg-pink-500 hover:bg-pink-600 text-white rounded-xl px-6 py-2 text-lg font-semibold'
                  onClick={() => document.getElementById('my_modal_5')?.showModal()}
                >
                  Login
                </button>
                <Login />
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
