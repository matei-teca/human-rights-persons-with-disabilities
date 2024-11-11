// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <nav>
          <ul className="footer-nav">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/thesis">Thesis</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
