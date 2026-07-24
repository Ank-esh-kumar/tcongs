import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Monitor, Hexagon, Headphones, Leaf } from 'lucide-react';
import { Button } from '../ui/Button';
import { fadeUp, staggerContainer } from '../../lib/animations';

const trustIcons = [
  { icon: Monitor, color: 'var(--color-blue)' },
  { icon: Hexagon, color: 'var(--color-accent)' },
  { icon: Headphones, color: 'var(--color-lime)' },
  { icon: Leaf, color: 'var(--color-gold)' },
];

function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `particle-drift ${8 + Math.random() * 12}s linear infinite`,
            animationDelay: `${Math.random() * 8}s`,
            ['--drift-x' as string]: `${(Math.random() - 0.5) * 200}px`,
            ['--drift-y' as string]: `${-100 - Math.random() * 200}px`,
          }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };
    const el = containerRef.current;
    el?.addEventListener('mousemove', handleMouseMove);
    return () => el?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
      aria-label="Hero"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-primary to-bg-secondary" />

        {/* Abstract sphere / blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px]">
          <div
            className="absolute inset-0 rounded-full opacity-25"
            style={{
              background:
                'radial-gradient(circle at 40% 40%, var(--color-accent-glow-strong) 0%, var(--color-accent-glow) 40%, transparent 70%)',
            }}
          />
          <div
            className="absolute inset-8 rounded-full opacity-35"
            style={{
              background:
                'radial-gradient(circle at 60% 60%, var(--color-blue-glow) 0%, rgba(2,106,167,0.1) 50%, transparent 80%)',
              filter: 'blur(40px)',
            }}
          />
          <div
            className="absolute inset-16 rounded-full opacity-40 animate-[rotate-slow_60s_linear_infinite]"
            style={{
              background:
                'radial-gradient(ellipse at 30% 70%, var(--color-gold-glow) 0%, transparent 60%)',
              filter: 'blur(30px)',
            }}
          />
        </div>

        {/* Mouse-responsive glow */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full pointer-events-none transition-all duration-[2000ms] ease-out"
          style={{
            left: `${mousePos.x}%`,
            top: `${mousePos.y}%`,
            transform: 'translate(-50%, -50%)',
            background:
              'radial-gradient(circle, var(--color-blue-glow) 0%, transparent 70%)',
          }}
        />

        {/* Particles */}
        <Particles />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 section-container text-center flex flex-col items-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Trust Badge */}
        <motion.div
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-border bg-bg-card/50 backdrop-blur-sm mb-10"
          variants={fadeUp}
        >
          <ShieldCheck size={16} className="text-accent" />
          <span className="text-sm text-text-secondary font-medium">
            Trusted by businesses worldwide to build scalable digital solutions
          </span>
          <div className="flex items-center gap-1.5 ml-2">
            {trustIcons.map(({ icon: Icon, color }, i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${color}20` }}
              >
                <Icon size={12} style={{ color }} />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[80px] leading-[1.05] tracking-tight text-white max-w-5xl uppercase"
          variants={fadeUp}
        >
          Smart Digital
          <br />
          Solutions For Modern
          <br />
          Businesses
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-8 text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed"
          variants={fadeUp}
        >
          We Help Brands Grow With{' '}
          <span className="text-accent font-medium">Web, Apps & Marketing</span>{' '}
          Solutions Across The Globe.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div className="flex flex-wrap items-center justify-center gap-4 mt-12" variants={fadeUp}>
          <Button
            variant="primary"
            size="lg"
            href="https://calendly.com/tcongsinfotech/30min"
          >
            Schedule Meeting
          </Button>
          <Button variant="outline" size="lg" href="#services">
            Services
          </Button>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent" />
    </section>
  );
}
