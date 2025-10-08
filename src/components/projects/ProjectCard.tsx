'use client';

import React from 'react';
import { Code, ExternalLink, Github, Target, Zap } from 'lucide-react';
import { Project } from '@/types/project';
import { ProjectMetrics } from './ProjectMetrics';
import { ProjectInsights } from './ProjectInsights';
import { ProjectTechStack } from './ProjectTechStack';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className={cn(
        "border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]",
        project.featured
          ? "bg-orange-600 text-white"
          : "bg-white text-black dark:bg-black dark:text-white"
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Project Visual */}
        <div
          className={cn(
            "relative h-80 lg:h-auto border-r-0 lg:border-r-4 border-black border-b-4 lg:border-b-0 flex items-center justify-center",
            project.featured ? "bg-black" : "bg-orange-600"
          )}
        >
          <div className="text-center">
            <Code size={80} className="mx-auto mb-6 text-white" />
            <p className="text-2xl font-black text-white">{project.title}</p>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-8 lg:p-12">
          <div className="flex items-start justify-between mb-6">
            <h3 className="text-3xl font-black leading-tight">{project.title}</h3>
            {project.featured && (
              <div className="bg-black text-white px-4 py-2 border-2 border-black font-black text-sm">
                FEATURED
              </div>
            )}
          </div>
          <p className="text-sm font-bold mb-8 opacity-80">{project.subtitle}</p>

          {/* Problem & Solution */}
          <div className="mb-8">
            <div className="mb-6">
              <div className="flex items-center mb-3">
                <Target size={20} className="mr-3" />
                <span className="font-black text-lg">PROBLEM</span>
              </div>
              <p className="font-bold opacity-90">{project.problem}</p>
            </div>
            <div>
              <div className="flex items-center mb-3">
                <Zap size={20} className="mr-3" />
                <span className="font-black text-lg">SOLUTION</span>
              </div>
              <p className="font-bold opacity-90">{project.solution}</p>
            </div>
          </div>

          {/* Impact Metrics */}
          <ProjectMetrics impact={project.impact} featured={project.featured} />

          {/* Key Insights */}
          <ProjectInsights
            aiCollaboration={project.aiCollaboration}
            systemDesign={project.systemDesign}
            productMindset={project.productMindset}
          />

          {/* Tech Stack */}
          <ProjectTechStack tech={project.tech} featured={project.featured} />

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={project.liveDemo}
              className={cn(
                "flex items-center justify-center space-x-3 px-6 py-3 border-4 border-black font-black hover:scale-105 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
                project.featured
                  ? "bg-white text-black hover:bg-black hover:text-white"
                  : "bg-orange-600 text-white hover:bg-black"
              )}
            >
              <ExternalLink size={20} />
              <span>LIVE DEMO</span>
            </a>
            <a
              href={project.github}
              className={cn(
                "flex items-center justify-center space-x-3 px-6 py-3 border-4 border-black font-black hover:scale-105 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
                project.featured
                  ? "bg-black text-white hover:bg-white hover:text-black"
                  : "bg-white text-black hover:bg-orange-600 hover:text-white dark:bg-black dark:text-white dark:hover:bg-orange-600"
              )}
            >
              <Github size={20} />
              <span>VIEW CODE</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
