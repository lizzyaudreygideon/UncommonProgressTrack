import React, { useState, useEffect, useMemo } from 'react';
import StudentFilter from './studentFilter';
import StudentModal from './StudentModal';

const StudentProfiles = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedHub, setSelectedHub] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedGender, setSelectedGender] = useState('All');
  const [selectedSchool, setSelectedSchool] = useState('All');
  const [error, setError] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [updateMessage, setUpdateMessage] = useState('');
  const [deleteMessage, setDeleteMessage] = useState('');
  const itemsPerPage = 6;

  const fallbackImage = '/api/placeholder/288/176';

  const fetchStudents = async (page = 1) => {
    try {
      const response = await fetch(
        `https://tasteless-marin-isdor-151c6308.koyeb.app/student?page=${page}&limit=${itemsPerPage}`,
        { method: 'GET' }
      );
      if (!response.ok) throw new Error('Failed to fetch students');
      const data = await response.json();

      if (data.length < itemsPerPage) setHasMore(false);

      const validatedData = data.map((student) => ({
        ...student,
        name: student.username || 'Unnamed Student',
        help_hub: student.help_hub || 'Unassigned',
        status: student.status || 'Unknown',
        current_game: student.current_game || 'None',
        school: student.school || 'Unknown School',
        gender: student.gender || 'Unknown',
        image: student.image || fallbackImage,
      }));

      setStudents((prevStudents) =>
        page === 1
          ? validatedData
          : [...prevStudents, ...validatedData].filter(
              (student, index, self) =>
                self.findIndex((s) => s._id === student._id) === index
            )
      );
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const studentName = (student.name || '').toLowerCase();
      const searchTermLower = searchTerm.toLowerCase();
      const studentHub = student.hub || '';
      const studentStatus = student.status || '';
      const studentSchool = student.school || '';
      const studentGender = student.gender || '';
      
      const isNameMatch = studentName.includes(searchTermLower);
      const isHubMatch = selectedHub === 'All' || studentHub === selectedHub;
      const isStatusMatch = selectedStatus === 'All' || studentStatus === selectedStatus;
      const isSchoolMatch = selectedSchool === 'All' || studentSchool === selectedSchool;
      const isGenderMatch = selectedGender === 'All' || studentGender === selectedGender;
      
      return isNameMatch && isHubMatch && isStatusMatch && isSchoolMatch && isGenderMatch;
    });
  }, [students, searchTerm, selectedHub, selectedStatus, selectedSchool, selectedGender]);

  const handleImageError = (e) => {
    e.target.src = fallbackImage;
    e.target.onerror = null;
  };

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const handleStudentUpdate = async (updatedStudent) => {
    try {
      setStudents((prevStudents) =>
        prevStudents.map((student) =>
          student._id === updatedStudent._id ? updatedStudent : student
        )
      );
      setUpdateMessage('Details updated successfully!');
      setTimeout(() => setUpdateMessage(''), 3000);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  const handleDelete = async (studentId) => {
    try {
      setStudents((prevStudents) =>
        prevStudents.filter((student) => student._id !== studentId)
      );
      setDeleteMessage('Student deleted successfully!');
      setTimeout(() => setDeleteMessage(''), 3000);
      setIsModalOpen(false);
      // Refresh the list to ensure consistency
      fetchStudents(1);
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  const updateStudentList = () => {
    setStudents([]);
    setHasMore(true);
    fetchStudents(1);
  };

  useEffect(() => {
    const container = document.getElementById('student-list-container');
    let scrollTimeout;

    const handleScroll = (e) => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const bottom =
          e.target.scrollHeight === e.target.scrollTop + e.target.clientHeight;
        if (bottom && hasMore) {
          fetchStudents(Math.ceil(students.length / itemsPerPage) + 1);
        }
      }, 100);
    };

    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [hasMore, students.length]);

  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div className="p-6 flex flex-col md:flex-row md:justify-around gap-10">
      <div className="w-full md:w-1/4 mb-8">
        <StudentFilter
          setSearchTerm={setSearchTerm}
          setSelectedHub={setSelectedHub}
          setSelectedStatus={setSelectedStatus}
          setSelectedGender={setSelectedGender}
          setSelectedSchool={setSelectedSchool}
        />
      </div>
      <div
        className="flex-grow"
        id="student-list-container"
        style={{ maxHeight: '80vh', overflowY: 'auto' }}
      >
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudents.map((student) => (
            <li
              key={student._id}
              className="bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-3 flex flex-col items-center"
            >
              <img
                src={`https://tasteless-marin-isdor-151c6308.koyeb.app/${student.image}`}
                alt={`${student.name}`}
                className="w-full h-72 sm:h-40 object-cover rounded-2xl"
                onError={handleImageError}
                loading="lazy"
              />
              <div className="text-center mt-4">
                <h3 className="text-2xl font-semibold text-gray-800">{student.name}</h3>
                <p className="text-blue-700 py-2 font-medium">{student.school}</p>
                <button
                  onClick={() => handleStudentClick(student)}
                  className="mt-3 px-4 py-2 border-2 border-blue-500 text-blue-500 font-medium rounded-full hover:bg-blue-500 hover:text-white hover:border-transparent transition-colors duration-300 text-sm"
                >
                  View Details
                </button>
              </div>
            </li>
          ))}
        </ul>

        {updateMessage && (
          <div className="text-green-500 text-center mt-4">{updateMessage}</div>
        )}
        {deleteMessage && (
          <div className="text-red-500 text-center mt-4">{deleteMessage}</div>
        )}
      </div>
      {selectedStudent && (
        <StudentModal
          student={selectedStudent}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onUpdate={handleStudentUpdate}
          onDelete={handleDelete}
          updateStudentList={updateStudentList}
        />
      )}
    </div>
  );
};

export default StudentProfiles;