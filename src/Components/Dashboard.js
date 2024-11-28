import React from 'react';
import DiscussionForum from "../Components/DiscussionForum"


const Dashboard = () => {
    return (
      <div className="min-h-80 bg-gray-100 p-12 ">
         <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">Student Statistics Discussions</h1>
         {/* Discussion Forum Section */}
        <DiscussionForum />
     </div>

    
  );
};

export default Dashboard;
