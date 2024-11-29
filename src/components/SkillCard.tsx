import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';
import { SkillProject } from './SkillProject';
import type { Skill } from '../types';

interface SkillCardProps {
  skill: Skill;
}

export function SkillCard({ skill }: SkillCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = skill.icon;

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="border border-gray-200 p-6 rounded-lg bg-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
      >
        <div className="flex items-center gap-3 mb-4">
          <Icon className="w-6 h-6" />
          <h3 className="text-xl font-semibold">{skill.category}</h3>
        </div>
        <ul className="space-y-2">
          {skill.items.map((item) => (
            <li key={item} className="text-gray-600">{item}</li>
          ))}
        </ul>
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-2xl w-full bg-white rounded-xl shadow-lg">
            <div className="relative p-6">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <Dialog.Title className="text-2xl font-bold mb-6 pr-8">
                {skill.category} Projects
              </Dialog.Title>

              <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
                {skill.projects?.map((project, index) => (
                  <SkillProject key={index} project={project} />
                ))}
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}