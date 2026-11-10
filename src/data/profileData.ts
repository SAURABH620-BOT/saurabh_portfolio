import type { ExecutiveProfile } from '../types/user.types';

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
  tagline: 'Turning complex distributed logic into ultra-reliable, high-throughput digital machinery. Scaling modern enterprises from core microservices to reactive frontends.',
  bioSummary: 'Founder & CEO at Tech Bihar Innovations and Senior Enterprise Systems Architect with 4+ years of battle-tested engineering experience. Specializing in sub-15ms transactional Java microservices (Spring Boot 3, Kafka, Virtual Threads) and deterministic, reactive Angular frontends. Driven by a mission to turn engineering precision into sustainable enterprise market dominance.',
  detailedVision: [
    'Democratizing Tier-1 Enterprise Engineering: Founded Tech Bihar Innovations with a clear mandate — to establish a premier software engineering powerhouse from Bihar, delivering world-class distributed cloud architectures, robust banking-grade microservices, and state-of-the-art enterprise digital portals.',
    'Zero-Compromise Resiliency & High Concurrency: Production systems are tested by chaos. By coupling event-driven microservices with idempotent state machines, circuit breakers, and reactive frontends, we eliminate single points of failure, maintain strict sub-15ms latencies, and achieve 99.99% operational SLA uptime.',
    'Aligning Engineering Velocity with Business ROI: Great code is useless if it does not move the business needle. I partner with founders, CTOs, and enterprise stakeholders to de-risk legacy monoliths, accelerate release velocity by 3x, and engineer resilient systems that scale smoothly to millions of daily transactions.'
  ],
  metrics: [
    {
      id: 'm1',
      label: 'Enterprise Engineering',
      value: '4+',
      suffix: 'Years',
      description: 'Java 21 LTS, Spring Boot 3 & Angular 18 Architect'
    },
    {
      id: 'm2',
      label: 'Peak Throughput Capacity',
      value: '10K+',
      suffix: 'TPS',
      description: 'Engineered for high-volume banking & event streams'
    },
    {
      id: 'm3',
      label: 'Production SLA Uptime',
      value: '99.99%',
      prefix: '',
      description: 'Fault-tolerant architecture with sub-second failover'
    },
    {
      id: 'm4',
      label: 'Enterprise Deployments',
      value: '35+',
      suffix: 'Deployments',
      description: 'Mission-critical microservices, ERPs & portals delivered'
    }
  ],
  profilePhoto: '/image/profile_image.jpeg',
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
