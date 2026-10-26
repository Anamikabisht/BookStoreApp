import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import api from '../utils/api'
import { useAuth } from '../context/AuthContext'

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [, setAuthUser] = useAuth()

  const onSubmit = async (data) => {
    const userData = {
      email: data.email.trim().toLowerCase(),
      password: data.password,
    }

    try {
      const res = await api.post('/user/login', userData)

      if (res.data?.token) {
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('Users', JSON.stringify(res.data.user))
        setAuthUser(res.data.user)
        toast.success('Logged in successfully')

        const modal = document.getElementById('my_modal_5')
        if (modal) modal.close()
      }
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed')
    }
  }

  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box mt-0 pt-0">
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="text-center">
            <h3 className="font-bold text-2xl pb-5">Please Login</h3>

            <div className="mt-2 text-left">
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

            <div className="flex flex-col sm:flex-row justify-between items-center pt-5 gap-3">
              <button
                type="submit"
                className="px-5 py-2 text-lg font-semibold bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition duration-300"
              >
                Login
              </button>
              <p className="text-lg">
                Not registered?{' '}
                <Link to="/signup">
                  <span className="text-blue-400 underline cursor-pointer">
                    Signup
                  </span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  )
}

export default Login
