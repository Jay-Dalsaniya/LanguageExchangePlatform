import React, { useState } from 'react';
import './LearnerDashboard.css';

const LearnerDashboard = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [courseDetails, setCourseDetails] = useState(null);
  
  const courses = {
    Spanish: [
      { title: 'Spanish for Beginners - Level 1', progress: 30, description: 'Learn the basics of Spanish.' },
      { title: 'Spanish Conversation Practice', progress: 50, description: 'Improve your conversational skills.' },
      { title: 'Advanced Spanish Grammar', progress: 10, description: 'Dive deep into Spanish grammar.' }
    ],
    French: [
      { title: 'French for Beginners', progress: 20, description: 'Start your journey with French.' },
      { title: 'French Conversation Practice - Intermediate', progress: 40, description: 'Engage in conversations.' },
      { title: 'French Literature', progress: 0, description: 'Explore classic French literature.' }
    ],
    German: [
      { title: 'German for Beginners', progress: 60, description: 'Begin your German learning.' },
      { title: 'Intermediate German Conversation', progress: 30, description: 'Engage in intermediate conversations.' },
      { title: 'Advanced German Grammar', progress: 20, description: 'Master German grammar.' }
    ],
    Japanese: [
      { title: 'Japanese for Beginners', progress: 25, description: 'Learn the basics of Japanese.' },
      { title: 'Intermediate Japanese Conversation', progress: 15, description: 'Practice intermediate conversations.' },
      { title: 'Advanced Japanese Grammar', progress: 10, description: 'Explore advanced grammar.' }
    ],
    Chinese: [
      { title: 'Chinese for Beginners', progress: 50, description: 'Start learning Chinese.' },
      { title: 'Intermediate Chinese Conversation', progress: 20, description: 'Practice speaking Chinese.' },
      { title: 'Advanced Chinese Grammar', progress: 5, description: 'Understand advanced grammar.' }
    ]
  };

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
    setCourseDetails(null); // Reset course details when changing language
  };

  const handleCourseClick = (course) => {
    setCourseDetails(course);
  };

  return (
    <div className="learner-dashboard">
      <header className="dashboard-header">
        <h1>Learner Dashboard</h1>
        <p>Welcome, Learner!</p>
      </header>

      <section className="language-selection">
        <h2>Select Language to Learn</h2>
        <div className="language-options">
          {Object.keys(courses).map(language => (
            <div 
              key={language} 
              className={`language-option ${selectedLanguage === language ? 'selected' : ''}`}
              onClick={() => handleLanguageClick(language)}
            >
              {language}
            </div>
          ))}
        </div>
      </section>

      {selectedLanguage && (
        <section className="dashboard-summary">
          <h2>Ongoing Courses for {selectedLanguage}</h2>
          <ul>
            {courses[selectedLanguage].map(course => (
              <li key={course.title} onClick={() => handleCourseClick(course)}>
                <div className="course-title">{course.title}</div>
                <div className="course-progress">Progress: {course.progress}%</div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {courseDetails && (
        <section className="course-details">
          <h2>Course Details</h2>
          <p><strong>{courseDetails.title}</strong></p>
          <p>{courseDetails.description}</p>
          <p>Progress: {courseDetails.progress}%</p>
        </section>
      )}

      <section className="dashboard-actions">
        <button className="action-button">View Progress</button>
        <button className="action-button">Schedule a Session</button>
        <button className="action-button">Update Profile</button>
      </section>
    </div>
  );
};

export default LearnerDashboard;
