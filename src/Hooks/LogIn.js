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

    if (!email || !password) {
      setError('Please fill in all fields.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post('https://continuing-veradis-uncommon-44b1416d.koyeb.app/auth/login', {
        email,
        password,
      });

      const { token } = response.data;
      localStorage.setItem('authToken', token);

      setNotification('Login successful! Redirecting...');
      setTimeout(() => navigate('/AddStudent'), 1000);
    } catch (err) {
      setError('Invalid email or password');
      setShowModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center p-4 sm:p-10">
      <div className="bg-blue-900 w-full md:w-3/4 flex flex-col lg:flex-row justify-center items-center rounded-xl p-6 gap-6 lg:gap-10">
        {/* Form Section */}
        <section className="w-full lg:w-1/2 px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-500 to-purple-500 text-transparent bg-clip-text">
            Welcome Back! Please Login
          </h2>
          <form
            onSubmit={handleLogin}
            className="bg-white p-6 rounded-xl w-full max-w-md mx-auto"
          >
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your Email"
                className="w-full p-4 rounded-xl border-2 border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your Password"
                className="w-full p-4 rounded-xl border-2 border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-yellow-500 text-white rounded-xl p-3 w-full text-lg hover:bg-yellow-600 disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>
          <div aria-live="polite" className="mt-4">
            {notification && <p className="bg-green-100 text-green-700 p-3 rounded-lg text-center">{notification}</p>}
            {error && <p className="bg-red-100 text-red-700 p-3 rounded-lg text-center">{error}</p>}
          </div>
          <p className="text-center mt-4 text-white">
            Don't have an account?{' '}
            <span
              onClick={!isLoading ? toggleForm : undefined}
              className={`text-yellow-400 cursor-pointer ${
                isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:text-yellow-300'
              }`}
            >
              Sign Up
            </span>
          </p>
        </section>
        {/* Image Section */}
        <div className="hidden lg:flex gap-4 w-1/3">
          {[form2, form1, form3].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Form visual ${i + 1}`}
              className="w-24 animate-bounce will-change-transform"
              style={{ animationDelay: `${i * 150}ms` }}
              loading="lazy"
            />
          ))}
        </div>
      </div>
      {/* Modal for Error */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setShowModal(false)}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">Login Failed</h3>
            <p className="text-red-500 text-center mb-4">{error}</p>
            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-yellow-500 text-white rounded-lg py-2 px-4 hover:bg-yellow-600"
              aria-label="Close error modal"
            >
              Try Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
