'use client';

import { HeroSection } from '@/components/sections/HeroSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { useDarkMode } from '@/contexts/DarkModeContext';

export default function HomePage() {
  const { darkMode } = useDarkMode();

  return (
    <div className={`min-h-screen transition-all duration-300 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
