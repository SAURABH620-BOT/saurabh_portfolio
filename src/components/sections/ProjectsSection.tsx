import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { projectsData } from '../../data/projectsData';
import { SectionWrapper } from '../common/SectionWrapper';
import { Card, Badge, Heading, Text, Button } from '../ui';
import { fadeInUp, staggerContainer } from '../../helpers/animation.helper';

export const ProjectsSection: React.FC = () => {
  return (
    <SectionWrapper
      id="projects"
      badge="Production Deployments"
      badgeVariant="emerald"
      title="Enterprise Systems &"
      accentTitle="Architecture Case Studies."
      subtitle="Selected high-throughput architectures, microservices engines, and multi-tenant platforms architected and delivered by Saurabh Kumar."
      hasGlow
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {projectsData.map((project, idx) => (
          <motion.div key={project.id} variants={fadeInUp}>
            <Card
              variant="glass"
              glowEffect={idx % 2 === 0 ? 'cyan' : 'emerald'}
              className="h-full flex flex-col justify-between p-8 border-slate-800/80 bg-slate-900/40 relative group"
            >
              <div className="space-y-6">
                {/* Header Tag and Client */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <Badge variant={idx % 2 === 0 ? 'cyan' : 'emerald'} size="sm" dot>
                    {project.category}
                  </Badge>

                  {project.clientOrOrg && (
                    <span className="text-xs font-mono text-slate-400">
                      {project.clientOrOrg}
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-2">
                  <Heading level="h3" className="text-xl sm:text-2xl text-slate-100 font-bold group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </Heading>
                  <p className="text-xs sm:text-sm font-medium text-cyan-400/90 font-mono">
                    {project.subtitle}
                  </p>
                  <Text variant="body" className="text-slate-300 text-sm leading-relaxed pt-1">
                    {project.description}
                  </Text>
                </div>

                {/* Performance & Scale Metrics */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.metrics.map((metric, mIdx) => (
                    <span
                      key={mIdx}
                      className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono font-medium"
                    >
                      ✓ {metric}
                    </span>
                  ))}
                </div>

                {/* Architectural Highlights */}
                <div className="p-4 rounded-xl bg-obsidian-950/60 border border-slate-800/90 space-y-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Architectural Innovations:</span>
                  </div>
                  <ul className="space-y-1.5">
                    {project.architectureHighlights.map((hl, hlIdx) => (
                      <li key={hlIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies & Links */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 text-[11px] font-mono border border-slate-700/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View GitHub repository for ${project.title}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-slate-200 transition-colors"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                    </svg>
                    <span>Repository Context</span>
                  </a>

                  <a href="#inquiry">
                    <Button variant="ghost" size="sm" rightIcon={<ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />}>
                      Request Case Study
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};
