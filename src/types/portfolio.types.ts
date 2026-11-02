export type TechCategoryType = 'backend' | 'frontend' | 'cloud_devops' | 'architecture_db';

export interface TechSkill {
  name: string;
  category: TechCategoryType;
  level: number; // 0 to 100
  experience: string;
  icon?: string;
  featured: boolean;
  tags: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  iconName: string;
  deliverables: string[];
  technologies: string[];
  ctaLabel?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'Enterprise Backend' | 'Full Stack & Cloud' | 'Architecture & Microservices' | 'GovTech & Innovations';
  metrics: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  architectureHighlights: string[];
  clientOrOrg?: string;
}

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  isAction?: boolean;
}

