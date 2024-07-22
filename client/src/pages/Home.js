import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Unlock Your Potential with the Best Language Tutors</h1>
          <p>Join millions of learners and start speaking a new language today!</p>
          <a href="/signup" className="cta-button">Get Started</a>
        </div>
      </section>
      <section className="stats">
        <h2>Our Achievements</h2>
        <div className="stat-container">
          <div className="stat">
            <h3>44,000+</h3>
            <p>Experienced Tutors</p>
          </div>
          <div className="stat">
            <h3>300,000+</h3>
            <p>5-Star Tutor Reviews</p>
          </div>
          <div className="stat">
            <h3>120+</h3>
            <p>Subjects Taught</p>
          </div>
          <div className="stat">
            <h3>180+</h3>
            <p>Tutor Nationalities</p>
          </div>
        </div>
      </section>
      <section className="featured-tutors">
        <h2>Featured Tutors</h2>
        <div className="tutors">
          <div className="tutor">
            <div className="avatar" style={{backgroundImage: 'url(/path-to-image1.jpg)'}}></div>
            <p>Milena - French Tutor</p>
          </div>
          <div className="tutor">
            <div className="avatar" style={{backgroundImage: 'url(/path-to-image2.jpg)'}}></div>
            <p>Bassel - French Tutor</p>
          </div>
          <div className="tutor">
            <div className="avatar" style={{backgroundImage: 'url(/path-to-image3.jpg)'}}></div>
            <p>Sophia - French Tutor</p>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <h2>What Our Learners Say</h2>
        <div className="testimonial">
          <p>"This platform has transformed my learning experience. The tutors are amazing and the lessons are tailored to my needs."</p>
          <span>- Alex R.</span>
        </div>
        <div className="testimonial">
          <p>"I have improved my Spanish so much thanks to the expert tutors available here. Highly recommend!"</p>
          <span>- Maria P.</span>
        </div>
      </section>
    </div>
  );
};

export default Home;
