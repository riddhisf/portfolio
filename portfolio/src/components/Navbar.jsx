// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // Function to close menu on link click (for mobile)
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar">
      <Link to="about" smooth={true} duration={500} className="nav-logo">Riddhi Saraf</Link>

      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>

      <ul className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="about" spy={true} smooth={true} offset={-80} duration={500} onClick={closeMenu}>About Me</Link>
        </li>
        <li>
          <Link to="projects" spy={true} smooth={true} offset={-80} duration={500} onClick={closeMenu}>Projects</Link>
        </li>
        <li>
          <Link to="experience" spy={true} smooth={true} offset={-80} duration={500} onClick={closeMenu}>Experience</Link>
        </li>
        <li>
          <Link to="achievements" spy={true} smooth={true} offset={-80} duration={500} onClick={closeMenu}>Achievements</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;