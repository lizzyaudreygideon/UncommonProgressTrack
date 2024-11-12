import React from 'react';
import './Styles/input.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Reports from './Pages/Reports';
import Navbar from './Components/NavBar';
import AboutUs from './Pages/AboutUs';
import Footer from './Pages/Footer';
import Gallery from './Pages/Gallery';
import AuthContainer from './Hooks/AuthContainer';
import Dashboard from './Components/Dashboard';
import AddStudent from './Pages/AddStudent';
function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/auth" element={<AuthContainer />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/AddStudent" element={<AddStudent />} />
          <Route path="/LoginForm" element={<Navigate to="/auth" replace />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;