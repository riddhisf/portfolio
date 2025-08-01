import React from 'react';
import './Achievements.css';

const achievementsData = [
  {
    title: 'Global Top 100',
    subtitle: 'GDSC Solution Challenge 2024',
    description: 'Selected among the Global Top 100 out of 2000+ entries in the Google Developer Student Clubs Solution Challenge 2024 for the AI-powered sustainability project Leaflink.' // :contentReference[oaicite:6]{index=6}
  },
  {
    title: '2nd Place',
    subtitle: 'Student Pavilion, Gridcon 2025',
    description: 'Secured 2nd place at Gridcon 2025 for student innovation, demonstrating technical creativity and impact in field of power systems.' // :contentReference[oaicite:7]{index=7}
  },
  {
    title: 'Top 30',
    subtitle: 'AKTU Navomesh AIDEA Challenge 2025',
    description: 'Ranked in the Top 30 in the AKTU Navomesh AIDEA Challenge 2025, showcasing innovative problem-solving and design thinking.'
  },
  {
    title: 'GATE 2025 Qualified',
    subtitle: 'CSIT',
    description: 'Qualified the Graduate Aptitude Test in Engineering (GATE) 2025 in the CSIT discipline, demonstrating strong engineering aptitude and fundamentals.' // inference based on user input; qualification itself from resume. :contentReference[oaicite:9]{index=9}
  },
  {
    title: 'Director\'s Merit Certificate',
    subtitle: 'CGPA: 8.69',
    description: 'Achieved first rank in department/branch with a cumulative GPA of 8.69, reflecting consistent academic excellence during B.Tech in Electrical and Computer Engineering.' // :contentReference[oaicite:8]{index=8}
  },
  
];

const AchievementCard = ({ title, subtitle, description }) => (
  <div className="achievement-card">
    <div className="achievement-header">
      <div className="achievement-title">{title}</div>
      {subtitle && <div className="achievement-subtitle">{subtitle}</div>}
    </div>
    <div className="achievement-description">{description}</div>
  </div>
);

const Achievements = () => (
  <div className="page-container">
    <h1 className="page-title">Achievements</h1>
    <div className="page-content">
      <div className="achievements-grid">
        {achievementsData.map((ach, i) => (
          <AchievementCard
            key={i}
            title={ach.title}
            subtitle={ach.subtitle}
            description={ach.description}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Achievements;
