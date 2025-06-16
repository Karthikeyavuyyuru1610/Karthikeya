import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';
import { useScrollSpy } from './hooks/useScrollSpy';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const activeId = useScrollSpy(['hero', 'about', 'projects', 'skills', 'experience', 'achievements', 'contact']);

  useEffect(() => {
    if (activeId) {
      setActiveSection(activeId);
    }
  }, [activeId]);

  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <AnimatedBackground />
      <Navigation activeSection={activeSection} />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}

export default App;