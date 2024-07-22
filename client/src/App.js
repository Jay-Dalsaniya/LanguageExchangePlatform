import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import Login from './pages/Login';
import LearnerDashboard from './pages/LearnerDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import NavBar from './components/NavBar';
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    // Check for authentication status from local storage or API
    const token = localStorage.getItem('authToken');
    const role = localStorage.getItem('userRole');
    if (token) {
      setIsAuthenticated(true);
      setUserRole(role);
    }
  }, []);

  const handleLogout = () => {
    // Clear user authentication state
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
    setIsAuthenticated(false);
    setUserRole(null);
    window.location.href = '/'; // Redirect to login page
  };

  return (
    <Router>
      <div className="app-container">
        <NavBar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} setUserRole={setUserRole} />} />
            <Route path="/learner-dashboard" element={<LearnerDashboard />} />
            <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; 2024 Language Exchange Platform. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
