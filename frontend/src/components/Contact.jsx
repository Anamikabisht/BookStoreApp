import React, { useState } from "react"
import { Link } from "react-router-dom"

function Contact() {
  const [data, setData] = useState({ name: "", email: "", message: "" })

  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Thank you for your message!")
    console.log(data)
    setData({ name: "", email: "", message: "" })
  }

  return (
    <div className="relative max-w-md mx-auto py-16 px-6 text-center">
      {/* Back Button */}
      <Link
        to="/"
        className="absolute top-4 right-6 bg-pink-500 hover:bg-pink-600 text-white px-4 py-1 rounded-lg text-sm"
      >
        Back
      </Link>

      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Your Name"
          className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-400"
          value={data.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-400"
          value={data.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-400"
          value={data.message}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-2 rounded-lg transition"
        >
          Send
        </button>
      </form>

      {/* Social Links */}
      <div className="flex justify-center gap-8 mt-10">
        {/* GitHub */}
        <a
          href="https://github.com/Anamikabisht"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-7 h-7 text-pink-500 hover:text-pink-600"
            viewBox="0 0 24 24"
          >
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8 2.3 3.4 1.6v-1.8c-2.5-.6-4.9-1.2-4.9-5.3 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.5.1-3 0 0 .9-.3 2.9 1.1a9.4 9.4 0 0 1 5.2 0c2-1.4 2.9-1.1 2.9-1.1.6 1.5.2 2.7.1 3a4.5 4.5 0 0 1 1.1 3c0 4.1-2.5 4.7-4.9 5.3v1.9c0 .3.2.7.8.6A10.98 10.98 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/anamika-013317278"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-7 h-7 text-pink-500 hover:text-pink-600"
            viewBox="0 0 24 24"
          >
            <path d="M4.98 3.5A2.5 2.5 0 0 1 7.5 6a2.5 2.5 0 1 1-5 0A2.5 2.5 0 0 1 4.98 3.5ZM2 8h6v14H2V8Zm7 0h5.7v2.2h.1c.8-1.5 2.7-3 5.5-3 5.8 0 6.9 3.8 6.9 8.8V22h-6v-5.8c0-1.4 0-3.3-2-3.3s-2.4 1.5-2.4 3.2V22h-6V8Z" />
          </svg>
        </a>

        {/* Email */}
        <a
          href="mailto:anamikabisht2004@gmail.com"
          className="hover:scale-110 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-7 h-7 text-pink-500 hover:text-pink-600"
            viewBox="0 0 24 24"
          >
            <path d="M2 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2Zm0 2 10 7 10-7v-.01L12 13 2 6.01V6Z" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default Contact
