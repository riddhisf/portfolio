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
    title: "Hotel Management System",
    shortDescription: "Backend-driven hotel management and reservation system",
    fullDescription:
      "A full-stack hotel management system developed using Spring Boot and Spring Data REST. The application includes modules for hotels, rooms, reservations, amenities, reviews, and payments with optimized REST APIs, validation handling, and scalable entity relationship mapping.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "Spring Data REST",
      "MySQL",
      "JUnit"
    ],
    image: Leaflink,
    sourceCode: "https://github.com/riddhisf/HotelManagement"
  },

  {
    id: 2,
    title: "Cart Microservices System",
    shortDescription: "Microservices-based e-commerce backend system",
    fullDescription:
      "Developed a scalable microservices-based e-commerce backend with services such as Cart, Product, Catalog, Recommendation, and Stock. Integrated Eureka service discovery, API Gateway routing, Resilience4j circuit breaker, Zipkin tracing, and Spring Boot Actuator monitoring.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Cloud",
      "PostgreSQL",
      "Microservices",
      "Jenkins"
    ],
    image: GreenGrid,
    sourceCode: "https://github.com/riddhisf"
  },

  {
    id: 3,
    title: "Trainee Management REST API",
    shortDescription: "RESTful trainee management backend application",
    fullDescription:
      "A Spring Boot REST API for managing trainee records with CRUD operations, layered architecture, PostgreSQL integration, validation handling, Docker containerization, and JUnit-Mockito based unit testing.",
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "JUnit",
      "Mockito"
    ],
    image: GreenGrid,
    sourceCode: "https://github.com/riddhisf/TraineeAPI"
  },

  {
    id: 4,
    title: "Leaflink",
    shortDescription: "AI-powered waste management and sustainability app",
    fullDescription:
      "Leaflink is a mobile application designed to promote sustainable waste management using Gemini AI. Users can scan waste items and receive intelligent suggestions for reducing, reusing, and recycling waste effectively.",
    technologies: [
      "Flutter",
      "Firebase",
      "Google Cloud Platform",
      "Gemini API"
    ],
    image: Leaflink,
    liveDemo:
      "https://drive.usercontent.google.com/download?id=10KuzoO9_ies4rG4dX8p8Q6hfzP4aPI3O&export=download&authuser=0",
    sourceCode: "https://github.com/nitinjha607/leaflink-2.0",
    demoVideo: "https://youtu.be/odD4qWD5dKA?feature=shared"
  },

  {
    id: 5,
    title: "GreenGrid",
    shortDescription:
      "Real-time renewable energy prediction and sustainability platform",
    fullDescription:
      "GreenGrid provides renewable energy predictions, sustainability insights, and smart waste management recommendations using AI-powered analytics and location-based data processing for rural and sustainable development initiatives.",
    technologies: [
      "Flutter",
      "Firebase",
      "Google Cloud Platform",
      "Gemini API"
    ],
    image: GreenGrid,
    liveDemo:
      "https://drive.google.com/file/d/1SkZczJyPZFKQ3P40v2yZPzCUFLQBIDrP/view?usp=sharing",
    sourceCode: "https://github.com/riddhisf/GREENGRID-pravah"
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