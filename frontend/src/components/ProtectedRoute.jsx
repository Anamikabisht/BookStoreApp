import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ProtectedRoute({ children }) {
  const [authUser] = useAuth();
  return authUser ? children : <Navigate to='/signup' replace />;
}

export default ProtectedRoute;