import React from 'react';


	

const LoginForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-no-repeat relative"
      style={{ backgroundImage: 'url("https://img.freepik.com/free-psd/gamer-background-…feb9074ad12b660ca0390a56d815bf9c42105d70ba8&w=740")' }}>
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="relative z-10 shadow-lg bg-blue-950 rounded-lg p-8 w-96 h-96 text-white">
        <h2 className="text-4xl text-center mb-6">Login</h2>

        <form className="space-y-6">
          {/* Email Input */}
          <div className="relative">
            <input 
              type="email" 
              id="email-input" 
              required 
              placeholder="Username" 
              className="w-full py-2 px-4 rounded-full bg-transparent border-2 border-gray-300 text-white placeholder-white focus:outline-none focus:border-blue-500" />
            <img 
              src="https://cdn-icons-png.flaticon.com/512/6325/6325109.png" 
              alt="user-icon" 
              className="absolute right-4 top-1/2 transform -translate-y-1/2" 
              width="25px" />
          </div>

          {/* Password Input */}
          <div className="relative">
            <input 
              type="password" 
              id="password-input" 
              required 
              placeholder="Password" 
              className="w-full py-2 px-4 rounded-full bg-transparent border-2 border-gray-300 text-white placeholder-white focus:outline-none focus:border-blue-500" />
            <img 
              src="https://cdn-icons-png.flaticon.com/512/2489/2489659.png" 
              alt="lock-icon" 
              className="absolute right-4 top-1/2 transform -translate-y-1/2" 
              width="22px" />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="remember" className="accent-blue-500" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <div>
              <a href="/" className="text-white hover:text-blue-500">Forgot Password?</a>
            </div>
          </div>

          {/* Login Button */}
          <div className="flex justify-center">
            <button 
              type="submit" 
              className="w-full py-2 px-4 rounded-full bg-white text-black font-bold hover:bg-gray-300 transition-all">
              Login
            </button>
          </div>

          {/* Register Link */}
          <div className="text-center text-sm">
            <p>Don't have an account? <a href="/" className="text-white hover:text-blue-500">Register</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
