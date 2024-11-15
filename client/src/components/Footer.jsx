import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <nav>
          <ul className="footer-nav">
            <li><Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link></li>
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
