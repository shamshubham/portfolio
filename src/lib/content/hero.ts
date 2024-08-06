import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Shubham Verma.',
  tagline: 'I am a full stack developer.',
  description:
    "I am a software engineer, currently looking for a new role. I'am passionate about building product that solve real-world problems. I have experience in building web applications. I am always looking for new opportuinities to learn and grow.",
  specialText: 'Currently looking for a full-time job, internship & freelance.',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
