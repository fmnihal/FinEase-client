import React from 'react';
import { useAuth } from '../../context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

function LoadingSpinner() {
  return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
}
function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return <LoadingSpinner />;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
}

export default PrivateRoute;