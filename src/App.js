import React from 'react';
import './Styles/input.css';
import {Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Reports from './Pages/Reports';
import Navbar from './Components/NavBar';
function App() {
  return (
    <div className='main'>

      <header>
         <Navbar />
      </header>

       <Routes>

            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<Profile />} />
            <Route path="/services" element={<Reports />} />
           
         </Routes>

    </div>
  );
}

export default App;
