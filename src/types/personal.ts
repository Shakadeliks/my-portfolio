export interface SocialLink {
  platform: 'github' | 'linkedin' | 'email';
  url: string;
  label: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  email: string;
  resumeUrl: string;
  socialLinks: SocialLink[];
}
