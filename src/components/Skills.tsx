import React from 'react';
import { Code, Database, Cloud, TestTube } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: "Java", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "HTML/CSS", level: 92 },
        { name: "TypeScript", level: 88 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: "Spring Boot", level: 95 },
        { name: "React", level: 90 },
        { name: "Angular", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Django", level: 75 }
      ]
    },
    {
      title: "Databases",
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: "MySQL", level: 90 },
        { name: "PostgreSQL", level: 88 },
        { name: "MSSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Redis", level: 75 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-8 h-8" />,
      skills: [
        { name: "AWS Lambda", level: 92 },
        { name: "AWS S3", level: 90 },
        { name: "AWS EC2", level: 88 },
        { name: "AWS Glue", level: 85 },
        { name: "Docker", level: 80 }
      ]
    },
    {
      title: "Testing & Tools",
      icon: <TestTube className="w-8 h-8" />,
      skills: [
        { name: "Selenium", level: 90 },
        { name: "Cypress", level: 88 },
        { name: "Mockito", level: 85 },
        { name: "Git", level: 92 },
        { name: "Karate", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Technical <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise and proficiency levels
            across various programming languages, frameworks, and tools.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-200 dark:hover:border-blue-700"
            >
              <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                <div className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  {React.cloneElement(category.icon, { className: "w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" })}
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300 font-medium text-sm sm:text-base">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm font-medium bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 h-full rounded-full transition-all duration-1000 ease-out transform origin-left hover:scale-y-110"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${skillIndex * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;