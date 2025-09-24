import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Java & AWS Developer",
      company: "Stryve",
      location: "Germany",
      period: "March 2024 – September 2025",
      type: "Full-time",
      description: [
        "Backend development with Java & Spring Boot for scalable server applications",
        "Test automation and software quality assurance with Selenium & Cypress",
        "Cloud solutions implementation using AWS services (Lambda, S3, SQS, EC2, Glue, Athena)",
        "RESTful API development for frontend-backend communication",
        "Performance optimization and debugging for improved system reliability",
        "Security implementation for data protection and system security",
        "Team collaboration for process optimization and high software quality"
      ],
      projects: [
        "Global News Dashboard",
        "Reveer CRM Platform",
        "NexusInclusion SaaS",
        "Zomm's Photography SaaS"
      ],
      technologies: ["Java", "Spring Boot", "AWS", "Selenium", "Cypress", "REST APIs"]
    },
    {
      title: "Web Developer",
      company: "EYSI",
      location: "Morocco",
      period: "April 2023 – June 2023",
      type: "Contract",
      description: [
        "Frontend development with HTML, CSS, and JavaScript",
        "Backend development using frameworks like Node.js and Django",
        "Database design and integration",
        "API development and integration",
        "Version control and deployment with Git",
        "Security measures implementation",
        "Responsive and user-friendly web application development"
      ],
      projects: ["Custom Web Applications", "API Integrations"],
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Django", "Git"]
    },
    {
      title: "Mathematics Teacher",
      company: "Schule Al Wissam",
      location: "Morocco",
      period: "October 2021 – March 2022",
      type: "Part-time",
      description: [
        "Promoted logical thinking and algorithmic approaches",
        "Conveyed problem-solving skills through mathematical modeling",
        "Supported development of analytical thinking",
        "Promoted abstraction skills and pattern recognition",
        "Guided error analysis and critical thinking"
      ],
      projects: ["Curriculum Development", "Student Mentoring"],
      technologies: ["Teaching", "Problem Solving", "Critical Thinking"]
    }
  ];

  return (
    <section id="experience" className="py-12 md:py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
            Work <span className="text-blue-600 dark:text-blue-400">Experience</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
            A journey through my professional career, showcasing key roles, responsibilities,
            and achievements in software development and technology.
          </p>
        </div>

        {/* Mobile-First Timeline Layout */}
        <div className="relative w-full">
          {/* Simple mobile layout - no complex timeline positioning */}
          <div className="md:hidden space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Mobile Card - Full Width */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 shadow-lg border dark:border-gray-700 mx-2">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 break-words">
                          {exp.title}
                        </h3>
                        <h4 className="text-base text-blue-600 dark:text-blue-400 font-semibold mb-2 break-words">
                          {exp.company}
                        </h4>
                      </div>
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs font-medium self-start flex-shrink-0">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex flex-col gap-2 text-gray-600 dark:text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-3 h-3 flex-shrink-0" />
                        <span className="text-xs break-words">{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-3 h-3 flex-shrink-0" />
                        <span className="text-xs">{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-1.5 text-gray-700 dark:text-gray-300">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <span className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1">•</span>
                          <span className="text-xs leading-relaxed break-words">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.projects.length > 0 && (
                      <div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2 text-xs">Key Projects:</h5>
                        <div className="flex flex-wrap gap-1">
                          {exp.projects.map((project, projectIndex) => (
                            <span
                              key={projectIndex}
                              className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 px-2 py-0.5 rounded-full text-xs break-words"
                            >
                              {project}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-2 text-xs">Technologies:</h5>
                      <div className="flex flex-wrap gap-1">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-0.5 rounded-md text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Timeline Layout */}
          <div className="hidden md:block relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-600 dark:bg-blue-400 transform -translate-x-1/2"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full transform -translate-x-1/2 mt-6 z-10"></div>

                  {/* Content Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border dark:border-gray-700">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {exp.title}
                          </h3>
                          <h4 className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-2">
                            {exp.company}
                          </h4>
                        </div>
                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                          {exp.type}
                        </span>
                      </div>

                      <div className="flex items-center space-x-4 mb-4 text-gray-600 dark:text-gray-400">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1.5">•</span>
                            <span className="text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>

                      {exp.projects.length > 0 && (
                        <div className="mb-6">
                          <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Key Projects:</h5>
                          <div className="flex flex-wrap gap-2">
                            {exp.projects.map((project, projectIndex) => (
                              <span
                                key={projectIndex}
                                className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 px-3 py-1 rounded-full text-sm"
                              >
                                {project}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Technologies:</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-lg text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;