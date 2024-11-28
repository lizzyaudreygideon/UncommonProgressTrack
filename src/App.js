import React, { useState, useEffect } from 'react';
import './Styles/input.css';
import './Components/Loader/Loader.css'; //  loader styles
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
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
import Loader from './Components/Loader/Loader'; //  bar loader

function App() {
  const [loading, setLoading] = useState(true); // Manage loading state
  const location = useLocation(); // Detect route changes

  useEffect(() => {
    // Check if the app is being refreshed
    const isPageRefreshed = performance.navigation.type === 1;

    if (isPageRefreshed) {
      // Show loader for 5 seconds on refresh
      const refreshTimeout = setTimeout(() => setLoading(false), 5000);
      return () => clearTimeout(refreshTimeout);
    } else {
      // Normal initial load (non-refresh)
      const initialTimeout = setTimeout(() => setLoading(false), 10000); // 10 seconds for the initial load
      return () => clearTimeout(initialTimeout);
    }
  }, []);

  useEffect(() => {
    // Show loader for 2 seconds on route changes
    setLoading(true);
    const routeChangeTimeout = setTimeout(() => setLoading(false), 2000); // 2 seconds for route changes
    return () => clearTimeout(routeChangeTimeout);
  }, [location.pathname]);

  return (
    <div>
      {loading && <Loader />} {/* Show loader while loading */}
      {!loading && ( // Render content only when not loading
        <>
          <header>
            <Navbar />
          </header>

          <main>
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
        </>
      )}
    </div>
  );
}

export default App;
