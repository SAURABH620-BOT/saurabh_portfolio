import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, ShieldCheck, Terminal, Award, MessageSquare } from 'lucide-react';
import { profileData } from '../../data/profileData';
import { fadeInUp, staggerContainer } from '../../helpers/animation.helper';
import { calculateExperienceYears } from '../../helpers/date.helper';
import { Badge, Button, Heading, Text } from '../ui';

export const HeroSection: React.FC = () => {
  const dynamicExp = calculateExperienceYears(profileData.experienceStartDate);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - topOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      {/* Background Cyber Grid & Radial Lights */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-radial from-cyan-500/15 via-blue-600/5 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Textual Column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6"
          >
            {/* Executive Badges */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-2.5">
              <Badge variant="cyan" dot size="md">
                Founder & CEO · Tech Bihar Innovations
              </Badge>
              <Badge variant="emerald" size="md">
                Senior Java & Angular Architect
              </Badge>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={fadeInUp} className="space-y-3">
              <Heading level="h1" className="leading-[1.15]">
                Engineering <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">Enterprise-Grade</span> Systems & IT Leadership.
              </Heading>
              <p className="text-xl sm:text-2xl font-semibold text-slate-200">
                {profileData.name}
              </p>
            </motion.div>

            {/* Subtitle / Bio summary */}
            <motion.div variants={fadeInUp}>
              <Text variant="lead" className="text-slate-300 max-w-2xl leading-relaxed">
                {profileData.bioSummary}
              </Text>
            </motion.div>

            {/* Key Action Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-3.5 pt-2">
              <Button
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                onClick={() => scrollTo('inquiry')}
              >
                Initiate Executive Inquiry
              </Button>

              <Button
                variant="secondary"
                size="lg"
                leftIcon={<Terminal className="w-4 h-4 text-cyan-400" />}
                onClick={() => scrollTo('tech-stack')}
              >
                Inspect Tech Stack
              </Button>

              <a
                href={profileData.socialLinks.find(s => s.name === 'WhatsApp Direct')?.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  leftIcon={<MessageSquare className="w-4 h-4 text-emerald-400" />}
                >
                  WhatsApp Direct
                </Button>
              </a>
            </motion.div>

            {/* Direct contact badge */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-3 text-xs text-slate-400 pt-1">
              <div className="flex items-center gap-1.5 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{profileData.email}</span>
              </div>
              <span className="text-slate-600 hidden sm:inline">|</span>
              <div className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Open for Strategic Engagements</span>
              </div>
            </motion.div>

            {/* Metric Counters Glass Cards */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-6 border-t border-slate-800/80"
            >
              {profileData.metrics.map((metric) => (
                <div
                  key={metric.id}
                  className="p-3.5 rounded-2xl bg-obsidian-950/60 border border-slate-800/80 backdrop-blur-md space-y-1 hover:border-slate-700 transition-colors"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 font-mono">
                    {metric.id === 'm1' ? dynamicExp.formatted.split(' ')[0] : metric.value}
                    {metric.suffix && (
                      <span className="text-xs font-sans text-slate-400 font-normal ml-1">
                        {metric.suffix}
                      </span>
                    )}
                  </div>
                  <div className="text-xs font-semibold text-slate-200">
                    {metric.label}
                  </div>
                  <div className="text-[11px] text-slate-400 leading-tight">
                    {metric.description}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Profile Photo Column with Glass & Neon Accents */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Outer ambient decorative ring */}
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-sky-500 to-emerald-500 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition duration-1000 group-hover:duration-200 animate-pulseGlow" />

              {/* Main Card Frame */}
              <div className="relative rounded-3xl bg-obsidian-950/80 backdrop-blur-xl border border-cyan-500/30 p-3 shadow-2xl">
                <div className="overflow-hidden rounded-2xl relative w-72 h-88 sm:w-80 sm:h-[420px] bg-obsidian-900">
                  <img
                    src={profileData.profilePhoto}
                    alt={profileData.name}
                    className="w-full h-full object-cover object-top filter brightness-105 contrast-105 transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                  {/* Subtle gradient vignette at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-80" />

                  {/* On-image badge overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-obsidian-900/90 backdrop-blur-md border border-slate-700/80 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-slate-100 flex items-center gap-1.5">
                          <span>Saurabh Kumar</span>
                          <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                        </div>
                        <div className="text-[10px] text-cyan-300 font-mono font-medium">
                          CEO & Principal Engineer
                        </div>
                      </div>
                      <div className="px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-bold">
                        VERIFIED
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Experience Badge */}
                <div className="absolute -top-4 -right-4 bg-obsidian-900/95 backdrop-blur-md border border-cyan-500/40 rounded-2xl px-3.5 py-2.5 shadow-xl flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-100">4+ Years</div>
                    <div className="text-[10px] text-slate-400 font-mono">Enterprise Spec</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
