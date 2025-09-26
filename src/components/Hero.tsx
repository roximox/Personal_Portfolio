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
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden px-4 sm:px-6">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221.5%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
            <div className="animate-fade-in-up space-y-4 sm:space-y-6">
              <h1 className="text-2xl sm:text-3xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                <span className="text-blue-600 dark:text-blue-400">Yassine</span>
                <br />
                <span className="text-gray-700 dark:text-gray-300">Elhari</span>
              </h1>

              <h2 className="text-lg sm:text-xl lg:text-3xl text-gray-600 dark:text-gray-400 font-light">
                Java & AWS Developer
              </h2>

              <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                Passionate developer specializing in scalable web applications and cloud-based solutions.
                Building innovative digital experiences with Java, Spring Boot, and AWS.
              </p>

              {/* Contact Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <a
                  href="mailto:harriyassine@gmail.com"
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 text-sm sm:text-base"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Email Me</span>
                </a>

                <a
                  href="tel:+49-1575-8031-812"
                  className="flex items-center justify-center space-x-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-white dark:hover:bg-gray-800 px-6 sm:px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 text-sm sm:text-base"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Call Me</span>
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Gießen, Germany</span>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="lg:w-1/2 flex justify-center order-1 lg:order-2 mb-6 lg:mb-0">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 sm:border-6 lg:border-8 border-white dark:border-gray-700 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src={profilePic}
                  alt="Yassine Elhari - Professional Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-blue-600 dark:bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-emerald-500 dark:bg-emerald-400 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="animate-bounce text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 p-2 hover:bg-white/10 dark:hover:bg-gray-800/20 rounded-full backdrop-blur-sm"
            aria-label="Scroll to about section"
          >
            <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;