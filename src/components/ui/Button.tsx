import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export function Button({
  variant = 'primary',
  children,
  icon,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = "flex items-center justify-center space-x-3 px-8 py-4 border-4 border-black font-black text-lg transition-all transform hover:scale-105 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]";

  const variantStyles = {
    primary: "bg-orange-600 text-white hover:bg-black hover:text-orange-600",
    secondary: "bg-black text-white hover:bg-orange-600",
    outline: "bg-white text-black hover:bg-orange-600 hover:text-white dark:bg-black dark:text-white dark:hover:bg-orange-600"
  };

  return (
    <a
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </a>
  );
}
