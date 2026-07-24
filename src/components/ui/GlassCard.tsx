import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cardHover } from '../../lib/animations';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  onClick?: () => void;
  as?: 'div' | 'a';
  href?: string;
}

export function GlassCard({
  children,
  className = '',
  hover = true,
  glow = false,
  onClick,
  as = 'div',
  href,
}: GlassCardProps) {
  const baseStyles = `
    relative rounded-[20px] border border-border bg-bg-card/80 backdrop-blur-sm
    transition-all duration-300
    ${hover ? 'hover:border-border-hover hover:bg-bg-card' : ''}
    ${glow ? 'hover:shadow-glow' : ''}
    ${onClick || as === 'a' ? 'cursor-pointer' : ''}
  `;

  if (as === 'a' && href) {
    return (
      <motion.a
        href={href}
        className={`${baseStyles} block ${className}`}
        variants={cardHover}
        initial="rest"
        whileHover="hover"
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.div
      className={`${baseStyles} ${className}`}
      variants={hover ? cardHover : undefined}
      initial={hover ? 'rest' : undefined}
      whileHover={hover ? 'hover' : undefined}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
