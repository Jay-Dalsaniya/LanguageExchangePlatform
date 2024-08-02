import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Profile.css'; // Import the CSS for styling

const Profile = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/login');
      return;
    }

    const fetchUserDetails = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserDetails(response.data);
      } catch (error) {
        console.error('Failed to fetch user details', error);
        // Optionally, handle the error (e.g., navigate to login page)
        // navigate('/login');
      }
    };

    fetchUserDetails();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userDetails'); // Clear user details on logout
    navigate('/'); // Redirect to home page after logout
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <div className="profile-header">
        <img
          src={userDetails.profilePhoto ? `http://localhost:5000/${userDetails.profilePhoto}` : '/assets/user.png'}
          alt="Profile"
          className="profile-photo"
        />
        <h2>{userDetails.firstName} {userDetails.lastName}</h2>
      </div>
      <div className="profile-details">
        <p><strong>Name:</strong> {userDetails.firstName} {userDetails.lastName}</p>
        <p><strong>Email:</strong> {userDetails.email}</p>
        <p><strong>Role:</strong> {userDetails.role}</p>
        <p><strong>Birth Date:</strong> {new Date(userDetails.birthDate).toLocaleDateString()}</p>
        <p><strong>Gender:</strong> {userDetails.gender}</p>
        <p><strong>Mobile Number:</strong> {userDetails.mobileNumber}</p>
        <p><strong>Region:</strong> {userDetails.region}</p>
      </div>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
