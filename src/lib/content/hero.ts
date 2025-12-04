import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Shubham Verma.',
  tagline: 'I am a full stack developer.',
  description:
    "I’m a software engineer with a deep enthusiasm for product development and emerging technologies. I enjoy crafting scalable, user-focused applications and constantly experimenting with new tools and ideas. I’m driven by curiosity and the desire to build things that truly make a difference.",
  specialText: 'Currently looking for a full-time job.',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
