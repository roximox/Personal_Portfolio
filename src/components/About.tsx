import React from 'react';
import { Award, Users, Code, Globe } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "3+ Years Experience",
      description: "Full-stack development and cloud solutions"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Multiple Certifications",
      description: "AWS, Java, and professional development courses"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "Experience in agile teams and mentoring"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Multilingual",
      description: "Fluent in German, English, French, and Arabic"
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left Content - Image */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="relative">
              <div className="w-full max-w-sm sm:max-w-md mx-auto">
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Yassine Elhari - About"
                  className="w-full h-72 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-600/20 to-transparent"></div>

                {/* Decorative Elements */}
                <div className="absolute -z-10 -top-4 -left-4 w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl"></div>
              </div>
            </div>
          </div>

          {/* Right Content - Text */}
          <div className="lg:w-1/2 order-1 lg:order-2 text-center lg:text-left">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                About <span className="text-blue-600 dark:text-blue-400">Me</span>
              </h2>

              <div className="space-y-4 sm:space-y-6 text-gray-600 dark:text-gray-400 mb-6 sm:mb-8">
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                  I am Yassine Elhari, a passionate Java and AWS Developer with strong expertise in building
                  scalable web applications and cloud-based solutions. During my professional experience at Stryve,
                  I contributed to innovative projects such as the Global News Dashboard, NexusInclusion accessibility
                  platform, and CRM systems.
                </p>

                <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                  I developed personal projects like a Travel & Photography booking platform,
                  PickMeUp (a ride-hailing mobile app similar to inDrive), and Unzicar, a car rental agency website.
                </p>

                <p className="text-sm sm:text-base lg:text-lg leading-relaxed font-medium text-gray-700 dark:text-gray-300">
                  My goal is to combine strong technical skills, creativity, and problem-solving to deliver
                  impactful digital solutions that make a difference in people's lives.
                </p>
              </div>

              {/* Achievements Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="group flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-800 dark:to-gray-800/50 backdrop-blur-sm rounded-xl hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-700 dark:hover:to-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-gray-200/50 dark:border-gray-700/50"
                  >
                    <div className="text-blue-600 dark:text-blue-400 mt-1 group-hover:scale-110 transition-transform duration-300">
                      {React.cloneElement(achievement.icon, { className: "w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" })}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm sm:text-base group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                        {achievement.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;