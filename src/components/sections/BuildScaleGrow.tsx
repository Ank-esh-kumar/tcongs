import { motion } from 'framer-motion';
import { Rocket, Zap, Globe, TrendingUp } from 'lucide-react';
import { Button } from '../ui/Button';
import { fadeUp, staggerContainer } from '../../lib/animations';

export function BuildScaleGrow() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden" aria-label="Build Scale Grow">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-secondary via-bg-primary to-bg-secondary" />

      {/* Accent glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-accent/[0.03] rounded-full blur-[80px]" />

      <div className="relative z-10 section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.h2
              className="font-heading font-bold text-4xl md:text-5xl lg:text-[56px] leading-[1.1] tracking-tight text-white"
              variants={fadeUp}
            >
              Build. Scale. Grow
              <br />
              <span className="text-gradient">Your Digital Business.</span>
            </motion.h2>
            <motion.p
              className="mt-8 text-text-secondary text-lg leading-relaxed max-w-lg"
              variants={fadeUp}
            >
              At Tcongs Infotech, we deliver powerful web, app, and marketing
              solutions designed to help your business grow faster, scale smarter,
              and succeed globally.
            </motion.p>
            <motion.div className="mt-10" variants={fadeUp}>
              <Button variant="primary" size="lg" showArrow>
                Start Your Project 🚀
              </Button>
            </motion.div>
          </motion.div>

          {/* Right — Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Central orb */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-bg-card via-bg-secondary to-bg-card border border-border" />
              <div className="absolute inset-16 rounded-full bg-gradient-to-tl from-accent/5 via-transparent to-accent/10 animate-[rotate-slow_30s_linear_infinite]" />

              {/* Floating elements */}
              {[
                { icon: Rocket, label: 'Launch', top: '5%', left: '50%', delay: 0 },
                { icon: Zap, label: 'Fast', top: '40%', right: '0%', delay: 0.5 },
                { icon: Globe, label: 'Global', bottom: '10%', left: '50%', delay: 1 },
                { icon: TrendingUp, label: 'Growth', top: '40%', left: '0%', delay: 1.5 },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      top: item.top,
                      left: item.left,
                      right: (item as any).right,
                      bottom: (item as any).bottom,
                      transform: 'translate(-50%, -50%)',
                    }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: item.delay,
                      ease: 'easeInOut',
                    }}
                  >
                    <div className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-border bg-bg-card/80 backdrop-blur-sm shadow-card">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Icon size={14} className="text-accent" />
                      </div>
                      <span className="text-sm font-medium text-white">{item.label}</span>
                    </div>
                  </motion.div>
                );
              })}

              {/* Connecting lines (decorative) */}
              <svg
                className="absolute inset-0 w-full h-full opacity-10"
                viewBox="0 0 400 400"
                fill="none"
              >
                <circle cx="200" cy="200" r="120" stroke="white" strokeWidth="0.5" strokeDasharray="4 8" />
                <circle cx="200" cy="200" r="170" stroke="white" strokeWidth="0.3" strokeDasharray="2 12" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
