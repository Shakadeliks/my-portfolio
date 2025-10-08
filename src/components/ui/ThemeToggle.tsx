'use client';

import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`p-3 border-4 border-black font-bold transition-colors ${
        isDark
          ? 'bg-white text-black hover:bg-orange-600 hover:text-white'
          : 'bg-black text-white hover:bg-orange-600'
      }`}
    >
      {isDark ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
}
