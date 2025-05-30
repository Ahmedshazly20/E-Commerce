import  { useState } from 'react';
import { LoginPage } from './LoginPage';
import { RegisterPage } from './RegisterPage';
import { Navigate } from 'react-router-dom';

function Auth() {
  const [currentPage, setCurrentPage] = useState<'login' | 'register'>('login');
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  if(isAuthenticated){
    return <Navigate to="/" />
  }else{
    return (
      <div className="min-h-screen bg-gray-50">
      {currentPage === 'login' ? (
      <LoginPage onSwitchToRegister={() => setCurrentPage('register')} />
    ) : (
      <RegisterPage onSwitchToLogin={() => setCurrentPage('login')} />
    )}
  </div>
  )
  } 
        
   
}

export default Auth