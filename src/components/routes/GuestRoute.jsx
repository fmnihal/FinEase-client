import React from 'react';
import { useAuth } from '../../context/AuthProvider';
// import { Navigate, useLocation } from 'react-router-dom';

function LoadingSpinner() {
  return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
}
function GuestRoute({ children }) {
  const { user, loading } = useAuth();
  // const location = useLocation();
  if (loading) {
    return <LoadingSpinner />;
  }
  if (user) {
    // const from = location.state?.from?.pathname || "/";
    // return <Navigate to={from} replace />;
    return <Navigate to="dashboard" replace />;
  }
  return children;
}

export default GuestRoute;