# 📚 BookHooked — Online Book Store

BookHooked is a full-stack web application built with the MERN stack that provides a simple platform for browsing books, exploring course content, and managing user accounts. It features a responsive interface and a backend API for handling application data and user interactions.

## ✨ Features

- **User Authentication** — Sign up, log in, and log out.
- **Book Browsing** — Browse and explore available books.
- **Book Details** — View information about individual books.
- **Search** — Find books using the search functionality.
- **Cart Management** — Add and manage books in your cart.
- **Wishlist** — Save books for later.
- **Protected Routes** — Restrict access to selected pages based on authentication.
- **Responsive UI** — Navigate the application across different screen sizes.
- **REST API** — Backend endpoints for user and book-related operations.

## 🛠️ Tech Stack

**Frontend**
- React.js
- JavaScript
- Tailwind CSS and DaisyUI
- React Router
- Axios
- React Hook Form

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose

**Tools & Deployment**
- Git and GitHub
- Vite
- Netlify (frontend deployment configuration)
- Render (backend deployment configuration)

## 📁 Project Structure

```text
BookHooked/
├── backend/
│   ├── controller/
│   ├── middleware/
│   ├── model/
│   ├── route/
│   ├── index.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── Course/
│   │   ├── Home/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── render.yaml
└── README.md
```

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) or a MongoDB Atlas database
- npm

### 1. Clone the repository

```bash
git clone https://github.com/Anamikabisht/BookStoreApp.git
cd BookStoreApp
```

### 2. Set up the backend

```bash
cd backend
npm install
```

Configure the backend environment variables in a `.env` file using the variable names expected by the backend code. Add your MongoDB connection string and any required authentication secrets.

Start the backend using the script defined in `backend/package.json`:

```bash
npm start
```

### 3. Set up the frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Vite will display the local development URL in the terminal. Open that URL in your browser.

## ⚙️ Configuration

Before running the application, configure:
- A valid MongoDB connection.
- Required backend environment variables.
- The frontend API base URL, if it is configurable in the project.
- Appropriate environment variables for production deployment.

**Security note:** Never commit database credentials, authentication secrets, or private API keys to GitHub.

## 🌐 Deployment

The repository includes deployment configuration for Render and Netlify.

For deployment:
1. Deploy the backend and configure its environment variables.
2. Connect the frontend to the deployed backend API.
3. Deploy the frontend and configure the correct API URL.
4. Configure CORS and any required production settings.
5. Verify authentication and book-related functionality on the deployed application.

## 🎯 Project Objective

The objective of BookHooked is to build a practical full-stack web application while applying concepts such as component-based UI development, REST API integration, database modelling, authentication, routing, and state management.

## 👩‍💻 Author

**Anamika Bisht**

- GitHub: [Anamikabisht](https://github.com/Anamikabisht)

---

*Built with React, Node.js, Express, and MongoDB.*
