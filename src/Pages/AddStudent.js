import React, { useState } from 'react';
import axios from 'axios';
import back from '../Components/Gallery/happy-little-girl-celebrating-her-birthday.jpg';

function AddStudent() {
  const [formData, setFormData] = useState({
    name: '',
    school: '',
    hub: '',
    age: '',
    gender: '',
    profilePicture: null,
  });

  const [fileName, setFileName] = useState('No file chosen');

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      profilePicture: file,
    }));
    setFileName(file ? file.name : 'No file chosen');
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append('name', formData.name);
    form.append('school', formData.school);
    form.append('hub', formData.hub);
    form.append('age', formData.age);
    form.append('gender', formData.gender);
    if (formData.profilePicture) {
      form.append('profilePicture', formData.profilePicture);
    }

    try {
      const response = await axios.post('http://localhost:5000/student', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Student added successfully!');
      console.log(response.data); // You can handle the response here as needed
    } catch (error) {
      alert('An error occurred during submit');
      console.error('Error:', error);
    }
  };

  return (
    <div className='relative h-screen flex items-center justify-center bg-gray-100 m-10'>
      {/* Background Image */}
      <img
        src={back}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover [clip-path:polygon(0%_0%,_100%_0%,_100%_100%,_85%_100%,_15%_100%)]"
      />

      {/* Form Container */}
      <div className='relative p-4 bg-blue-500 rounded-xl shadow-lg w-full max-w-md'>
        <h2 className='text-3xl font-bold text-white pb-2 text-center'>Add Student</h2>
        <span className='text-sm text-white text-center block mb-4'>Join our free creative network</span>

        {/* Compact Input Form */}
        <form className="p-4 bg-white rounded-lg shadow-md space-y-3" onSubmit={handleSubmit}>
          {/* Name and School (Side by Side) */}
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label htmlFor="name" className="text-blue-600 font-semibold text-sm">Full Name</label>
              <input
                type="text"
                placeholder='Name'
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-1 border border-blue-400 rounded focus:outline-none focus:ring focus:ring-yellow-300"
              />
            </div>
            <div>
              <label htmlFor="school" className="text-blue-600 font-semibold text-sm">School</label>
              <input
                type="text"
                placeholder='School'
                name="school"
                value={formData.school}
                onChange={handleChange}
                className="w-full p-1 border border-blue-400 rounded focus:outline-none focus:ring focus:ring-yellow-300"
              />
            </div>
          </div>

          <div>
            <label htmlFor="hub" className="text-blue-600 font-semibold text-sm">Hub</label>
            <input
              type="text"
              placeholder='Hub'
              name="hub"
              value={formData.hub}
              onChange={handleChange}
              className="w-full p-1 border border-blue-400 rounded focus:outline-none focus:ring focus:ring-yellow-300"
            />
          </div>

          {/* Age and Gender Selection (Side by Side) */}
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label htmlFor="age" className="text-blue-600 font-semibold text-sm">Age</label> 
              <input
                type="text"
                placeholder='Age'
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full p-1 border border-blue-400 rounded focus:outline-none focus:ring focus:ring-yellow-300"
              />
            </div>

            <div>
              <label htmlFor="gender" className="text-blue-600 font-semibold text-sm">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full p-1 border border-blue-400 rounded focus:outline-none focus:ring focus:ring-yellow-300"
              >
                <option value="">Select 1</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
            </div>
          </div>

          {/* Profile Picture Upload */}
          <div className="flex flex-col items-center">
            <label htmlFor="ProfilePicture" className="text-blue-600 font-semibold text-sm mb-2">
              Upload Profile Picture
            </label>
            <div className="w-full">
              <label
                htmlFor="ProfilePicture"
                className="cursor-pointer flex items-center justify-center w-full p-2 border border-blue-400 rounded bg-blue-50 hover:bg-blue-100 transition duration-200"
              >
                <span className="text-blue-600">Upload Image</span>
              </label>
              <input
                type="file"
                id="ProfilePicture"
                className="hidden"
                onChange={handleFileChange}
              />
              <p id="fileName" className="mt-2 text-sm text-gray-600">{fileName}</p>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-yellow-500 text-white py-1.5 rounded hover:bg-yellow-600 transition duration-200">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddStudent;
