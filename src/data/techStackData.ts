import type { TechSkill } from '../types/portfolio.types';

export const techSkills: TechSkill[] = [
  // Backend
  {
    name: 'Java 21 LTS & Concurrency',
    category: 'backend',
    level: 96,
    experience: '4+ Years',
    featured: true,
    tags: ['Virtual Threads (Project Loom)', 'Structured Concurrency', 'Garbage Collection Profiling', 'Streams API']
  },
  {
    name: 'Spring Boot 3.x & Cloud Ecosystem',
    category: 'backend',
    level: 95,
    experience: '4+ Years',
    featured: true,
    tags: ['Spring Cloud Gateway', 'Resilience4j Circuit Breaker', 'Spring Security 6', 'Micrometer Tracing']
  },
  {
    name: 'Distributed Microservices Architecture',
    category: 'backend',
    level: 94,
    experience: '4+ Years',
    featured: true,
    tags: ['Domain-Driven Design (DDD)', 'CQRS & Event Sourcing', 'Idempotent APIs', 'Service Discovery']
  },
  {
    name: 'Apache Kafka & Message Brokers',
    category: 'backend',
    level: 90,
    experience: '3+ Years',
    featured: true,
    tags: ['Kafka Streams', 'Consumer Group Rebalancing', 'Dead Letter Queues', 'RabbitMQ Clustering']
  },
  {
    name: 'Spring Data JPA & Hibernate 6',
    category: 'backend',
    level: 92,
    experience: '4+ Years',
    featured: false,
    tags: ['Query Optimization', 'Second-Level Cache', 'HikariCP Pooling', 'Transactional Isolation']
  },

  // Frontend
  {
    name: 'Angular 17 / 18 Enterprise Suite',
    category: 'frontend',
    level: 95,
    experience: '4+ Years',
    featured: true,
    tags: ['Signals Architecture', 'Standalone Components', 'Micro-Frontends', 'Lazy-Loaded Routes']
  },
  {
    name: 'TypeScript (Strict Mode)',
    category: 'frontend',
    level: 95,
    experience: '4+ Years',
    featured: true,
    tags: ['Discriminated Unions', 'Conditional Types', 'Generic Constraints', 'Zero `any` Discipline']
  },
  {
    name: 'RxJS & NgRx Reactive State Management',
    category: 'frontend',
    level: 92,
    experience: '4+ Years',
    featured: true,
    tags: ['Reactive Streams', 'NgRx Store & Effects', 'Higher-order Observables', 'Memory Leak Prevention']
  },
  {
    name: 'Tailwind CSS & Atomic Design Systems',
    category: 'frontend',
    level: 94,
    experience: '4+ Years',
    featured: false,
    tags: ['Dark Theme Obsidian Tokens', 'Glassmorphism Blur', 'Responsive Breakpoints', 'Design Tokens']
  },
  {
    name: 'React 19 & Component Architecture',
    category: 'frontend',
    level: 88,
    experience: '3+ Years',
    featured: false,
    tags: ['Custom Hooks', 'Framer Motion 14', 'Concurrent Features', 'Modular UI State']
  },

  // Cloud & DevOps
  {
    name: 'Docker & Container Hardening',
    category: 'cloud_devops',
    level: 92,
    experience: '3+ Years',
    featured: true,
    tags: ['Multi-Stage Slim Builds', 'Non-Root Security Context', 'Docker Compose', 'Image Layer Optimization']
  },
  {
    name: 'AWS Cloud Infrastructure',
    category: 'cloud_devops',
    level: 86,
    experience: '3+ Years',
    featured: true,
    tags: ['AWS ECS / ECR', 'RDS Multi-AZ', 'S3 & CloudFront CDN', 'IAM Least Privilege', 'CloudWatch']
  },
  {
    name: 'Automated CI/CD & GitOps',
    category: 'cloud_devops',
    level: 90,
    experience: '3+ Years',
    featured: false,
    tags: ['GitHub Actions Workflows', 'Blue-Green Deployments', 'Automated Test Suites', 'Automated Rollbacks']
  },
  {
    name: 'Kubernetes (K8s) Orchestration',
    category: 'cloud_devops',
    level: 82,
    experience: '2+ Years',
    featured: false,
    tags: ['Pods & ReplicaSets', 'Ingress Routing & TLS', 'ConfigMaps & Secrets', 'Horizontal Pod Autoscaling']
  },

  // Architecture & Databases
  {
    name: 'PostgreSQL & Relational Data Engines',
    category: 'architecture_db',
    level: 93,
    experience: '4+ Years',
    featured: true,
    tags: ['B-Tree & GIN Indexing', 'EXPLAIN ANALYZE Optimization', 'JSONB Document Storage', 'Read Replicas']
  },
  {
    name: 'Redis Distributed In-Memory Cache',
    category: 'architecture_db',
    level: 92,
    experience: '3+ Years',
    featured: true,
    tags: ['Distributed Locking (Redlock)', 'Session Clustering', 'Cache Aside & TTL', 'Rate Limiting Algorithms']
  },
  {
    name: 'Enterprise Security, OAuth2 & Keycloak',
    category: 'architecture_db',
    level: 94,
    experience: '4+ Years',
    featured: true,
    tags: ['Zero-Trust Architecture', 'JWT Token Cryptography', 'RBAC & ABAC', 'OWASP Top 10 Mitigation']
  },
  {
    name: 'High-Availability System Design & SLAs',
    category: 'architecture_db',
    level: 95,
    experience: '4+ Years',
    featured: true,
    tags: ['Sub-15ms Latency Budgets', '99.99% Availability', 'Disaster Recovery (RTO/RPO)', 'Contract Testing']
  }
];

export const techCategoryLabels: Record<string, { label: string; icon: string; count: number }> = {
  all: { label: 'Complete Architectural Arsenal', icon: 'Layers', count: 18 },
  backend: { label: 'Java 21 & Microservices', icon: 'Server', count: 5 },
  frontend: { label: 'Angular 18 & Enterprise UI', icon: 'Layout', count: 5 },
  cloud_devops: { label: 'Cloud, Docker & DevOps', icon: 'Cloud', count: 4 },
  architecture_db: { label: 'Architecture & Databases', icon: 'Database', count: 4 },
};
