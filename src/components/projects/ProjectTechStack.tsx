'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { useDarkMode } from '@/contexts/DarkModeContext';

interface ProjectTechStackProps {
  tech: string[];
  featured: boolean;
}

export function ProjectTechStack({ tech, featured }: ProjectTechStackProps) {
  const { darkMode } = useDarkMode();

  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-3">
        {tech.map((technology) => (
          <span
            key={technology}
            className={cn(
              "px-3 py-1 border-2 border-black font-bold text-sm",
              featured
                ? "bg-white text-black"
                : darkMode
                  ? "bg-black text-white"
                  : "bg-white text-black"
            )}
          >
            {technology}
          </span>
        ))}
      </div>
    </div>
  );
}
