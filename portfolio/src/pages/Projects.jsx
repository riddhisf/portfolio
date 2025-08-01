import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      shortDescription: "A modern e-commerce platform with cart functionality",
      fullDescription: "A comprehensive e-commerce website built with React and Node.js. Features include user authentication, product catalog, shopping cart, payment integration with Stripe, order management, and responsive design. The backend uses Express.js with MongoDB for data storage.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "CSS"],
      image: "/api/placeholder/300/200",
      liveDemo: "#",
      sourceCode: "#"
    },
    {
      id: 2,
      title: "Weather Dashboard",
      shortDescription: "Real-time weather app with location-based forecasts",
      fullDescription: "A responsive weather dashboard that provides current weather conditions and 5-day forecasts. Users can search by city or use geolocation. Features include interactive charts, weather maps, and severe weather alerts. Built with React and integrates with OpenWeatherMap API.",
      technologies: ["React", "API Integration", "Chart.js", "CSS Grid"],
      image: "/api/placeholder/300/200", // Replace with actual image path
      liveDemo: "#",
      sourceCode: "#"
    },
    {
      id: 3,
      title: "Task Management App",
      shortDescription: "Collaborative project management tool",
      fullDescription: "A full-stack task management application similar to Trello. Features include drag-and-drop functionality, real-time collaboration, user roles and permissions, file attachments, and email notifications. Built with React frontend and Express.js backend with Socket.io for real-time updates.",
      technologies: ["React", "Express.js", "Socket.io", "PostgreSQL", "Tailwind"],
      image: "/api/placeholder/300/200", // Replace with actual image path
      liveDemo: "#",
      sourceCode: "#"
    }
  ];

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Projects</h1>
      <div className="page-content">
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.shortDescription}
              image={project.image}
              onClick={() => handleCardClick(project)}
            />
          ))}
        </div>
        {selectedProject && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>×</button>
              
              <div className="modal-header">
                <h2>{selectedProject.title}</h2>
              </div>
              
              <div className="modal-body">
                {selectedProject.image && (
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="modal-image"
                  />
                )}
                
                <div className="modal-description">
                  <h3>About this project</h3>
                  <p>{selectedProject.fullDescription}</p>
                </div>
                
                <div className="modal-technologies">
                  <h3>Technologies Used</h3>
                  <div className="tech-tags">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="modal-links">
                  <a 
                    href={selectedProject.liveDemo} 
                    className="project-link demo-link"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={selectedProject.sourceCode} 
                    className="project-link source-link"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;