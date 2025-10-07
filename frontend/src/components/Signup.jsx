import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Contact from '../components/Signup'

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="border-2 border-pink-400 p-8 rounded-3xl w-full max-w-md shadow-lg">
        {/* Back Button */}
         <div className="absolute top-4 right-4">
          <Link to="/">
            <button className="btn btn-sm text-xl rounded-xl bg-pink-500 hover:bg-pink-600">Back</button>
          </Link>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="text-center">
          <h3 className="font-bold text-2xl pb-6">Please Signup</h3>

          {/* Name Field */}
          <div className="mt-3 text-left">
            <label className="text-xl">Name</label>
            <input
              {...register('name', { required: true })}
              type="text"
              placeholder="Enter your name"
              className="p-3 w-full mt-1 outline-none text-lg border rounded-md"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">Name is required</p>
            )}
          </div>

          {/* Email Field */}
          <div className="mt-3 text-left">
            <label className="text-xl">Email</label>
            <input
              {...register('email', { required: true })}
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full mt-1 outline-none text-lg border rounded-md"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">Email is required</p>
            )}
          </div>

          {/* Password Field */}
          <div className="mt-3 text-left">
            <label className="text-xl">Password</label>
            <input
              {...register('password', { required: true })}
              type="password"
              placeholder="Enter your password"
              className="p-3 w-full mt-1 outline-none text-lg border rounded-md"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">Password is required</p>
            )}
          </div>

          {/* Signup Button + Link */}
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
                <span className="text-blue-400 underline cursor-pointer">
                  Login
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
     
    </div>
  )
}

export default Signup
