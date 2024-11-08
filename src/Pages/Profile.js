import React from 'react';
import StudentFilter from './studentFilter';  // Capitalized
import StudentProfiles from './Student_profiles';  // Capitalized

const StudentProfilePage = () => {
  return (
    
      
    <div className='p-4 w-full flex justify-center items-start gap-12  '>

      <div className='flex-basis-1/3'>
        <StudentFilter />   
     </div>

      <div className='flex-basis-2/3'> 
        <StudentProfiles /> 
      </div>

    </div>

    
  );
};

export default StudentProfilePage;
