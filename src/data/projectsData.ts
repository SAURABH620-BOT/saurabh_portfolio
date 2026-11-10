import type { ProjectItem } from '../types/portfolio.types';

export const projectsData: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'FinCore — High-Throughput Financial Transaction & Settlement Engine',
    subtitle: 'Ultra-low latency transactional banking & payment gateway microservice',
    description: 'Designed and deployed an event-driven transactional gateway handling high-volume payments, automated webhook retries, and ledger synchronizations with 99.99% availability and zero double-spend anomalies.',
    category: 'Enterprise Backend',
    metrics: ['Sub-15ms Latency', '10,000+ TPS Capacity', 'Zero Inconsistent Ledgers'],
    tags: ['Java 21 LTS', 'Spring Boot 3', 'Apache Kafka', 'PostgreSQL', 'Redis Cluster', 'Docker'],
    featured: true,
    architectureHighlights: [
      'Distributed idempotency locks with Redis eliminating double-spend and duplicate payment risks',
      'Event-sourced Apache Kafka pipeline ensuring non-blocking settlements and tamper-proof audit trails',
      'Multi-level caching layer reducing database read bottlenecks by 84% under extreme traffic spikes'
    ],
    clientOrOrg: 'FinTech Banking Gateway',
    liveUrl: '#inquiry',
    githubUrl: 'https://github.com/SAURABH620-BOT'
  },
  {
    id: 'proj-2',
    title: 'Omnix ERP — Multi-Tenant Enterprise Operations Platform',
    subtitle: 'Modular resource planning platform engineered with Angular 17 & Microservices',
    description: 'Spearheaded end-to-end full-stack architecture of an enterprise operations platform featuring schema-isolated multi-tenancy, dynamic workflow engines, automated invoicing, and role-based access control (RBAC).',
    category: 'Full Stack & Cloud',
    metrics: ['45+ Enterprise Modules', '500+ Daily Corporate Users', '99.95% SLA Uptime'],
    tags: ['Angular 17', 'TypeScript', 'Spring Boot 3', 'Hibernate', 'AWS RDS', 'Docker'],
    featured: true,
    architectureHighlights: [
      'Schema-per-tenant multi-tenancy model strictly isolating sensitive corporate client records',
      'Reactive Angular frontend with Signals and optimistic state updates ensuring instantaneous UI responses',
      'Asynchronous reporting worker threads offloading intensive PDF & Excel batch computations from HTTP loops'
    ],
    clientOrOrg: 'Tech Bihar Enterprise Solution',
    liveUrl: '#inquiry',
    githubUrl: 'https://github.com/SAURABH620-BOT'
  },
  {
    id: 'proj-3',
    title: 'Tech Bihar Innovations Digital Flagship & Client Hub',
    subtitle: 'Flagship corporate platform driving regional tech transformation & client onboarding',
    description: 'Architected and launched the central corporate platform for Tech Bihar Innovations, featuring self-service enterprise client portals, automated RFP triage, and real-time project milestone tracking.',
    category: 'GovTech & Innovations',
    metrics: ['Pan-Bihar Enterprise Reach', '35+ High-Growth Tech Initiatives', '< 2 Hr Lead Triage SLA'],
    tags: ['Java 17/21', 'Angular', 'Tailwind CSS', 'Docker', 'PostgreSQL', 'GitHub CI/CD'],
    featured: true,
    architectureHighlights: [
      'Built-in automated client RFP workflow with instant WhatsApp and email dispatch routing',
      'Lightweight containerized infrastructure with sub-100ms cold starts and 95+ Core Web Vitals',
      'Strict Content Security Policy (CSP), OWASP compliance, and zero vulnerability security posture'
    ],
    clientOrOrg: 'Tech Bihar Innovations Portal',
    liveUrl: '#inquiry',
    githubUrl: 'https://github.com/SAURABH620-BOT'
  },
  {
    id: 'proj-4',
    title: 'PulseStream — Distributed Kafka Telemetry & Cluster Observability',
    subtitle: 'High-volume sensor & activity log ingestion pipeline for distributed microservice clusters',
    description: 'Engineered a real-time event streaming backbone that continuously collects operational telemetry, audit logs, and transaction traces from distributed microservices, indexing data into Grafana with automated anomaly alerting.',
    category: 'Architecture & Microservices',
    metrics: ['5M+ Events/Day', 'Near Zero Data Loss', 'Automated Anomaly Detection'],
    tags: ['Spring Cloud Stream', 'Apache Kafka', 'Prometheus', 'Grafana', 'Docker'],
    featured: false,
    architectureHighlights: [
      'Partition-aware Kafka consumer groups dynamically balancing high ingestion bursts without lagging',
      'Dead-letter exchange queue and retry topics preventing poison-pill payloads from stalling worker threads',
      'Custom Micrometer metrics exporters monitoring JVM garbage collection, memory leaks, and thread pool starvation'
    ],
    clientOrOrg: 'Enterprise Telemetry Backbone',
    liveUrl: '#inquiry',
    githubUrl: 'https://github.com/SAURABH620-BOT'
  }
];
