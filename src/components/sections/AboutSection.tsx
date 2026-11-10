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
      title: 'Enterprise Java Microservices',
      description:
        'Architecting resilient backbones utilizing Java 17/21, Spring Boot 3, and event-driven patterns with Apache Kafka. High-concurrency tuning, zero-loss queues, and sub-second latency SLA guarantees.',
      highlights: ['Spring Boot 3.x & Spring Cloud', 'Kafka Event Streaming', 'Resilience4j & Rate Limiting']
    },
    {
      icon: <Layers className="w-6 h-6 text-emerald-400" />,
      title: 'High-Scale Angular Architecture',
      description:
        'Crafting responsive, high-performance enterprise portals using Angular (v14-v18), strict TypeScript, RxJS reactive programming, and NgRx state stores with modular architecture.',
      highlights: ['Signals & Fine-grained Reactivity', 'Clean Multi-tier State Management', 'Reusable Enterprise UI Systems']
    },
    {
      icon: <Cpu className="w-6 h-6 text-indigo-400" />,
      title: 'IT Leadership & Tech Bihar Innovations',
      description:
        'Leading Tech Bihar Innovations with a clear vision: creating a center of software engineering excellence in Bihar that builds world-standard cloud applications for national and international clients.',
      highlights: ['Founder & Executive Leadership', 'System Design & Code Audits', 'Zero-Trust Cloud Deployments']
    }
  ];

  return (
    <SectionWrapper
      id="about"
      badge="Leadership & Executive Vision"
      badgeVariant="cyan"
      title="Architecting Scalability, Resiliency"
      accentTitle="& Engineering Value."
      subtitle="From enterprise Java microservices to stateful Angular frontends, delivering solutions that scale seamlessly under high transactional loads."
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
              <Heading level="h3" className="text-slate-100">
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
                  <span><strong>Core Specialization:</strong> Java Microservices &amp; Angular SPAs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Executive Post:</strong> Founder &amp; CEO, Tech Bihar Innovations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Deployment Track:</strong> 35+ Enterprise Systems &amp; Portals</span>
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
