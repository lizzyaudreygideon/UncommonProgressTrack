import React, { useState, useEffect } from 'react';

const InputField = ({ label, name, value, onChange, type = 'text' }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 capitalize" htmlFor={name}>
      {label}
    </label>
    <input
      id={name}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
  </div>
);

const StudentModal = ({ student, isOpen, onClose, onUpdate, onCreate }) => {
  const [formData, setFormData] = useState({
    username: '',
    school: '',
    hub: '',
    age: '',
    gender: '',
    email: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (student) {
      setFormData(student);
      setIsEditing(true);
    } else {
      setFormData({
        username: '',
        school: '',
        hub: '',
        age: '',
        gender: '',
        email: '',
      });
      setIsEditing(false);
    }
    setError(''); // Reset error on modal open
  }, [student]);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateFields = () => {
    if (!formData.username || !formData.school || !formData.hub || !formData.age || !formData.email) {
      return 'All fields are required.';
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      return 'Invalid email format.';
    }
    if (isNaN(formData.age) || Number(formData.age) <= 0) {
      return 'Age must be a positive number.';
    }
    return '';
  };

  const handleSubmit = async () => {
    const validationError = validateFields();
    if (validationError) {
      setError(validationError);
      return;
    }

    const endpoint = isEditing
      ? `http://localhost:5000/student/${student._id}`
      : `http://localhost:5000/student`;
    const method = isEditing ? 'PUT' : 'POST';

    try {
      const response = await fetch(endpoint, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Operation failed');
      }

      const updatedStudent = await response.json();
      if (isEditing) onUpdate(updatedStudent);
      else onCreate(updatedStudent);

      onClose();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5000/student/${student._id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Delete failed');
      }

      // Handle the deletion locally (since we're not using onDelete prop)
      setFormData({
        username: '',
        school: '',
        hub: '',
        age: '',
        gender: '',
        email: '',
      });
      setIsEditing(false);
      onClose(); // Close the modal after successful deletion
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      role="dialog"
      aria-labelledby="student-modal-title"
      aria-modal="true"
    >
      <div className="bg-white rounded-lg max-w-lg w-full p-6 shadow-lg overflow-y-auto max-h-[80vh]">
        <h2 id="student-modal-title" className="text-2xl font-bold mb-4 text-gray-800">
          {isEditing ? 'Edit Student' : 'Add Student'}
        </h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form className="space-y-4">
          {['username', 'school', 'hub', 'age', 'gender', 'email'].map((field) => (
            <InputField
              key={field}
              label={field}
              name={field}
              value={formData[field]}
              onChange={handleInputChange}
              type={field === 'age' ? 'number' : 'text'}
            />
          ))}
        </form>

        {/* Game-like friendly styled unordered list */}
        <ul className="space-y-3 mt-4 text-sm text-gray-700">
          <li className="flex items-center gap-2 p-4 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white hover:scale-105 transition duration-200 ease-in-out cursor-pointer shadow-lg">
            <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" stroke="currentColor">
              <path d="M16 8V7a4 4 0 1 0-8 0v1"></path>
              <path fill-rule="evenodd" d="M11 7a3 3 0 1 0-6 0v1a3 3 0 0 0 6 0V7zM5 9v5a1 1 0 1 0 2 0V9a4 4 0 0 1 8 0v5a1 1 0 1 0 2 0V9a6 6 0 0 0-12 0z" clip-rule="evenodd"></path>
            </svg>
            Fun Game Mode 1
          </li>
          <li className="flex items-center gap-2 p-4 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:scale-105 transition duration-200 ease-in-out cursor-pointer shadow-lg">
            <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" stroke="currentColor">
              <path d="M16 8V7a4 4 0 1 0-8 0v1"></path>
              <path fill-rule="evenodd" d="M11 7a3 3 0 1 0-6 0v1a3 3 0 0 0 6 0V7zM5 9v5a1 1 0 1 0 2 0V9a4 4 0 0 1 8 0v5a1 1 0 1 0 2 0V9a6 6 0 0 0-12 0z" clip-rule="evenodd"></path>
            </svg>
            Fun Game Mode 2
          </li>
          <li className="flex items-center gap-2 p-4 rounded-xl bg-gradient-to-r from-green-400 to-blue-500 text-white hover:scale-105 transition duration-200 ease-in-out cursor-pointer shadow-lg">
            <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" stroke="currentColor">
              <path d="M16 8V7a4 4 0 1 0-8 0v1"></path>
              <path fill-rule="evenodd" d="M11 7a3 3 0 1 0-6 0v1a3 3 0 0 0 6 0V7zM5 9v5a1 1 0 1 0 2 0V9a4 4 0 0 1 8 0v5a1 1 0 1 0 2 0V9a6 6 0 0 0-12 0z" clip-rule="evenodd"></path>
            </svg>
            Fun Game Mode 3
          </li>
        </ul>

        <div className="flex justify-between gap-2 mt-6">
          {isEditing && (
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
            >
              Delete
            </button>
          )}
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            >
              {isEditing ? 'Update' : 'Add'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentModal;
