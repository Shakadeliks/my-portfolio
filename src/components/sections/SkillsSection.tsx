import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SkillCategory } from '@/components/skills/SkillCategory';
import { skills } from '@/data/skills';

export function SkillsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t-4 border-black bg-black text-white dark:bg-white dark:text-black">
      <div className="max-w-6xl mx-auto">
        <SectionHeading>TECHNICAL EXPERTISE</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, techs]) => (
            <SkillCategory key={category} category={category} skills={techs} />
          ))}
        </div>
      </div>
    </section>
  );
}
