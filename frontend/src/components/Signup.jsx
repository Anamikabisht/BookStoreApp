import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import api from '../utils/api'
import toast, { Toaster } from 'react-hot-toast'
import { useAuth } from '../context/AuthContext'

function Signup() {
  const navigate = useNavigate()
  const [, setAuthUser] = useAuth() // ✅ update context

  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    try {
      const res = await api.post('/user/signup', {
        name: data.name.trim(),
        email: data.email.trim().toLowerCase(),
        password: data.password,
      })

      if (res.data?.token) {
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('Users', JSON.stringify(res.data.user))
        setAuthUser(res.data.user)
        toast.success('Signed up successfully')
        navigate('/')
      }
    } catch (err) {
      toast.error(err.response?.data?.message || 'Signup failed')
    }
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <Toaster position="top-center" />
      <div className="border-2 border-pink-400 p-8 rounded-3xl w-full max-w-md shadow-lg relative">
        <div className="absolute top-4 right-4">
          <Link to="/">
            <button className="btn btn-sm text-xl rounded-xl bg-pink-500 hover:bg-pink-600">
              Back
            </button>
          </Link>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="text-center">
          <h3 className="font-bold text-2xl pb-6">Please Signup</h3>

          <div className="mt-3 text-left">
            <label className="text-xl">Name</label>
            <input
              {...register('name', { required: true })}
              type="text"
              placeholder="Enter your name"
              className="p-3 w-full mt-1 outline-none text-lg border rounded-md"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">Name is required</p>}
          </div>

          <div className="mt-3 text-left">
            <label className="text-xl">Email</label>
            <input
              {...register('email', { required: true })}
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full mt-1 outline-none text-lg border rounded-md"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">Email is required</p>}
          </div>

          <div className="mt-3 text-left">
            <label className="text-xl">Password</label>
            <input
              {...register('password', { required: true })}
              type="password"
              placeholder="Enter your password"
              className="p-3 w-full mt-1 outline-none text-lg border rounded-md"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">Password is required</p>}
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center pt-6 gap-3">
            <button
              type="submit"
              className="px-5 py-2 text-lg font-semibold bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition duration-300"
            >
              Signup
            </button>
            <p className="text-lg">
              Have an account?{' '}
              <Link to="/">
                <span className="text-blue-400 underline cursor-pointer">Login</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
