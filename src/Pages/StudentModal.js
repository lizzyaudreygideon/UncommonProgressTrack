// StudentModal.js
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

const StudentModal = ({ student, isOpen, onClose, onUpdate, onDelete, updateStudentList }) => {
  const [formData, setFormData] = useState({
    username: '',
    school: '',
    hub: '',
    age: '',
    gender: '',
    email: '',
    image: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (student) {
      setFormData(student);
      setImagePreview(student.image);
      setIsEditing(true);
    } else {
      setFormData({
        username: '',
        school: '',
        hub: '',
        age: '',
        gender: '',
        email: '',
        image: '',
      });
      setImagePreview(null);
      setImageFile(null);
      setIsEditing(false);
    }
    setError('');
  }, [student]);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setImageFile(file);
      setFormData((prev) => ({ ...prev, image: file.name }));
    }
  };

  const validateFields = () => {
    if (!formData.username || !formData.school || !formData.hub || !formData.age || !formData.email || !imagePreview) {
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

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key !== 'image' || !imageFile) {
        formDataToSend.append(key, formData[key]);
      }
    });

    if (imageFile) {
      formDataToSend.append('image', imageFile);
    }

    const endpoint = isEditing
      ? `https://continuing-veradis-uncommon-44b1416d.koyeb.app/student/${student._id}`
      : `https://continuing-veradis-uncommon-44b1416d.koyeb.app/student`;
    const method = isEditing ? 'PUT' : 'POST';

    try {
      const response = await fetch(endpoint, {
        method,
        body: formDataToSend,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Operation failed');
      }

      const updatedStudent = await response.json();
      if (isEditing) {
        onUpdate(updatedStudent);
        updateStudentList(); // Refresh the list after update
      }

      setSuccessMessage(isEditing ? 'Student updated successfully!' : 'Student added successfully!');
      setTimeout(() => {
        setSuccessMessage('');
        onClose();
      }, 2000);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this student?')) return;

    try {
      const response = await fetch(`https://continuing-veradis-uncommon-44b1416d.koyeb.app/student/${student._id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to delete student');
      }

      onDelete(student._id);
      setSuccessMessage('Student deleted successfully!');
      setTimeout(() => {
        setSuccessMessage('');
        onClose();
      }, 2000);
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
        <h2 id="student-modal-title" className="text-4xl font-bold mb-6 text-gray-800">
          {isEditing ? 'Edit Student' : 'Add Student'}
        </h2>
        {error && <div className="text-blue-500 mb-4">{error}</div>}
        {successMessage && <div className="text-blue-900 mb-4">{successMessage}</div>}

        {imagePreview && (
          <div className="mb-4">
            <img
              src={`https://continuing-veradis-uncommon-44b1416d.koyeb.app/${imagePreview}`} // Adjust to the URL where the image is hosted
              alt="Student"
              className="w-full h-52 rounded-md mb-2 object-cover"
              loading="lazy"
            />
            <button
              onClick={() => setImagePreview(null)}
              className="mt-2 px-3 py-1 text-sm bg-blue-500 text-white hover:text-black rounded hover:bg-gray-300"
            >
              Update Image
            </button>
          </div>
        )}

        {/* Uploading a new image */}
        {!imagePreview && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        )}

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

        <div className="flex justify-between gap-2 mt-6">
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

          {/* Delete Button for Editing Mode */}
          {isEditing && (
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
            >
              Delete
            </button>
          )}
        </div>
      </div>

      {/* Success Message Popup */}
      {successMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg">
            <p className="text-lg font-semibold text-green-600">{successMessage}</p>
            <button
              onClick={() => setSuccessMessage('')}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentModal;
