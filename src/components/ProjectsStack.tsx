import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Smartphone, Globe, Car, Camera, ChevronDown, ChevronUp } from 'lucide-react';

const ProjectsStack: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "Global News Dashboard",
      category: "Professional Project",
      description: "A comprehensive news aggregation platform built during my time at Stryve. Features real-time data processing, AWS integration, and responsive design with advanced filtering capabilities.",
      technologies: ["Java", "Spring Boot", "AWS", "React", "PostgreSQL"],
      icon: <Globe className="w-12 h-12" />,
      image: "https://images.pexels.com/photos/97050/pexels-photo-97050.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Professional",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      title: "NexusInclusion SaaS",
      category: "Accessibility Platform",
      description: "An accessibility platform developed as a SaaS solution. Integrated tools like Jira, Microsoft Teams, and Slack using AWS Lambda and API Gateway for seamless workflow automation.",
      technologies: ["Java", "Spring Boot", "AWS Lambda", "API Gateway", "React"],
      icon: <Globe className="w-12 h-12" />,
      image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Professional",
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      title: "PickMeUp",
      category: "Mobile Application",
      description: "A ride-hailing mobile app similar to inDrive, built with Spring Boot backend and React Native frontend. Features real-time location tracking, payment integration, and driver-rider matching algorithms.",
      technologies: ["Spring Boot", "React Native", "MySQL", "Firebase", "Google Maps API"],
      icon: <Smartphone className="w-12 h-12" />,
      image: "https://images.pexels.com/photos/1029896/pexels-photo-1029896.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Personal",
      gradient: "from-orange-600 to-red-600"
    },
    {
      title: "Zomm's Photography SaaS",
      category: "Business Platform",
      description: "A modern SaaS solution for photography and travel services. Includes admin dashboard, booking system, automated email reminders, QR code generation, and client management portal.",
      technologies: ["Java", "Spring Boot", "Angular", "AWS", "PostgreSQL"],
      icon: <Camera className="w-12 h-12" />,
      image: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Professional",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Unzicar",
      category: "Car Rental System",
      description: "A comprehensive car rental agency website with booking management, customer portal, administrative features, and fleet management. Built as a university project with modern design principles.",
      technologies: ["Java", "Spring", "Angular", "MySQL", "Bootstrap"],
      icon: <Car className="w-12 h-12" />,
      image: "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Academic",
      gradient: "from-indigo-600 to-blue-600"
    },
    {
      title: "Travel & Photography Platform",
      category: "Booking System",
      description: "A travel and photography booking platform with integrated payment processing, gallery management, customer communication tools, and advanced search filtering for destinations and photographers.",
      technologies: ["Java", "Spring Boot", "React", "Stripe API", "AWS S3"],
      icon: <Camera className="w-12 h-12" />,
      image: "https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Personal",
      gradient: "from-teal-600 to-cyan-600"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Professional':
        return 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-700';
      case 'Personal':
        return 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 border-emerald-200 dark:border-emerald-700';
      case 'Academic':
        return 'bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 border-purple-200 dark:border-purple-700';
      default:
        return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-200 dark:border-gray-600';
    }
  };

  const nextProject = () => {
    if (isTransitioning || currentProject >= projects.length - 1) return;
    setIsTransitioning(true);
    setScrollDirection('down');
    setTimeout(() => {
      setCurrentProject(prev => prev + 1);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 600);
  };

  const prevProject = () => {
    if (isTransitioning || currentProject <= 0) return;
    setIsTransitioning(true);
    setScrollDirection('up');
    setTimeout(() => {
      setCurrentProject(prev => prev - 1);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 600);
  };

  // Handle touch events for mobile swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isUpSwipe = distance > 50;
    const isDownSwipe = distance < -50;

    if (isUpSwipe && !isTransitioning) {
      nextProject();
    } else if (isDownSwipe && !isTransitioning) {
      prevProject();
    }
  };

  // Handle wheel scroll - enforce viewing all projects before continuing
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Only handle scroll if the section is prominently visible (more than 50% in view)
      const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
      const visibilityRatio = visibleHeight / viewportHeight;

      if (visibilityRatio < 0.5) return; // Let normal scroll happen

      const atFirstProject = currentProject === 0;
      const atLastProject = currentProject === projects.length - 1;

      if (e.deltaY > 0) {
        // Scrolling down
        if (!atLastProject && !isTransitioning) {
          // Navigate to next project
          e.preventDefault();
          nextProject();
        } else if (atLastProject) {
          // At last project, allow continuing to next section
          return; // Let normal scroll happen
        }
      } else if (e.deltaY < 0) {
        // Scrolling up
        if (!atFirstProject && !isTransitioning) {
          // Navigate to previous project
          e.preventDefault();
          prevProject();
        } else if (atFirstProject) {
          // At first project, allow going to previous section
          return; // Let normal scroll happen
        }
      }
    };

    // Add listener to document to catch all scroll events
    document.addEventListener('wheel', handleWheel, { passive: false });
    return () => document.removeEventListener('wheel', handleWheel);
  }, [currentProject, isTransitioning, projects.length]);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="min-h-screen bg-gray-50 dark:bg-gray-900 relative"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Header */}
      <div className="relative z-20 pt-16 md:pt-20 pb-4 md:pb-8 text-center px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
          Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          A showcase of my professional work, personal projects, and academic achievements
        </p>
      </div>

      {/* Projects Stack Container */}
      <div className="relative h-[70vh] md:h-[80vh] perspective-1000">
        {projects.map((project, index) => {
          const offset = index - currentProject;
          const isVisible = Math.abs(offset) <= 2;

          if (!isVisible) return null;

          return (
            <div
              key={index}
              className={`absolute inset-0 mx-4 md:mx-6 lg:mx-12 transition-all duration-1000 ease-in-out ${
                isTransitioning ? 'duration-800' : ''
              }`}
              style={{
                transform: `
                  translateY(${offset * 20}px)
                  translateZ(${-Math.abs(offset) * 100}px)
                  scale(${1 - Math.abs(offset) * 0.05})
                  rotateX(${offset * 2}deg)
                `,
                zIndex: 10 - Math.abs(offset),
                opacity: offset === 0 ? 1 : Math.max(0.3, 1 - Math.abs(offset) * 0.3),
              }}
            >
              {/* Project Card */}
              <div className={`h-full bg-white dark:bg-gray-800 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border dark:border-gray-700 ${
                offset === 0 ? 'ring-2 ring-blue-500/20' : ''
              }`}>
                <div className="h-full flex flex-col md:flex-row">
                  {/* Image Section */}
                  <div className="md:w-1/2 relative overflow-hidden h-48 md:h-auto">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Floating Icon */}
                    <div className="absolute top-4 left-4 md:top-8 md:left-8 p-2 md:p-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl md:rounded-2xl text-blue-600 dark:text-blue-400">
                      <div className="w-6 h-6 md:w-12 md:h-12">
                        {React.cloneElement(project.icon, { className: "w-full h-full" })}
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4 md:top-8 md:right-8">
                      <span className={`px-2 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold backdrop-blur-sm border ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:bg-gradient-to-r"></div>
                  </div>

                  {/* Content Section */}
                  <div className="md:w-1/2 p-4 md:p-8 lg:p-12 flex flex-col justify-center">
                    <div className="space-y-4 md:space-y-6">
                      <div>
                        <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3">
                          {project.title}
                        </h3>
                        <p className="text-sm md:text-lg text-blue-600 dark:text-blue-400 font-semibold">
                          {project.category}
                        </p>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 text-sm md:text-lg leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-gray-900 dark:text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Technologies</h4>
                        <div className="flex flex-wrap gap-2 md:gap-3">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 md:px-4 md:py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg md:rounded-xl text-xs md:text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
                        <button className={`flex items-center justify-center space-x-2 md:space-x-3 bg-gradient-to-r ${project.gradient} text-white px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 text-sm md:text-base`}>
                          <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                          <span>View Project</span>
                        </button>

                        {project.status !== 'Professional' && (
                          <button className="flex items-center justify-center space-x-2 md:space-x-3 bg-gray-600 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 text-sm md:text-base">
                            <Github className="w-4 h-4 md:w-5 md:h-5" />
                            <span>View Code</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-3 md:space-x-6">
          {/* Previous Button */}
          <button
            onClick={prevProject}
            disabled={currentProject === 0 || isTransitioning}
            className="p-2 md:p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl transition-all duration-300 hover:scale-110 border dark:border-gray-700"
          >
            <ChevronUp className="w-4 h-4 md:w-6 md:h-6 text-gray-600 dark:text-gray-400" />
          </button>

          {/* Project Counter */}
          <div className="bg-white dark:bg-gray-800 px-3 py-2 md:px-6 md:py-3 rounded-full shadow-lg border dark:border-gray-700">
            <div className="text-center">
              <span className="text-xs md:text-sm font-semibold text-gray-900 dark:text-white">
                {currentProject + 1} / {projects.length}
              </span>
              {currentProject < projects.length - 1 && (
                <div className="text-xs text-blue-600 dark:text-blue-400 mt-1 hidden md:block">
                  {projects.length - currentProject - 1} more to unlock
                </div>
              )}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextProject}
            disabled={currentProject === projects.length - 1 || isTransitioning}
            className="p-2 md:p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl transition-all duration-300 hover:scale-110 border dark:border-gray-700"
          >
            <ChevronDown className="w-4 h-4 md:w-6 md:h-6 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>

      {/* Project Indicators - Hidden on small screens */}
      <div className="hidden md:flex absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20">
        <div className="flex flex-col space-y-3">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning && index !== currentProject) {
                  setIsTransitioning(true);
                  setScrollDirection(index > currentProject ? 'down' : 'up');
                  setTimeout(() => {
                    setCurrentProject(index);
                    setTimeout(() => {
                      setIsTransitioning(false);
                    }, 100);
                  }, 600);
                }
              }}
              disabled={isTransitioning}
              className={`w-2 h-6 md:w-3 md:h-8 rounded-full transition-all duration-300 ${
                index === currentProject
                  ? 'bg-blue-600 dark:bg-blue-400 scale-125'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              } disabled:cursor-not-allowed`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-16 md:bottom-4 left-1/2 transform -translate-x-1/2 z-10 opacity-60">
        <div className="flex flex-col items-center text-gray-500 dark:text-gray-400">
          {currentProject < projects.length - 1 ? (
            <>
              <span className="text-xs font-medium mb-1 text-center px-2">
                <span className="hidden md:inline">Scroll to explore all projects</span>
                <span className="md:hidden">Swipe or use buttons to explore</span>
              </span>
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </>
          ) : (
            <>
              <span className="text-xs font-medium mb-1 text-green-600 dark:text-green-400 text-center px-2">
                ✓ All projects viewed - <span className="hidden md:inline">Scroll</span><span className="md:hidden">Swipe</span> to continue
              </span>
              <ChevronDown className="w-4 h-4 animate-bounce text-green-600 dark:text-green-400" />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsStack;