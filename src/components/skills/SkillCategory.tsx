'use client';

import React from 'react';
import { SkillBadge } from './SkillBadge';
import { useDarkMode } from '@/contexts/DarkModeContext';

interface SkillCategoryProps {
  category: string;
  skills: string[];
}

export function SkillCategory({ category, skills }: SkillCategoryProps) {
  const { darkMode } = useDarkMode();

  return (
    <div className={`border-4 border-black p-8 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} shadow-[8px_8px_0px_0px_rgba(255,102,0,1)]`}>
      <h3 className="font-black text-xl mb-6 text-orange-600">{category}</h3>
      <div className="space-y-3">
        {skills.map((skill) => (
          <SkillBadge key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
}
