"use client"

import { useEffect, useState } from "react"
import Login from "./Login"

function Navbar() {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" && window.localStorage?.getItem("theme")
      ? window.localStorage.getItem("theme")
      : "light"
  )

  const element = typeof document !== "undefined" ? document.documentElement : null

  useEffect(() => {
    if (!element) return
    if (theme === "dark") {
      element.classList.add("dark")
      element.classList.remove("light")
      localStorage.setItem("theme", "dark")
    } else {
      element.classList.add("light")
      element.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [theme, element])

  const navItems = (
    <>
      <li className="text-lg xl:text-xl font-semibold px-3">
        <a href="/">Home</a>
      </li>
      <li className="text-lg xl:text-xl font-semibold px-3">
        <a href="/course">Course</a>
      </li>
      <li className="text-lg xl:text-xl font-semibold px-3">
        <a href="/contact">Contact</a>
      </li>
      <li className="text-lg xl:text-xl font-semibold px-3">
        <a href="/about">About</a>
      </li>
    </>
  )

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gray-800 text-white shadow-lg">
      <div className="mx-auto max-w-7xl px-8 md:px-12">
        <div className="navbar h-24 flex items-center justify-between">
          {/* Left: Brand + Mobile Menu */}
          <div className="navbar-start flex items-center gap-4">
            <div className="dropdown lg:hidden">
              <button
                tabIndex={0}
                className="btn btn-ghost"
                aria-label="Open menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </button>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 text-base-content rounded-box mt-3 w-56 p-4 shadow"
              >
                {navItems}
              </ul>
            </div>
            <a className="text-4xl md:text-5xl font-extrabold italic tracking-wide cursor-pointer text-pink-400 hover:text-pink-500 transition duration-200 pl-0 ml-0">
              bookHooked
            </a>
          </div>

          {/* Center: Desktop Nav */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-4 gap-6">{navItems}</ul>
          </div>

          {/* Right: Search, Theme Toggle, Login */}
          <div className="navbar-end flex items-center gap-5">
            

           
            <button
              className="btn bg-pink-500 hover:bg-pink-600 text-white rounded-xl px-6 py-2 text-lg font-semibold"
              onClick={() =>
                document.getElementById("my_modal_5")?.showModal()
              }
            >
              Login
            </button>
            <Login />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
