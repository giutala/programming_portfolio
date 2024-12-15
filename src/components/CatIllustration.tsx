import React from 'react';
import firstpicUrl from '../../assets/firstpic.jpg'

export function CatIllustration() {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
      <img
        src={firstpicUrl}
        alt="An illustration of a woman working with digital data"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
