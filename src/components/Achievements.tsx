import React from 'react';
import { Award, BookOpen, Trophy } from 'lucide-react';

const achievements = [
  {
    title: "Research Publications",
    description: "Published 5 papers in top-tier AI conferences",
    icon: BookOpen
  },
  {
    title: "Industry Impact",
    description: "Developed ML models with 40% improved accuracy",
    icon: Trophy
  },
  {
    title: "Recognition",
    description: "Best Paper Award at AI Summit 2023",
    icon: Award
  }
];

export function Achievements() {
  return (
    <section id="achievements" className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl w-full py-20">
        <h2 className="text-3xl font-bold mb-12">Notable Achievements</h2>
        <div className="space-y-8">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <div key={achievement.title} 
                   className="flex items-start gap-6 p-6 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Icon className="w-8 h-8 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}