import React, { useState } from 'react';
import Login from './LogIn';
import Signup from './Signup';
import './AuthContainer.css'; // Custom CSS for transitions

function AuthContainer() {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="auth-container py-10">
      <div className={`form-wrapper ${isSignIn ? 'show' : 'hide'}`}>
        <Login toggleForm={toggleForm} />
      </div>
      <div className={`form-wrapper ${!isSignIn ? 'show' : 'hide'}`}>
        <Signup toggleForm={toggleForm} />
      </div>
    </div>
  );
}

export default AuthContainer;
