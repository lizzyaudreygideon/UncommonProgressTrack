import React from 'react';

const StudentFilter = ({
  setSearchTerm,
  setSelectedHub,
  setSelectedStatus,
  setSelectedGame,
}) => {
  const hubs = ['All', 'Hub 1', 'Hub 2', 'Hub 3'];
  const statuses = ['All', 'Active', 'Inactive', 'Graduated'];
  const games = ['All', 'Game A', 'Game B', 'Game C'];

  return (
    <div className="p-4 bg-blue-900 border rounded-md shadow-md ">
      <h2 className="text-2xl text-white font-semibold mb-4 text-center md:text-left">
        Filter Students
      </h2>
      <div className="space-y-4">
        {/* Search Field */}
        <div className="flex flex-col">
          <label htmlFor="search" className="text-sm font-medium mb-1 text-white">
            Search by Name
          </label>
          <input
            type="text"
            id="search"
            placeholder="Enter student name"
            className="border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300 text-black"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Hub Filter */}
        <div className="flex flex-col">
          <label htmlFor="hub" className="text-sm font-medium mb-1 text-white">
            Help Hub
          </label>
          <select
            id="hub"
            className="border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300 text-black"
            onChange={(e) => setSelectedHub(e.target.value)}
          >
            {hubs.map((hub) => (
              <option key={hub} value={hub}>
                {hub}
              </option>
            ))}
          </select>
        </div>

        {/* Status Filter */}
        <div className="flex flex-col">
          <label htmlFor="status" className="text-sm font-medium mb-1 text-white">
            Status
          </label>
          <select
            id="status"
            className="border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>

        {/* Game Filter */}
        <div className="flex flex-col">
          <label htmlFor="game" className="text-sm font-medium mb-1 text-white">
            Current Game
          </label>
          <select
            id="game"
            className="border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
            onChange={(e) => setSelectedGame(e.target.value)}
          >
            {games.map((game) => (
              <option key={game} value={game}>
                {game}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default StudentFilter;
