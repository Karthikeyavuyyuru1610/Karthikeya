import React from 'react';
import { Mail, Linkedin, Github, Download, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const contactLinks = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "karthikeya16102003@gmail.com",
      href: "mailto:karthikeya16102003@gmail.com",
      color: "blue"
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      value: "linkedin.com/in/karthikeya-vuyyuru",
      href: "https://www.linkedin.com/in/karthikeya-vuyyuru/",
      color: "blue"
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      value: "github.com/Karthikeyavuyyuru1610",
      href: "https://github.com/Karthikeyavuyyuru1610",
      color: "gray"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-poppins text-gray-900 mb-4">
            Let's Build the Future
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm always excited to connect with like-minded people and explore new opportunities. 
            Feel free to reach out!
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h3>
              <div className="space-y-6">
                {contactLinks.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300 group"
                  >
                    <div className={`p-3 rounded-lg ${
                      contact.color === 'blue' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      {contact.icon}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{contact.label}</p>
                      <p className="text-gray-600 text-sm">{contact.value}</p>
                    </div>
                    <ArrowRight 
                      size={16} 
                      className="ml-auto text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-300" 
                    />
                  </a>
                ))}
               
              </div>
            </div>
            {/* Resume Download & CTA (Restored) */}
            <div className="flex flex-col justify-center">
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 text-center animate-fade-in-up">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
                  <Download className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Collaborate?
                </h3>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Download my resume to learn more about my experience, skills, 
                  and the value I can bring to your team.
                </p>
                <a
                  href="https://drive.google.com/file/d/1aGEf43gVfxYWsFUtdTXhAnpymy_KsXzI/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 mt-4"
                >
                  <Download size={20} />
                  Download My Resume
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">
            Based in Andhra Pradesh, India • Available for remote work worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;