import type { ServiceItem } from '../types/portfolio.types';

export const servicesData: ServiceItem[] = [
  {
    id: 'srv-1',
    title: 'Enterprise Java Microservices Architecture',
    shortDesc: 'Decoupled, high-throughput microservices using Spring Boot 3, Kafka, and resilient distributed patterns.',
    longDesc: 'Architecting end-to-end fault-tolerant microservices ecosystems. Specializing in domain-driven design, API gateways, circuit breaking, distributed transaction patterns, and JVM garbage collection optimization for sub-millisecond throughput.',
    iconName: 'Server',
    deliverables: [
      'Spring Boot 3.x microservice blueprints',
      'Apache Kafka / RabbitMQ asynchronous event queues',
      'Distributed caching strategies with Redis',
      'OAuth2, Keycloak & JWT role-based security'
    ],
    technologies: ['Java 21', 'Spring Cloud', 'Kafka', 'Docker', 'PostgreSQL'],
    ctaLabel: 'Consult on Microservices'
  },
  {
    id: 'srv-2',
    title: 'High-Scale Angular Enterprise Frontend Engineering',
    shortDesc: 'Production-grade enterprise single page applications (SPAs) with Angular 16+, NgRx, and modern reactive patterns.',
    longDesc: 'Designing enterprise web consoles, administrative portals, and dashboards with strict TypeScript typings, component modularity, micro-frontends, dynamic forms, and comprehensive state management using NgRx and RxJS pipelines.',
    iconName: 'Layout',
    deliverables: [
      'Modular Angular architecture with lazy-loading routes',
      'Reactive forms & dynamic validation engines',
      'Custom reusable design systems & theme tokens',
      'Real-time WebSocket & SSE data feeds'
    ],
    technologies: ['Angular 17/18', 'TypeScript', 'RxJS', 'NgRx', 'Tailwind CSS'],
    ctaLabel: 'Build Enterprise UI'
  },
  {
    id: 'srv-3',
    title: 'Cloud Modernization & Containerized Deployments',
    shortDesc: 'Migrating monolithic systems to cloud-native containerized architectures with AWS and automated CI/CD.',
    longDesc: 'Helping enterprises modernize legacy architectures. Containerizing applications via Docker, orchestrating Kubernetes pods, setting up automated CI/CD deployment pipelines on GitHub Actions, and securing cloud infrastructure on AWS.',
    iconName: 'Cloud',
    deliverables: [
      'Legacy monolith-to-microservices migration roadmaps',
      'Docker multi-stage optimized container images',
      'Zero-downtime CI/CD deployment pipelines',
      'Cloud monitoring, logging & Grafana dashboards'
    ],
    technologies: ['Docker', 'AWS ECS/RDS', 'Kubernetes', 'GitHub Actions', 'Linux'],
    ctaLabel: 'Plan Cloud Migration'
  },
  {
    id: 'srv-4',
    title: 'Executive Technical Leadership & IT Consulting',
    shortDesc: 'Fractional CTO, architecture governance, and technical leadership under the banner of Tech Bihar Innovations.',
    longDesc: 'Guiding enterprise engineering teams through architecture reviews, code audits, developer mentoring, and system design roadmaps. Aligning business objectives with scalable technical execution to maximize ROI and engineering velocity.',
    iconName: 'ShieldCheck',
    deliverables: [
      'Comprehensive system architecture & security audits',
      'Engineering sprint governance & tech stack selection',
      'Performance profiling & bottleneck mitigation',
      'Enterprise SLA & disaster recovery planning'
    ],
    technologies: ['System Design', 'Enterprise Security', 'Agile/Scrum', 'Compliance'],
    ctaLabel: 'Request Executive Advisory'
  }
];
