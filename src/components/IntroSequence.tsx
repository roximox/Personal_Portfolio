import React, { useState, useEffect } from 'react';

interface IntroSequenceProps {
  onComplete: () => void;
}

const IntroSequence: React.FC<IntroSequenceProps> = ({ onComplete }) => {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [showName, setShowName] = useState(false);
  const [animationPhase, setAnimationPhase] = useState<'greeting' | 'name' | 'fadeOut'>('greeting');

  const greetings = [
    { text: 'Hello', language: 'English' },
    { text: 'Bonjour', language: 'Français' },
    { text: 'Hola', language: 'Español' },
    { text: 'Hallo', language: 'Deutsch' },
    { text: 'مرحبا', language: 'العربية' },
    { text: 'こんにちは', language: '日本語' },
    { text: 'Ciao', language: 'Italiano' },
    { text: 'Olá', language: 'Português' }
  ];

  useEffect(() => {
    if (animationPhase === 'greeting') {
      if (currentGreeting < greetings.length - 1) {
        const timer = setTimeout(() => {
          setCurrentGreeting(prev => prev + 1);
        }, 800);
        return () => clearTimeout(timer);
      } else {
        // After showing all greetings, transition to name
        const timer = setTimeout(() => {
          setAnimationPhase('name');
          setShowName(true);
        }, 1200);
        return () => clearTimeout(timer);
      }
    } else if (animationPhase === 'name') {
      // Show name for a bit, then fade out
      const timer = setTimeout(() => {
        setAnimationPhase('fadeOut');
      }, 2500);
      return () => clearTimeout(timer);
    } else if (animationPhase === 'fadeOut') {
      // Complete the intro sequence
      const timer = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [currentGreeting, animationPhase, greetings.length, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[10000] flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 transition-all duration-1000 ${
        animationPhase === 'fadeOut' ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative text-center">
        {/* Greetings Animation */}
        {animationPhase === 'greeting' && (
          <div className="relative h-32 flex items-center justify-center">
            {greetings.map((greeting, index) => (
              <div
                key={index}
                className={`absolute transition-all duration-700 ease-out ${
                  index === currentGreeting
                    ? 'opacity-100 scale-100 translate-y-0'
                    : index < currentGreeting
                    ? 'opacity-0 scale-75 -translate-y-8'
                    : 'opacity-0 scale-125 translate-y-8'
                }`}
              >
                <h1 className="text-6xl md:text-8xl font-bold text-white mb-2 tracking-tight">
                  {greeting.text}
                </h1>
                <p className="text-blue-200 text-lg font-medium tracking-widest">
                  {greeting.language}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Name Animation */}
        {(animationPhase === 'name' || animationPhase === 'fadeOut') && (
          <div className={`transition-all duration-1000 ease-out ${
            showName ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-8'
          }`}>
            <div className="relative">
              {/* Typewriter effect for name */}
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                <span className="inline-block overflow-hidden">
                  <span className={`inline-block transition-all duration-1500 ease-out ${
                    showName ? 'animate-typewriter' : ''
                  }`}>
                    Yassine Elhari
                  </span>
                  <span className={`inline-block w-1 h-16 md:h-20 bg-blue-400 ml-2 ${
                    showName ? 'animate-blink' : 'opacity-0'
                  }`}></span>
                </span>
              </h1>

              <div className={`transition-all duration-1000 delay-500 ${
                showName ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <p className="text-xl md:text-2xl text-blue-200 font-medium mb-2">
                  Java & AWS Developer
                </p>
                <p className="text-blue-300 text-lg">
                  Building scalable solutions
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Progress Indicator */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            {greetings.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index <= currentGreeting && animationPhase === 'greeting'
                    ? 'bg-blue-400 scale-125'
                    : animationPhase !== 'greeting'
                    ? 'bg-blue-600'
                    : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Skip Button */}
      <button
        onClick={onComplete}
        className="absolute top-8 right-8 text-blue-200 hover:text-white transition-colors duration-300 text-sm tracking-wider"
      >
        SKIP →
      </button>
    </div>
  );
};

export default IntroSequence;