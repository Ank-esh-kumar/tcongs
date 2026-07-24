import {
  Search, Map, PenTool, Code2, ShieldCheck, Rocket,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    subtitle: 'Business & Market Analysis',
    description:
      'We understand your business goals, target audience, and competitors. This helps us define the right strategy to build a strong digital foundation.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Planning',
    subtitle: 'Strategy & Architecture',
    description:
      'We create detailed project plans, user flows, and system architecture to ensure smooth development and clear execution.',
    icon: Map,
  },
  {
    number: '03',
    title: 'Design',
    subtitle: 'UI/UX & Branding',
    description:
      'Our team designs modern, user-friendly interfaces that enhance user experience and reflect your brand identity.',
    icon: PenTool,
  },
  {
    number: '04',
    title: 'Development',
    subtitle: 'Web & App Development',
    description:
      'We build fast, scalable, and secure websites and applications using modern technologies tailored to your business needs.',
    icon: Code2,
  },
  {
    number: '05',
    title: 'Testing',
    subtitle: 'Quality Assurance',
    description:
      'We test every feature to ensure performance, security, and usability across all devices before launch.',
    icon: ShieldCheck,
  },
  {
    number: '06',
    title: 'Launch & Growth',
    subtitle: 'Deployment & Marketing',
    description:
      'After launch, we help you scale with SEO, digital marketing, and continuous optimization to grow your business online.',
    icon: Rocket,
  },
];
