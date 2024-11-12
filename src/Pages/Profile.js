import React from 'react';
// import StudentFilter from './studentFilter';  // Capitalized
import StudentProfiles from './Student_profiles';  // Capitalized

const StudentProfilePage = () => {
  return (
    
      
    <div className = ' w-full flex justify-between items-start py-16 px-10'>

      {/* <div className='flex-basis-2/5 ml-20'>
        <StudentFilter />   
     </div> */}

      {/* <div className='flex-basis-3/5'>  */}
        <StudentProfiles /> 
      {/* </div> */}

    </div>

    
  );
};

export default StudentProfilePage;
