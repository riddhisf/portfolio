// src/components/ProjectCard.jsx
import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ description, image, title, onClick }) => {
  return (
    <div 
      className={`card-container ${onClick ? 'clickable' : ''}`}
      onClick={onClick}
    >
      {image && (
        <div className="card-image">
          <img 
            src={image} 
            alt={title || 'Project image'}
            className="card-img"
          />
        </div>
      )}
      
      {title && (
        <h3 className="card-title">
          {title}
        </h3>
      )}
      
      {description && (
        <div className="card-description">
          <p className="card-text">
            {description}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;