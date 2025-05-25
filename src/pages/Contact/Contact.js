import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert(`Thank you for your message, ${formData.name}! We'll get back to you soon.`);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Get in Touch</h1>
      </section>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>123 Clay Street, Santa Fe, NM 87501</p>
          </div>
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <p>(505) 555-0199</p>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <p>hello@claycraftpottery.com</p>
          </div>
          <div className="info-item">
            <i className="fas fa-clock"></i>
            <p>Studio Hours: Monday-Friday, 9am-5pm MST</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Us a Message</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>

      <div className="map-container">
        {/* This would be replaced with an actual map embed */}
        <div className="map-placeholder">
          <p>Map would display here</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;