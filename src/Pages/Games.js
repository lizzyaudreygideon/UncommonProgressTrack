import React from 'react';
import ghost from '../Components/Gallery/ghostBusters.png';
import Ikaruga from '../Components/Gallery/ikaruga.png';
import Maze from '../Components/Gallery/themaze.png';
import TomJerry from '../Components/Gallery/TomandJerry.png';
import { GrNext } from 'react-icons/gr';

function Games() {
  const cards = [
    {
      img: ghost,
      'main-text': 'Ghost Busters',
      paragraph: 'This is the first and most played game by the students. The simplest and beginner-friendly.',
      color: '#eab308',
      reviews: '4.5/5 based on 100 reviews',
      id: 1,
    },
    {
      img: Ikaruga,
      'main-text': 'Ikaruga',
      paragraph: 'Cat only eats fruits of same color as fur, fast-paced game of all time.',
      color: '#0f766e',
      reviews: '4.7/5 based on 150 reviews',
      id: 2,
    },
    {
      img: Maze,
      'main-text': 'The Maze',
      paragraph: 'Solve challenging puzzles to progress through to the next level of a mysterious adventure.',
      color: '#1d4ed8',
      reviews: '4.8/5 based on 200 reviews',
      id: 3,
    },
    {
      img: TomJerry,
      'main-text': 'Tom and Jerry',
      paragraph: 'Chase little Jerry till you catch him and gain points. The students energy is unmatched!',
      color: '#1d2e3d',
      reviews: '4.8/5 based on 200 reviews',
      id: 4,
    },
  ];

  return (
    <div className="bg-white p-6 sm:p-12">
      <h2 className="text-center text-5xl font-extrabold text-black pb-12">The Games We Play</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {cards.map((game) => (
          <div
            key={game.id}
            style={{ backgroundColor: game.color }}
            className="relative p-4 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-opacity-90"
          >
            <img
              src={game.img}
              alt={game['main-text']}
              className="m-auto mb-4 w-full h-48 object-cover rounded-md"
              loading="lazy"
            />
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-black mb-2">{game['main-text']}</h3>
              <p className="text-gray-800 mb-3">{game.paragraph}</p>
              <div className="flex justify-between items-center">
                <p className="text-gray-600">{game.reviews}</p>
                <button
                  className="bg-gray-300 p-2 rounded-full hover:bg-gray-400 transition-colors"
                  title="More Info"
                >
                  <GrNext className="text-black" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Games;