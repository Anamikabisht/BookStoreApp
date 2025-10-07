import React from 'react'

import Navbar from '../components/Navbar'
import Banner from '../components/banner'
import Footer from '../components/Footer'
import Freebook from '../components/Freebook' 

function Home() {
  return (
    <div className="pt-16 md:pt-20 px-5">
    <Navbar/>
    <Banner/>
    <Freebook/>
    <Footer/>
    </div>
  )
}

export default Home
