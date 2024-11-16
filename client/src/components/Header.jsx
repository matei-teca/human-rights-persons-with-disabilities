import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Digital Accessibility & Well-Being</h1>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              About
            </NavLink>
          </li>
          <li>
            <a
              href="https://docs.google.com/document/d/1OEO2MFaIeFb5on6tqwy_pRSWdIf3_ICR/edit?usp=sharing&ouid=106213293348821545340&rtpof=true&sd=true"
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Thesis
            </a>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
