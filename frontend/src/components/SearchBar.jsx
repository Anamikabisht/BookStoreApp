function SearchBar({ value, onChange, onClear, total }) {
  return (
    <div className='max-w-6xl mx-auto px-4 mt-10'>
      <div className='flex flex-col md:flex-row md:items-center gap-4 mb-6'>
        <div className='flex-1'>
          <input
            type='text'
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder='Search by title, author or category...'
            className='w-full px-5 py-3 rounded-xl border border-pink-300 bg-white text-gray-900 outline-none focus:ring-2 focus:ring-pink-400'
          />
        </div>

        <div className='flex gap-3 items-center'>
          <span className='text-pink-300 font-medium'>{total} books</span>
          {value && (
            <button
              onClick={onClear}
              className='bg-gray-200 text-gray-900 px-4 py-2 rounded-xl font-medium hover:bg-gray-300'
            >
              Clear
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
