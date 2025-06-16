import React from 'react';
import { Calendar, MapPin, Building, GraduationCap } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      type: "experience",
      title: "Google Cloud Generative AI Virtual Internship",
      company: "Google Cloud",
      location: "Virtual",
      period: "2023",
      description: "Developed prompt workflows with Vertex AI LLMs, gaining hands-on experience with Google Cloud's cutting-edge AI technologies and best practices for generative AI applications.",
      icon: <Building className="text-blue-600" size={20} />,
      featured: true
    },
    {
      type: "experience", 
      title: "Data Science and ML Intern",
      company: "YBI Foundation",
      location: "Remote",
      period: "2023",
      description: "Worked on machine learning projects focusing on data preprocessing, model development, and performance optimization. Gained practical experience in the complete ML pipeline.",
      icon: <Building className="text-teal-600" size={20} />,
      featured: false
    }
  ];

  const education = [
    {
      type: "education",
      title: "B.Tech in Computer Science and Engineering",
      company: "Sir CR Reddy College of Engineering",
      location: "Eluru, Andhra Pradesh",
      period: "2020 - 2024",
      description: "CGPA: 7.78 | Strong foundation in computer science fundamentals, data structures, algorithms, and software engineering principles.",
      icon: <GraduationCap className="text-purple-600" size={20} />,
      featured: false
    },
    {
      type: "education",
      title: "Intermediate Education",
      company: "Sri Chaitanya Junior College",
      location: "Guntur, Andhra Pradesh", 
      period: "2018 - 2020",
      description: "Focused on mathematics and physics, building analytical and problem-solving skills that form the foundation of my technical expertise.",
      icon: <GraduationCap className="text-green-600" size={20} />,
      featured: false
    }
  ];

  const allItems = [...experiences, ...education].sort((a, b) => {
    // Featured items first, then by type (experience before education)
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    if (a.type !== b.type) {
      return a.type === 'experience' ? -1 : 1;
    }
    return 0;
  });

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-poppins text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Building expertise through hands-on experience and continuous learning
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>

          <div className="space-y-12">
            {allItems.map((item, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full border-4 ${
                  item.featured 
                    ? 'bg-blue-600 border-blue-600' 
                    : item.type === 'experience'
                    ? 'bg-teal-600 border-teal-600'
                    : 'bg-purple-600 border-purple-600'
                } z-10`}></div>

                {/* Content card */}
                <div className="ml-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 sm:p-8 w-full">
                  {item.featured && (
                    <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                      Featured Experience
                    </span>
                  )}
                  
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-2">
                        {item.icon}
                        <span className="font-medium">{item.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row lg:flex-col gap-2 lg:text-right text-sm text-gray-500 dark:text-gray-400 lg:min-w-0 lg:flex-shrink-0">
                      <div className="flex items-center gap-1 lg:justify-end">
                        <Calendar size={16} />
                        <span className="whitespace-nowrap">{item.period}</span>
                      </div>
                      <div className="flex items-center gap-1 lg:justify-end">
                        <MapPin size={16} />
                        <span className="whitespace-nowrap">{item.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;