// Login.js
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // Import toast
import './Login.css';

const Login = ({ setIsAuthenticated, setUserRole }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      const { token, role, profile } = response.data;
      localStorage.setItem('authToken', token);
      localStorage.setItem('userRole', role);
      localStorage.setItem('userProfile', JSON.stringify(profile)); // Save profile info
      setIsAuthenticated(true);
      setUserRole(role);
      toast.success(`Welcome ${role}!`);
      navigate(role === 'teacher' ? '/teacher-dashboard' : '/learner-dashboard');
    } catch (err) {
      console.error('Login Error:', err.response ? err.response.data : err.message);
      toast.error('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-image">
        <img src="assets/image.png" alt="Login illustration" />
      </div>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember Me </label>
            <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
          </div>
          <button type="submit" className="login-btn">SIGN IN</button>
          <p className="signup-link">
            New on our platform? <a href="/signup">Create an account</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
