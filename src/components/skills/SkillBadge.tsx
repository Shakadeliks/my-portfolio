import React from 'react';

interface SkillBadgeProps {
  skill: string;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <div className="px-4 py-2 border-2 border-black font-bold bg-black text-white dark:bg-white dark:text-black">
      {skill}
    </div>
  );
}
