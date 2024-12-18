import React, { useState, useEffect, useRef } from 'react';
import Gallery from './Gallery';
import Games from './Games';
import Scratch from "../Components/Gallery/Scratch-Block-Coding-1024x587.jpeg";
import { Link } from 'react-router-dom';
import useCountUp from '../Hooks/AnimatedCount';
import StatisticsChart from '../Components/HomeStats/StatisticsChart';
import ImpactChart from '../Components/HomeStats/ImpactChart';

const Banner = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  // Observer to detect when the component enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Use the hook for each statistic with the in-view trigger
  const hubs = useCountUp(7, 2000, isInView);
  const schools = useCountUp(30, 2000, isInView);
  const youths = useCountUp(1000, 2000, isInView);

  return (
    <>
      <div 
        className="relative w-full h-[87vh] flex items-center justify-center bg-cover bg-top" 
        style={{ backgroundImage: `url(${Scratch})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-transparent opacity-80"></div>
        <div className="relative z-10 text-center text-white px-6 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in">
            Tracking Our Impact, Year by Year
          </h1>
          <p className="text-lg md:text-2xl font-light mb-8 animate-slide-up">
            Explore the milestones and achievements in empowering schools and educating youths.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 animate-slide-up">
            <Link 
              to="/dashboard" 
             className="bg-blue-900 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
              Discuss Data
            </Link>
            <Link 
              to="/AboutUs" 
               className="bg-transparent border border-white hover:bg-white hover:text-blue-900 text-white py-3 px-8 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div ref={sectionRef} className="p-6 sm:p-12 w-full flex flex-wrap items-center justify-center gap-6">
        {/* Our Hubs */}
        <div className="flex flex-col items-center justify-center basis-full sm:basis-1/3 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 w-full h-40 sm:h-48 border-b-4 sm:border-r-8 border-blue-900 rounded-br-2xl">
          <div className="text-center border border-blue-900 rounded-md shadow-md drop-shadow-sm shadow-blue-500 p-4">
            <h2 className="text-lg sm:text-xl font-extrabold leading-tight animate-fade-in">Our Hubs</h2>
            <p className="text-sm sm:text-lg font-bold animate-slide-up">{hubs}</p>
          </div>
        </div>

        {/* Schools Worked With */}
        <div className="flex flex-col items-center justify-center basis-full sm:basis- 1/3 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 w-full h-40 sm:h-48 border-t-4 sm:border-r-8 border-orange-500 rounded-tr-2xl">
          <div className="text-center border border-orange-500 rounded-md shadow-md drop-shadow-sm shadow-orange-300 p-4">
            <h2 className="text-lg sm:text-xl font-bold leading-tight animate-fade-in">Schools Worked With</h2>
            <p className="text-sm sm:text-lg font-medium animate-slide-up">{schools}+</p>
          </div>
        </div>

        {/* Youths Taught */}
        <div className="flex flex-col items-center justify-center basis-full sm:basis-1/3 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 w-full h-40 sm:h-48 border-b-4 sm:border-r-8 border-yellow-500 rounded-br-2xl">
          <div className="text-center border border-yellow-500 rounded-md shadow-md drop-shadow-sm shadow-yellow-400 p-4">
            <h2 className="text-lg sm:text-xl font-bold leading-tight animate-fade-in">Youths Taught</h2>
            <p className="text-sm sm:text-lg font-medium animate-slide-up">{youths}+</p>
          </div>
        </div>
      </div>

      <h2 className='text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in text-center'>Our Work In Pictures</h2>
      <Gallery />

      {/* Charts Section */}
      <h2 className='text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in text-center'>Data Overview</h2>
      <div className="p-8 w-full flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row w-full gap-8 p-4">
        <div className="w-full md:w-1/2 h-44 sm:h-96 p-4 rounded-md border-4 border-blue-900">
  <div className="w-full h-full">
    <StatisticsChart 
      options={{
        responsive: true,
        maintainAspectRatio: true,
        layout: {
          padding: 0
        },
        scales: {
          y: { grid: { color: '#cccccc' }, ticks: { color: '#ffffff' } },
          x: { grid: { color: '#cccccc' }, ticks: { color: '#ffffff' } },
        },
        plugins: {
          legend: { labels: { color: '#ffffff' } },
        },
      }}
    />
  </div>
        </div>

          <div className="w-full md:w-1/2 h-96 sm:h-45 p-4 bg-blue-900 rounded-md">
            <ImpactChart 
              options={{
                scales: {
                  y: { grid: { color: 'white' }, ticks: { color: 'white' } },
                  x: { grid: { color: 'white' }, ticks: { color: 'white' } },
                },
                plugins: {
                  legend: { labels: { color: 'white' } },
                },
              }}
            />
          </div>
        </div>  
      </div>

      <Games />
    </>
  );
};

 
export default Banner;