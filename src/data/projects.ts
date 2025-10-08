import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Analytics Platform",
    subtitle: "FULL-STACK | AI-POWERED INSIGHTS",
    problem: "Manual data analysis was taking 8+ hours weekly, preventing quick business decisions",
    solution: "Built automated analytics dashboard with AI-driven recommendations",
    impact: {
      metric: "87% FASTER INSIGHTS",
      users: "500+ DAILY USERS",
      revenue: "+$2M ARR IMPACT"
    },
    aiCollaboration: "Used GitHub Copilot for initial data processing logic, then optimized algorithms for 40% better performance",
    systemDesign: "Microservices architecture with Redis caching, handling 10k+ concurrent users",
    productMindset: "Collaborated with PM to identify key metrics that drive user retention (+23%)",
    tech: ["React", "Node.js", "PostgreSQL", "Redis", "AWS", "Docker"],
    image: "/api/placeholder/400/250",
    liveDemo: "https://demo.example.com",
    github: "https://github.com/username/project",
    featured: true
  },
  {
    id: 2,
    title: "Open Source CI/CD Tool",
    subtitle: "DEVOPS | COMMUNITY CONTRIBUTION",
    problem: "Existing deployment tools were complex and lacked proper error handling",
    solution: "Contributed 15+ PRs to major open-source project, adding error recovery features",
    impact: {
      metric: "95% DEPLOYMENT SUCCESS",
      users: "2K+ DOWNLOADS",
      community: "TOP 5 CONTRIBUTOR"
    },
    aiCollaboration: "Leveraged AI for documentation generation, reviewed and improved 200+ lines",
    systemDesign: "Designed fault-tolerant pipeline architecture with automatic rollback capabilities",
    productMindset: "Analyzed user feedback to prioritize features that reduced setup time by 60%",
    tech: ["Go", "Docker", "Kubernetes", "GitHub Actions", "Terraform"],
    image: "/api/placeholder/400/250",
    liveDemo: "https://github.com/project/demo",
    github: "https://github.com/username/oss-project",
    featured: false
  },
  {
    id: 3,
    title: "Real-time Chat Application",
    subtitle: "FULL-STACK | WEBSOCKET ARCHITECTURE",
    problem: "Team needed secure, scalable communication tool with file sharing capabilities",
    solution: "Built enterprise-grade chat app with end-to-end encryption and real-time features",
    impact: {
      metric: "SUB-100MS LATENCY",
      users: "1K+ ACTIVE USERS",
      uptime: "99.9% AVAILABILITY"
    },
    aiCollaboration: "Used AI for message moderation logic, enhanced with custom rules for 99% accuracy",
    systemDesign: "WebSocket-based architecture with horizontal scaling and Redis pub/sub",
    productMindset: "A/B tested UI patterns to increase daily active usage by 35%",
    tech: ["TypeScript", "Socket.io", "React", "MongoDB", "AWS Lambda"],
    image: "/api/placeholder/400/250",
    liveDemo: "https://chat-demo.example.com",
    github: "https://github.com/username/chat-app",
    featured: false
  }
];
