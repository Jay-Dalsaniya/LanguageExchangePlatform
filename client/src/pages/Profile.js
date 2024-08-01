// src/pages/Profile.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css'; // Optional: Add your CSS for styling

const Profile = () => {
  const navigate = useNavigate();

  // Retrieve user data from local storage
  const token = localStorage.getItem('authToken');
  const userRole = localStorage.getItem('userRole');
  const userDetails = JSON.parse(localStorage.getItem('userDetails')) || {}; // Assume user details are stored here

  // Check if user is authenticated
  if (!token) {
    navigate('/login'); // Redirect to login if not authenticated
    return null; // Prevent rendering
  }

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <div className="profile-details">
        <p><strong>First Name:</strong> {userDetails.firstName}</p>
        <p><strong>Last Name:</strong> {userDetails.lastName}</p>
        <p><strong>Email:</strong> {userDetails.email}</p>
        <p><strong>Role:</strong> {userRole}</p>
        <p><strong>Birth Date:</strong> {new Date(userDetails.birthDate).toLocaleDateString()}</p>
        <p><strong>Gender:</strong> {userDetails.gender}</p>
        <p><strong>Mobile Number:</strong> {userDetails.mobileNumber}</p>
        <p><strong>Region:</strong> {userDetails.region}</p>
      </div>
    </div>
  );
};

export default Profile;
