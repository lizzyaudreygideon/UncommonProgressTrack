// Banner.js
import React from 'react';

const Banner = () => {
  return (
    <div 
      className="relative w-full h-[600px] flex items-center justify-center bg-cover bg-center" 
      style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900/?code,adventure')" }} // Change to a suitable background image URL
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-transparent opacity-80"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in">
          Embark on a Coding Adventure
        </h1>
        <p className="text-lg md:text-2xl font-light mb-8 animate-slide-up">
          Discover programming by navigating through epic battles, puzzles, and quests.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 animate-slide-up">
          <a 
            href="/get-started" 
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            Get Started
          </a>
          <a 
            href="/learn-more" 
            className="bg-transparent border border-white hover:bg-white hover:text-blue-900 text-white py-3 px-8 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
