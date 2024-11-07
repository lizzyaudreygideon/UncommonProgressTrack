import React, { useState } from 'react'
import students from '../Components/Database/database'

const StudentProfiles = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 3

  // Filter students based on search term
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Pagination logic
  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentStudents = filteredStudents.slice(startIndex, endIndex)

  // Page navigation handlers
  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1)
  }

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  return (
    <div className=''>
      

      {/* Student Profiles List */}
      <ul className="flex w-full flex-wrap gap-3 justify-center items-center">
        {currentStudents.map((student) => (
          <li key={student.id} className="bg-white border w-1/3 rounded-md flex items-start flex-col justify-center">
            <img
              src={student.image_url}
              alt={student.name}
              className="w-full h-64 bg-blue-500 object-cover"
            />
            <div className="py-3 px-2">
              <h3 className="text-lg">{student.name}</h3>
              <div className="text-black text-sm">
                <p className='text-md'>{student.school}</p>
                <p className='text-md text-green-500'>{student.status}</p>
              </div>
              <div className=" my-2 ">
                <button className='border-2 border-blue-500 rounded-md text-sm w-full'>More</button>
              </div>
            </div>
          </li>
        ))}
      </ul>

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
  )
}

export default StudentProfiles