// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import logo from '../assets/Logo2.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar" aria-label="Main navigation">
      <Link
        to="about"
        smooth={true}
        duration={500}
        className="nav-logo"
        onClick={closeMenu}
        aria-label="Go to About section"
      >
        <img src={logo} alt="Logo" className="logo-image" />
        Riddhi Saraf
      </Link>

      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
        {[
          { to: 'about', label: 'About Me' },
          { to: 'projects', label: 'Projects' },
          { to: 'experience', label: 'Experience' },
          { to: 'achievements', label: 'Achievements' },
        ].map(item => (
          <li key={item.to}>
            <Link
              to={item.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
