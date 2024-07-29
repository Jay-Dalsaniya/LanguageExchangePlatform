import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; // Import the CSS file

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('learner'); // Default to 'learner'
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/signup', {
        email,
        password,
        role
      });
      alert('You have registered successfully!');
      navigate('/login'); // Redirect to login page
    } catch (err) {
      console.error('Signup Error:', err.response ? err.response.data : err.message);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-image">
        <img src="assets\6368592.jpg" alt="Signup illustration" />
      </div>
      <div className="signup-form-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <div className="form-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <div className="form-group">
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="learner">Learner</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>
          <button type="submit" className="signup-btn">Signup</button>
          <p className="login-link">
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
