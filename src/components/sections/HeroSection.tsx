import React from 'react';
import { Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SocialLink } from '@/components/ui/SocialLink';
import { personalInfo } from '@/data/personal';

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl sm:text-8xl font-black mb-8 tracking-tighter leading-none">
            SOFTWARE<br />
            <span className="text-orange-600">{personalInfo.title.split(' ')[1]}</span>
          </h1>
          <p className="text-xl sm:text-2xl font-bold mb-12 max-w-4xl mx-auto leading-tight">
            {personalInfo.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              href={`mailto:${personalInfo.email}`}
              variant="primary"
              icon={<Mail size={24} />}
            >
              GET IN TOUCH
            </Button>
            <Button
              href={personalInfo.resumeUrl}
              variant="outline"
              icon={<Download size={24} />}
            >
              DOWNLOAD RESUME
            </Button>
          </div>
          <div className="flex justify-center space-x-8">
            {personalInfo.socialLinks.map((link) => (
              <SocialLink
                key={link.platform}
                platform={link.platform}
                url={link.url}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
