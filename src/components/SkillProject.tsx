import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '../types';

interface SkillProjectProps {
  project: Project;
}

export function SkillProject({ project }: SkillProjectProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
      <div className="flex justify-between items-start mb-2">
        <h4 className="text-lg font-semibold">{project.name}</h4>
        <div className="flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
      <p className="text-gray-600 mb-3">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-gray-100 text-sm rounded-full text-gray-700"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}