import React from 'react';
import { Code, Brain, Cloud, Database, Wrench, Trophy } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code className="text-blue-600" size={24} />,
      skills: ["Python", "C++", "Java", "JavaScript"],
      color: "blue"
    },
    {
      title: "AI/ML",
      icon: <Brain className="text-teal-600" size={24} />,
      skills: ["LLMs", "Prompt Engineering", "Random Forest", "CNN", "Linear Regression"],
      color: "teal"
    },
    {
      title: "Web & Frontend",
      icon: <Wrench className="text-orange-600" size={24} />,
      skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      color: "orange"
    },
    {
      title: "Cloud/DevOps",
      icon: <Cloud className="text-purple-600" size={24} />,
      skills: ["Google Cloud Platform", "AWS Basics", "GitHub Actions"],
      color: "purple"
    },
    {
      title: "Databases",
      icon: <Database className="text-green-600" size={24} />,
      skills: ["SQL", "Firebase", "Firestore"],
      color: "green"
    },
    {
      title: "Core Competencies",
      icon: <Trophy className="text-red-600" size={24} />,
      skills: ["Data Structures & Algorithms", "Competitive Programming"],
      color: "red"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-50 to-blue-100 border-blue-200",
      teal: "from-teal-50 to-teal-100 border-teal-200",
      orange: "from-orange-50 to-orange-100 border-orange-200",
      purple: "from-purple-50 to-purple-100 border-purple-200",
      green: "from-green-50 to-green-100 border-green-200",
      red: "from-red-50 to-red-100 border-red-200"
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-poppins text-gray-900 mb-4">
            Technical Toolbox
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive set of technologies and skills I use to build innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`bg-gradient-to-br ${getColorClasses(category.color)} border-2 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-105`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-white/70 backdrop-blur-sm rounded-lg px-4 py-2 text-gray-800 font-medium hover:bg-white/90 transition-colors duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Skills Bar */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Proficiency Highlights</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { skill: "Python", level: 90 },
              { skill: "GenAI/LLMs", level: 85 },
              { skill: "Machine Learning", level: 88 },
              { skill: "Google Cloud", level: 80 }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center">
                <h4 className="font-semibold text-gray-900 mb-3">{item.skill}</h4>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600">{item.level}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;