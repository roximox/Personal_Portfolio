import React from 'react';
import { Globe } from 'lucide-react';

const Languages: React.FC = () => {
  const languages = [
    {
      name: "Arabic",
      level: "Native",
      proficiency: 100,
      flag: "🇲🇦"
    },
    {
      name: "German",
      level: "B2 (Professional)",
      proficiency: 85,
      flag: "🇩🇪"
    },
    {
      name: "English",
      level: "Fluent",
      proficiency: 95,
      flag: "🇺🇸"
    },
    {
      name: "French",
      level: "Fluent",
      proficiency: 90,
      flag: "🇫🇷"
    }
  ];

  const getProficiencyColor = (level: number) => {
    if (level >= 95) return "from-emerald-500 to-green-400";
    if (level >= 85) return "from-blue-500 to-cyan-400";
    if (level >= 75) return "from-yellow-500 to-orange-400";
    return "from-gray-500 to-gray-400";
  };

  return (
    <section id="languages" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="text-blue-600 dark:text-blue-400">Language</span> Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Multilingual communication abilities enabling effective collaboration 
            in international and diverse work environments.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {languages.map((language, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <span className="text-4xl">{language.flag}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {language.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {language.level}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {language.proficiency}%
                    </div>
                  </div>
                </div>

                {/* Progress Circle */}
                <div className="relative">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div
                      className={`bg-gradient-to-r ${getProficiencyColor(language.proficiency)} h-3 rounded-full transition-all duration-1000 ease-out`}
                      style={{ 
                        width: `${language.proficiency}%`,
                        animationDelay: `${index * 200}ms`
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 border-l-4 border-blue-600 dark:border-blue-400">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Global Communication
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                My multilingual abilities enable me to work effectively in international teams, 
                communicate with diverse stakeholders, and adapt to various cultural contexts in 
                the global technology landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;