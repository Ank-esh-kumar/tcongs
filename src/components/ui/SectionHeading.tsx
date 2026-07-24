import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../../lib/animations';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  children?: ReactNode;
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  description,
  align = 'center',
  children,
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <motion.div
      className={`flex flex-col gap-5 ${alignClass} ${className}`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {badge && (
        <motion.span
          className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent"
          variants={fadeUp}
        >
          {badge}
        </motion.span>
      )}
      <motion.h2
        className="font-heading font-bold text-3xl md:text-4xl lg:text-[56px] leading-[1.1] tracking-tight text-white"
        variants={fadeUp}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          className="text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed"
          variants={fadeUp}
        >
          {description}
        </motion.p>
      )}
      {children && <motion.div variants={fadeUp}>{children}</motion.div>}
    </motion.div>
  );
}
