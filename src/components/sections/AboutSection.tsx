import React from 'react';
import { motion } from 'framer-motion';
import { Server, Layers, Cpu, Compass, CheckCircle2, Target } from 'lucide-react';
import { profileData } from '../../data/profileData';
import { fadeInUp, staggerContainer } from '../../helpers/animation.helper';
import { calculateExperienceYears } from '../../helpers/date.helper';
import { SectionWrapper } from '../common/SectionWrapper';
import { Card, Heading, Text, Badge } from '../ui';

export const AboutSection: React.FC = () => {
  const dynamicExp = calculateExperienceYears(profileData.experienceStartDate);

  const pillars = [
    {
      icon: <Server className="w-6 h-6 text-cyan-400" />,
      title: 'Banking-Grade Java 21 & Microservices',
      description:
        'Designing fault-tolerant distributed backbones with Spring Boot 3, Kafka event streams, and Virtual Threads. High-concurrency tuning, zero-loss queues, and sub-15ms p99 latency SLA guarantees.',
      highlights: ['Spring Boot 3.x & Virtual Threads', 'Kafka Event Streaming & CQRS', 'Resilience4j & Zero-Loss Queues']
    },
    {
      icon: <Layers className="w-6 h-6 text-emerald-400" />,
      title: 'Deterministic Angular Enterprise Architecture',
      description:
        'Engineering responsive, mission-critical enterprise portals using Angular (v14-v18), strict TypeScript, RxJS reactive pipelines, and NgRx state stores with sub-second First Contentful Paint.',
      highlights: ['Signals & Fine-grained Reactivity', 'Clean Multi-tier NgRx State Stores', 'Reusable Enterprise UI Systems']
    },
    {
      icon: <Cpu className="w-6 h-6 text-indigo-400" />,
      title: 'IT Leadership & Tech Bihar Innovations',
      description:
        'Leading Tech Bihar Innovations with an uncompromising vision: building a regional software engineering powerhouse from Bihar that delivers tier-1 cloud architectures for national and global enterprises.',
      highlights: ['Founder & Executive Leadership', 'Architectural Due Diligence & Audits', 'Zero-Trust Cloud Governance']
    }
  ];

  return (
    <SectionWrapper
      id="about"
      badge="Leadership & Executive Vision"
      badgeVariant="cyan"
      title="Architecting Scalability, Resiliency"
      accentTitle="& Engineering Dominance."
      subtitle="Bridging executive business vision with elite distributed systems engineering. Delivering zero-downtime Java microservices and high-velocity Angular ecosystems that scale under intense enterprise loads."
      hasGlow
    >
      <div className="space-y-12">
        {/* Leadership Statement Card */}
        <Card variant="glass" glowEffect="cyan" className="p-8 sm:p-10 border-slate-700/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-cyan-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-semibold">
                  Executive Mandate · Tech Bihar Innovations
                </span>
              </div>
              <Heading level="h3" className="text-slate-100 text-xl sm:text-2xl font-bold">
                Building India’s Next-Generation Enterprise Systems from Bihar.
              </Heading>
              <div className="space-y-3">
                {profileData.detailedVision.map((paragraph, index) => (
                  <p key={index} className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 bg-obsidian-950/80 rounded-2xl p-6 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                <Compass className="w-4 h-4" />
                <span>Executive Factsheet</span>
              </div>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Total Enterprise Spec:</strong> {dynamicExp.formatted}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Core Specialization:</strong> Java 21 Microservices &amp; Angular 18</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Executive Post:</strong> Founder &amp; CEO, Tech Bihar Innovations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Deployment Track:</strong> 35+ Enterprise Systems &amp; Portals</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Production Benchmarks:</strong> 10K+ TPS &amp; 99.99% Availability</span>
                </li>
              </ul>
              <div className="pt-2">
                <Badge variant="emerald" dot size="sm" className="w-full justify-center">
                  Available for Enterprise Engagements
                </Badge>
              </div>
            </div>
          </div>
        </Card>

        {/* 3 Core Pillars */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {pillars.map((pillar, idx) => (
            <motion.div key={idx} variants={fadeInUp}>
              <Card
                variant="glass"
                glowEffect={idx === 0 ? 'cyan' : idx === 1 ? 'emerald' : 'indigo'}
                className="h-full flex flex-col justify-between p-6 sm:p-7 border-slate-800"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <Heading level="h3" className="text-slate-100 text-lg sm:text-xl font-bold">
                    {pillar.title}
                  </Heading>
                  <Text variant="muted" className="leading-relaxed text-slate-300 text-xs sm:text-sm">
                    {pillar.description}
                  </Text>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-800/80 space-y-2">
                  {pillar.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
