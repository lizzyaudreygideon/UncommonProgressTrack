import React from 'react';
import Ghost1 from '../Components/Gallery/ghost1 (1).png';
import { GrNext } from "react-icons/gr";
function Games() {
    const cards = [
        {
            img: Ghost1,
            'main-text': 'Ghost Busters',
            paragraph: 'This is the first and most played game by the students.The simplest and beginner freindly ',
            color: '#eab308',
            reviews: '4.5/5 based on 100 reviews',
            id: 1,
          },
        {
          img: Ghost1,
          'main-text': 'Fruit Ninja',
          paragraph: 'Slice through flying fruits while avoiding bombs in this fast-game of all time.',
          color: '#0f766e',
          reviews: '4.7/5 based on 150 reviews',
          id: 2,
        },
        {
          img: Ghost1,
          'main-text': 'Puzzle Quest',
          paragraph: 'Solve challenging puzzles to progress through a mysterious adventure.',
          color: '#1d4ed8',
          reviews: '4.8/5 based on 200 reviews',
          id: 3,
        },
      ];
      

  return (
    <div className="bg-blue-950 pt-12 px-9 pb-16 ">
      <h2 className="text-center text-5xl font-extrabold text-white pb-14 ">Popular Games</h2>
      <div className="flex flex-wrap justify-evenly gap-3">
        {cards.map((game) => (
          <div
            key={game.id}
            style={{ backgroundColor: game.color }}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 pt-3 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-opacity-80"
          >
            <img
              src={game.img}
              alt={game['main-text']}
              className="m-auto object-contain"
            />
            <div className="bg-fuchsia-200 w-full p-3 rounded-xl">
              <h3 className="text-black text-2xl pb-3 font-semibold">{game['main-text']}</h3>
              <p className="text-black">{game.paragraph}</p>
              <p className="text-gray-700 mt-2 flex justify-between items-center"><span>{game.reviews}</span><span className='bg-white rounded-full p-2'><GrNext /></span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Games;
