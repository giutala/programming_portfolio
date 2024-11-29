import { LucideIcon } from 'lucide-react';

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

export interface Skill {
  category: string;
  items: string[];
  icon: LucideIcon;
  projects?: Project[];
}