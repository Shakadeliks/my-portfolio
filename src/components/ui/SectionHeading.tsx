import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  highlight?: string;
}

export function SectionHeading({ children, className, highlight }: SectionHeadingProps) {
  if (highlight) {
    const parts = String(children).split(highlight);
    return (
      <h2 className={cn("text-4xl sm:text-6xl font-black text-center mb-16 tracking-tight", className)}>
        {parts[0]}
        <span className="text-orange-600">{highlight}</span>
        {parts[1]}
      </h2>
    );
  }

  return (
    <h2 className={cn("text-4xl sm:text-6xl font-black text-center mb-16 tracking-tight", className)}>
      {children}
    </h2>
  );
}
