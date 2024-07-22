// src/pages/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Unlock your potential with the best language tutors.</h1>
          <p>Join millions of learners and start speaking a new language today!</p>
        </div>
      </section>
      <section className="stats">
        <div className="stat">
          <h2>44,000+</h2>
          <p>Experienced tutors</p>
        </div>
        <div className="stat">
          <h2>300,000+</h2>
          <p>5-star tutor reviews</p>
        </div>
        <div className="stat">
          <h2>120+</h2>
          <p>Subjects taught</p>
        </div>
        <div className="stat">
          <h2>180+</h2>
          <p>Tutor nationalities</p>
        </div>
      </section>
      <section className="featured-tutors">
        <h2>Featured Tutors</h2>
        <div className="tutors">
          <div className="tutor">
            <div className="avatar"></div>
            <p>Milena - French Tutor</p>
          </div>
          <div className="tutor">
            <div className="avatar"></div>
            <p>Bassel - French Tutor</p>
          </div>
          <div className="tutor">
            <div className="avatar"></div>
            <p>Sophia - French Tutor</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
