import React from 'react';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

function Logout() {
  const [, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
      localStorage.removeItem('Users');
      localStorage.removeItem('token');
      setAuthUser(null);
      toast.success('Logout successful');
      window.location.href = '/';
    } catch {
      toast.error('Error during logout');
    }
  };

  return (
    <button
      className='px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md cursor-pointer font-semibold'
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}

export default Logout;