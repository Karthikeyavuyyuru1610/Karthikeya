import React from 'react';
import { ChevronDown, ExternalLink, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="fade-in-up">
          <title>Karthikeya Vuyyuru - GenAI & ML Engineer</title>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-poppins text-gray-900 mb-6">
            Karthikeya
            <span className="block text-blue-600">Vuyyuru</span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-700 mb-8">
            Software Developer | GenAI & Machine Learning Engineer
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            A highly motivated software developer with hands-on experience building impactful GenAI chatbots, 
            intelligent web applications, and scalable, production-ready systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Explore My Work
              <ExternalLink size={20} />
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-medium text-lg hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Get In Touch
              <Mail size={20} />
            </button>
          </div>
          
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce"
          >
            <ChevronDown size={32} className="text-gray-400 hover:text-blue-600 transition-colors duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;