import React from 'react';
import form1 from '../Components/Gallery/form-block.png';
import form2 from '../Components/Gallery/form-block.png'; // Replace with actual paths
import form3 from '../Components/Gallery/form-block.png'; // Replace with actual paths
import './Login.css'; // Import the CSS file

function LogIn() {
  return (
    <div className='bg-blue-950 flex justify-center items-center py-10'>
      <div className='bg-yellow-500 max-w-4xl flex justify-center items-center rounded-xl px-5 min-h-64 gap-10'>
        <section className='w-1/2' style={{ marginLeft: '-35px' }}>
          <h2 className='text-4xl text-white w-full mb-4'>Get involved, Be part of the community</h2>
          <p className='bg-white relative py-1 pl-4 pr-1 w-4/5 rounded-xl flex justify-between'>
            <input type="email" placeholder='Enter your Email' className='bg-none w-1/2 focus:outline-none'/>
            <button className='bg-slate-400 text-black rounded-xl p-2 px-4 text-lg'>Sign in</button>
          </p>  
        </section>
        
        
        <div className='flex gap-4 w-1/3 ml-17'>
          <img src={form1} alt='form1' className=' w-24 bounce bounce-delay-1' />
          <img src={form2} alt='form2' className=' w-24 bounce bounce-delay-2' />
          <img src={form3} alt='form3' className=' w-24 bounce bounce-delay-3' />
        </div>
      </div>
    </div>
  );
}

export default LogIn;
