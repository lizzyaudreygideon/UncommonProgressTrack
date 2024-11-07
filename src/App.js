import React from 'react';
import './Styles/input.css';
import {Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Reports from './Pages/Reports';
import Navbar from './Components/NavBar';
import AboutUs from './Pages/AboutUs';
import Footer from './Pages/Footer';
function App() {
  return (
    <div className='main'>

      <header>
         <Navbar />
      </header>

       <Routes>

            <Route path="/" element={<Home/>} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/services" element={<Reports />} />
            <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>

      <footer>
        <Footer />
      </footer>

    </div>
  );
}

export default App;
