'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useDarkMode } from '@/contexts/DarkModeContext';

export function ThemeToggle() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className={`p-3 border-4 border-black font-bold transition-colors ${
        darkMode
          ? 'bg-white text-black hover:bg-orange-600 hover:text-white'
          : 'bg-black text-white hover:bg-orange-600'
      }`}
    >
      {darkMode ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
}
