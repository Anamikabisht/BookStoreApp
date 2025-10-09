import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  let initialAuthUser;
  try {
    const storedUser = localStorage.getItem("Users");
    initialAuthUser = storedUser ? JSON.parse(storedUser) : null;
  } catch (e) {
    initialAuthUser = null;
  }

  const [authUser, setAuthUser] = useState(initialAuthUser);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
