import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import form1 from '../Components/Gallery/form-block.png';
import form2 from '../Components/Gallery/3d-rendering-dices.png';
import form3 from '../Components/Gallery/file (10).png';

function Signup({ toggleForm }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [notification, setNotification] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
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
      const response = await axios.post(
        'https://continuing-veradis-uncommon-44b1416d.koyeb.app/auth/register',
        { email, password }
      );

      const { token } = response.data;
      localStorage.setItem('authToken', token);

      setNotification('Signup successful! Redirecting...');
      setTimeout(() => navigate('/AddStudent'), 1000);
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred during signup.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center p-4 sm:p-10">
      <div className="bg-blue-900 w-full md:w-3/4 flex flex-col lg:flex-row justify-center items-center rounded-xl px-4 sm:px-8 py-10 gap-6 lg:gap-10">
        {/* Form Section */}
        <section className="w-full lg:w-1/2 px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-500 to-purple-500 text-transparent bg-clip-text">
            Create Your Account
          </h2>
          <form
            onSubmit={handleSignup}
            className="bg-white p-6 rounded-xl shadow-md w-full max-w-md mx-auto"
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
                className="bg-transparent w-full p-3 rounded-xl border-2 border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
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
                className="bg-transparent w-full p-3 rounded-xl border-2 border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-yellow-500 text-white rounded-xl p-3 w-full text-lg hover:bg-yellow-600 transition-colors duration-200 disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? 'Signing up...' : 'Sign Up'}
            </button>
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
            Already have an account?{' '}
            <span
              onClick={!isLoading ? toggleForm : undefined}
              className={`text-yellow-400 cursor-pointer hover:text-yellow-300 transition-colors duration-200 ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              Login
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
            loading="lazy"
          />
          <img
            src={form1}
            alt="Form"
            className="w-24 animate-bounce"
            style={{ animationDelay: '150ms' }}
            loading="lazy"
          />
          <img
            src={form3}
            alt="File"
            className="w-24 animate-bounce"
            style={{ animationDelay: '300ms' }}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default Signup;
