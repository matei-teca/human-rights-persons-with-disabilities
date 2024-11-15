import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
// import AboutPage from './components/AboutPage';
// import ThesisPage from './components/ThesisPage';
// import ContactPage from './components/ContactPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/about" element={<AboutPage />} />
          <Route path="/thesis" element={<ThesisPage />} />
          <Route path="/contact" element={<ContactPage />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
