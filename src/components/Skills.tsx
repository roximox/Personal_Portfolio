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
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Technical <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
            across various programming languages, frameworks, and tools.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border dark:border-gray-700"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-blue-600 dark:text-blue-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-emerald-500 h-2 rounded-full transition-all duration-1000 ease-out"
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