import type { ProjectItem } from '../types/portfolio.types';

export const projectsData: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Fintech High-Throughput API Engine',
    subtitle: 'Ultra-low latency transactional banking & payment gateway microservice',
    description: 'Designed and deployed an event-driven transaction processing gateway handling financial transactions, webhook retries, and ledger synchronizations with 99.99% availability.',
    category: 'Enterprise Backend',
    metrics: ['Sub-15ms Latency', '10,000+ TPS Capacity', 'Zero Inconsistent Ledgers'],
    tags: ['Java 21', 'Spring Boot 3', 'Apache Kafka', 'PostgreSQL', 'Redis', 'Docker'],
    featured: true,
    architectureHighlights: [
      'Idempotent API design preventing duplicate payment execution',
      'Kafka distributed event streaming for non-blocking settlement processing',
      'Multi-level Redis caching reducing database read bottlenecks by 82%'
    ],
    clientOrOrg: 'Fintech Client Architecture',
    liveUrl: '#inquiry',
    githubUrl: 'https://github.com/saurabh-techbihar'
  },
  {
    id: 'proj-2',
    title: 'Enterprise Cloud ERP & Multi-Tenant Portal',
    subtitle: 'Comprehensive resource planning platform with Angular 17 & Microservices',
    description: 'Spearheaded full-stack development of an enterprise resource planning system with complex role-based access control (RBAC), real-time inventory tracking, and dynamic reporting modules.',
    category: 'Full Stack & Cloud',
    metrics: ['45+ Enterprise Modules', '500+ Daily Active Corporate Users', '99.95% Uptime'],
    tags: ['Angular 17', 'TypeScript', 'Spring Boot', 'Hibernate', 'AWS RDS', 'Docker'],
    featured: true,
    architectureHighlights: [
      'Schema-per-tenant multi-tenancy model ensuring rigorous client data isolation',
      'Reactive Angular frontend with custom state cache and optimistic UI updates',
      'Automated background report generation using asynchronous thread pools'
    ],
    clientOrOrg: 'Tech Bihar Enterprise Solution',
    liveUrl: '#inquiry',
    githubUrl: 'https://github.com/saurabh-techbihar'
  },
  {
    id: 'proj-3',
    title: 'Tech Bihar Innovations Digital Platform',
    subtitle: 'Flagship company platform driving technology modernization & client onboarding',
    description: 'Architected the core company digital flagship ecosystem for Tech Bihar Innovations, featuring client portal management, service inquiry automation, and real-time project collaboration tools.',
    category: 'GovTech & Innovations',
    metrics: ['Pan-Bihar Reach', '25+ High-Growth Tech Initiatives', 'Instant RFP Processing'],
    tags: ['Java 17', 'Angular', 'Tailwind CSS', 'Docker', 'PostgreSQL', 'GitHub CI/CD'],
    featured: true,
    architectureHighlights: [
      'Built-in automated client inquiry workflow with instant lead routing',
      'Lightweight containerized infrastructure with minimal memory footprint',
      'Strict security headers, CSP policies, and OWASP-compliant endpoints'
    ],
    clientOrOrg: 'Tech Bihar Innovations Portal',
    liveUrl: '#inquiry',
    githubUrl: 'https://github.com/saurabh-techbihar'
  },
  {
    id: 'proj-4',
    title: 'Real-time Telemetry & Distributed Kafka Ingestion',
    subtitle: 'High-volume sensor & activity log pipeline for enterprise monitoring',
    description: 'Engineered a stream processing pipeline collecting operational telemetry from distributed client applications, feeding directly into an analytical database with live Grafana dashboards.',
    category: 'Architecture & Microservices',
    metrics: ['5M+ Events/Day', 'Near Zero Data Loss', 'Automated Anomaly Alerts'],
    tags: ['Spring Cloud Stream', 'Kafka', 'InfluxDB', 'Grafana', 'Docker'],
    featured: false,
    architectureHighlights: [
      'Partition-aware Kafka consumer groups balancing high ingestion loads',
      'Dead-letter exchange queue preventing poison pill crashes',
      'Custom Prometheus metrics exporters tracking heap allocation and thread pools'
    ],
    clientOrOrg: 'Enterprise Telemetry Backbone',
    liveUrl: '#inquiry',
    githubUrl: 'https://github.com/saurabh-techbihar'
  }
];
