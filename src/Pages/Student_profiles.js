import React, { useState } from 'react';
import students from '../Components/Database/database';
import StudentFilter from './studentFilter';


const StudentProfiles = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedHub, setSelectedHub] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedGame, setSelectedGame] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Filter students based on search term and selected filters
  const filteredStudents = students.filter((student) => {
    const isNameMatch = student.name.toLowerCase().includes(searchTerm.toLowerCase());
    const isHubMatch = selectedHub === 'All' || student.help_hub === selectedHub;
    const isStatusMatch = selectedStatus === 'All' || student.status === selectedStatus;
    const isGameMatch = selectedGame === 'All' || student.current_game === selectedGame;

    return isNameMatch && isHubMatch && isStatusMatch && isGameMatch;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentStudents = filteredStudents.slice(startIndex, endIndex);

  // Page navigation handlers
  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="p-6">

      <div className='w-full flex justify-between items-start px-10'>

      <StudentFilter
        setSearchTerm={setSearchTerm}
        setSelectedHub={setSelectedHub}
        setSelectedStatus={setSelectedStatus}
        setSelectedGame={setSelectedGame}
      />
      
      {/* Student Profiles List */}
      <ul className="flex flex-wrap justify-center gap-12">
        {currentStudents.map((student) => (
          <li key={student.id} className="bg-white border w-72 flex flex-col rounded-md shadow-lg overflow-hidden">
            <img
              src={student.image_url}
              alt={student.name}
              className="w-full h-44 bg-blue-500 object-contain"
            />
            <div className="p-4">
              <h3 className="text-2xl pb-1 font-semibold">{student.name}</h3>
              <div className="text-black text-base">
                <p className="text-md">{student.school}</p>
                <p className="text-md text-green-500">{student.status}</p>
              </div>
              <div className="my-2">
                <button className="bg-blue-500 rounded-2xl text-base w-full py-2 text-white hover:bg-yellow-500 hover:text-white">
                  More
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

     

      </div>


      {/* Pagination Controls */}
      <div className="flex justify-center mt-6">
        <button
          className={`px-4 py-2 mx-2 rounded-md ${currentPage > 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'}`}
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className={`px-4 py-2 mx-2 rounded-md ${currentPage < totalPages ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'}`}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StudentProfiles;
