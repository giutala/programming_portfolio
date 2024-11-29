import React from 'react';

export function CatIllustration() {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] perspective-1000">
      <div className="cat-container absolute inset-0 transform-style-preserve-3d animate-float">
        {/* Cat Body */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-32 bg-black rounded-[100px] transform-style-preserve-3d shadow-2xl" style={{ transform: 'rotateX(10deg) rotateY(-20deg)' }}>
          {/* Cat Head */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-28 bg-black rounded-full">
            {/* Ears */}
            <div className="absolute -top-4 -left-2 w-8 h-12 bg-black transform rotate-[-30deg] clip-path-triangle"></div>
            <div className="absolute -top-4 -right-2 w-8 h-12 bg-black transform rotate-[30deg] clip-path-triangle"></div>
            {/* Eyes */}
            <div className="absolute top-8 left-6 w-4 h-8 bg-amber-400 rounded-full transform rotate-[15deg]"></div>
            <div className="absolute top-8 right-6 w-4 h-8 bg-amber-400 rounded-full transform rotate-[-15deg]"></div>
          </div>
          {/* Tail */}
          <div className="absolute -right-16 top-1/2 w-24 h-8 bg-black rounded-full transform origin-left animate-tail-wave"></div>
        </div>
      </div>
    </div>
  );
}