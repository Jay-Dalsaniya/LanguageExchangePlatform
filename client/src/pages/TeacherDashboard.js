import React from 'react';
import './TeacherDashboard.css';

const TeacherDashboard = () => {
  return (
    <div className="teacher-dashboard">
      <header className="dashboard-header">
        <h1>Teacher Dashboard</h1>
        <p>Welcome, Teacher!</p>
      </header>
      
      <section className="dashboard-summary">
        <div className="summary-item">
          <h2>Upcoming Classes</h2>
          <ul>
            <li>Spanish - Beginners | 12:00 PM</li>
            <li>French - Intermediate | 2:00 PM</li>
            <li>German - Advanced | 4:00 PM</li>
          </ul>
        </div>
        <div className="summary-item">
          <h2>Recent Feedback</h2>
          <p>"Great explanation of complex grammar concepts!" - Student A</p>
          <p>"I appreciate the extra practice exercises provided." - Student B</p>
        </div>
        <div className="summary-item">
          <h2>Upcoming Events</h2>
          <p>Teacher Workshop on New Language Trends - July 25, 2024</p>
          <p>Monthly Language Exchange Meet - August 5, 2024</p>
        </div>
      </section>
      
      <section className="dashboard-actions">
        <button className="action-button">Add New Class</button>
        <button className="action-button">View Student Progress</button>
        <button className="action-button">Update Profile</button>
      </section>
    </div>
  );
};

export default TeacherDashboard;
