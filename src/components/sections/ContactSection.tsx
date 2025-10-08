import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { personalInfo } from '@/data/personal';

export function ContactSection() {
  const linkedinLink = personalInfo.socialLinks.find(link => link.platform === 'linkedin');

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t-4 border-black bg-black text-white dark:bg-white dark:text-black">
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeading highlight="AMAZING">
          LET&apos;S BUILD SOMETHING AMAZING
        </SectionHeading>
        <p className="text-xl font-bold mb-12">
          READY TO DISCUSS YOUR NEXT PROJECT OR EXPLORE OPPORTUNITIES
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center justify-center space-x-3 bg-orange-600 text-white px-8 py-4 border-4 border-black font-black text-lg hover:bg-white hover:text-black transition-colors shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:scale-105 transform"
          >
            <Mail size={24} />
            <span>{personalInfo.email.toUpperCase()}</span>
          </a>
          <a
            href={linkedinLink?.url}
            className="flex items-center justify-center space-x-3 border-4 border-black px-8 py-4 font-black text-lg transition-colors shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:scale-105 transform bg-white text-black hover:bg-orange-600 hover:text-white dark:bg-black dark:text-white dark:hover:bg-orange-600"
          >
            <Linkedin size={24} />
            <span>CONNECT ON LINKEDIN</span>
          </a>
        </div>
      </div>
    </section>
  );
}
