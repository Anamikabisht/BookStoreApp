import React from 'react'
import pic from '../assets/pic.png'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-16 gap-10">
      
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Welcome to <span className="italic text-pink-500">bookHooked</span>
        </h1>
        <p className="text-xl mb-8 leading-relaxed italic">
          Discover a world of knowledge and adventure with our extensive collection of books. 
          Whether you're looking for the latest bestsellers, timeless classics, or niche genres, 
          we've got you covered. Dive into captivating stories, expand your horizons, and fuel 
          your imagination with <span className="italic">bookHooked</span>.
        </p>
        <Link to="/course">
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-xl transition duration-200">
            Explore Now
          </button>
        </Link>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={pic}
          alt="banner pic"
          className="w-[700px] h-auto rounded-xl shadow-md"
        />
      </div>
    </div>
  )
}

export default Banner
