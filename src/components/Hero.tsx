import React from 'react';
import { Mail, Phone, MapPin, ChevronDown } from 'lucide-react';
import profilePic from '../assets/profile_pic.jpeg';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221.5%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <div className="animate-fade-in-up">
              <h1 className="sm:text-2xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                <span className="text-blue-600 dark:text-blue-400">Yassine</span>
                <br />
                <span className="text-gray-700 dark:text-gray-300">Elhari</span>
              </h1>
              
              <h2 className="text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 mb-4 font-light">
                Java & AWS Developer
              </h2>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
                Passionate developer specializing in scalable web applications and cloud-based solutions. 
                Building innovative digital experiences with Java, Spring Boot, and AWS.
              </p>

              {/* Contact Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a
                  href="mailto:harriyassine@gmail.com"
                  className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Me</span>
                </a>
                
                <a
                  href="tel:+49-1575-8031-812"
                  className="flex items-center justify-center space-x-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Me</span>
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-600 dark:text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>Gießen, Germany</span>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white dark:border-gray-700 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src={profilePic}
                  alt="Yassine Elhari - Professional Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-600 dark:bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-emerald-500 dark:bg-emerald-400 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="animate-bounce text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            aria-label="Scroll to about section"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;