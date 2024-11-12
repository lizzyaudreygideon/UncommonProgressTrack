import React, { useState } from "react";

// importin g the gallery pictures
import imgone from "../Components/Gallery/ChildrenHair.jpeg";
import img2 from "../Components/Gallery/HubEnter.jpeg";
import img3 from "../Components/Gallery/Inside.jpeg";
import img4 from "../Components/Gallery/Sarah.jpeg";
import img5 from "../Components/Gallery/Jean.png";
import img6 from "../Components/Gallery/KidsLaptop.jpeg";
import img7 from "../Components/Gallery/kidsScratch.jfif";
import img8 from "../Components/Gallery/1718885371052.jfif";
import img9 from "../Components/Gallery/learning.jfif";
import img10 from "../Components/Gallery/peter and the kids.jfif";


const Gallery = () => {
  const [isHovered, setIsHovered] = useState(false);

  const images = [
    { id: 1, img: imgone },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
    { id: 5, img: img5 },
    { id: 6, img: img6 },
    { id: 7, img: img7 },
    { id: 8, img: img8 },
    { id: 9, img: img9 },
    { id: 10, img: img10 },
  ];

  return (
    <div className="gallery-container p-12 mb-40 mt-20 flex flex-col items-center gap-5">
      {/* Top row with 5 images */}
      <div
        className={`flex  w-full mb-6 gap-3 ${isHovered ? 'paused' : 'animate-move-right'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {images.slice(0, 5).map((image, index) => (
          <div
            key={image.id}
            className="relative w-1/4 gap-4"
            style={{
              transform: `translateY(${Math.abs(100 * Math.sin((index / 4) * Math.PI))}px)`,
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <img
              src={image.img}
              alt="/"
              className="w-full h-full rounded-2xl object-cover"
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>

      {/* Bottom row with 5 images */}
      <div
        className={`flex justify-evenly w-full gap-3 ${isHovered ? 'paused' : 'animate-move-left'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {images.slice(5, 10).map((image, index) => (
          <div
            key={image.id}
            className="relative w-1/4"
            style={{
              transform: `translateY(${Math.abs(100 * Math.sin((index / 4) * Math.PI))}px)`,
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <img
              src={image.img}
              alt="/"
              className="w-full h-full rounded-2xl object-cover"
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;