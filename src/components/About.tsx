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
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content - Image */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Yassine Elhari - About"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Right Content - Text */}
          <div className="lg:w-1/2">
            <div className="max-w-2xl">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                About <span className="text-blue-600 dark:text-blue-400">Me</span>
              </h2>
              
              <div className="prose prose-lg text-gray-600 dark:text-gray-400 mb-8">
                <p className="mb-6">
                  I am Yassine Elhari, a passionate Java and AWS Developer with strong expertise in building 
                  scalable web applications and cloud-based solutions. During my professional experience at Stryve, 
                  I contributed to innovative projects such as the Global News Dashboard, NexusInclusion accessibility 
                  platform, and CRM systems, focusing on backend development, APIs, and AWS integrations.
                </p>
                
                <p className="mb-6">
                  In addition, I developed personal projects like a Travel & Photography booking platform, 
                  PickMeUp (a ride-hailing mobile app similar to inDrive built with Spring Boot & React Native), 
                  and Unzicar, a car rental agency website.
                </p>
                
                <p>
                  My goal is to combine strong technical skills, creativity, and problem-solving to deliver 
                  impactful digital solutions that make a difference in people's lives.
                </p>
              </div>

              {/* Achievements Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="text-blue-600 dark:text-blue-400 mt-1">
                      {achievement.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
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