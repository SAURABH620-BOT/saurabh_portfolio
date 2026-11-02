import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Container } from './Container';
import { Badge, Heading, Text } from '../ui';

export interface SectionWrapperProps {
  id: string;
  badge?: string;
  badgeVariant?: 'cyan' | 'emerald' | 'indigo' | 'amber';
  title?: string;
  accentTitle?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  hasGlow?: boolean;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  badge,
  badgeVariant = 'cyan',
  title,
  accentTitle,
  subtitle,
  children,
  className,
  containerClassName,
  hasGlow = false,
}) => {
  return (
    <section
      id={id}
      className={twMerge(
        clsx(
          'relative py-20 lg:py-28 overflow-hidden',
          className
        )
      )}
    >
      {/* Background radial glow */}
      {hasGlow && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-500/10 via-emerald-500/5 to-transparent blur-3xl pointer-events-none -z-10" />
      )}

      <Container className={containerClassName}>
        {(title || badge || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-3xl mx-auto mb-14 lg:mb-20 space-y-4"
          >
            {badge && (
              <div>
                <Badge variant={badgeVariant} dot size="md">
                  {badge}
                </Badge>
              </div>
            )}

            {title && (
              <Heading level="h2" accentText={accentTitle}>
                {title}
              </Heading>
            )}

            {subtitle && (
              <Text variant="lead" className="text-slate-400">
                {subtitle}
              </Text>
            )}
          </motion.div>
        )}

        {children}
      </Container>
    </section>
  );
};

