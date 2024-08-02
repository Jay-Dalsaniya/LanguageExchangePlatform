import React, { useState } from 'react';
import './TeacherDashboard.css';

const TeacherDashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    language: '',
    platform: '',
    time: '',
    fees: '',
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'photo' ? e.target.files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formDataToSend = new FormData();
    formDataToSend.append('language', formData.language);
    formDataToSend.append('platform', formData.platform);
    formDataToSend.append('time', formData.time);
    formDataToSend.append('fees', formData.fees);
    formDataToSend.append('photo', formData.photo);

    try {
      const response = await fetch('/api/add-course', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        console.log('Course added successfully!');
        setShowForm(false);
      } else {
        console.error('Failed to add course:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

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
            {/* List of classes can be dynamically fetched from the database */}
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
        <button className="action-button" onClick={() => setShowForm(true)}>Add New Course</button>
        <button className="action-button">View Student Progress</button>
        <button className="action-button">Update Profile</button>
      </section>

      {showForm && (
        <div className="course-form">
          <h2>Add New Course</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Language:
              <input type="text" name="language" value={formData.language} onChange={handleChange} required />
            </label>
            <label>
              Platform:
              <input type="text" name="platform" value={formData.platform} onChange={handleChange} required />
            </label>
            <label>
              Time:
              <input type="text" name="time" value={formData.time} onChange={handleChange} required />
            </label>
            <label>
              Fees:
              <input type="text" name="fees" value={formData.fees} onChange={handleChange} required />
            </label>
            <label>
              Photo:
              <input type="file" name="photo" onChange={handleChange} required />
            </label>
            <button type="submit">Submit</button>
            <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default TeacherDashboard;
