import React, { useState, useEffect } from 'react';
import { Globe, X } from 'lucide-react';

interface LanguagePopupProps {
  isOpen: boolean;
  onClose: (selectedLanguage: string) => void;
}

const LanguagePopup: React.FC<LanguagePopupProps> = ({ isOpen, onClose }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const languages = [
    {
      code: 'en',
      name: 'English',
      flag: '🇺🇸',
      native: 'English'
    },
    {
      code: 'fr',
      name: 'French',
      flag: '🇫🇷',
      native: 'Français'
    },
    {
      code: 'de',
      name: 'German',
      flag: '🇩🇪',
      native: 'Deutsch'
    },
    {
      code: 'ar',
      name: 'Arabic',
      flag: '🇲🇦',
      native: 'العربية'
    }
  ];

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen]);

  const handleLanguageSelect = (language: any) => {
    setSelectedLanguage(language.code);
    setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onClose(language.code), 300);
    }, 200);
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose('en'), 300);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
      />

      {/* Popup Container */}
      <div className={`
        relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full mx-4
        transition-all duration-700 ease-out transform
        ${isVisible
          ? 'opacity-100 scale-100 translate-y-0'
          : 'opacity-0 scale-95 translate-y-8'
        }
      `}>
        {/* Header */}
        <div className="text-center p-8 pb-6 border-b border-gray-100 dark:border-gray-700">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
            <Globe className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome to My Portfolio
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Choose your preferred language to continue
          </p>

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Language Options */}
        <div className="p-6">
          <div className="space-y-3">
            {languages.map((language, index) => (
              <button
                key={language.code}
                onClick={() => handleLanguageSelect(language)}
                className={`
                  w-full flex items-center p-4 rounded-2xl transition-all duration-300 group
                  hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50
                  dark:hover:from-blue-900/20 dark:hover:to-purple-900/20
                  hover:shadow-md hover:scale-[1.02]
                  border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-700
                  ${selectedLanguage === language.code ? 'ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-900/20' : ''}
                  animation-delay-${index * 100}ms animate-fade-in-up
                `}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <span className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  {language.flag}
                </span>
                <div className="flex-1 text-left">
                  <div className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {language.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors duration-300">
                    {language.native}
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600 group-hover:border-blue-500 transition-colors duration-300 flex items-center justify-center">
                  {selectedLanguage === language.code && (
                    <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 pb-6">
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <Globe className="w-4 h-4" />
            <span>Yassine Elhari - Portfolio</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguagePopup;