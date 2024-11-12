import React from 'react';
import { SearchIcon } from 'lucide-react';

function StudentFilter({ setSearchTerm, setSelectedHub, setSelectedStatus, setSelectedGame }) {
  return (
    <div className="bg-blue-900 p-4 rounded-lg">
      <h1 className="text-2xl font-bold text-white mb-3">Student Profiles</h1>

      <div className="mb-6">
        <div className="flex items-center border rounded-md p-2">
          <SearchIcon className="mr-2 text-gray-500" />
          <input
            type="text"
            placeholder="Search students..."
            className="focus:outline-none bg-blue-900 m-auto"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 mb-6">
        <div className="bg-blue-950 p-2 my-3 rounded-md">
          <label className="block font-medium mb-2 text-white">Uncommon Hubs</label>
          <select
            id="hub"
            className="focus:outline-blue-500 rounded-md p-1 mb-1 w-52"
            onChange={(e) => setSelectedHub(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Kambuzuma Hub">Kambuzuma</option>
            <option value="Warren Park Hub">Warren Park</option>
            <option value="Dzivarasekwa Hub">Dzivarasekwa</option>
            <option value="Kuwadzana Hub">Kuwadzana</option>
            <option value="Mufakose Hub">Mufakose</option>
          </select>
        </div>

        <div className="bg-blue-950 p-2 my-3 rounded-md">
          <label htmlFor="status" className="block font-medium mb-2 text-white">Status</label>
          <select
            id="status"
            className="focus:outline-blue-500 rounded-md p-1 mb-1 w-52"
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <div className="bg-blue-950 p-2 my-3 rounded-md">
          <label htmlFor="game" className="block font-medium mb-2 text-white">Game</label>
          <select
            id="game"
            className="focus:outline-blue-500 rounded-md p-1 mb-1 w-52"
            onChange={(e) => setSelectedGame(e.target.value)}
          >
            <option value="All">Select</option>
            <option value="Ghost Busters">Ghost Busters</option>
            <option value="Apple Catcher">Apple Catcher</option>
            <option value="Flying Cat">Flying Cat</option>
            <option value="Tom and Jerry">Tom and Jerry</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default StudentFilter;
