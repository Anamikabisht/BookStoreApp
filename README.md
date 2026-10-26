# BookHooked

**BookHooked** is a modern React web application that provides a platform for users to explore courses, contact the team, and access user-specific content after authentication. The project uses **React**, **React Router**, **DaisyUI**, **React Hook Form**, and **react-hot-toast** for a responsive and interactive experience.

---

## Deployment

The app is configured to deploy as a Netlify frontend and a Render API, backed by MongoDB Atlas.

### Backend (Render)

1. Create a MongoDB Atlas database and allow the Render service to connect to it.
2. Connect this project to Render and create a Blueprint from `render.yaml` in the project root.
3. Set the Blueprint's `MONGODB_URI` to the Atlas connection string, `JWT_SECRET` to a unique secret, and `CLIENT_ORIGIN` to the Netlify site's origin (for example, `https://your-site.netlify.app`).
4. Deploy the service and verify its `/health` endpoint returns `{"status":"ok"}`.

### Frontend (Netlify)

1. Connect the project to Netlify and set the base directory to `frontend`.
2. Set the `VITE_API_URL` environment variable to the deployed Render service URL, without a trailing slash.
3. Deploy. The included `frontend/netlify.toml` configures the Vite build and client-side route fallback.

For local development, the frontend defaults to `http://localhost:4001`; the backend reads its MongoDB URI and JWT secret from `backend/.env`.

## Features

- **User Authentication**
  - Signup and Login functionality.
  - Authenticated users see a **Logout** button.
  - User session persists using `localStorage`.

- **Protected Routes**
  - Certain routes like `/course` are only accessible to logged-in users.
  - Unauthenticated users are redirected to the signup page.

- **Responsive Navbar**
  - Mobile-friendly dropdown menu.
  - Dynamic rendering of Login/Logout based on authentication state.

- **UI Components**
  - Built with **DaisyUI** for ready-to-use components.
  - Styled buttons, modals, forms, and alerts.

- **Interactive Forms**
  - **React Hook Form** for form validation.
  - Error messages displayed for invalid inputs.
  - Toast notifications for success/error events using **react-hot-toast**.

---

## Tech Stack

### Frontend
- **State Management:** React Context API
- **Notifications:** react-hot-toast
- **HTTP Requests:** Axios
- **Styling:** TailwindCSS + DaisyUI

### Backend
- **Node.js** – JavaScript runtime  
- **Express.js** – REST API framework  
- **MongoDB** – Database for storing user data  
- **Mongoose** – MongoDB object modeling  
- **Axios** – HTTP client for API requests  


---
