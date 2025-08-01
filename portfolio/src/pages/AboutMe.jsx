import React from 'react';
import RiddhiSaraf from '../assets/RiddhiSaraf.png';
import bganimation from '../assets/bganimation.gif';
import './AboutMe.css';

const AboutMe = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }}

  return (
    <div className="page-container">
      <div className="aboutme-content">
        <div className="aboutme-text">
          <p className="aboutme-heading">
            FULL-STACK & MOBILE APP DEVELOPER
          </p>
          <p className="aboutme">
            Hello! I'm Riddhi Saraf, I connect intuitive frontend experiences 
            built with React and Flutter to powerful and secure backend systems.
          </p>
        </div>
        
        <div className="image-container">
          <button 
            className="contact-button" 
            onClick={handleContactClick}
            aria-label="Contact Riddhi Saraf"
          >
            Get In Touch
          </button>
          <img 
            className='bganimation'
            src={bganimation}
            alt=''
            loading="eager"
          />
          <img 
            src={RiddhiSaraf} 
            alt="Riddhi Saraf - Full-Stack Developer" 
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;