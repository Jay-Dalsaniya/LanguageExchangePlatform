import React from 'react';
import './LearnerDashboard.css';

const LearnerDashboard = () => {
  return (
    <div className="learner-dashboard">
      <header className="dashboard-header">
        <h1>Learner Dashboard</h1>
        <p>Welcome, Learner!</p>
      </header>

      <section className="dashboard-summary">
        <div className="summary-item">
          <h2>Ongoing Courses</h2>
          <ul>
            <li>Spanish for Beginners - Level 1</li>
            <li>French Conversation Practice - Intermediate</li>
            <li>German Grammar Essentials - Advanced</li>
          </ul>
        </div>
        <div className="summary-item">
          <h2>Upcoming Sessions</h2>
          <p>Spanish Class - July 24, 2024 at 10:00 AM</p>
          <p>French Conversation Practice - July 25, 2024 at 3:00 PM</p>
          <p>German Grammar Review - July 26, 2024 at 1:00 PM</p>
        </div>
        <div className="summary-item">
          <h2>Recommended Resources</h2>
          <p>Check out these resources to enhance your learning:</p>
          <ul>
            <li><a href="#">Interactive Spanish Grammar Exercises</a></li>
            <li><a href="#">French Vocabulary Building App</a></li>
            <li><a href="#">German Listening Practice Podcasts</a></li>
          </ul>
        </div>
      </section>

      <section className="dashboard-actions">
        <button className="action-button">View Progress</button>
        <button className="action-button">Schedule a Session</button>
        <button className="action-button">Update Profile</button>
      </section>
    </div>
  );
};

export default LearnerDashboard;
