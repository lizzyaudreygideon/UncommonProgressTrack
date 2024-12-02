import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import logo from './Gallery/catlogo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-900 px-8 py-4 flex justify-between items-center relative shadow-lg">
      <Link to="/" className="flex items-center space-x-2">
        <img 
          className="h-12 w-auto object-contain" 
          src={logo} 
          alt="Logo" 
        />
      </Link>
      
      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center space-x-8">
        <Link to="/" className="text-white text-lg hover:text-yellow-400 transition-colors">
          Home
        </Link>
        <Link to="/profile" className="text-white text-lg hover:text-yellow-400 transition-colors">
          Profile
        </Link>
        <Link to="/reports" className="text-white text-lg hover:text-yellow-400 transition-colors">
          Reports
        </Link>
        
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-white text-gray-800 text-lg px-4 py-2 pl-4 pr-10 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
        </div>
        
        <Link
          to="/auth"
          className="bg-yellow-400 text-black text-lg px-6 py-2 rounded-md hover:bg-yellow-300 transition-all duration-200 flex items-center space-x-2"
        >
          Add Student
        </Link>
      </div>
      
      {/* Mobile Menu Button */}
      <button 
        onClick={toggleMenu} 
        className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-md p-2"
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      >
        {isMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-blue-900 text-white flex flex-col items-center space-y-4 py-6 shadow-lg z-50 border-t border-blue-800">
          <Link 
            to="/" 
            className="text-lg hover:text-yellow-400 transition-colors w-3/4 text-center py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/profile" 
            className="text-lg hover:text-yellow-400 transition-colors w-3/4 text-center py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Profile
          </Link>
          <Link 
            to="/reports" 
            className="text-lg hover:text-yellow-400 transition-colors w-3/4 text-center py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Reports
          </Link>
          
          <div className="relative w-3/4">
            <input
              type="text"
              placeholder="Search..."
              className="bg-white text-gray-800 text-lg px-4 py-2 pl-4 pr-10 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full transition-all"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
          </div>

          <Link
            to="/auth"
            className="bg-yellow-400 text-black text-lg px-6 py-2 rounded-md hover:bg-yellow-300 transition-all duration-200 w-3/4 text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Add Student
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;