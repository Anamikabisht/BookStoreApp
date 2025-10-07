import React from 'react'
import Home from './Home/Home' 
import Course from './Course/Course' 
import Signup from './components/Signup'
import Contact from './components/Contact'
import About from './components/About'
import {Route,Routes}  from 'react-router-dom'

function App() {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<Course/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </>
  )
}

export default App
