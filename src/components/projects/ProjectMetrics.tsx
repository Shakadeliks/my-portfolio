import React from 'react';
import { TrendingUp, Users, Database } from 'lucide-react';
import { ProjectImpact } from '@/types/project';
import { cn } from '@/lib/utils';

interface ProjectMetricsProps {
  impact: ProjectImpact;
  featured: boolean;
}

export function ProjectMetrics({ impact, featured }: ProjectMetricsProps) {
  const metricBoxClass = cn(
    "border-4 border-black p-4 text-center",
    featured ? "bg-black text-white" : "bg-orange-600 text-white"
  );

  const thirdMetric = impact.revenue || impact.community || impact.uptime;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
      <div className={metricBoxClass}>
        <TrendingUp size={24} className="mx-auto mb-2" />
        <p className="text-sm font-black">{impact.metric}</p>
      </div>
      <div className={metricBoxClass}>
        <Users size={24} className="mx-auto mb-2" />
        <p className="text-sm font-black">{impact.users}</p>
      </div>
      <div className={metricBoxClass}>
        <Database size={24} className="mx-auto mb-2" />
        <p className="text-sm font-black">{thirdMetric}</p>
      </div>
    </div>
  );
}
