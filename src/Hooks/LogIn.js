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
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/auth/login', { email, password });
      localStorage.setItem('authToken', response.data.token);
      navigate('/addStudent');
    } catch (err) {
      setError('Invalid email or password');
      setShowModal(true);
    }
  };

  return (
    <div className="w-full flex justify-center items-center py-10">
      <div className="bg-blue-900 max-w-4xl flex justify-center items-center rounded-xl px-5 min-h-64 gap-10 p-10">
        <section className="w-1/2 -ml-8">
          <h2 className="text-4xl font-bold w-full mb-6 bg-gradient-to-r from-white via-yellow-500 to-purple-500 text-transparent bg-clip-text">
            Welcome Back! Please login.
          </h2>

          <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl w-full max-w-md">
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your Email"
                className="bg-transparent w-full p-4 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors duration-200"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your Password"
                className="bg-transparent w-full p-4 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors duration-200"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex justify-center">
              <button type="submit" className="bg-yellow-500 text-white rounded-xl p-3 w-full text-lg hover:bg-yellow-600 transition-colors duration-200">
                Login
              </button>
            </div>
          </form>
          
          <p className="text-center mt-4 text-white">
            Don't have an account?{' '}
            <span onClick={toggleForm} className="text-black cursor-pointer hover:text-blue-400 transition-colors duration-200">
              Sign Up
            </span>
          </p>
        </section>

        <div className='flex gap-4 w-1/3'>
          <img src={form2} alt='Dice' className='w-24 animate-bounce' style={{ animationDelay: '0ms' }} />
          <img src={form1} alt='Form' className='w-24 animate-bounce' style={{ animationDelay: '150ms' }} />
          <img src={form3} alt='File' className='w-24 animate-bounce' style={{ animationDelay: '300ms' }} />
        </div>

      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={() => setShowModal(false)}>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full mx-4" onClick={e => e.stopPropagation()}>
            <div className="flex flex-col items-center">
              <svg className="w-16 h-16 text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Login Failed</h3>
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