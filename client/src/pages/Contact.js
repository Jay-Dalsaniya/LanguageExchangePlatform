import React from 'react';
import './Contact.css'; // Import the CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Please reach out to us using the following contact details or fill out the form below.</p>
      
      <div className="contact-info">
        <div className="contact-item">
          <h2>Address</h2>
          <p>123 Language Exchange St,<br/> Cityville, Countryland</p>
        </div>
        <div className="contact-item">
          <h2>Email</h2>
          <p>contact@languageexchange.com</p>
        </div>
        <div className="contact-item">
          <h2>Phone</h2>
          <p>+123 456 7890</p>
        </div>
      </div>
      
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
