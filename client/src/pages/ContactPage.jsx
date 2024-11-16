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
            <p><strong>Facebook: </strong>
              <a href="https://www.facebook.com/groups/1103059404549430?_rdc=1&_rdr"
                target="_blank"
                rel="noopener noreferrer">Human Rights and International Treaties Society (HRITS, Bucharest Based)</a></p>
            <p>
              <strong>Email: </strong>
              <a
                href="mailto:matei.facebookgroup.teca@gmail.com"
                className="email-link"
              >
                matei.facebookgroup.teca@gmail.com
              </a>
            </p>
            {/* <p><strong>Phone:</strong> </p> */}
          </div>
        </section>

        <section className="form-section">
          <h2>Send Us a Message</h2>
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault(); // Prevent page refresh
              const name = document.getElementById('name').value;
              const email = document.getElementById('email').value;
              const message = document.getElementById('message').value;

              // Create the mailto link
              const mailtoLink = `mailto:matei.facebookgroup.teca@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

              // Open the mailto link
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
