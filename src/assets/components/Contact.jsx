import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission (like using EmailJS or your backend)
    setIsSubmitted(true);
  };

  return (
    <div className="contact-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <h1>My Portfolio</h1>
        </div>
        <div className="navbar-right">
          <Link to="/about">About Me</Link>
        </div>
      </nav>

      {/* Contact Info Section */}
      <div className="contact-info">
        <h1>Message Me</h1>
        <p>
          Have a question? Want to collaborate? Feel free to reach out! I'd
          love to hear from you.
        </p>
        <div className="contact-details">
          <h3>Get in Touch</h3>
          <p className="email">📧 nurhalishasari@gmail.com</p>
          <p>Contact me for inquiries or collaborations.</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form-container">
        {isSubmitted ? (
          <div className="thank-you-message">
            <h3>Thank you for your message!</h3>
            <p>I will get back to you as soon as possible.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
