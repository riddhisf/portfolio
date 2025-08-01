import React, { useState } from 'react';
import './Experience.css';

const Experience = () => {
  const [expandedItems, setExpandedItems] = useState({});

 const experiences = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "Manoram Yatra",
    duration: "June 2025 - Present",
    shortDescription: "Revamped user interface with modern React components",
    technologies: ["React", "JavaScript", "CSS3", "HTML5"],
    responsibilities: [
      "Effectively revamped the entire user interface by developing and implementing over 10 new reusable components",
      "Implemented modern CSS3 features and responsive design principles to significantly enhance the user experience",
      "Collaborated with development team to maintain code quality and consistency",
      "Optimized component architecture for better performance and maintainability"
    ]
  },
  {
    id: 2,
    title: "Mobile App Developer",
    company: "ZepWash (Freelance)",
    duration: "April 2025 - June 2025",
    shortDescription: "Designed and developed full-stack mobile application",
    technologies: ["Flutter", "Firebase", "Figma"],
    responsibilities: [
      "Designed more than 15 intuitive UI screens and developed a complete full-stack mobile application using Flutter",
      "Optimized the final application size by 25% by using lazy loading of assets and removing redundancies",
      "Integrated Firebase for backend services and real-time data synchronization",
      "Created comprehensive UI/UX designs in Figma before development implementation"
    ]
  },
  {
    id: 3,
    title: "Visual Aids Captain",
    company: "Google Developer Groups on Campus, ABESEC",
    duration: "October 2024 - Present",
    shortDescription: "Leading creative design and brand consistency for tech events",
    technologies: ["Canva"],
    responsibilities: [
      "Promoted from Visual Aids Coordinator to Captain after demonstrating exceptional leadership and creative skills",
      "Created and delivered over 40 high-impact promotional creatives for more than 10 major tech events",
      "Closely coordinated with a team of 5+ core members to ensure complete brand consistency on all assets",
      "Established design guidelines and standards for the organization's visual identity",
      "Mentored junior members in design principles and creative workflows"
    ]
  },
  {
    id: 4,
    title: "Visual Aids Coordinator",
    company: "Google Developer Groups on Campus, ABESEC",
    duration: "October 2023 - October 2024",
    shortDescription: "Coordinated visual design and promotional materials for tech events",
    technologies: ["Canva", "MS Office Suite", "Google docs"],
    responsibilities: [
      "Designed and created promotional materials for various tech events and workshops",
      "Collaborated with core team members to maintain visual consistency across all platforms",
      "Developed creative assets for social media campaigns and event announcements",
      "Contributed to establishing the organization's visual identity and brand guidelines"
    ]
  }
];



  const toggleExpansion = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Experience</h1>
      <div className="page-content">
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
              </div>
              
              <div className="timeline-main">
                <div className="timeline-content">
                  <div 
                    className="experience-header" 
                    onClick={() => toggleExpansion(exp.id)}
                  >
                    <div className="header-main">
                      <h3>{exp.title}</h3>
                      <div className="expand-indicator">
                        <svg 
                          className={`expand-arrow ${expandedItems[exp.id] ? 'expanded' : ''}`}
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor"
                        >
                          <polyline points="6,9 12,15 18,9"></polyline>
                        </svg>
                      </div>
                    </div>
                    <h4>{exp.company}</h4>
                    <p className="duration">{exp.duration}</p>
                    <p className="short-description">{exp.shortDescription}</p>
                  </div>
                  
                  <div className={`experience-details ${expandedItems[exp.id] ? 'expanded' : ''}`}>
                    <ul>
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="timeline-sidebar">
                  <div className="tech-stack">
                    <h5>Technologies Used</h5>
                    <div className="tech-tags">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {index < experiences.length - 1 && <div className="timeline-line"></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
