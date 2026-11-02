import React from 'react';
import { motion } from 'framer-motion';
import { Server, Layout, Cloud, ShieldCheck, ArrowRight, Check } from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import { SectionWrapper } from '../common/SectionWrapper';
import { Card, Badge, Heading, Text, Button } from '../ui';
import { fadeInUp, staggerContainer } from '../../helpers/animation.helper';

export interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return <Server className="w-6 h-6 text-cyan-400" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-emerald-400" />;
      case 'Cloud':
        return <Cloud className="w-6 h-6 text-sky-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-indigo-400" />;
      default:
        return <Server className="w-6 h-6 text-cyan-400" />;
    }
  };

  const handleInquire = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const el = document.getElementById('inquiry');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <SectionWrapper
      id="services"
      badge="Enterprise Offerings"
      badgeVariant="cyan"
      title="High-Impact Solutions for"
      accentTitle="Modern Enterprises."
      subtitle="Comprehensive software engineering capabilities designed to accelerate time-to-market, minimize technical debt, and ensure 99.99% operational reliability."
      hasGlow
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {servicesData.map((service, idx) => (
          <motion.div key={service.id} variants={fadeInUp}>
            <Card
              variant="glass"
              glowEffect={idx % 2 === 0 ? 'cyan' : 'emerald'}
              className="h-full flex flex-col justify-between p-8 border-slate-800/80 bg-slate-900/40 relative group"
            >
              <div className="space-y-6">
                {/* Header Icon + ID tag */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center group-hover:scale-105 group-hover:border-cyan-500/50 transition-all duration-300">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400/80 uppercase tracking-widest px-2.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40">
                    Tier 1 Spec
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-2.5">
                  <Heading level="h3" className="text-xl sm:text-2xl text-slate-100 font-bold group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </Heading>
                  <Text variant="body" className="text-slate-300 text-sm leading-relaxed">
                    {service.longDesc}
                  </Text>
                </div>

                {/* Deliverables Checklist */}
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <p className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                    Core Architectural Deliverables:
                  </p>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies & CTA */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {service.technologies.map((tech) => (
                    <Badge key={tech} variant="slate" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-slate-400 font-mono">
                    Direct Consultation Ready
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                    onClick={() => handleInquire(service.title)}
                  >
                    {service.ctaLabel || 'Engage'}
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

