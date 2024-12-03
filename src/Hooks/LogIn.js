import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import form1 from '../Components/Gallery/form-block.png';
import form2 from '../Components/Gallery/3d-rendering-dices.png';
import form3 from '../Components/Gallery/file (10).png';

function Login({ toggleForm }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [notification, setNotification] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setNotification('');
    setIsLoading(true);

    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post('https://tasteless-marin-isdor-151c6308.koyeb.app/auth/login', {
        email,
        password,
      });

      const { token } = response.data;

      // Save token to local storage
      localStorage.setItem('authToken', token);

      // Notify success and navigate
      setNotification('Login successful! Redirecting...');
      setTimeout(() => navigate('/AddStudent'), 1000);
    } catch (err) {
      console.error(err);
      setError('Invalid email or password');
      setShowModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center p-4 md:p-10">
      <div className="bg-blue-900 w-full md:w-3/4 flex flex-col lg:flex-row justify-center items-center rounded-xl px-4 md:px-5 py-8 md:py-10 gap-6 lg:gap-10">
        {/* Form Section */}
        <section className="w-full lg:w-1/2 px-4 lg:-ml-8">
          <h2 className="text-3xl md:text-4xl font-bold w-full mb-6 bg-gradient-to-r from-white via-yellow-500 to-purple-500 text-transparent bg-clip-text">
            Welcome Back! Please Login
          </h2>
          <form
            onSubmit={handleLogin}
            className="bg-white p-6 md:p-8 rounded-xl w-full max-w-md mx-auto"
          >
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your Email"
                className="bg-transparent w-full p-4 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors duration-200"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your Password"
                className="bg-transparent w-full p-4 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors duration-200"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-yellow-500 text-white rounded-xl p-3 w-full text-lg hover:bg-yellow-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLoading ? 'Logging in...' : 'Login'}
              </button>
            </div>
          </form>
          {notification && (
            <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg text-center">
              {notification}
            </div>
          )}
          {error && (
            <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg text-center">
              {error}
            </div>
          )}
          <p className="text-center mt-4 text-white">
            Don't have an account?{' '}
            <span
              onClick={!isLoading ? toggleForm : undefined}
              className={`text-yellow-400 cursor-pointer hover:text-yellow-300 transition-colors duration-200 ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              Sign Up
            </span>
          </p>
        </section>
        {/* Image Section */}
        <div className="hidden lg:flex gap-4 w-1/3">
          <img
            src={form2}
            alt="Dice"
            className="w-24 animate-bounce"
            style={{ animationDelay: '0ms' }}
          />
          <img
            src={form1}
            alt="Form"
            className="w-24 animate-bounce"
            style={{ animationDelay: '150ms' }}
          />
          <img
            src={form3}
            alt="File"
            className="w-24 animate-bounce"
            style={{ animationDelay: '300ms' }}
          />
        </div>
      </div>
      {/* Modal for Error */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center">
              <svg
                className="w-16 h-16 text-red-500 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Login Failed
              </h3>
              <p className="text-red-500 text-center mb-4">{error}</p>
              <button
                onClick={() => setShowModal(false)}
                className="w-full bg-yellow-500 text-white rounded-lg py-2 px-4 hover:bg-yellow-600 transition-colors duration-200"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
