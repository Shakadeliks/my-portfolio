import { HeroSection } from '@/components/sections/HeroSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <div className="min-h-screen transition-all duration-300">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
