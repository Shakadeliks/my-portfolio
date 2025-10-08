import React from 'react';
import { SkillBadge } from './SkillBadge';

interface SkillCategoryProps {
  category: string;
  skills: string[];
}

export function SkillCategory({ category, skills }: SkillCategoryProps) {
  return (
    <div className="border-4 border-black p-8 bg-white text-black dark:bg-black dark:text-white shadow-[8px_8px_0px_0px_rgba(255,102,0,1)]">
      <h3 className="font-black text-xl mb-6 text-orange-600">{category}</h3>
      <div className="space-y-3">
        {skills.map((skill) => (
          <SkillBadge key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
}
