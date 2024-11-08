import React from 'react';
import LineChart from '../Components/Reports/LineChart';
import BarChart from '../Components/Reports/BarChart';
import PieChart from '../Components/Reports/PieChart';
import DiscussionForum from "../Components/DiscussionForum"
import { monthlyProgressData, studentsTaughtData, schoolDistributionData } from '../Components/Database/ReportData';

const Dashboard = () => {
    return (
      <div className="min-h-80 bg-gray-100 p-12 ">
         <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">Student Statistics Dashboard</h1>
      
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-600 mb-4">Monthly Progress</h2>
              <LineChart data={monthlyProgressData} />
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-600 mb-4">Students Taught by School</h2>
              <BarChart data={studentsTaughtData} />
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-600 mb-4">School Representation</h2>
              <PieChart data={schoolDistributionData} />
          </div>
        </div>

       
        {/* Discussion Forum Section */}
        <DiscussionForum />
     </div>

    
  );
};

export default Dashboard;
