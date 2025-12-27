import React, { useState, useEffect } from 'react';

export default function SanjiwaniLoader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          return 0; // Loop the animation
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="relative flex flex-col items-center">
        {/* Orbiting Dots Animation */}
        <div className="relative w-48 h-48 mb-8">
          {/* Center Phone Icon */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-32 bg-white rounded-2xl shadow-lg border-4 border-gray-800 flex items-center justify-center overflow-hidden">
            {/* Medical Cross with Hands */}
            <div className="relative">
              <svg width="60" height="60" viewBox="0 0 60 60" className="animate-pulse">
                {/* Red Cross */}
                <rect x="22" y="10" width="16" height="40" fill="#FF5A5F" rx="2"/>
                <rect x="10" y="22" width="40" height="16" fill="#FF5A5F" rx="2"/>
                
                {/* White Hand */}
                <path d="M 25 25 L 28 22 L 30 24 L 32 22 L 34 24 L 35 28 L 32 32 L 25 30 Z" 
                      fill="white" opacity="0.9"/>
                
                {/* Blue Hand */}
                <path d="M 35 35 L 32 38 L 30 36 L 28 38 L 26 36 L 25 32 L 28 28 L 35 30 Z" 
                      fill="#5DD3E8" opacity="0.9"/>
              </svg>
            </div>
            
            {/* Phone Details */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-300 rounded"></div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-10 border-2 border-gray-300 rounded-full"></div>
          </div>

          {/* Connection Lines */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-12 bg-gray-800 rounded" 
               style={{ left: '20%', top: '50%', transformOrigin: 'right center', transform: 'translate(-50%, -50%) rotate(-30deg)' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-12 bg-gray-800 rounded" 
               style={{ left: '80%', top: '50%', transformOrigin: 'left center', transform: 'translate(-50%, -50%) rotate(30deg)' }}></div>

          {/* Orbiting Dots */}
          {[0, 1, 2, 3, 4].map((index) => {
            const angle = (progress * 3.6 + index * 72) * (Math.PI / 180);
            const x = Math.cos(angle) * 90 + 96;
            const y = Math.sin(angle) * 90 + 96;
            const size = index % 2 === 0 ? 'w-5 h-5' : 'w-4 h-4';
            const color = index % 2 === 0 ? 'bg-red-500' : 'bg-gray-800';
            
            return (
              <div
                key={index}
                className={`absolute ${size} ${color} rounded-full transition-all duration-100 shadow-lg`}
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                  transform: 'translate(-50%, -50%)',
                }}
              />
            );
          })}
        </div>

        {/* Logo Text */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-gray-900 tracking-wide mb-1">
            SANJIWANI
          </h1>
          <h2 className="text-3xl font-light tracking-widest" style={{ color: '#5DD3E8' }}>
            HEALTH
          </h2>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden shadow-inner">
          <div 
            className="h-full bg-gradient-to-r from-red-500 to-red-400 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loading Text */}
        <p className="mt-4 text-gray-600 text-sm font-medium animate-pulse">
          Loading your health companion...
        </p>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}