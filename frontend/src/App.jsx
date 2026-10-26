import React from 'react'
import Home from './Home/Home' 
import Course from './Course/Course' 
import Signup from './components/Signup'
import Contact from './components/Contact'
import About from './components/About'
import BookDetails from './components/BookDetails'
import ProtectedRoute from './components/ProtectedRoute'
import Cart from './components/Cart'
import Wishlist from './components/Wishlist'
import { Toaster } from 'react-hot-toast';
import { Route, Routes, Navigate } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={<ProtectedRoute><Course /></ProtectedRoute>} />
        <Route path='/course/:id' element={<ProtectedRoute><BookDetails /></ProtectedRoute>} />
        <Route path='/cart' element={<ProtectedRoute><Cart /></ProtectedRoute>} />
        <Route path='/wishlist' element={<ProtectedRoute><Wishlist /></ProtectedRoute>} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>

      <Toaster
        position='top-center'
        reverseOrder={false}
        toastOptions={{ duration: 3000 }}
      />
    </>
  )
}

export default App
