import React from 'react';
import DiscussionForum from "../Components/DiscussionForum"


const Dashboard = () => {
    return (
      <div className="min-h-80 bg-gray-100 p-4 sm:p-12 ">
         <h1 className="text-5xl font-bold text-center text-gray-700 mb-12">Statistics Discussions</h1>
         {/* Discussion Forum Section */}
        <DiscussionForum />
     </div>

    
  );
};

export default Dashboard;
