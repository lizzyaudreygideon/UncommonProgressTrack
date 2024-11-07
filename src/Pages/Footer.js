import React from 'react';
import { Outlet } from 'react-router-dom';
import { PiInstagramLogoLight, PiFacebookLogoLight, PiTwitterLogoLight, PiLinkedinLogoLight } from "react-icons/pi";
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Products Column */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Top Products</h3>
            <ul className="space-y-2">
              <li className="hover:text-white transition-colors">
                <Link href="/">Managed Website</Link>
              </li>
              <li className="hover:text-white transition-colors">
                <Link href="/">Manage Reputation</Link>
              </li>
              <li className="hover:text-white transition-colors">
                <Link href="/">Power Tools</Link>
              </li>
              <li className="hover:text-white transition-colors">
                <Link href="/">Marketing Service</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li className="hover:text-white transition-colors">
                <Link href="/">Jobs</Link>
              </li>
              <li className="hover:text-white transition-colors">
                <Link href="/">Brand Assets</Link>
              </li>
              <li className="hover:text-white transition-colors">
                <Link href="/">Investor Relations</Link>
              </li>
              <li className="hover:text-white transition-colors">
                <Link href="/">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Features Column */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Features</h3>
            <ul className="space-y-2">
              <li className="hover:text-white transition-colors">
                <Link href="/">Brand Assets</Link>
              </li>
              <li className="hover:text-white transition-colors">
                <Link href="/">Investor Relations</Link>
              </li>
              <li className="hover:text-white transition-colors">
                <Link href="/">Jobs</Link>
              </li>
              <li className="hover:text-white transition-colors">
                <Link href="/">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Resources</h3>
            <ul className="space-y-2">
              <li className="hover:text-white transition-colors">
                <Link href="/">Guides</Link>
              </li>
              <li className="hover:text-white transition-colors">
                <Link href="/">Research</Link>
              </li>
              <li className="hover:text-white transition-colors">
                <Link href="/">Experts</Link>
              </li>
              <li className="hover:text-white transition-colors">
                <Link href="/">Agencies</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Newsletter</h3>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full px-2 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-7"
              />
              <button className="absolute right-0 top-0 h-full px-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">
              © {currentYear} YourBrand. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="/" className="hover:text-white transition-colors">
                <PiFacebookLogoLight size={24} />
              </a>
              <a href="/" className="hover:text-white transition-colors">
                <PiTwitterLogoLight size={24} />
              </a>
              <a href="/" className="hover:text-white transition-colors">
                <PiInstagramLogoLight size={24} />
              </a>
              <a href="/" className="hover:text-white transition-colors">
                <PiLinkedinLogoLight size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </footer>
  );
}