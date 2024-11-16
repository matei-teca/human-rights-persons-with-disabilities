import React from 'react';
import './styles/ContactPage.css';

function ContactPage() {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Contact Us</h1>
        <p>We’re here to help! Reach out with any questions, feedback, or collaboration ideas.</p>
      </header>

      <main className="main-content">
        <section className="contact-section">
          <h2>Get in Touch</h2>
          <p>
            Whether you’re interested in learning more about our work, collaborating on accessibility projects, 
            or sharing your feedback, we’d love to hear from you.
          </p>
          <div className="contact-details">
            <p><strong>Email:</strong> contact@accessibility.org</p>
            <p><strong>Phone:</strong> +1 (234) 567-8901</p>
          </div>
        </section>

        <section className="form-section">
          <h2>Send Us a Message</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="cta-button">Send Message</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default ContactPage;
