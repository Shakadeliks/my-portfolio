export interface ProjectImpact {
  metric: string;
  users: string;
  revenue?: string;
  community?: string;
  uptime?: string;
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  impact: ProjectImpact;
  aiCollaboration: string;
  systemDesign: string;
  productMindset: string;
  tech: string[];
  image: string;
  liveDemo: string;
  github: string;
  featured: boolean;
}
