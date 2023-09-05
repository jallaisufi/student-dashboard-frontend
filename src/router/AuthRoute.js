import React from 'react';
import { Navigate, Outlet } from 'react-router';
import Navbar from "../components/Navbar";

const AuthRoute = () => {
  const authToken = localStorage.getItem('authToken');

  if (!authToken) {
    return <Navigate to="/login" />;
  }

  return <div>
    <Navbar />
    <Outlet />;
  </div>
};

export default AuthRoute;
