import React, { useState } from 'react';
import '../styles/ContactForm.css'; // Custom CSS for the contact form
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_31wgapc', 'template_ti8b3yi', e.target, '8X606yMoO1BPZ8NPK')
      .then((result) => {
        alert("Message sent successfully!");
      }, (error) => {
        alert("Failed to send message, please try again.");
      });

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-heading">Contact Me</h2>
      <div className="contact-form-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="input-group">
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="input-group">
            <textarea 
              name="message" 
              placeholder="Your Message" 
              value={formData.message} 
              onChange={handleChange} 
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
    </section>
  );
};

export default ContactForm;
