'use client';

import React from 'react';
import { useDarkMode } from '@/contexts/DarkModeContext';

interface SkillBadgeProps {
  skill: string;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  const { darkMode } = useDarkMode();

  return (
    <div className={`px-4 py-2 border-2 border-black font-bold ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
      {skill}
    </div>
  );
}
