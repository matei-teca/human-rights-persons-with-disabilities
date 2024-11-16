import React from 'react';
import './styles/AboutPage.css';
import './styles/LandingPage.css';

function AboutPage() {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>About the UN’s Convention on the Rights of Persons with Disabilities (CRPD)</h1>
        <p>
          Promoting equality, dignity, and inclusion for all persons with disabilities, including those with mental health challenges.
        </p>
      </header>

      <main className="main-content">
        <section className="crpd-details">
          <h2>What is the CRPD?</h2>
          <p>
            The United Nations Convention on the Rights of Persons with Disabilities (CRPD) is an international treaty
            that protects the rights of persons with physical, sensory, intellectual, and mental health disabilities.
            Its goal is to ensure full participation, equality, and dignity for everyone, regardless of their abilities.
          </p>
          <p>
            Mental health disabilities are often overlooked, but the CRPD explicitly recognizes them, emphasizing the need for accessible mental health care,
            non-discrimination, and societal acceptance.
          </p>
        </section>

        <section className="crpd-principles">
          <h2>Core Principles of the CRPD</h2>
          <ul className="principles-list">
            <li>Respect for inherent dignity, individual autonomy, and independence of persons.</li>
            <li>Non-discrimination and equality of opportunity for all disabilities, including mental health conditions.</li>
            <li>Accessibility to physical, social, and digital environments.</li>
            <li>Respect for difference and acceptance of disabilities, including mental health, as part of human diversity.</li>
            <li>Equality between men, women, and non-binary persons with disabilities.</li>
          </ul>
        </section>

        <section className="mental-health">
          <h2>Mental Health Disabilities</h2>
          <p>
            The CRPD acknowledges the unique challenges faced by individuals with mental health disabilities, including stigma, access to treatment, and social barriers.
          </p>
          <p>
            It advocates for inclusive mental health policies, accessible care systems, and community-based support to ensure equal opportunities and improve well-being.
          </p>
        </section>

        <section className="cta-section">
          <h2>Explore More</h2>
          <p>
            Discover how the CRPD is implemented worldwide and how its principles support individuals with both visible and invisible disabilities.
          </p>
          <a
            href="https://social.desa.un.org/issues/disability/crpd/article-1-purpose"
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            View More
          </a>
        </section>
      </main>
    </div>
  );
}

export default AboutPage;
