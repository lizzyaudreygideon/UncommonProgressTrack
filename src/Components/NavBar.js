import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Gallery/catlogo.png'
import * as GoIcons from 'react-icons/go'

const Navbar = () => {
  return (
    <nav className="bg-blue-900 px-8 py-2 flex justify-between items-center">
    <img className="h-15 w-20 object-contain" src={logo} alt="scratchLogo" />
      <div className="flex items-center space-x-16">
        <Link to="/" className="text-white text-lg hover:text-yellow-400">Home</Link>

        <Link to="/profile" className="text-white text-lg hover:text-yellow-400">Profile</Link>

        <Link to="/reports" className="text-white text-lg hover:text-yellow-400">Reports</Link>
        
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-white text-lg px-4 py-2 rounded-md focus:outline-none"
           />
          <GoIcons.GoSearch className="absolute right-0 top-0 mt-4 mr-4 " />
        </div>
        
        <Link
          to="/join"
          className="bg-yellow-400 text-black text-lg px-4 py-2 rounded-md hover:bg-white transition duration-200"
        >
          Join Scratch
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
