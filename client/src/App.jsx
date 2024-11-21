import React from 'react';
import { Link, HashRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutCrpdPage from './pages/AboutCrpdPage';
import ThesisPage from './pages/ThesisPage';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
      <Link to="/contact" className="skip-link">
          Skip to Contact Page
        </Link>
        <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about-crpd" element={<AboutCrpdPage />} />
            <Route path="/thesis" element={<ThesisPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
