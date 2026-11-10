import type { ServiceItem } from '../types/portfolio.types';

export const servicesData: ServiceItem[] = [
  {
    id: 'srv-1',
    title: 'Enterprise Java 21 & Spring Boot Microservices Ecosystems',
    shortDesc: 'High-throughput, distributed microservices engineered with Spring Boot 3.x, Apache Kafka, and Virtual Threads for ultra-low latency transaction processing.',
    longDesc: 'Architecting resilient, event-driven distributed backbones designed to handle massive concurrency without degradation. From domain-driven service decomposition to distributed tracing, circuit breakers, and zero-loss message queues, our microservices architectures are built for continuous availability, auditability, and bank-grade security.',
    iconName: 'Server',
    deliverables: [
      'Spring Boot 3.x & Java 21 Virtual Threads high-concurrency blueprints',
      'Apache Kafka & RabbitMQ event streaming with dead-letter queue resilience',
      'Distributed multi-level caching strategies with Redis & Redis Cluster',
      'Zero-Trust security layers with OAuth2, Keycloak, JWT & RBAC governance'
    ],
    technologies: ['Java 21 LTS', 'Spring Boot 3.x', 'Apache Kafka', 'Docker', 'PostgreSQL', 'Redis'],
    ctaLabel: 'Consult on Microservices'
  },
  {
    id: 'srv-2',
    title: 'High-Velocity Angular & Enterprise Frontend Architecture',
    shortDesc: 'Deterministic, reactive single-page applications (SPAs) and corporate consoles engineered with Angular 17/18 Signals, NgRx, and strict TypeScript.',
    longDesc: 'Enterprise interfaces require absolute reliability and sub-second interactions. We design scalable frontend architectures featuring strict TypeScript typings, state synchronization, dynamic forms, lazy-loaded micro-frontends, and optimized rendering that makes complex multi-module enterprise workflows feel instantaneous.',
    iconName: 'Layout',
    deliverables: [
      'Signal-driven Angular 17/18 architectures with sub-second FCP',
      'Strict state orchestration using NgRx store, effects, and RxJS pipelines',
      'Dynamic schema-driven forms with real-time enterprise validation',
      'Reusable, accessible UI component design systems styled with Tailwind CSS'
    ],
    technologies: ['Angular 17/18', 'TypeScript', 'RxJS / Signals', 'NgRx', 'Tailwind CSS', 'Vite/Webpack'],
    ctaLabel: 'Architect Enterprise UI'
  },
  {
    id: 'srv-3',
    title: 'Cloud Modernization, Containerization & Zero-Downtime CI/CD',
    shortDesc: 'Seamless monolith decoupling, Docker container hardening, AWS cloud orchestration, and automated GitOps deployment pipelines.',
    longDesc: 'Transform brittle legacy deployments into agile, automated cloud platforms. We containerize enterprise applications, orchestrate Kubernetes workloads, and configure blue-green zero-downtime CI/CD pipelines that empower teams to ship features to production multiple times a day with zero fear of regressions or service disruptions.',
    iconName: 'Cloud',
    deliverables: [
      'Monolith-to-microservices migration roadmaps with zero downtime',
      'Multi-stage Docker container images with security vulnerability scanning',
      'Automated GitHub Actions CI/CD pipelines with instant rollback mechanisms',
      'Distributed observability stacks with Prometheus, Grafana, and AWS CloudWatch'
    ],
    technologies: ['Docker', 'AWS ECS/RDS', 'Kubernetes', 'GitHub Actions', 'Linux', 'Grafana'],
    ctaLabel: 'Modernize Cloud Stack'
  },
  {
    id: 'srv-4',
    title: 'Executive Fractional CTO & Architecture Governance',
    shortDesc: 'High-leverage technical leadership, architectural audits, engineering governance, and scalability roadmaps under Tech Bihar Innovations.',
    longDesc: 'Bridging executive vision with elite technical execution. We advise founders, CTOs, and enterprise stakeholders on system design reviews, tech stack selection, engineering velocity bottlenecks, code quality standards, and compliance audits to maximize capital efficiency and engineering output.',
    iconName: 'ShieldCheck',
    deliverables: [
      'Comprehensive architectural audits & technical debt mitigation strategies',
      'Engineering velocity frameworks, sprint governance & code standards',
      'Performance bottleneck profiling (JVM memory dumps, query indexing)',
      'Enterprise SLA disaster recovery, data sovereignty & compliance planning'
    ],
    technologies: ['System Architecture', 'Enterprise Security', 'JVM Tuning', 'Technical Due Diligence', 'Disaster Recovery'],
    ctaLabel: 'Book Executive Advisory'
  }
];
