import React, { useState, useEffect, useRef } from 'react';

//import pictures
import Scratch from "../Components/Gallery/Scratch-Block-Coding-1024x587.jpeg";
import ChairKid from "../Components/Gallery/ChildrenHair.jpeg";
import HubEnter from "../Components/Gallery/HubEnter.jpeg";

//import other components
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
        className="relative w-full h-[87vh] flex items-center justify-center bg-cover bg-top center" 
        style={{ backgroundImage: `url(${Scratch})`}}
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-transparent opacity-80"></div>

        {/* Text Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in">
            Tracking Our Impact, Year by Year
          </h1>
          <p className="text-lg md:text-2xl font-light mb-8 animate-slide-up">
            Explore the milestones and achievements in empowering schools and educating youths.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 animate-slide-up">
            <a 
              href="/get-started" 
              className="bg-blue-900 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
              Explore Data
            </a>
            <a 
              href="/learn-more" 
              className="bg-transparent border border-white hover:bg-white hover:text-blue-900 text-white py-3 px-8 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
              Our Story
            </a>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div ref={sectionRef} className='p-16 w-full flex items-center justify-center'>
        <div className='flex-basis-1/3 w-full h-40 border-b-4 border-r-8 border-blue-900 rounded-br-2xl flex-col items-center justify-center flex'>
          <div className='text-center border border-blue-900 rounded-md shadow-md drop-shadow-sm shadow-blue-500 p-4'>
            <h2 className="text-xl md:text-l font-extrabold leading-tight animate-fade-in">Our Hubs</h2>
            <p className="text-l md:text-l font-bold animate-slide-up">{hubs}</p>
          </div>
        </div>

        <div className='flex-basis-1/3 w-full h-40 border-t-4 border-r-8 border-orange-500 rounded-tr-2xl flex-col items-center justify-center flex'>
          <div className='text-center border border-orange-500 rounded-md shadow-md drop-shadow-sm shadow-orange-300 p-4'>
            <h2 className="text-xl md:text-l font-bold leading-tight animate-fade-in">Schools worked with</h2>
            <p className="text-l md:text-l font-medium animate-slide-up">{schools}+</p>
          </div>
        </div>

        <div className='flex-basis-1/3 w-full h-40 border-b-4 border-r-8 border-yellow-500 rounded-br-2xl flex-col items-center justify-center flex'>
          <div className='text-center border border-yellow-500 rounded-md shadow-md drop-shadow-sm shadow-yellow-400 p-4'>
            <h2 className="text-xl md:text-l font-bold leading-tight animate-fade-in">Youths taught</h2>
            <p className="text-l md:text-l font-medium animate-slide-up">{youths}+</p>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="p-16 w-full flex-col items-center justify-center">
        <div className="flex  w-full  gap-8 p-4" style={{ margin: 'auto' }}>
    
         <div className="w-1/2 h-80">
           <StatisticsChart />
         </div>

         <div 
           className="w-1/2 h-80 bg-contain bg-center"  
           style={{ backgroundImage: `url(${ChairKid})` }}
         >
         </div>
        </div>
        <div className="flex w-full  gap-8 p-8" style={{ margin: 'auto' }}>
         <div 
           className="w-1/2 h-80 bg-contain bg-center"  
           style={{ backgroundImage: `url(${HubEnter})` }}
         >
         </div>

         <div className="w-1/2 h-80">
            <ImpactChart />
         </div>

        </div>
      </div>

      <footer className="bg-gray-900 text-white py-8">
       <div className="container mx-auto flex flex-wrap justify-between items-center">
   
         <div className="w-full md:w-1/3 mb-4 md:mb-0 text-center md:text-left">
          <p className="text-sm font-light">
            Dedicated to empowering youth through education and resources.
          </p>
        </div>

         <div className="w-full md:w-1/3 mb-4 md:mb-0 text-center">
            <a href="/about" className="mx-2 hover:underline">About Us</a>
            <a href="/contact" className="mx-2 hover:underline">Contact</a>
            <a href="/privacy" className="mx-2 hover:underline">Privacy Policy</a>
            <a href="/terms" className="mx-2 hover:underline">Terms of Service</a>
          </div>

    
        <div className="w-full md:w-1/3 text-center md:text-right">
            <a href="https://facebook.com" className="mx-2 hover:underline">Facebook</a>
            <a href="https://twitter.com" className="mx-2 hover:underline">WhatsApp</a>
            <a href="https://instagram.com" className="mx-2 hover:underline">Instagram</a>
            <a href="https://instagram.com" className="mx-2 hover:underline">LinkedIn</a>
          </div>
        </div>
     </footer>
    </>
  );
};

export default Banner;
