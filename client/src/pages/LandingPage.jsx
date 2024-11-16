import React from 'react';
import { Link } from 'react-router-dom';
import './styles/LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Human Rights, Accessibility & Well-Being for Persons with Disabilities, in a Digital Era</h1>
        <p>Empowering individuals through the UN’s CRPD and evidence-based accessibility solutions</p>
      </header>

      <main className="main-content">
        <section className="crpd-section">
          <h2>About the CRPD</h2>
          <p>
            The United Nations Convention on the Rights of Persons with Disabilities (CRPD) champions the rights of individuals with disabilities, ensuring their full and equal participation in society.
          </p>
          <Link to="/about" className="cta-button">Learn More</Link>
        </section>

        <section className="thesis-section">
          <h2>My Graduation Thesis</h2>
          <p>
            My research examines the impact of digital accessibility on the well-being of persons with disabilities. By focusing on core needs like autonomy, self-determination, and self-actualization, this preliminary study sheds light on how accessible technology can lead to improved life quality and well-being for persons with disabilities.
          </p>
          <a
            href="https://docs.google.com/document/d/1OEO2MFaIeFb5on6tqwy_pRSWdIf3_ICR/edit?usp=sharing&ouid=106213293348821545340&rtpof=true&sd=true"
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a>
        </section>

        <section className="principles-section">
          <h2>Core Principles of Accessibility</h2>
          <div className="principles-list">
            <div className="principle">
              <h3>Perceivable</h3>
              <p>Ensuring all content can be perceived through sight, sound, or touch.</p>
            </div>
            <div className="principle">
              <h3>Operable</h3>
              <p>Ensuring users can easily navigate and interact using multiple methods.</p>
            </div>
            <div className="principle">
              <h3>Understandable</h3>
              <p>Making content clear and user-friendly for all audiences.</p>
            </div>
            <div className="principle">
              <h3>Robust</h3>
              <p>Designing compatibility with various assistive technologies.</p>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <h2>Get Involved</h2>
          <p>Join us in advocating for accessibility and the rights of persons with disabilities.</p>
          <Link to="/contact" className="cta-button">Contact Us</Link>
        </section>
      </main>
    </div>
  );
}

export default LandingPage;
