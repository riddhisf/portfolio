import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {currentYear} Riddhi Saraf. All rights reserved.</p>
    </footer>
  );
};

export default Footer;