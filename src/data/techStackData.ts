import type { TechSkill } from '../types/portfolio.types';

export const techSkills: TechSkill[] = [
  // Backend
  {
    name: 'Java 17 / 21 LTS',
    category: 'backend',
    level: 95,
    experience: '4+ Years',
    featured: true,
    tags: ['Core Java', 'Virtual Threads', 'Concurrency', 'Streams API', 'JVM Tuning']
  },
  {
    name: 'Spring Boot 3.x & Spring Cloud',
    category: 'backend',
    level: 95,
    experience: '4+ Years',
    featured: true,
    tags: ['REST APIs', 'Spring Security', 'Eureka', 'Config Server', 'OpenFeign']
  },
  {
    name: 'Microservices Architecture',
    category: 'backend',
    level: 92,
    experience: '4+ Years',
    featured: true,
    tags: ['API Gateway', 'Circuit Breaker', 'Distributed Tracing', 'CQRS', 'Event Sourcing']
  },
  {
    name: 'Hibernate & Spring Data JPA',
    category: 'backend',
    level: 90,
    experience: '4+ Years',
    featured: false,
    tags: ['ORM', 'QueryDSL', 'Transaction Management', 'Connection Pooling']
  },
  {
    name: 'Apache Kafka & RabbitMQ',
    category: 'backend',
    level: 88,
    experience: '3+ Years',
    featured: true,
    tags: ['Event-Driven Pub/Sub', 'Message Brokers', 'Dead Letter Queues']
  },

  // Frontend
  {
    name: 'Angular (v14 — v18)',
    category: 'frontend',
    level: 94,
    experience: '4+ Years',
    featured: true,
    tags: ['Signals', 'Standalone Components', 'Lazy Loading Modules', 'Interceptors']
  },
  {
    name: 'TypeScript & JavaScript (ES6+)',
    category: 'frontend',
    level: 95,
    experience: '4+ Years',
    featured: true,
    tags: ['Generics', 'Strict Typing', 'Decorators', 'Async/Await']
  },
  {
    name: 'RxJS & NgRx State Management',
    category: 'frontend',
    level: 90,
    experience: '4+ Years',
    featured: true,
    tags: ['Observables', 'BehaviorSubjects', 'Store', 'Effects', 'Reducers']
  },
  {
    name: 'Tailwind CSS & Modern SCSS',
    category: 'frontend',
    level: 92,
    experience: '4+ Years',
    featured: false,
    tags: ['Responsive Grid', 'Glassmorphism', 'Dark Themes', 'Component Theming']
  },
  {
    name: 'React & Modern Frontend UI',
    category: 'frontend',
    level: 86,
    experience: '3+ Years',
    featured: false,
    tags: ['Custom Hooks', 'Framer Motion', 'Virtual DOM', 'Component Architecture']
  },

  // Cloud & DevOps
  {
    name: 'Docker & Containerization',
    category: 'cloud_devops',
    level: 90,
    experience: '3+ Years',
    featured: true,
    tags: ['Multi-stage Builds', 'Docker Compose', 'Container Hardening', 'Images']
  },
  {
    name: 'AWS Cloud Services',
    category: 'cloud_devops',
    level: 85,
    experience: '3+ Years',
    featured: true,
    tags: ['EC2', 'S3', 'RDS', 'ECS', 'IAM', 'CloudWatch']
  },
  {
    name: 'CI/CD Automation',
    category: 'cloud_devops',
    level: 88,
    experience: '3+ Years',
    featured: false,
    tags: ['GitHub Actions', 'Jenkins', 'Automated Testing', 'Blue-Green Deployments']
  },
  {
    name: 'Kubernetes (K8s)',
    category: 'cloud_devops',
    level: 80,
    experience: '2+ Years',
    featured: false,
    tags: ['Deployments', 'Ingress Controller', 'ConfigMaps', 'Helm']
  },

  // Architecture & Databases
  {
    name: 'PostgreSQL & MySQL',
    category: 'architecture_db',
    level: 92,
    experience: '4+ Years',
    featured: true,
    tags: ['Indexing Strategies', 'Query Optimization', 'JSONB', 'Replication']
  },
  {
    name: 'Redis In-Memory Cache',
    category: 'architecture_db',
    level: 90,
    experience: '3+ Years',
    featured: true,
    tags: ['Session Clustering', 'Cache Aside', 'Pub/Sub', 'Rate Limiting']
  },
  {
    name: 'Enterprise Security & OAuth2',
    category: 'architecture_db',
    level: 92,
    experience: '4+ Years',
    featured: true,
    tags: ['JWT Tokens', 'Keycloak', 'RBAC', 'CORS & CSRF Defense', 'TLS/SSL']
  },
  {
    name: 'System Design & REST/gRPC',
    category: 'architecture_db',
    level: 94,
    experience: '4+ Years',
    featured: true,
    tags: ['High Availability', 'Load Balancing', 'Idempotency', 'Contract Testing']
  }
];

export const techCategoryLabels: Record<string, { label: string; icon: string; count: number }> = {
  all: { label: 'All Technologies', icon: 'Layers', count: 18 },
  backend: { label: 'Java & Microservices', icon: 'Server', count: 5 },
  frontend: { label: 'Angular & Modern UI', icon: 'Layout', count: 5 },
  cloud_devops: { label: 'Cloud & DevOps', icon: 'Cloud', count: 4 },
  architecture_db: { label: 'Architecture & DB', icon: 'Database', count: 4 },
};
