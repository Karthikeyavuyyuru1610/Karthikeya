import React from 'react';
import { Code, Brain, Rocket } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-poppins text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm passionate about crafting scalable production systems using Python and AI/ML technologies. 
              My journey began with mastering core computer science concepts during my B.Tech in Computer Science 
              and Engineering, where I developed a strong foundation in data structures, algorithms, and software development.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              What drives me is the practical application of these concepts to solve real-world problems. 
              From developing an AI chatbot that reduced 70% of manual advisory effort to achieving 89% accuracy 
              in brain disease detection using machine learning models, I focus on creating solutions that make a tangible impact.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm always eager to tackle complex challenges and contribute to innovative tech teams that are 
              pushing the boundaries of what's possible with AI and software engineering.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Code className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Full-Stack Development</h3>
              <p className="text-gray-600">Building end-to-end web applications with modern technologies and best practices.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="text-teal-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI & Machine Learning</h3>
              <p className="text-gray-600">Developing intelligent systems using GenAI, LLMs, and advanced ML algorithms.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="text-orange-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud & Deployment</h3>
              <p className="text-gray-600">Scaling applications using Google Cloud Platform and modern DevOps practices.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;