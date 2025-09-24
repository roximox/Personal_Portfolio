import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Smartphone, Globe, Car, Camera, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const Projects: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

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

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      nextProject();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentProject, isAutoPlay]);

  const nextProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
      setIsAnimating(false);
    }, 300);
  };

  const goToProject = (index: number) => {
    if (isAnimating || index === currentProject) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentProject(index);
      setIsAnimating(false);
    }, 300);
  };

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

  const currentProjectData = projects[currentProject];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            A showcase of my professional work, personal projects, and academic achievements
            demonstrating my technical skills and problem-solving abilities.
          </p>

          {/* Project Counter & Auto-play Control */}
          <div className="flex items-center justify-center space-x-6 mb-8">
            <div className="text-gray-600 dark:text-gray-400 font-medium">
              {currentProject + 1} of {projects.length}
            </div>
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {isAutoPlay ? (
                <>
                  <Pause className="w-4 h-4" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  <span>Play</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Main Project Display */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevProject}
            disabled={isAnimating}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 p-4 bg-white dark:bg-gray-800 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed border dark:border-gray-700"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </button>

          <button
            onClick={nextProject}
            disabled={isAnimating}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 p-4 bg-white dark:bg-gray-800 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed border dark:border-gray-700"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </button>

          {/* Project Card */}
          <div className={`
            bg-gray-50 dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl border dark:border-gray-700
            transition-all duration-500 transform
            ${isAnimating ? 'opacity-70 scale-95' : 'opacity-100 scale-100'}
          `}>
            {/* Project Image */}
            <div className="relative h-80 lg:h-96 overflow-hidden">
              <img
                src={currentProjectData.image}
                alt={currentProjectData.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Project Icon */}
              <div className="absolute top-6 left-6 p-4 bg-white/90 dark:bg-gray-800/90 rounded-xl text-blue-600 dark:text-blue-400 backdrop-blur-sm">
                {currentProjectData.icon}
              </div>

              {/* Status Badge */}
              <div className="absolute top-6 right-6">
                <span className={`px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm ${getStatusColor(currentProjectData.status)}`}>
                  {currentProjectData.status}
                </span>
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {currentProjectData.title}
                </h3>
                <p className="text-blue-200 font-medium text-lg">
                  {currentProjectData.category}
                </p>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-8 lg:p-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                {currentProjectData.description}
              </p>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-gray-900 dark:text-white font-semibold mb-4 text-lg">Technologies Used</h4>
                <div className="flex flex-wrap gap-3">
                  {currentProjectData.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl text-sm font-medium border border-blue-100 dark:border-blue-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl transition-all duration-300 font-semibold transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <ExternalLink className="w-5 h-5" />
                  <span>View Details</span>
                </button>

                {currentProjectData.status !== 'Professional' && (
                  <button className="flex items-center justify-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white px-8 py-4 rounded-xl transition-all duration-300 font-semibold transform hover:scale-105 shadow-lg hover:shadow-xl">
                    <Github className="w-5 h-5" />
                    <span>View Code</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Project Indicators */}
        <div className="flex justify-center space-x-3 mt-12">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              disabled={isAnimating}
              className={`
                w-4 h-4 rounded-full transition-all duration-300 transform hover:scale-125 disabled:cursor-not-allowed
                ${index === currentProject
                  ? 'bg-blue-600 dark:bg-blue-400 scale-125'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }
              `}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-8 max-w-md mx-auto">
          <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${((currentProject + 1) / projects.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;