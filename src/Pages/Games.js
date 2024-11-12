import React from 'react';
import Ghost1 from '../Components/Gallery/ghost1 (1).png';
import { GrNext } from 'react-icons/gr';

function Games() {
  const cards = [
    {
      img: Ghost1,
      'main-text': 'Ghost Busters',
      paragraph: 'This is the first and most played game by the students. The simplest and beginner-friendly.',
      color: '#eab308',
      reviews: '4.5/5 based on 100 reviews',
      id: 1,
    },
    {
      img: Ghost1,
      'main-text': 'Fruit Ninja',
      paragraph: 'Slice through flying fruits while avoiding bombs in this fast-paced game of all time.',
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
    <div className="bg-gray-900 pt-12 px-6 pb-16">
      <h2 className="text-center text-5xl font-extrabold text-white pb-12">Popular Games</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {cards.map((game) => (
          <div
            key={game.id}
            style={{ backgroundColor: game.color }}
            className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-opacity-90"
          >
            <img
              src={game.img}
              alt={game['main-text']}
              className="m-auto mb-4 w-full h-48 object-contain rounded-md"
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
