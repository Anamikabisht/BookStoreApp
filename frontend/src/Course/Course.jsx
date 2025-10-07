import React from 'react'
import Navbar  from '../components/Navbar'
import Footer  from '../components/Footer'
import Content from './Content'

function Course() {
  return (
    <div className="pt-16 md:pt-20">
    <Navbar/>
    <Content/>
    <Footer/>  
      
    </div>
  )
}

export default Course
