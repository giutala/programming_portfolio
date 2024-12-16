import React from 'react';
import { Code2, Database, Brain, BarChart } from 'lucide-react';
import { SkillCard } from './SkillCard';
import { skillsData } from '../data/skillsData';

export function Skills() {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="max-w-4xl w-full py-20">
        <h2 className="text-3xl font-bold mb-12">Technical Expertise</h2>
        <p className="text-gray-500 text-sm">Click on the box for examples.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((skill) => (
            <SkillCard key={skill.category} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}