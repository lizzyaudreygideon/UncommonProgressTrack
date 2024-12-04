import React, { useState, useEffect, useMemo } from 'react';
import StudentFilter from './studentFilter';
import StudentModal from './StudentModal';

const StudentProfiles = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedHub, setSelectedHub] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedGame, setSelectedGame] = useState('All');
  const [loading, setLoading] = useState(true);
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
      setLoading(true);
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
        image: student.image || fallbackImage,
      }));

      setStudents((prevStudents) =>
        [...prevStudents, ...validatedData].filter(
          (student, index, self) =>
            self.findIndex((s) => s._id === student._id) === index
        )
      );
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const studentName = (student.name || '').toLowerCase();
      const searchTermLower = searchTerm.toLowerCase();
      const studentHub = student.help_hub || '';
      const studentStatus = student.status || '';
      const studentGame = student.current_game || '';
      const isNameMatch = studentName.includes(searchTermLower);
      const isHubMatch = selectedHub === 'All' || studentHub === selectedHub;
      const isStatusMatch =
        selectedStatus === 'All' || studentStatus === selectedStatus;
      const isGameMatch =
        selectedGame === 'All' || studentGame === selectedGame;
      return isNameMatch && isHubMatch && isStatusMatch && isGameMatch;
    });
  }, [students, searchTerm, selectedHub, selectedStatus, selectedGame]);

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
      const response = await fetch(
        `https://tasteless-marin-isdor-151c6308.koyeb.app/student/${updatedStudent._id}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedStudent),
        }
      );
      if (!response.ok) throw new Error('Failed to update student');
      setStudents((prevStudents) =>
        prevStudents.map((student) =>
          student._id === updatedStudent._id ? updatedStudent : student
        )
      );
      setUpdateMessage('Details updated successfully!');
      setTimeout(() => setUpdateMessage(''), 3000); // Hide message after 3 seconds
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  const handleDelete = async (studentId) => {
    try {
      const response = await fetch(
        `https://tasteless-marin-isdor-151c6308.koyeb.app/student/${studentId}`,
        { method: 'DELETE' }
      );
      if (!response.ok) throw new Error('Failed to delete student');
      setStudents((prevStudents) =>
        prevStudents.filter((student) => student._id !== studentId)
      );
      setDeleteMessage('Student deleted successfully!');
      setTimeout(() => setDeleteMessage(''), 3000); // Hide message after 3 seconds
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  useEffect(() => {
    const container = document.getElementById('student-list-container');
    let scrollTimeout;

    const handleScroll = (e) => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const bottom =
          e.target.scrollHeight === e.target.scrollTop + e.target.clientHeight;
        if (bottom && hasMore && !loading) {
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
  }, [hasMore, loading, students.length]);

  const LoadingPlaceholder = () => (
    <div className="animate-pulse bg-gray-200 h-48 w-full"></div>
  );

  if (loading && students.length === 0)
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div className="p-6 flex flex-col md:flex-row md:justify-around gap-10">
      <div className="w-full md:w-1/4 mb-8">
        <StudentFilter
          setSearchTerm={setSearchTerm}
          setSelectedHub={setSelectedHub}
          setSelectedStatus={setSelectedStatus}
          setSelectedGame={setSelectedGame}
        />
      </div>
      <div
        className="flex-grow"
        id="student-list-container"
        style={{ maxHeight: '80vh', overflowY: 'auto' }}
      >
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading &&
            Array.from({ length: itemsPerPage }).map((_, index) => (
              <li key={index}>
                <LoadingPlaceholder />
              </li>
            ))}
          {!loading &&
            filteredStudents.map((student) => (
              <li
                key={student._id}
                className="bg-white border rounded-md shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={`https://tasteless-marin-isdor-151c6308.koyeb.app/${student.image}`}
                  alt={`${student.name}`}
                  className="w-full h-56 object-cover"
                  onError={handleImageError}
                />
                <div className="p-4">
                  <h3 className="font-semibold">{student.name}</h3>
                  <p>{student.school}</p>
                  <button
                    onClick={() => handleStudentClick(student)}
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                    View Details
                  </button>
                </div>
              </li>
            ))}
        </ul>
        {loading && (
          <div className="text-center mt-4">
            <p>Loading more students...</p>
          </div>
        )}
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
        />
      )}
    </div>
  );
};

export default StudentProfiles;
