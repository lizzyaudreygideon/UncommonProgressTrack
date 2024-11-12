import React from 'react';
import form1 from '../Components/Gallery/form-block.png'
import form2 from '../Components/Gallery/3d-rendering-dices.png'
import form3 from '../Components/Gallery/file (10).png'
import { Link } from 'react-router-dom';

function Signup({ toggleForm }) {
  return (
    <div className='w-full flex justify-center items-center py-10'>
      <div className='bg-blue-900 max-w-4xl flex justify-center items-center rounded-xl px-5 min-h-64 gap-10'>
      <section className='w-1/2' style={{ marginLeft: '-35px' }}>
      <h2 className='text-4xl font-bold w-full mb-4 bg-gradient-to-r from-yellow-400 via-blue to-purple-500 text-transparent bg-clip-text'>
      Sign Up, Welcome Scratch-Track
     </h2>

          <div className='bg-white relative py-1 pl-4 pr-1 w-4/5 rounded-xl flex justify-between'>
            <input 
              type="email" 
              placeholder='Enter your Email' 
              className='bg-transparent w-1/2 focus:outline-none'
            />
            <Link className='bg-yellow-500 text-white rounded-xl p-2 px-4 text-lg' to={'AddStudent'}>
              SignUp
            </Link>
          </div>
          <p className='text-center mt-4 text-white'>
            Aready have an account?{' '}
            <span 
              onClick={toggleForm} 
              className='text-black cursor-pointer hover:text-blue-400'
            >
              SignIn
            </span>
          </p>
        </section>

        <div className='flex gap-4 w-1/3'>
          <img src={form2} alt='Dice' className='w-24 animate-bounce' style={{ animationDelay: '0ms' }} />
          <img src={form1} alt='Form' className='w-24 animate-bounce' style={{ animationDelay: '150ms' }} />
          <img src={form3} alt='File' className='w-24 animate-bounce' style={{ animationDelay: '300ms' }} />
        </div>

      </div>
    </div>
  );
}

export default Signup;