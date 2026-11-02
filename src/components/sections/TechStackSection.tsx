import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Server, Layout, Cloud, Database, Layers, Sparkles } from 'lucide-react';
import { techSkills, techCategoryLabels } from '../../data/techStackData';
import { SectionWrapper } from '../common/SectionWrapper';
import { Card } from '../ui';

export const TechStackSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredSkills = activeCategory === 'all'
    ? techSkills
    : techSkills.filter(skill => skill.category === activeCategory);

  const getCategoryIcon = (key: string) => {
    switch (key) {
      case 'backend':
        return <Server className="w-4 h-4" />;
      case 'frontend':
        return <Layout className="w-4 h-4" />;
      case 'cloud_devops':
        return <Cloud className="w-4 h-4" />;
      case 'architecture_db':
        return <Database className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  return (
    <SectionWrapper
      id="tech-stack"
      badge="Enterprise Technology Stack"
      badgeVariant="emerald"
      title="Engineered with"
      accentTitle="Modern Enterprise Stacks."
      subtitle="Deep specialization across the Java 17/21 & Spring Boot ecosystem, Angular 16+ frontend architecture, and cloud containerization."
      hasGlow
    >
      <div className="space-y-10">
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {Object.entries(techCategoryLabels).map(([key, item]) => {
            const isSelected = activeCategory === key;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide flex items-center gap-2 transition-all duration-200 cursor-pointer border ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 text-cyan-300 border-cyan-500/50 shadow-glow-cyan'
                    : 'bg-obsidian-950/60 text-slate-400 border-slate-800/80 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <span className={isSelected ? 'text-cyan-400' : 'text-slate-500'}>
                  {getCategoryIcon(key)}
                </span>
                <span>{item.label}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                  isSelected ? 'bg-cyan-500/30 text-cyan-200' : 'bg-slate-800 text-slate-400'
                }`}>
                  {key === 'all' ? techSkills.length : techSkills.filter(s => s.category === key).length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  variant="glass"
                  glowEffect="cyan"
                  className="h-full flex flex-col justify-between p-6 border-slate-800/80 bg-slate-900/40 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="space-y-4">
                    {/* Header: Name and Experience badge */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                          {getCategoryIcon(skill.category)}
                        </div>
                        <div>
                          <h4 className="font-bold text-sm sm:text-base text-slate-100">
                            {skill.name}
                          </h4>
                          <span className="text-[11px] text-slate-400 font-mono">
                            {skill.experience} Enterprise
                          </span>
                        </div>
                      </div>

                      {skill.featured && (
                        <span className="flex items-center gap-1 text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 shrink-0">
                          <Sparkles className="w-3 h-3 text-emerald-400" />
                          CORE
                        </span>
                      )}
                    </div>

                    {/* Proficiency Metric Bar */}
                    <div className="space-y-1.5 pt-1">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-slate-400">Mastery Index</span>
                        <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-800/80 rounded-full h-1.5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                          className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"
                        />
                      </div>
                    </div>

                    {/* Sub-tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {skill.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-300 text-[11px] font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
