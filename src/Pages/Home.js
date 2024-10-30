import React from 'react';
import scratchBlockCodingImage from '../Components/Gallery/scratch_beginners.jpg';

const Home = () => {
  return (
    <div 
    style={{ 
      backgroundImage: `url(${scratchBlockCodingImage})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      height: '87vh', 
      width: '100%' 
    }} 
    className="bg-no-repeat"
  >

      
    </div>
  )
}

export default Home
