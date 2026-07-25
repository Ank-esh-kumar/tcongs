import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { processSteps } from '../../data/process';
import { SectionHeading } from '../ui/SectionHeading';
import { fadeUp, staggerContainer } from '../../lib/animations';

function TimelineStep({
  step,
  index,
  isLast,
}: {
  step: (typeof processSteps)[0];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const Icon = step.icon;

  const colors = [
    { text: 'text-blue', border: 'border-blue', bg: 'bg-blue/10', grad: 'from-blue to-blue/20', badge: 'text-blue/80', glowColor: 'var(--color-blue-glow)' },
    { text: 'text-gold', border: 'border-gold', bg: 'bg-gold/10', grad: 'from-gold to-gold/20', badge: 'text-gold/80', glowColor: 'var(--color-gold-glow)' },
    { text: 'text-lime', border: 'border-lime', bg: 'bg-lime/10', grad: 'from-lime to-lime/20', badge: 'text-lime/80', glowColor: 'var(--color-lime-glow)' },
    { text: 'text-accent', border: 'border-accent', bg: 'bg-accent/10', grad: 'from-accent to-accent/20', badge: 'text-accent/80', glowColor: 'var(--color-accent-glow-strong)' },
  ];
  const color = colors[index % colors.length];

  return (
    <motion.div
      ref={ref}
      className="relative flex gap-6 md:gap-10 group"
      variants={fadeUp}
    >
      {/* Timeline Line + Indicator */}
      <div className="relative flex flex-col items-center flex-shrink-0">
        {/* Dot */}
        <motion.div
          className={`relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center border-2 transition-all duration-700 ${
            isInView
              ? `${color.bg} ${color.border}`
              : 'bg-bg-card border-border'
          }`}
          style={isInView ? { boxShadow: `0 0 20px ${color.glowColor}` } : {}}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Icon
            size={20}
            className={`transition-colors duration-700 ${
              isInView ? color.text : 'text-text-muted'
            }`}
          />
        </motion.div>

        {/* Connecting Line */}
        {!isLast && (
          <div className="relative w-0.5 flex-1 my-2">
            <div className="absolute inset-0 bg-border" />
            <motion.div
              className={`absolute top-0 left-0 right-0 bg-gradient-to-b ${color.grad} origin-top`}
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="pb-12 md:pb-16 flex-1">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        >
          {/* Step Number + Title */}
          <div className="flex items-center gap-3 mb-3">
            <span className={`${color.text} font-heading font-bold text-lg`}>
              {step.number}
            </span>
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-white">
              {step.title}
            </h3>
          </div>

          {/* Subtitle */}
          <p className={`${color.badge} font-medium text-sm uppercase tracking-wider mb-3`}>
            {step.subtitle}
          </p>

          {/* Description */}
          <p className="text-text-secondary text-base leading-relaxed max-w-lg">
            {step.description}
          </p>

          {/* Decorative card */}
          <motion.div
            className="mt-8 p-6 sm:p-8 rounded-3xl border border-border bg-bg-card/40 backdrop-blur-sm max-w-md hover:border-border-hover transition-colors"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
          >
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl ${color.bg} flex items-center justify-center`}>
                <Icon size={18} className={color.text} />
              </div>
              <div>
                <p className="text-sm font-medium text-white">{step.subtitle}</p>
                <p className="text-xs text-text-muted">Phase {step.number}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function ProcessTimeline() {
  return (
    <section className="relative py-28 md:py-40" aria-label="Our Process">
      {/* Background */}
      <div className="absolute inset-0 bg-bg-primary" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/[0.02] rounded-full blur-3xl" />

      <div className="relative z-10 section-container">
        <SectionHeading
          title="Our Process, Your Growth"
          description="At Tcongs Infotech, we follow a proven process to transform your ideas into high-performing digital products. From strategy to execution, we focus on delivering scalable and result-driven solutions."
        />

        {/* Timeline */}
        <motion.div
          className="mt-24 max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {processSteps.map((step, index) => (
            <TimelineStep
              key={step.number}
              step={step}
              index={index}
              isLast={index === processSteps.length - 1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
