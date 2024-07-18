import { useAuth } from '../context';
import { Navigate } from 'react-router-dom';

// ProtectedRoute is a wrapper for pages that require login
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
