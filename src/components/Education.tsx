import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: "Bachelor in Distributed Information Systems",
      institution: "Caddi Ayyad University",
      location: "Morocco",
      period: "September 2020 – January 2024",
      description: "Specialized in distributed systems, software engineering, and modern development practices.",
      type: "degree"
    },
    {
      degree: "Abitur",
      institution: "Gymnasium Zerktouni",
      location: "Morocco",
      period: "September 2019 – July 2020",
      description: "High school diploma with focus on mathematics and sciences.",
      type: "degree"
    }
  ];

  const certifications = [
    {
      title: "TELC B2 Certificate",
      issuer: "TELC",
      date: "Since September 2023",
      description: "German language proficiency certification at B2 level",
      type: "language"
    },
    {
      title: "Discover the World of SQL",
      issuer: "Technical University Graz",
      date: "January 2024 – February 2024",
      description: "Comprehensive SQL course covering database design and optimization",
      type: "technical"
    },
    {
      title: "Programming with Java 1",
      issuer: "Johannes Kepler University Linz",
      date: "January 2024 – February 2024",
      description: "Object-oriented programming fundamentals and Java application development",
      type: "technical"
    },
    {
      title: "Complete JavaScript Course with Projects",
      issuer: "Udemy",
      date: "October 2023 – January 2024",
      description: "Modern JavaScript development including ES6+ features and project implementation",
      type: "technical"
    },
    {
      title: "Software Engineering Job Simulation",
      issuer: "Forage",
      date: "January 2024 – February 2024",
      description: "Practical software engineering experience through industry simulation",
      type: "technical"
    }
  ];

  const getCertificationType = (type: string) => {
    switch (type) {
      case 'technical':
        return 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200';
      case 'language':
        return 'bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200';
      default:
        return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200';
    }
  };

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Education & <span className="text-blue-600 dark:text-blue-400">Certifications</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My academic background and professional development through continuous learning 
            and industry-recognized certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border dark:border-gray-700"
                >
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h4>
                  <h5 className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-4">
                    {edu.institution}
                  </h5>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-4 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{edu.period}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{edu.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <Award className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
              Certifications & Courses
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border dark:border-gray-700"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      {cert.title}
                    </h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCertificationType(cert.type)}`}>
                      {cert.type === 'technical' ? 'Technical' : 'Language'}
                    </span>
                  </div>
                  
                  <h5 className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                    {cert.issuer}
                  </h5>
                  
                  <div className="flex items-center space-x-2 mb-3 text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{cert.date}</span>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;