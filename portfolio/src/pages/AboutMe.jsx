import React from 'react';
import RiddhiSaraf from '../assets/RiddhiSaraf.png';
import bganimation from '../assets/bganimation.gif';
import portfolioPDF from '../assets/Riddhi_Saraf.pdf';
import './AboutMe.css';

const AboutMe = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleImageDownload = async () => {
    try {
      const response = await fetch(portfolioPDF);
      if (!response.ok) throw new Error('Failed to fetch portfolio');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Riddhi_Saraf_Resume.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Download error:', err);
    }
  };

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
            alt='Background animation'
            loading="eager"
          />
          <img 
            src={RiddhiSaraf} 
            alt="Riddhi Saraf - Full-Stack Developer" 
            loading="lazy"
            style={{ cursor: 'pointer' }}
            title="Click to download portfolio"
            aria-label="Download portfolio"
            onClick={handleImageDownload}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
