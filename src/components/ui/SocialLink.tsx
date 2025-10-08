import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SocialLinkProps {
  platform: 'github' | 'linkedin' | 'email';
  url: string;
  className?: string;
}

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
};

export function SocialLink({ platform, url, className }: SocialLinkProps) {
  const Icon = iconMap[platform];

  return (
    <a
      href={url}
      target={platform !== 'email' ? '_blank' : undefined}
      rel={platform !== 'email' ? 'noopener noreferrer' : undefined}
      className={cn(
        "p-4 border-4 border-black transition-colors hover:bg-orange-600 hover:text-white",
        className
      )}
    >
      <Icon size={32} />
    </a>
  );
}
