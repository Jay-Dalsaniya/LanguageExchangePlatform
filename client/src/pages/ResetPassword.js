// ResetPassword.js
import React, { useState } from 'react';
import axios from 'axios';

const ResetPassword = ({ match }) => {
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5000/api/reset-password/${match.params.token}`, { newPassword });
      setMessage(response.data.message);
    } catch (err) {
      console.error('Error in Reset Password:', err);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleResetPassword}>
        <input
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPassword;
