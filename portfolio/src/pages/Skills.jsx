import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    {
      name: 'Python',
      category: 'Programming',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },
    {
      name: 'C',
      category: 'Programming',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg'
    },
    {
      name: 'C++',
      category: 'Programming',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'
    },
    {
      name: 'Java',
      category: 'Programming',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
    },
    {
      name: 'JavaScript',
      category: 'Programming',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
      name: 'React',
      category: 'Frontend',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
      name: 'Flutter',
      category: 'Mobile',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg'
    },
    {
      name: 'Firebase',
      category: 'Backend',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'
    },
    {
      name: 'MySQL',
      category: 'Database',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    },
    {
      name: 'Spring Boot',
      category: 'Framework',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg'
    },
    {
      name: 'Git',
      category: 'Version Control',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    {
      name: 'GitHub',
      category: 'Version Control',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
    }
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Tech Skills</h1>
      <div className="page-content">
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                <img 
                  src={skill.logo} 
                  alt={`${skill.name} logo`}
                  className="skill-logo"
                  loading="lazy"
                  draggable="false"
                />
              </div>
              <div className="skill-info">
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-category">{skill.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
