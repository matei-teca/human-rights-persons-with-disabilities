import React from 'react';
import './styles/ContactPage.css';
import './styles/LandingPage.css';

function ContactPage() {
  return (
    <div className="landing-page">
      <header className="header" role="banner">
        <h1>Contact Us</h1>
        <p>We’re here to help! Reach out with any questions, feedback, or collaboration ideas.</p>
      </header>

      <main className="main-content" role="main">
        <section className="contact-section" aria-labelledby="get-in-touch">
          <h2 id="get-in-touch">Get in Touch</h2>
          <p>We’d love to hear from you.</p>
          <div className="contact-details">
            <p>
              Facebook:
              <a href="https://www.facebook.com/groups/1103059404549430?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">
                
                <strong> Human Rights and International Treaties Society</strong>
              </a>
            </p>
            <p>
              Email: 
              <a
                href="mailto:matei.facebookgroup.teca@gmail.com"
                className="email-link"
              ><strong> matei.facebookgroup.teca@gmail.com</strong>
              </a>
            </p>
            {/* <p><strong>Phone:</strong> </p> */}
          </div>
        </section>

        <section className="form-section" aria-labelledby="contact-form">
          <h2 id="contact-form">Send Us a Message</h2>
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              const name = document.getElementById('name').value;
              const email = document.getElementById('email').value;
              const message = document.getElementById('message').value;

              const mailtoLink = `mailto:matei.facebookgroup.teca@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

              window.location.href = mailtoLink;
            }}
          >
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
