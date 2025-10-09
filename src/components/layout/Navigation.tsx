'use client';

import React from 'react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { personalInfo } from '@/data/personal';
import { useDarkMode } from '@/contexts/DarkModeContext';

export function Navigation() {
  const { darkMode } = useDarkMode();

  return (
    <nav className={`fixed top-0 w-full z-50 border-b-4 border-black ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="font-black text-2xl tracking-tight">{personalInfo.name}</div>
          <div className="flex items-center space-x-6">
            <a
              href="#projects"
              className="font-bold text-lg hover:text-orange-600 transition-colors uppercase tracking-wide"
            >
              PROJECTS
            </a>
            <a
              href="#contact"
              className="font-bold text-lg hover:text-orange-600 transition-colors uppercase tracking-wide"
            >
              CONTACT
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
