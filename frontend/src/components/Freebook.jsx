import React from 'react'
import list from '../../public/list.json'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import Cards from './Cards'

function Freebook() {
  const freeBooks = list.filter((data) => data.price === 0)

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  }

  return (
    <div className="px-8 md:px-16 lg:px-24 py-16">
      {/* Title Section */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-pink-500 mb-6">
        Free Offered Books
      </h2>
      <p className="text-lg md:text-xl italic text-gray-200 text-center max-w-4xl mx-auto mb-10 leading-relaxed">
        Explore our exclusive collection of free books — carefully curated to
        inspire, educate, and entertain. Whether you're diving into fiction,
        self-growth, or learning something new, enjoy these gems absolutely
        free!
      </p>

      {/* Slider Section */}
      <div className="slider-container">
        <Slider {...settings}>
          {freeBooks.map((item) => (
            <div key={item.id} className="p-4">
              <Cards item={item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Freebook
