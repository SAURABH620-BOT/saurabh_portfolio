export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
  username?: string;
}

export interface MetricItem {
  id: string;
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
  description: string;
}

export interface ExecutiveProfile {
  name: string;
  title: string;
  company: string;
  companyRole: string;
  email: string;
  phone?: string;
  location: string;
  experienceYears: number;
  experienceStartDate: string; // ISO date string e.g., '2022-06-01'
  tagline: string;
  bioSummary: string;
  detailedVision: string[];
  metrics: MetricItem[];
  profilePhoto: string;
  resumeDownloadUrl?: string;
  socialLinks: SocialLink[];
}

