import { type ButtonHTMLAttributes, type ReactNode, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  showArrow?: boolean;
  children: ReactNode;
  href?: string;
}

export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  showArrow = false,
  children,
  className = '',
  href,
  ...props
}: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [3, -3]);
  const rotateY = useTransform(x, [-50, 50], [-3, 3]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseStyles =
    'relative inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden';

  const variants = {
    primary:
      'bg-accent text-white hover:bg-accent-hover shadow-lg hover:shadow-glow-strong',
    secondary:
      'bg-bg-card text-white border border-border hover:border-border-hover hover:bg-glass-hover',
    outline:
      'bg-transparent text-white border border-border hover:border-accent hover:text-accent',
    ghost:
      'bg-transparent text-text-secondary hover:text-white hover:bg-glass',
  };

  const sizes = {
    sm: 'btn-sm text-sm rounded-full',
    md: 'btn-md text-base rounded-full',
    lg: 'btn-lg text-lg rounded-full',
  };

  const content = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {showArrow && (
        <motion.span
          className="flex-shrink-0"
          initial={{ x: 0, y: 0 }}
          whileHover={{ x: 2, y: -2 }}
        >
          <ArrowUpRight size={size === 'sm' ? 14 : 16} />
        </motion.span>
      )}
    </>
  );

  const motionProps = {
    ref,
    className: `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`,
    style: { rotateX, rotateY, perspective: 400 },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    whileTap: { scale: 0.97 },
  };

  if (href) {
    return (
      <motion.a
        {...(motionProps as any)}
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button {...motionProps} {...(props as any)}>
      {content}
    </motion.button>
  );
}
