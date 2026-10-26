import React, { useEffect, useMemo, useState } from 'react'
import Cards from '../components/Cards'
import { Link } from 'react-router-dom'
import api from '../utils/api'
import SearchBar from '../components/SearchBar'
import fallbackBooks from '../../public/list.json'

function Content() {
  const [allBooks, setAllBooks] = useState(fallbackBooks)
  const [searchText, setSearchText] = useState('')
  const [category, setCategory] = useState('All')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    const getBook = async () => {
      try {
        const res = await api.get('/book')
        const data = Array.isArray(res.data) && res.data.length ? res.data : fallbackBooks

        if (isMounted) setAllBooks(data)
      } catch (err) {
        console.error(err)
        if (isMounted) setAllBooks(fallbackBooks)
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    getBook()

    return () => {
      isMounted = false
    }
  }, [])

  const categories = useMemo(() => {
    const unique = new Set(allBooks.map((book) => book.category).filter(Boolean))
    return ['All', ...Array.from(unique)]
  }, [allBooks])

  const filteredBooks = useMemo(() => {
    const search = searchText.trim().toLowerCase()

    return allBooks.filter((item) => {
      const matchesSearch = !search ||
        item.title?.toLowerCase().includes(search) ||
        item.name?.toLowerCase().includes(search) ||
        item.category?.toLowerCase().includes(search)

      const matchesCategory = category === 'All' || item.category === category
      return matchesSearch && matchesCategory
    })
  }, [allBooks, searchText, category])

  return (
    <>
      <div className='max-w-screen-lg container mx-auto'>
        <div className='mt-24 items-center justify-center text-center'>
          <h1 className='mx-auto text-5xl font-bold mt-24 mb-5 text-pink-500'>We are delighted to have you here ;)</h1>
          <p className='mx-auto text-xl italic'>Discover a world of knowledge and adventure with our extensive collection of books. Whether you're looking for the latest bestsellers, timeless classics, or niche genres, we've got you covered. Dive into captivating stories, expand your horizons, and fuel your imagination with bookHooked.</p>
          <Link to='/'>
            <button className='bg-pink-600 rounded-xl w-20 px-4 py-2 text-center text-lg font-semibold hover:bg-pink-700 mt-5'>Back</button>
          </Link>
        </div>
      </div>

      <SearchBar
        value={searchText}
        onChange={setSearchText}
        onClear={() => setSearchText('')}
        total={filteredBooks.length}
      />

      <div className='max-w-6xl mx-auto px-4 mb-8'>
        <div className='flex flex-wrap gap-3 justify-center'>
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`px-4 py-2 rounded-full font-medium border ${
                category === item
                  ? 'bg-pink-500 text-white border-pink-500'
                  : 'bg-white text-gray-900 border-gray-300 hover:border-pink-400'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className='mt-12 text-center text-xl text-pink-500'>Loading books...</div>
      ) : filteredBooks.length === 0 ? (
        <div className='mt-12 text-center text-xl text-gray-300'>No books match your search.</div>
      ) : (
        <div className='mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 px-6'>
          {filteredBooks.map((item) => (
            <Cards key={item._id || item.id || item.title} item={item} />
          ))}
        </div>
      )}
    </>
  )
}

export default Content
