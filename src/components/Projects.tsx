import React from 'react';
import { ExternalLink, Github, Smartphone, Globe, Car, Camera } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Global News Dashboard",
      category: "Professional Project",
      description: "A comprehensive news aggregation platform built during my time at Stryve. Features real-time data processing, AWS integration, and responsive design.",
      technologies: ["Java", "Spring Boot", "AWS", "React", "PostgreSQL"],
      icon: <Globe className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/97050/pexels-photo-97050.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Professional"
    },
    {
      title: "NexusInclusion SaaS",
      category: "Accessibility Platform",
      description: "An accessibility platform developed as a SaaS solution. Integrated tools like Jira, Microsoft Teams, and Slack using AWS Lambda and API Gateway.",
      technologies: ["Java", "Spring Boot", "AWS Lambda", "API Gateway", "React"],
      icon: <Globe className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Professional"
    },
    {
      title: "PickMeUp",
      category: "Mobile Application",
      description: "A ride-hailing mobile app similar to inDrive, built with Spring Boot backend and React Native frontend. Features real-time location tracking and payment integration.",
      technologies: ["Spring Boot", "React Native", "MySQL", "Firebase", "Google Maps API"],
      icon: <Smartphone className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/1029896/pexels-photo-1029896.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Personal"
    },
    {
      title: "Zomm's Photography SaaS",
      category: "Business Platform",
      description: "A modern SaaS solution for photography and travel services. Includes admin dashboard, booking system, automated email reminders, and QR code generation.",
      technologies: ["Java", "Spring Boot", "Angular", "AWS", "PostgreSQL"],
      icon: <Camera className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Professional"
    },
    {
      title: "Unzicar",
      category: "Car Rental System",
      description: "A comprehensive car rental agency website with booking management, customer portal, and administrative features. Built as a university project.",
      technologies: ["Java", "Spring", "Angular", "MySQL", "Bootstrap"],
      icon: <Car className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Academic"
    },
    {
      title: "Travel & Photography Platform",
      category: "Booking System",
      description: "A travel and photography booking platform with integrated payment processing, gallery management, and customer communication tools.",
      technologies: ["Java", "Spring Boot", "React", "Stripe API", "AWS S3"],
      icon: <Camera className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Personal"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Professional':
        return 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200';
      case 'Personal':
        return 'bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200';
      case 'Academic':
        return 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200';
      default:
        return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200';
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my professional work, personal projects, and academic achievements
            demonstrating my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border dark:border-gray-700 group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                {/* Project Icon */}
                <div className="absolute top-4 left-4 p-3 bg-white/90 dark:bg-gray-800/90 rounded-lg text-blue-600 dark:text-blue-400">
                  {project.icon}
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                    {project.category}
                  </p>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-lg text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm">
                    <ExternalLink className="w-4 h-4" />
                    <span>View Details</span>
                  </button>

                  {project.status !== 'Professional' && (
                    <button className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm">
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;