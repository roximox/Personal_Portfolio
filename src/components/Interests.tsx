import React from 'react';
import { BookOpen, Users, Waves, Plane } from 'lucide-react';

const Interests: React.FC = () => {
  const interests = [
    {
      name: "Reading",
      icon: <BookOpen className="w-8 h-8" />,
      description: "Continuous learning through technical books and industry publications",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Networking",
      icon: <Users className="w-8 h-8" />,
      description: "Building professional relationships and community connections",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Swimming",
      icon: <Waves className="w-8 h-8" />,
      description: "Staying active and maintaining physical fitness",
      color: "from-teal-500 to-blue-500"
    },
    {
      name: "Traveling",
      icon: <Plane className="w-8 h-8" />,
      description: "Exploring new cultures and gaining diverse perspectives",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="interests" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Personal <span className="text-blue-600 dark:text-blue-400">Interests</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Beyond coding and development, I enjoy various activities that contribute to 
            personal growth and work-life balance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-4 border dark:border-gray-700 text-center"
            >
              {/* Icon with Gradient Background */}
              <div className="relative mb-6">
                <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${interest.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                    <div className={`text-transparent bg-gradient-to-r ${interest.color} bg-clip-text`}>
                      {interest.icon}
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {interest.name}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {interest.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 border dark:border-gray-600">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Philosophy & Approach
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              I believe in maintaining a balanced lifestyle that combines technical excellence with 
              personal growth. My diverse interests help me bring fresh perspectives to problem-solving 
              and foster creativity in my development work. Whether it's learning from books, 
              connecting with fellow professionals, staying physically active, or exploring new places, 
              each experience contributes to my effectiveness as a developer and team member.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;