function Cards({ item }) {
  return (
    <div className="bg-pink-200 border border-gray-200 shadow-lg hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden flex flex-col justify-between h-[480px] w-full max-w-[380px] mx-auto mb-10">
      
      {/* Image Section */}
      <figure className="w-full h-[250px] overflow-hidden">
        <img
          src={item.image || '/placeholder.svg'}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </figure>

      {/* Content Section */}
      <div className="flex flex-col justify-between flex-grow p-6">
        <div>
          <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
            <h3 className="text-xl font-semibold text-black line-clamp-2">
              {item.title}
            </h3>
            <span className="bg-white text-pink-600 text-sm px-3 py-1 rounded-full">
              {item.category}
            </span>
          </div>
          <p className="text-gray-700 text-base mb-5 leading-relaxed">
            Written by{' '}
            <span className="font-semibold text-gray-900">{item.name}</span>
          </p>
        </div>

        {/* Footer Section */}
        <div className="flex justify-between items-center mt-auto">
          <span className="text-green-800 font-semibold border border-green-500 px-4 py-1.5 rounded-full text-sm">
            Access
          </span>
          <span className="text-green-800 font-semibold border border-green-500 px-4 py-1.5 rounded-full text-sm">
            {item.price === 0 ? 'Free' : `${item.price}$`}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Cards
