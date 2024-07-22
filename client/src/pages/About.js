import React from 'react';
import './About.css'; // Import the CSS file

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to the Language Exchange Platform. We are dedicated to helping people learn and teach languages in a collaborative and engaging environment.
      </p>
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to create a global community where language learners and teachers can connect, share knowledge, and enhance their linguistic skills.
        </p>
      </section>
      <section className="team">
        <h2>Meet the Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="path-to-image.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="path-to-image.jpg" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>CTO</p>
          </div>
        
        </div>
      </section>
      <section className="values">
        <h2>Our Values</h2>
        <ul>
          <li>Inclusivity</li>
          <li>Collaboration</li>
          <li>Innovation</li>
          <li>Passion for Learning</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
