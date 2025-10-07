'use client';

import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Sun, 
  Moon, 
  Download,
  TrendingUp,
  Users,
  Zap,
  Target,
  Database
} from 'lucide-react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const projects = [
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

  const skills = {
    "LANGUAGES": ["JavaScript", "TypeScript", "Python", "Go", "SQL"],
    "FRONTEND": ["React", "Next.js", "Tailwind CSS", "Vue.js"],
    "BACKEND": ["Node.js", "Express", "MySQL", "MongoDB", "Redis"],
    "CLOUD & DEVOPS": ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
    "AI INTEGRATION": ["OpenAI API", "LangChain", "Prompt Engineering", "AI Code Review"]
  };

  return (
    <div className={`min-h-screen transition-all duration-300 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 border-b-4 border-black ${darkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="font-black text-2xl tracking-tight">OLWETHU &quot;SHAK&quot; MATIWANA</div>
            <div className="flex items-center space-x-6">
              <a href="#projects" className="font-bold text-lg hover:text-orange-600 transition-colors uppercase tracking-wide">PROJECTS</a>
              <a href="#contact" className="font-bold text-lg hover:text-orange-600 transition-colors uppercase tracking-wide">CONTACT</a>
              <button
                onClick={toggleDarkMode}
                className={`p-3 border-4 border-black font-bold transition-colors ${
                  darkMode 
                    ? 'bg-white text-black hover:bg-orange-600 hover:text-white' 
                    : 'bg-black text-white hover:bg-orange-600'
                }`}
              >
                {darkMode ? <Sun size={24} /> : <Moon size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl sm:text-8xl font-black mb-8 tracking-tighter leading-none">
              SOFTWARE<br />
              <span className="text-orange-600">ENGINEER</span>
            </h1>
            <p className="text-xl sm:text-2xl font-bold mb-12 max-w-4xl mx-auto leading-tight">
              BUILDING SCALABLE SYSTEMS THAT SOLVE REAL BUSINESS PROBLEMS.<br />
              SPECIALIZED IN AI-AUGMENTED DEVELOPMENT AND SYSTEM ARCHITECTURE.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a 
                href="mailto:shakurxmatiwana@gmail.com"
                className="flex items-center space-x-3 bg-orange-600 text-white px-8 py-4 border-4 border-black font-black text-lg hover:bg-black hover:text-orange-600 transition-colors transform hover:scale-105 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              >
                <Mail size={24} />
                <span>GET IN TOUCH</span>
              </a>
              <a 
                href="/resume.pdf"
                className={`flex items-center space-x-3 border-4 border-black px-8 py-4 font-black text-lg transition-colors transform hover:scale-105 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${
                  darkMode 
                    ? 'bg-white text-black hover:bg-orange-600 hover:text-white' 
                    : 'bg-black text-white hover:bg-orange-600'
                }`}
              >
                <Download size={24} />
                <span>DOWNLOAD RESUME</span>
              </a>
            </div>
            <div className="flex justify-center space-x-8">
              <a 
                href="https://github.com/shakadeliks"
                target="_blank"
                className={`p-4 border-4 border-black transition-colors hover:bg-orange-600 ${
                  darkMode ? 'hover:text-white' : 'hover:text-white'
                }`}
              >
                <Github size={32} />
              </a>
              <a 
                href="https://linkedin.com" 
                className={`p-4 border-4 border-black transition-colors hover:bg-orange-600 ${
                  darkMode ? 'hover:text-white' : 'hover:text-white'
                }`}
              >
                <Linkedin size={32} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 border-t-4 border-black ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-6xl font-black text-center mb-16 tracking-tight">TECHNICAL EXPERTISE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, techs]) => (
              <div key={category} className={`border-4 border-black p-8 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} shadow-[8px_8px_0px_0px_rgba(255,102,0,1)]`}>
                <h3 className="font-black text-xl mb-6 text-orange-600">{category}</h3>
                <div className="space-y-3">
                  {techs.map((tech) => (
                    <div 
                      key={tech}
                      className={`px-4 py-2 border-2 border-black font-bold ${
                        darkMode ? 'bg-white text-black' : 'bg-black text-white'
                      }`}
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 border-t-4 border-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-6xl font-black text-center mb-8 tracking-tight">FEATURED PROJECTS</h2>
          <p className="text-center font-bold text-xl mb-16 max-w-3xl mx-auto">
            REAL-WORLD SOLUTIONS SHOWCASING PROBLEM-SOLVING,<br />AI COLLABORATION, AND SYSTEM DESIGN
          </p>
          
          <div className="space-y-16">
            {projects.map((project) => (
              <div 
                key={project.id}
                className={`border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] ${
                  project.featured 
                    ? 'bg-orange-600 text-white' 
                    : darkMode 
                      ? 'bg-white text-black' 
                      : 'bg-black text-white'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Project Visual */}
                  <div className={`relative h-80 lg:h-auto border-r-0 lg:border-r-4 border-black border-b-4 lg:border-b-0 ${
                    project.featured ? 'bg-black' : 'bg-orange-600'
                  } flex items-center justify-center`}>
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
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                      <div className={`border-4 border-black p-4 text-center ${
                        project.featured ? 'bg-black text-white' : 'bg-orange-600 text-white'
                      }`}>
                        <TrendingUp size={24} className="mx-auto mb-2" />
                        <p className="text-sm font-black">{project.impact.metric}</p>
                      </div>
                      <div className={`border-4 border-black p-4 text-center ${
                        project.featured ? 'bg-black text-white' : 'bg-orange-600 text-white'
                      }`}>
                        <Users size={24} className="mx-auto mb-2" />
                        <p className="text-sm font-black">{project.impact.users}</p>
                      </div>
                      <div className={`border-4 border-black p-4 text-center ${
                        project.featured ? 'bg-black text-white' : 'bg-orange-600 text-white'
                      }`}>
                        <Database size={24} className="mx-auto mb-2" />
                        <p className="text-sm font-black">{project.impact.revenue || project.impact.community || project.impact.uptime}</p>
                      </div>
                    </div>

                    {/* Key Insights */}
                    <div className="space-y-4 mb-8">
                      <div className="border-l-4 border-orange-600 pl-4">
                        <span className="font-black">AI COLLABORATION:</span>
                        <p className="font-bold opacity-90 mt-1">{project.aiCollaboration}</p>
                      </div>
                      <div className="border-l-4 border-orange-600 pl-4">
                        <span className="font-black">SYSTEM DESIGN:</span>
                        <p className="font-bold opacity-90 mt-1">{project.systemDesign}</p>
                      </div>
                      <div className="border-l-4 border-orange-600 pl-4">
                        <span className="font-black">PRODUCT IMPACT:</span>
                        <p className="font-bold opacity-90 mt-1">{project.productMindset}</p>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-8">
                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech) => (
                          <span 
                            key={tech}
                            className={`px-3 py-1 border-2 border-black font-bold text-sm ${
                              project.featured ? 'bg-white text-black' : darkMode ? 'bg-black text-white' : 'bg-white text-black'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a 
                        href={project.liveDemo}
                        className={`flex items-center justify-center space-x-3 px-6 py-3 border-4 border-black font-black hover:scale-105 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
                          project.featured 
                            ? 'bg-white text-black hover:bg-black hover:text-white' 
                            : 'bg-orange-600 text-white hover:bg-black'
                        }`}
                      >
                        <ExternalLink size={20} />
                        <span>LIVE DEMO</span>
                      </a>
                      <a 
                        href={project.github}
                        className={`flex items-center justify-center space-x-3 px-6 py-3 border-4 border-black font-black hover:scale-105 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
                          project.featured 
                            ? 'bg-black text-white hover:bg-white hover:text-black' 
                            : darkMode 
                              ? 'bg-black text-white hover:bg-orange-600' 
                              : 'bg-white text-black hover:bg-orange-600 hover:text-white'
                        }`}
                      >
                        <Github size={20} />
                        <span>VIEW CODE</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-4 sm:px-6 lg:px-8 border-t-4 border-black ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-6xl font-black mb-8 tracking-tight">LET&apos;S BUILD SOMETHING<br /><span className="text-orange-600">AMAZING</span></h2>
          <p className="text-xl font-bold mb-12">
            READY TO DISCUSS YOUR NEXT PROJECT OR EXPLORE OPPORTUNITIES
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="mailto:alex@example.com"
              className="flex items-center justify-center space-x-3 bg-orange-600 text-white px-8 py-4 border-4 border-black font-black text-lg hover:bg-white hover:text-black transition-colors shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:scale-105 transform"
            >
              <Mail size={24} />
              <span>SHAKURXMATIWANA@GMAIL.COM</span>
            </a>
            <a 
              href="https://linkedin.com"
              className={`flex items-center justify-center space-x-3 border-4 border-black px-8 py-4 font-black text-lg transition-colors shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:scale-105 transform ${
                darkMode 
                  ? 'bg-black text-white hover:bg-orange-600' 
                  : 'bg-white text-black hover:bg-orange-600 hover:text-white'
              }`}
            >
              <Linkedin size={24} />
              <span>CONNECT ON LINKEDIN</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t-4 border-black">
        <div className="max-w-6xl mx-auto text-center font-bold">
          <p>&copy; 2025 OLWETHU &quot;SHAK&quot; MATIWANA. BUILT WITH REACT AND TAILWIND CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
