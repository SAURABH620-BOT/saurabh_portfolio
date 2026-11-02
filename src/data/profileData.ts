import type { ExecutiveProfile } from '../types/user.types';
import profilePhotoUrl from '../assets/images/saurabh-profile.jpg';

export const profileData: ExecutiveProfile = {
  name: 'Saurabh Kumar',
  title: 'Founder & CEO | Senior Java Full Stack Developer & Angular Architect',
  company: 'Tech Bihar Innovations',
  companyRole: 'Founder & Chief Executive Officer',
  email: 'saurabh.techbiharinnovations@gmail.com',
  phone: '+91 6200043032',
  location: 'Patna, Bihar & Pan-India Enterprise Reach',
  experienceYears: 4,
  experienceStartDate: '2021-08-01',
  tagline: 'Architecting Resilient Enterprise Microservices, High-Performance Angular Frontends & Leading Digital Transformation.',
  bioSummary: 'Visionary technology executive and Senior Full Stack Engineer specializing in robust Java 17/21 Spring Boot microservices, high-scale Angular 16+ enterprise frontends, and distributed cloud backbones. Leading Tech Bihar Innovations to empower enterprises with fault-tolerant, scalable, and ultra-secure IT solutions.',
  detailedVision: [
    'Spearheading Tech Bihar Innovations with a mission to bring world-class engineering, distributed cloud infrastructure, and state-of-the-art enterprise digital systems.',
    '4+ Years of battle-tested engineering experience designing microservices architectures, reactive frontends with Angular & RxJS, and event-driven data pipelines.',
    'Pioneering mission-critical enterprise systems with 99.99% uptime SLAs, zero-trust security postures, and enterprise-grade performance tuning.'
  ],
  metrics: [
    {
      id: 'm1',
      label: 'Enterprise Experience',
      value: '4+',
      suffix: 'Years',
      description: 'Java 17/21, Spring Boot & Angular Architecture'
    },
    {
      id: 'm2',
      label: 'Production Systems',
      value: '35+',
      suffix: 'Deployments',
      description: 'Distributed microservices & web portals deployed'
    },
    {
      id: 'm3',
      label: 'SLA Reliability',
      value: '99.99%',
      prefix: '',
      description: 'Fault-tolerant architecture with sub-second latency'
    },
    {
      id: 'm4',
      label: 'Enterprise Clients & Impact',
      value: '20+',
      suffix: 'Partners',
      description: 'Consulted & delivered across FinTech, ERP & GovTech'
    }
  ],
  profilePhoto: profilePhotoUrl,
  resumeDownloadUrl: '#inquiry',
  socialLinks: [
    {
      id: 's1',
      name: 'Email',
      url: 'mailto:saurabh.techbiharinnovations@gmail.com',
      icon: 'Mail',
      username: 'saurabh.techbiharinnovations@gmail.com'
    },
    {
      id: 's2',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/saurabh-kumar-305b18343/',
      icon: 'Linkedin',
      username: 'saurabh-kumar'
    },
    {
      id: 's3',
      name: 'GitHub',
      url: 'https://github.com/SAURABH620-BOT',
      icon: 'Github',
      username: 'SAURABH620-BOT'
    },
    {
      id: 's4',
      name: 'WhatsApp Direct',
      url: 'https://wa.me/916200043032?text=Hello%20Saurabh%2C%20I%20reviewed%20your%20executive%20portfolio%20and%20would%20like%20to%20connect%20regarding%20an%20enterprise%20project.',
      icon: 'MessageSquare',
      username: '+91 6200043032'
    }
  ]
};
