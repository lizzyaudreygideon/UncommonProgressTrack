// import React from 'react';
// import back from '../Components/Gallery/happy-little-girl-celebrating-her-birthday.jpg';

// function AddStudent() {
//   return (
//     <div className='relative h-screen flex items-center justify-center bg-gray-100 m-10'>
//       {/* Background Image */}
//       <img 
//         src={back} 
//         alt="Background" 
//         className="absolute inset-0 w-full h-full object-cover [clip-path:polygon(0%_0%,_100%_0%,_100%_100%,_85%_100%,_15%_100%)]"
//       />

//       {/* Form Container */}
//       <div className='relative p-5 bg-blue-500 rounded-2xl shadow-lg w-full max-w-lg p-4'>
//         <h2 className='text-5xl font-extrabold text-white pb-3 text-center'>Add Student</h2>
//         <span className='text-base text-white pb-2 text-center block'>Join our 100% free creative network</span>

//         {/* Input Form */}
//         <form className="flex flex-col p-6 bg-white rounded-lg shadow-md">
//           <label htmlFor="Name" className="mb-2 text-blue-600 font-semibold">Full Name</label>
//           <input 
//             type="text" 
//             placeholder='Enter Student Name' 
//             className="mb-4 p-2 border border-blue-400 rounded focus:outline-none focus:ring focus:ring-yellow-300"
//           />

//           <label htmlFor="School" className="mb-2 text-blue-600 font-semibold">School</label>
//           <input 
//             type="text" 
//             placeholder='Enter Student School' 
//             className="mb-4 p-2 border border-blue-400 rounded focus:outline-none focus:ring focus:ring-yellow-300"
//           />

//           <label htmlFor="Grade" className="mb-2 text-blue-600 font-semibold">Grade</label>
//           <input 
//             type="text" 
//             placeholder='Enter Student Level' 
//             className="mb-4 p-2 border border-blue-400 rounded focus:outline-none focus:ring focus:ring-yellow-300"
//           />

//           <label htmlFor="Current-Game" className="mb-2 text-blue-600 font-semibold">Select Current Game</label>
//           <select 
//             name="Current-Game" 
//             className="mb-4 p-2 border border-blue-400 rounded focus:outline-none focus:ring focus:ring-yellow-300"
//           >
//             <option value="">Select</option>
//             <option value="Flying Cat">Flying Cat</option>
//             <option value="Apple Catcher">Apple Catcher</option>
//             <option value="Tom and Jerry">Tom and Jerry</option>
//             <option value="Flappy Birds">Flappy Birds</option>
//           </select>

//           {/* New Field for Profile Picture */}
//           <label htmlFor="Profile-Picture" className="mb-2 text-blue-600 font-semibold">Profile Picture</label>
//           <input 
//             type="file" 
//             accept="image/*" 
//             className="mb-4 p-2 border border-blue-400 rounded focus:outline-none focus:ring focus:ring-yellow-300"
//           />

//           {/* Status Input */}
//           <label htmlFor="Status" className="mb-2 text-blue-600 font-semibold">Status</label>
//           <input 
//             type="text" 
//             placeholder='Enter Student Status' 
//             className="mb-4 p-2 border border-blue-400 rounded focus:outline-none focus:ring focus:ring-yellow-300"
//           />

//           <button 
//             type="submit" 
//             className="bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition duration-200 transform hover:scale-105 focus:outline-none focus:ring focus:ring-yellow-300"
//           >
//             Submit
//           </button>
//         </form>
//       </div>

//       {/* Additional Text */}
//       <div className='absolute top-[20%] right-[5%] max-w-xs'>
//         <p className='text-blue-700 bg-white p-4 rounded-lg shadow-md'>
//           Enhance your profile by adding detailed information to join our community and take part in exciting games and activities!
//         </p>
//       </div>
//     </div>
//   );
// }

// export default AddStudent;


import React from 'react';
import back from '../Components/Gallery/happy-little-girl-celebrating-her-birthday.jpg';

function AddStudent() {
  return (
    <div className='relative h-screen flex items-center justify-center bg-gray-100 m-10'>
      {/* Background Image */}
      <img 
        src={back} 
        alt="Background" 
        className="absolute inset-0 w-full h-full object-cover [clip-path:polygon(0%_0%,_100%_0%,_100%_100%,_85%_100%,_15%_100%)]"
      />

      {/* Form Container */}
      <div className='relative p-4 bg-blue-500 rounded-xl shadow-lg w-full max-w-md'>
        <h2 className='text-3xl font-bold text-white pb-2 text-center'>Add Student</h2>
        <span className='text-sm text-white text-center block mb-4'>Join our free creative network</span>

        {/* Compact Input Form */}
        <form className="p-4 bg-white rounded-lg shadow-md space-y-3">
          {/* Name and School (Side by Side) */}
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label htmlFor="Name" className="text-blue-600 font-semibold text-sm">Full Name</label>
              <input 
                type="text" 
                placeholder='Name' 
                className="w-full p-1 border border-blue-400 rounded focus:outline-none focus:ring focus:ring-yellow-300"
              />
            </div>
            <div>
              <label htmlFor="School" className="text-blue-600 font-semibold text-sm">School</label>
              <input 
                type="text" 
                placeholder='School' 
                className="w-full p-1 border border-blue-400 rounded focus:outline-none focus:ring focus:ring-yellow-300"
              />
            </div>
          </div>

          <div>
              <label htmlFor="Grade" className="text-blue-600 font-semibold text-sm">Hub</label>
              <input 
                type="text" 
                placeholder='Hub' 
                className="w-full p-1 border border-blue-400 rounded focus:outline-none focus:ring focus:ring-yellow-300"
              />
            </div>

          {/* Grade and Game Selection (Side by Side) */}
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label htmlFor="Grade" className="text-blue-600 font-semibold text-sm">Age</label>
              <input 
                type="text" 
                placeholder='Age' 
                className="w-full p-1 border border-blue-400 rounded focus:outline-none focus:ring focus:ring-yellow-300"
              />
            </div>
           
            <div>
              <label htmlFor="Current-Game" className="text-blue-600 font-semibold text-sm">Gender</label>
              <select 
                name="gender" 
                className="w-full p-1 border border-blue-400 rounded focus:outline-none focus:ring focus:ring-yellow-300"
              >
                <option value="">Select 1</option>
                 <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
            </div>
          </div>

          {/* Profile Picture Upload */}
          <div className="flex flex-col items-center">
            
  <label htmlFor="ProfilePicture" className="text-blue-600 font-semibold text-sm mb-2">
  </label>
  <div className="w-full">
    <label
      htmlFor="ProfilePicture"
      className="cursor-pointer flex items-center justify-center w-full p-2 border border-blue-400 rounded bg-blue-50 hover:bg-blue-100 transition duration-200"
    >
      <span className="text-blue-600">Upload Image</span>
    </label>
    <input 
      type="file"
      id="ProfilePicture"
      className="hidden"
      onChange={(e) => {
        const fileName = e.target.files[0]?.name || 'No file chosen';
        document.getElementById('fileName').textContent = fileName;
      }}
    />
    <p id="fileName" className="mt-2 text-sm text-gray-600">No file chosen</p>
  </div>
</div>

          {/* Submit Button */}
          <button className="w-full bg-yellow-500 text-white py-1.5 rounded hover:bg-yellow-600 transition duration-200">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddStudent;

