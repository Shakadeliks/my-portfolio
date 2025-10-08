import React from 'react';
import { personalInfo } from '@/data/personal';

export function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t-4 border-black">
      <div className="max-w-6xl mx-auto text-center font-bold">
        <p>&copy; 2025 {personalInfo.name}. BUILT WITH REACT AND TAILWIND CSS.</p>
      </div>
    </footer>
  );
}
