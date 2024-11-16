import React from 'react';
import './styles/LandingPage.css';
import './styles/ThesisPage.css';

function ThesisPage() {
    return (
        <div className="landing-page">
            <header className="header">
                <h1>Digital Accessibility and Well-Being</h1>
                <p>A preliminary analysis of the relationship between digital accessibility principles and the psychological needs of visually impaired persons.</p>
            </header>

            <main className="main-content">
                <section className="thesis-intro section">
                    <h2>Introduction</h2>
                    <p>
                        This is preliminary study explores the mediator role of psychological needs like self-determination and self-actualization in the relationship
                        between implementing digital accessibility principles and the well-being of people with visual impairments.
                    </p>
                </section>

                <section className="thesis-methodology section">
                    <h2>Methodology</h2>
                    <p>
                        The experimental design includes a didactic website with accessible and inaccessible versions. It measures the impact of these
                        versions on autonomy, competence, and well-being, using validated scales like the “Basic Psychological Need Satisfaction Scale”
                        and “Positive and Negative Affect Schedule.”
                    </p>
                </section>

                <section className="thesis-findings section">
                    <h2>Findings</h2>
                    <p>
                        Results of this preliminary study reveal no significant statistical differences between the accessible and inaccessible groups, suggesting the need for
                        further research with larger participant pools and more refined tools.
                    </p>
                </section>

                <section className="thesis-conclusion section">
                    <h2>Conclusion</h2>
                    <p>
                        Despite the problematic results of this preliminary research, the study highlights key areas for future development in digital accessibility and
                        its psychological implications for visually impaired individuals.
                    </p>
                </section>

                <section className="thesis-contact section">
                    <h2>Learn More</h2>
                    <p>
                        Explore the full thesis or get in touch to collaborate on accessibility projects aimed at improving well-being.
                    </p>
                    <a
                        href="https://docs.google.com/document/d/1OEO2MFaIeFb5on6tqwy_pRSWdIf3_ICR/edit?usp=sharing&ouid=106213293348821545340&rtpof=true&sd=true"
                        className="cta-button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View the Thesis
                    </a>
                </section>
            </main>
        </div>
    );
}

export default ThesisPage;
