import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ isAuthenticated, userRole }) => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="brand" onClick={() => navigate('/')}>Language Exchange Platform</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {isAuthenticated ? (
          <>
            {userRole === 'learner' && <li><Link to="/learner-dashboard">Dashboard</Link></li>}
            {userRole === 'teacher' && <li><Link to="/teacher-dashboard">Dashboard</Link></li>}
            <li><Link to="/profile">Profile</Link></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
