import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './Gallery/catlogo.png';
import * as GoIcons from 'react-icons/go';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-900 px-8 py-2 flex justify-between items-center">
      <img className="h-15 w-20 object-contain" src={logo} alt="scratchLogo" />
      
      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center space-x-16">
        <Link to="/" className="text-white text-lg hover:text-yellow-400">Home</Link>
        <Link to="/profile" className="text-white text-lg hover:text-yellow-400">Profile</Link>
        <Link to="/reports" className="text-white text-lg hover:text-yellow-400">Reports</Link>
        
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-white text-lg px-4 py-2 rounded-md focus:outline-none"
          />
          <GoIcons.GoSearch className="absolute right-0 top-0 mt-4 mr-4" />
        </div>
        
        <Link
          to="/LoginForm"
          className="bg-yellow-400 text-black text-lg px-4 py-2 rounded-md hover:bg-white transition duration-200"
        >
          Add Student
        </Link>
      </div>
      
      {/* Mobile Hamburger Menu */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white text-2xl">
          <GoIcons.GoKebabHorizontal />
        </button>
      </div>

      {/* Mobile Menu: Show links when isMenuOpen is true */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-blue-900 text-white flex flex-col items-center space-y-6 py-6">
          <Link to="/" className="text-lg hover:text-yellow-400">Home</Link>
          <Link to="/profile" className="text-lg hover:text-yellow-400">Profile</Link>
          <Link to="/reports" className="text-lg hover:text-yellow-400">Reports</Link>
          
          <div className="relative w-3/4">
            <input
              type="text"
              placeholder="Search..."
              className="bg-white text-lg px-4 py-2 rounded-md focus:outline-none w-full"
            />
            <GoIcons.GoSearch className="absolute right-0 top-0 mt-4 mr-4" />
          </div>

          <Link
            to="/LoginForm"
            className="bg-yellow-400 text-black text-lg px-4 py-2 rounded-md hover:bg-white transition duration-200"
          >
            Add Student
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
