import React from 'react';
import { GraduationCap } from 'lucide-react';
import { TimelineItem } from './TimelineItem';

const academicHistory = [
  {
    year: "2025",
    title: "B. Sc. Management Engineering",
    institution: "Politecnico di Milano",
    description: "Completed my studies at the best university in Italy, 23rd worldwide."
  }
];

export function AcademicBackground() {
  return (
    <section id="academic" className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="max-w-6xl w-full py-20">
        <div className="flex items-center gap-3 mb-12">
          <GraduationCap className="w-8 h-8" />
          <h2 className="text-3xl font-bold">Academic Background</h2>
        </div>
        
        <div className="relative">
          {/* Horizontal Timeline line */}
          <div className="absolute left-0 right-0 top-24 h-1 bg-gray-200" />
          
          {/* Timeline items */}
          <div className="flex justify-between relative">
            {academicHistory.map((item, index) => (
              <TimelineItem
                key={item.year}
                item={item}
                index={index}
                total={academicHistory.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}