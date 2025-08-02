import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';
import Leaflink from '../assets/Leaflink.png';
import GreenGrid from '../assets/Greengrid.png';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Leaflink",
      shortDescription: "AI powered waste management and sustainable solutions",
      fullDescription: "Leaflink is a mobile application designed to transform the way we manage waste by leveraging the power of Gemini AI. The app allows users to scan waste items and receive personalized solutions on how to effectively reuse, recycle, or reduce them. This innovative approach not only promotes sustainable waste management practices but also educates users on environmental conservation.",
      technologies: ["Flutter", "Firebase", "GCP", "Gemini API"],
      image: Leaflink,
      liveDemo: "https://drive.usercontent.google.com/download?id=10KuzoO9_ies4rG4dX8p8Q6hfzP4aPI3O&export=download&authuser=0",
      sourceCode: "https://github.com/nitinjha607/leaflink-2.0",
      demoVideo: "https://youtu.be/odD4qWD5dKA?feature=shared"
    },
    {
      id: 2,
      title: "GreenGrid",
      shortDescription: "Real-time renenwable energy generation predicition",
      fullDescription: "Greengrid offers real-time data analytics, location-based energy predictions, and sustainable waste management solutions. The integration of Google's Gemini AI enables precise predictions for renewable energy potential and provides personalized sustainability guidance, making it an essential tool for rural communities to embrace clean energy alternatives.",
      technologies: ["Flutter", "Firebase", "GCP", "Gemini API"],
      image: GreenGrid,
      liveDemo: "https://drive.google.com/file/d/1SkZczJyPZFKQ3P40v2yZPzCUFLQBIDrP/view?usp=sharing",
      sourceCode: "https://github.com/riddhisf/GREENGRID-pravah",
    },
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
                    APK
                  </a>
                  {selectedProject?.demoVideo && (
                    <a
                      href={selectedProject.demoVideo}
                      className="project-link demo-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Demo video"
                    >
                      Demo Video
                    </a>
                  )}
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