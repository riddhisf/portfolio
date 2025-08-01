// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Achievements from './pages/Achievements';
import Skills from './pages/Skills';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <section id="about" className="section-container">
          <AboutMe />
        </section>
        <section id="experience" className="section-container">
          <Experience />
        </section>
        <section id="projects" className="section-container">
          <Projects />
        </section>
        <section id="skills" className="section-container">
          <Skills />
        </section>
        <section id="achievements" className="section-container">
          <Achievements />
        </section>
        <section id="contact" className="section-container">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;