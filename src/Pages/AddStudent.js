import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CheckCircle } from 'lucide-react';
import back from '../Components/Gallery/happy-little-girl-celebrating-her-birthday.jpg';

function AddStudent() {
  const [formData, setFormData] = useState({
    username: '',
    school: '',
    hub: '',
    age: '',
    email: '',
    gender: '',
    image: null,
  });

  const [fileName, setFileName] = useState('No file chosen');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!allowedTypes.includes(file.type)) {
        setError('Invalid file type. Only JPEG, PNG, and GIF are allowed.');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setError('File size must be less than 5MB');
        return;
      }
    }
    setFormData((prevData) => ({
      ...prevData,
      image: file,
    }));
    setFileName(file ? file.name : 'No file chosen');
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const requiredFields = ['username', 'school', 'hub', 'age', 'email', 'gender'];
    const missingFields = requiredFields.filter(field => !formData[field]);

    if (!formData.image) {
      missingFields.push('image');
    }

    if (missingFields.length > 0) {
      setError(`Please provide all required fields: ${missingFields.join(', ')}`);
      setLoading(false);
      return;
    }

    const form = new FormData();
    form.append('username', formData.username);
    form.append('school', formData.school);
    form.append('hub', formData.hub);
    form.append('age', formData.age);
    form.append('email', formData.email);
    form.append('gender', formData.gender);
    if (formData.image) {
      form.append('image', formData.image);
    }

    try {
      await axios.post('http://localhost:5000/student', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setFormData({
        username: '',
        school: '',
        hub: '',
        age: '',
        email: '',
        gender: '',
        image: null,
      });
      setFileName('No file chosen');
      setShowPopup(true);
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'An error occurred during submission';
      setError(errorMessage);
      console.error('Error:', error.response || error);
    } finally {
      setLoading(false);
    }
  };

  // Rest of your component remains exactly the same
  const SuccessPopup = ({ isVisible, onClose }) => {
    useEffect(() => {
      if (isVisible) {
        const timer = setTimeout(() => {
          onClose();
        }, 3000);
        return () => clearTimeout(timer);
      }
    }, [isVisible, onClose]);

    if (!isVisible) return null;

    return (
      <div className="fixed top-0 right-0 m-6 transform transition-transform duration-500 ease-out translate-x-0">
        <div className="bg-white rounded-lg shadow-lg p-4 flex items-center space-x-3">
          <CheckCircle className="text-green-500 w-6 h-6" />
          <div>
            <h3 className="font-semibold text-gray-800">Success!</h3>
            <ul className="text-sm text-gray-600 mt-1">
              <li className="flex items-center space-x-1">
                <span>✓</span>
                <span>Student added successfully</span>
              </li>
              <li className="flex items-center space-x-1">
                <span>✓</span>
                <span>Form has been reset</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative h-screen flex items-center justify-center bg-gray-100 m-10">
      <img
        src={back}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover [clip-path:polygon(0%_0%,_100%_0%,_100%_100%,_85%_100%,_15%_100%)]"
      />

      <div className="relative p-4 bg-blue-500 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-white pb-2 text-center">Add Student</h2>
        <span className="text-sm text-white text-center block mb-4">Join our free creative network</span>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
            {error}
          </div>
        )}

        <form className="p-4 bg-white rounded-lg shadow-md space-y-3" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label htmlFor="username" className="text-blue-600 font-semibold text-sm">Full Name*</label>
              <input
                type="text"
                placeholder="UserName"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-1 border border-blue-400 rounded focus:outline-none focus:ring focus:ring-yellow-300"
                required
                aria-label="Student's full name"
              />
            </div>
            <div>
              <label htmlFor="school" className="text-blue-600 font-semibold text-sm">School*</label>
              <input
                type="text"
                placeholder="School"
                name="school"
                value={formData.school}
                onChange={handleChange}
                className="w-full p-1 border border-blue-400 rounded focus:outline-none focus:ring focus:ring-yellow-300"
                required
                aria-label="Student's school name"
              />
            </div>
          </div>

          <div>
            <label htmlFor="hub" className="text-blue-600 font-semibold text-sm">Hub*</label>
            <input
              type="text"
              placeholder="Hub"
              name="hub"
              value={formData.hub}
              onChange={handleChange}
              className="w-full p-1 border border-blue-400 rounded focus:outline-none focus:ring focus:ring-yellow-300"
              required
              aria-label="Student's hub"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label htmlFor="age" className="text-blue-600 font-semibold text-sm">Age*</label>
              <input
                type="number"
                placeholder="Age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full p-1 border border-blue-400 rounded focus:outline-none focus:ring focus:ring-yellow-300"
                required
                aria-label="Student's age"
              />
            </div>

            <div>
              <label htmlFor="gender" className="text-blue-600 font-semibold text-sm">Gender*</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full p-1 border border-blue-400 rounded focus:outline-none focus:ring focus:ring-yellow-300"
                required
                aria-label="Select gender"
              >
                <option value="">Select Gender</option>
                <option value="boy">Boy</option>
                <option value="girl">Girl</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="email" className="text-blue-600 font-semibold text-sm">Email*</label>
            <input
              type="email"
              placeholder="Enter Student Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-1 border border-blue-400 rounded focus:outline-none focus:ring focus:ring-yellow-300"
              required
              aria-label="Student's email"
            />
          </div>

          <div className="flex flex-col items-center mt-3">
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
              className="p-1 border border-blue-400 rounded focus:outline-none focus:ring focus:ring-yellow-300"
            />
            <p className="mt-2 text-sm">{fileName}</p>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring focus:ring-yellow-300 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>

        <SuccessPopup 
          isVisible={showPopup} 
          onClose={() => setShowPopup(false)} 
        />
      </div>
    </div>
  );
}

export default AddStudent;