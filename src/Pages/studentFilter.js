import React from 'react'
import {SearchIcon } from 'lucide-react';
function studentFilter() {
  
  
  
    
  
  return (
    <div className='bg-blue-900 p-4 rounded-lg  '>
      <h1 className="text-2xl font-bold text-white mb-3">Student Profiles</h1>
        <div className="mb-6">
        <div className="flex items-center border rounded-md p-2">
          <SearchIcon className="mr-2 text-gray-500 " />
          <input
            type="text"
            placeholder="Search students..."
            className='focus: outline-none bg-blue-900 m-auto'
          />
        </div>
      </div>
      <div className="grid grid-cols-1  mb-6">
        <div className='bg-blue-950 p-2 my-3 rounded-md'>
          <label  className="block font-medium mb-2  text-white">
            Uncommon Hubs
          </label>
          <select
            id="grade"
            className='focus:outline-blue-500 rounded-md p-1 mb-1 w-52'
          >
            <option value="All">All</option>
            <option value="A">Kambuzuma</option>
            <option value="B">Warren Park</option>
            <option value="C">Dzivarasekwa</option>
            <option value="C">Kuwadzana</option>
            <option value="C">Mufakose</option>
          </select>
        </div>
        <div className='bg-blue-950 p-2 my-3 rounded-md'>
          <label htmlFor="status" className="block font-medium mb-2  text-white">
            School
          </label>
          <select
            id="status"
            className='focus:outline-blue-500 rounded-md p-1 mb-1 w-52'
          >
          <option value="All">All</option>
            <option value="Active">Rukudzo</option>
            <option value="Inactive">Kurai</option>
            <option value="Inactive">Wadzanai</option>
            <option value="Inactive">Lyton</option>
            <option value="Inactive">Ndangariro</option>
            <option value="Inactive">Seke8</option>
          </select>
        </div>
        <div className='bg-blue-950 p-2 my-3 rounded-md' >
          <label htmlFor="subject" className="block font-medium mb-2 text-white">
           Game
          </label>
          <select
            id="subject"
            className='focus:outline-blue-500 rounded-md p-1 mb-1 w-52'
          >
            <option value="All" className='focus:outline-none rounded-sm'>Select</option>
            <option value="Math">Ghost Busters</option>
            <option value="English">Apple Catcher</option>
            <option value="Science">Flying Cat</option>
            <option value="Science">More</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default studentFilter