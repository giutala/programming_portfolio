import React from 'react';

interface TimelineItemProps {
  item: {
    year: string;
    title: string;
    institution: string;
    description: string;
  };
  index: number;
  total: number;
}

export function TimelineItem({ item, index, total }: TimelineItemProps) {
  const isEven = index % 2 === 0;
  
  return (
    <div className="relative flex-1 px-4">
      {/* Timeline dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-24 w-4 h-4 bg-black rounded-full z-10" />
      
      {/* Content */}
      <div className={`relative ${isEven ? 'pt-36' : 'pt-4'}`}>
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm
          transform transition-all duration-300 hover:scale-105 hover:shadow-md">
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-6">
            <span className="inline-block px-4 py-2 bg-black text-white text-sm rounded-full font-medium">
              {item.year}
            </span>
          </div>
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <h4 className="text-gray-600 mb-3">{item.institution}</h4>
          <p className="text-gray-500 text-sm">{item.description}</p>
        </div>
      </div>
    </div>
  );
}