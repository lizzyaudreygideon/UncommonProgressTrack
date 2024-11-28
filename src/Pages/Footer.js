import React from 'react';
import { Outlet } from 'react-router-dom';
import { PiInstagramLogoLight, PiFacebookLogoLight, PiLinkedinLogoLight } from "react-icons/pi";
import { Link } from 'react-router-dom';
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Explore Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Explore</h3>
            <ul className="space-y-2">
              <li className="hover:text-orange-400 transition-colors">
                <Link to="https://playground.uncommon.org/">Coding Challenges</Link>
              </li>          
              <li className="hover:text-orange-400 transition-colors">
                <Link to="https://playground.uncommon.org/home">Scratch Tutorials</Link>
              </li>
              <li className="hover:text-orange-400 transition-colors">
                <Link to="https://playground.uncommon.org/">Learning Resources</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li className="hover:text-orange-400 transition-colors">
                <Link to="/AboutUs">About Us</Link>
              </li>
              <li className="hover:text-orange-400 transition-colors">
                <Link to="/profile">Profile</Link>
              </li>
              <li className="hover:text-orange-400 transition-colors">
                <Link to="/reports">Reports</Link>
              </li>
            </ul>
          </div>

          {/* Features Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Features</h3>
            <ul className="space-y-2">
              <li className="hover:text-orange-400 transition-colors">
                <Link to="/">Track Progress</Link>
              </li>
              <li className="hover:text-orange-400 transition-colors">
                <Link to="/">Create Reports</Link>
              </li>
              <li className="hover:text-orange-400 transition-colors">
                <Link to="/">Student Metrics</Link>
              </li>
              <li className="hover:text-orange-400 transition-colors">
                <Link to="/">Interactive Charts</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Subscribe</h3>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-white text-blue-900 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent pr-7"
              />
              <button className="absolute right-0 top-0 h-full px-3 bg-orange-500 text-white rounded-r-md hover:bg-orange-600 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-blue-900 py-6 border-t border-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Media Icons */}
            <div className="flex space-x-6">
              <Link to="/" className="text-white hover:text-orange-400 transition-colors">
                <PiFacebookLogoLight size={24} />
              </Link>
              <Link to="/" className="text-white hover:text-orange-400 transition-colors">
                <PiInstagramLogoLight size={24} />
              </Link>
              <Link to="/" className="text-white hover:text-orange-400 transition-colors">
                <PiLinkedinLogoLight size={24} />
              </Link>
            </div>

            {/* Copyright */}
            <p className="text-sm">
              © {currentYear} Uncommon Scratch Track. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      <Outlet />
    </footer>
  );
}
