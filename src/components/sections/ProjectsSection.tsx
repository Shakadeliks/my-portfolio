import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { projects } from '@/data/projects';

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 border-t-4 border-black">
      <div className="max-w-6xl mx-auto">
        <SectionHeading>FEATURED PROJECTS</SectionHeading>
        <p className="text-center font-bold text-xl mb-16 max-w-3xl mx-auto">
          REAL-WORLD SOLUTIONS SHOWCASING PROBLEM-SOLVING,<br />
          AI COLLABORATION, AND SYSTEM DESIGN
        </p>

        <div className="space-y-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
