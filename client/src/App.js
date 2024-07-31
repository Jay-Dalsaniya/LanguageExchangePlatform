// App.js
import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import LearnerDashboard from './pages/LearnerDashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import TeacherDashboard from './pages/TeacherDashboard';
import ForgotPassword from './pages/ForgotPassword'; // Import the ForgotPassword component
import ResetPassword from './pages/ResetPassword'; // Import the ResetPassword component
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import toast CSS

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const role = localStorage.getItem('userRole');
    if (token) {
      setIsAuthenticated(true);
      setUserRole(role);
    }
  }, []);

  const handleLogout = () => {
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
            <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Add ForgotPassword route */}
            <Route path="/reset-password/:token" element={<ResetPassword />} /> {/* Add ResetPassword route */}
          </Routes>
        </main>
        <ToastContainer /> {/* Add this line for toast notifications */}
        <footer className="footer">
          <p>&copy; 2024 Language Exchange Platform. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
