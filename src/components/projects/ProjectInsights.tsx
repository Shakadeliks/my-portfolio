import React from 'react';

interface ProjectInsightsProps {
  aiCollaboration: string;
  systemDesign: string;
  productMindset: string;
}

export function ProjectInsights({
  aiCollaboration,
  systemDesign,
  productMindset,
}: ProjectInsightsProps) {
  return (
    <div className="space-y-4 mb-8">
      <div className="border-l-4 border-orange-600 pl-4">
        <span className="font-black">AI COLLABORATION:</span>
        <p className="font-bold opacity-90 mt-1">{aiCollaboration}</p>
      </div>
      <div className="border-l-4 border-orange-600 pl-4">
        <span className="font-black">SYSTEM DESIGN:</span>
        <p className="font-bold opacity-90 mt-1">{systemDesign}</p>
      </div>
      <div className="border-l-4 border-orange-600 pl-4">
        <span className="font-black">PRODUCT IMPACT:</span>
        <p className="font-bold opacity-90 mt-1">{productMindset}</p>
      </div>
    </div>
  );
}
