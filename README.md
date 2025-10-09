# BookHooked

**BookHooked** is a modern React web application that provides a platform for users to explore courses, contact the team, and access user-specific content after authentication. The project uses **React**, **React Router**, **DaisyUI**, **React Hook Form**, and **react-hot-toast** for a responsive and interactive experience.

---

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
