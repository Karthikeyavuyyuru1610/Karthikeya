import React from 'react';
import { Award, BookOpen, ExternalLink, FileText } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-poppins text-gray-900 mb-4">
            Achievements & Recognition
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Third-party validation of expertise and commitment to excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* IEEE Publication - Featured */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-600 rounded-xl">
                <FileText className="text-white" size={28} />
              </div>
              <div>
                <span className="bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-2 inline-block">
                  Featured Publication
                </span>
                <h3 className="text-2xl font-bold text-gray-900">IEEE Research Paper</h3>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-blue-800 mb-3">
                2nd IEEE International Conference on Innovations in Control, Intelligence and Computing (ICOICI) 2024
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Successfully published research demonstrating expertise in machine learning applications 
                and contributing to the academic community's understanding of AI innovations.
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href="https://drive.google.com/file/d/1uoUT_5XUN2Suh9UaQnYXyW00QNnwxL8K/view?usp=sharing"
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
                target="_blank" rel="noopener noreferrer"
              >
                <ExternalLink size={18} />
                View Certificate
              </a>
              <a
                href="https://ieeexplore.ieee.org/document/10696111"
                className="flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
                target="_blank" rel="noopener noreferrer"
              >
                <FileText size={18} />
                Read Paper
              </a>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 border-2 border-teal-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-teal-600 rounded-xl">
                <Award className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Professional Certifications</h3>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <BookOpen className="text-teal-600 mt-1" size={20} />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Introduction to OpenAI GPT Models
                    </h4>
                    <p className="text-gray-600 mb-3">
                      <span className="font-medium">Infosys Spring Board</span> • 2024
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Comprehensive training on OpenAI's GPT models, prompt engineering, 
                      and practical applications of large language models in software development.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://drive.google.com/file/d/1kMRFvnuXLYNhFtZrB8Ayf1GD2SicdTCw/view"
                className="flex items-center justify-center gap-2 w-full bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors duration-300"
                target="_blank" rel="noopener noreferrer"
              >
                <ExternalLink size={18} />
                View All Certifications
              </a>
            </div>
          </div>
        </div>

        {/* Additional Recognition */}
        <div className="mt-12 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Key Accomplishments
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">70%</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Efficiency Improvement</h4>
              <p className="text-gray-600 text-sm">Reduced manual advisory effort through AI automation</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal-600">89%</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">ML Model Accuracy</h4>
              <p className="text-gray-600 text-sm">Achieved high accuracy in brain disease detection</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">3+</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Major Projects</h4>
              <p className="text-gray-600 text-sm">Production-ready applications deployed successfully</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;