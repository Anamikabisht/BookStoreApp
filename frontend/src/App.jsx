import React from 'react'
import Home from './Home/Home' 
import Course from './Course/Course' 
import Signup from './components/Signup'
import Contact from './components/Contact'
import About from './components/About'
import toast, { Toaster } from 'react-hot-toast';
import {Route,Routes,Navigate}  from 'react-router-dom'
import { useAuth } from "./context/AuthProvider"


function App() {
  const [authUser, setAuthUser] = useAuth()
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={authUser?<Course/>:<Navigate to="/signup"></Navigate>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
      <Toaster 
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 3000, // ✅ auto-dismiss after 3s
        }}
      />
    </>
  )
}

export default App
