import React from 'react';
import students from '../Components/Database/database';

const Profile = () => {
  return (
    <div>
      {students.map(prof => (
           <div key={prof.id}>
           <img src={prof.image_url} alt={prof.name} />
           <h2>{prof.name}</h2>
           <p>Grade: {prof.grade}</p>
           <p>School: {prof.school}</p>
           <p>Help: {prof.help_hub}</p>
         </div>
      ))}
    </div>
  )
}

export default Profile
