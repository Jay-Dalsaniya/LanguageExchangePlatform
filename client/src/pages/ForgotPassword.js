// pages/ForgotPassword.js
import React, { useState } from 'react';
import axios from 'axios';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [token, setToken] = useState('');
  const [isTokenSent, setIsTokenSent] = useState(false);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/forgot-password', { email });
      alert(response.data.message);
      setToken(response.data.token); // Store the token for resetting the password
      setIsTokenSent(true);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/api/reset-password/${token}`, { newPassword });
      alert('Password updated successfully! Please login.');
      // Redirect to login page after successful password reset
      window.location.href = '/login';
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="forgot-password-container">
      {!isTokenSent ? (
        <form onSubmit={handleEmailSubmit}>
          <h2>Forgot Password</h2>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <form onSubmit={handlePasswordReset}>
          <h2>Reset Password</h2>
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <button type="submit">Change Password</button>
        </form>
      )}
    </div>
  );
};

export default ForgotPassword;
