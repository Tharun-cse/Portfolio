import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './contactme.css'; // Import the corresponding CSS file

const ContactMe = () => {
  const form = useRef(null); // Initialize useRef with null
  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current) { // Make sure form.current is not null
      emailjs
        .sendForm(
          'service_hecx4gk', // Replace with your EmailJS service ID
          'template_cnule1a', // Replace with your EmailJS template ID
          form.current,
          'T9esb8jr5XnEpLEFe' // Replace with your EmailJS user ID
        )
        .then(
          (result) => {
            console.log(result.text);
            setMessageSent(true);
            setErrorMessage('');
            form.current.reset(); // Reset the form fields
          },
          (error) => {
            console.log(error.text);
            setErrorMessage('Failed to send message. Please try again later.');
          }
        );
    }
  };

  return (
    <div className="contact-wrapper" id="contact">
      <h2 className="contact-heading">
        <span style={{ color: '#FFFFFF' }}>Let's Get in</span>
        <span style={{ color: '#66FCF1' }}> Touch</span>
      </h2>
      <div className="contact-section">
        {/* Left Side - Contact Information */}
        <div className="contact-info">
          <div className="info-item">
              <div className="icon-circle">
                <i className="fas fa-at"></i>
              </div>
              <p>tharunsai2002@gmail.com</p>
          </div>
          <div className="info-item">
              <div className="icon-circle">
                <i className="fas fa-phone"></i>
              </div>
              <p>+1 716 787 1505</p>
          </div>
          <div className="info-item">
              <div className="icon-circle">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <p>Buffalo, New York, USA</p>
          </div>
          <div className="social-media">
            <a href="https://www.instagram.com/tha.run._/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://github.com/Tharun-cse" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/tharun-gangaraju-b81b521b0/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:tharunsai2002@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://leetcode.com/u/tharun-cs/" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-code"></i>
            </a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="user_name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="user_email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="send-button">Send Message</button>
          </form>
          {messageSent && <p className="success-message">Message sent successfully!</p>}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
