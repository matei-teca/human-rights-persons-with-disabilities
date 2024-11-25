import React from 'react';
import { Link } from 'react-router-dom';
import './styles/LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="header" role="banner">
        <h1>
          Human Rights, Accessibility & Well-Being <br /> for Persons with Disabilities, in a Digital Era
        </h1>
        <p>
          Empowering individuals through the UN’s CRPD and evidence-based accessibility solutions.
        </p>
      </header>

      <main className="main-content" role="main">
        <section className="crpd-section" aria-labelledby="about-crpd">
          <h2 id="about-crpd">About the CRPD</h2>
          <p>
            The United Nations Convention on the Rights of Persons with Disabilities (CRPD) champions the rights of individuals with disabilities, ensuring their full and equal participation in society.
          </p>
          <Link to="/about-crpd" className="cta-button">Learn More</Link>
        </section>

        <section className="thesis-section" aria-labelledby="graduation-thesis">
          <h2 id="graduation-thesis">Graduation Thesis: Preliminary Study on Digital Accessibility</h2>
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

        <section className="principles-section" aria-labelledby="accessibility-principles">
          <h2 id="accessibility-principles">Core Principles of Accessibility</h2>
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

        <section className="contact-section" aria-labelledby="get-involved">
          <h2 id="get-involved">Get Involved</h2>
          <p>Join us in advocating for accessibility and the rights of persons with disabilities.</p>
          <Link to="/contact" className="cta-button"><strong>Contact Us</strong></Link>
        </section>
      </main>
    </div>
  );
}

export default LandingPage;
