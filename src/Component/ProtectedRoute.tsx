import  { useState } from 'react'
import { Navigate } from 'react-router-dom';


const ProtectedRoute = ({ children, isAuthenticated }: { children: React.ReactNode, isAuthenticated: boolean }) => {
    return isAuthenticated ? children : <Navigate to="/Auth" />;
  };

export default ProtectedRoute