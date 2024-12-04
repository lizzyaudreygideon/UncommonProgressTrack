import React, { useState, useEffect } from 'react';

const StudentFilter = ({
  setSearchTerm,
  setSelectedHub,
  setSelectedStatus,
  setSelectedGame,
}) => {
  const [hubs, setHubs] = useState(['All']);
  const [schools, setSchools] = useState(['All']);
  const [genders, setGenders] = useState(['All']);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const statuses = ['All', 'Active', 'Inactive', 'Graduated'];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [hubsResponse, schoolsResponse, gendersResponse] = await Promise.all([
          fetch('https://tasteless-marin-isdor-151c6308.koyeb.app/student/hubs'),
          fetch('https://tasteless-marin-isdor-151c6308.koyeb.app/student/schools'),
          fetch('https://tasteless-marin-isdor-151c6308.koyeb.app/student/genders')
        ]);

        const hubsData = await hubsResponse.json();
        const schoolsData = await schoolsResponse.json();
        const gendersData = await gendersResponse.json();

        setHubs(['All', ...hubsData]);
        setSchools(['All', ...schoolsData]);
        setGenders(['All', ...gendersData]);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="p-4 text-center">Loading filters...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="bg-blue-900 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4 text-white">Filter Students</h2>
      
      <div className="space-y-4">
        {/* Search Field */}
        <div className="flex flex-col">
          <label htmlFor="search" className="text-sm font-medium text-gray-700 mb-1">
            Search by Name
          </label>
          <input
            id="search"
            type="text"
            className="border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter student name..."
          />
        </div>

        {/* Hub Filter */}
        <div className="flex flex-col">
          <label htmlFor="hub" className="text-sm font-medium text-white mb-1">
            Help Hub
          </label>
          <select
            id="hub"
            className="border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => setSelectedHub(e.target.value)}
          >
            {hubs.map((hub) => (
              <option key={hub} value={hub}>
                {hub}
              </option>
            ))}
          </select>
        </div>

        {/* Status Filter */}
        <div className="flex flex-col">
          <label htmlFor="status" className="text-sm font-medium text-white mb-1">
            Status
          </label>
          <select
            id="status"
            className="border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>

        {/* School Filter */}
        <div className="flex flex-col">
          <label htmlFor="school" className="text-sm font-medium text-white mb-1">
            School
          </label>
          <select
            id="school"
            className="border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => setSelectedGame(e.target.value)}
          >
            {schools.map((school) => (
              <option key={school} value={school}>
                {school}
              </option>
            ))}
          </select>
        </div>

        {/* Gender Filter */}
        <div className="flex flex-col">
          <label htmlFor="gender" className="text-sm font-medium text-white mb-1">
            Gender
          </label>
          <select
            id="gender"
            className="border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => setSelectedGame(e.target.value)}
          >
            {genders.map((gender) => (
              <option key={gender} value={gender}>
                {gender}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default StudentFilter;