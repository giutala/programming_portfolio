import React from 'react';

export function CatIllustration() {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
      <img 
        src="assets\firstpic.jpg" 
        alt="Illustration of a cat" 
        className="w-full h-full object-cover"
      />
    </div>
  );
}