import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { addToCart, toggleWishlist } from '../utils/bookLists'

function Cards({ item }) {
  const navigate = useNavigate()

  const handleAddToCart = () => {
    addToCart(item)
    toast.success('Added to cart')
    navigate('/cart')
  }

  const handleWishlist = () => {
    const saved = toggleWishlist(item)
    toast.success(saved ? 'Added to your list' : 'Removed from your list')
  }

  return (
    <div className='bg-pink-200 border border-gray-200 shadow-lg hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden flex flex-col justify-between h-[480px] w-full max-w-[380px] mx-auto mb-10'>
      <figure className='w-full h-[250px] overflow-hidden'>
        <img
          src={item.image || '/placeholder.svg'}
          alt={item.title}
          className='w-full h-full object-cover'
          onError={(event) => {
            event.currentTarget.onerror = null
            event.currentTarget.src = '/book-cover.svg'
          }}
        />
      </figure>

      <div className='flex flex-col justify-between flex-grow p-6'>
        <div>
          <div className='flex items-center justify-between flex-wrap gap-2 mb-3'>
            <h3 className='text-xl font-semibold text-black line-clamp-2'>
              {item.title}
            </h3>
            <span className='bg-white text-pink-600 text-sm px-3 py-1 rounded-full'>
              {item.category}
            </span>
          </div>
          <p className='text-gray-700 text-base mb-5 leading-relaxed'>
            Written by{' '}
            <span className='font-semibold text-gray-900'>{item.name}</span>
          </p>
        </div>

        <div className='flex flex-wrap justify-between items-center mt-auto gap-2'>
          <Link to={`/course/${item._id || item.id}`} className='text-green-800 font-semibold border border-green-500 px-4 py-1.5 rounded-full text-sm hover:bg-green-500 hover:text-white transition'>
            View
          </Link>
          <span className='text-green-800 font-semibold border border-green-500 px-4 py-1.5 rounded-full text-sm'>
            {item.price === 0 ? 'Free' : `${item.price}$`}
          </span>
          <button onClick={handleAddToCart} className='bg-pink-600 hover:bg-pink-700 text-white px-3 py-1.5 rounded-full text-sm font-semibold'>
            Buy
          </button>
          <button onClick={handleWishlist} className='border border-pink-600 text-pink-700 hover:bg-pink-600 hover:text-white px-3 py-1.5 rounded-full text-sm font-semibold'>
            Add to list
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cards
