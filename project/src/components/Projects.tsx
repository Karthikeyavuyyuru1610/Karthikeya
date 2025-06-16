import React from 'react';
import { ExternalLink, Github, Bot, Brain, ShoppingCart } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Student Advisory Bot",
      subtitle: "AI Chatbot",
      icon: <Bot className="text-blue-600" size={32} />,
      tags: ["GenAI", "Flask", "Gemini API", "GCP", "Python"],
      impact: "Developed a sophisticated AI chatbot that successfully reduced 70% of manual advisory effort through intelligent automation.",
      description: "Built using the Gemini API and Flask framework, this chatbot features engineered preprocessing modules and is deployed on Google Cloud Platform (App Engine) for scalable performance.",
      links: {
        demo: "https://drive.google.com/file/d/1XCEEpdCfEy4-TdMjzyErp50IiN87kr6h/view?usp=sharing",
        github: "#"
      },
      featured: true
    },
    {
      id: 2,
      title: "Brain Disease Detection via ML",
      subtitle: "Machine Learning",
      icon: <Brain className="text-teal-600" size={32} />,
      tags: ["Machine Learning", "Random Forest", "CNN", "Data Preprocessing"],
      impact: "Engineered and validated Random Forest & CNN models that achieved 89% accuracy on complex MRI datasets.",
      description: "Implemented a complete ML pipeline from data preprocessing to model evaluation and reporting, demonstrating expertise in medical AI applications.",
      links: {
        github: "https://github.com/Karthikeyavuyyuru1610/BRAIN_DESEASE_DETECTION"
      },
      featured: false
    },
    {
      id: 3,
      title: "MobiKart E-commerce Frontend",
      subtitle: "Web Development",
      icon: <ShoppingCart className="text-orange-600" size={32} />,
      tags: ["HTML5", "CSS3", "JavaScript", "Firebase", "Responsive Design"],
      impact: "Built a fully responsive and secure e-commerce frontend with seamless Firebase Authentication and Firestore database integration.",
      description: "Utilized modern web technologies including HTML5, CSS3, JavaScript, and Bootstrap 5 to create an intuitive and user-friendly shopping experience.",
      links: {
        demo: "https://intern-e1d10.web.app/"
      },
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-poppins text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my work in GenAI, machine learning, and web development
          </p>
        </div>

        <div className="grid gap-8 lg:gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                project.featured ? 'lg:grid-cols-2 border-2 border-blue-100' : ''
              }`}
            >
              <div className={`grid ${project.featured ? 'lg:grid-cols-2' : ''} gap-8`}>
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gray-50 rounded-xl">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                      <p className="text-gray-600 font-medium">{project.subtitle}</p>
                    </div>
                    {project.featured && (
                      <span className="ml-auto bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mb-6">
                    <p className="text-lg font-semibold text-blue-600 mb-3">
                      {project.impact}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex gap-4">
                    {project.links.demo && (project.title === "Student Advisory Bot" || project.title === "MobiKart E-commerce Frontend") && (
                      <a
                        href={project.links.demo}
                        className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
                        target="_blank" rel="noopener noreferrer"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        className="flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                        target="_blank" rel="noopener noreferrer"
                      >
                        <Github size={18} />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>

                {project.featured && (
                  <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 lg:p-10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center mb-6 mx-auto">
                        {project.icon}
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        Most Impactful Project
                      </h4>
                      <p className="text-gray-600">
                        This project demonstrates my ability to build production-ready AI solutions that deliver real business value.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;