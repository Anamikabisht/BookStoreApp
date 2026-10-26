import React, { useState } from 'react';
import { AuthContext } from './AuthContext';

export default function AuthProvider({ children }) {
  let initialAuthUser = null;

  try {
    const storedUser = localStorage.getItem('Users');
    const storedToken = localStorage.getItem('token');
    initialAuthUser = storedUser ? JSON.parse(storedUser) : null;

    if (initialAuthUser && !storedToken) {
      initialAuthUser = null;
    }
  } catch {
    initialAuthUser = null;
  }

  const [authUser, setAuthUser] = useState(initialAuthUser);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}
