import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Add this if you haven't already
import './ResetPassword.css';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { token } = useParams(); // Get the token from the URL
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    
    // Check if the passwords match
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match!"); // Show error toast
      return;
    }
    
    try {
      const response = await axios.post(`http://localhost:5000/api/reset-password/${token}`, { newPassword });
      toast.success('Password reset successful! You will be redirected to the login page.'); // Show success toast
      navigate('/login'); // Redirect to login page
    } catch (err) {
      console.error('Error in Reset Password:', err);
      toast.error('An error occurred. Please try again.'); // Show error toast
    }
  };

  return (
    <div className="reset-password-page">
      <div className="reset-password-form-container">
        <h2>Reset Password</h2>
        <form className="reset-password-form" onSubmit={handleResetPassword}>
          <div className="form-group">
            <input
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="reset-password-btn">Change Password</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
