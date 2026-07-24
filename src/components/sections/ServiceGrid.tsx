import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { serviceCategories } from '../../data/services';
import { SectionHeading } from '../ui/SectionHeading';
import { fadeUp, staggerContainer } from '../../lib/animations';

export function ServiceGrid() {
  return (
    <section id="services" className="relative py-24 md:py-32" aria-label="Our Services">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary" />

      <div className="relative z-10 section-container">
        <SectionHeading
          badge="WE ARE GREAT AT"
          title="Scalable solutions for modern businesses"
        />

        {/* Service Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {serviceCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.a
                key={cat.id}
                href={`#${cat.id}`}
                className="group relative p-8 rounded-[20px] border border-border bg-bg-card/60 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-border-hover hover:bg-bg-card block"
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
                </div>

                {/* Badge */}
                <span className="inline-block text-[10px] font-semibold tracking-[0.2em] uppercase text-accent/70 mb-4">
                  {cat.badge}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-bg-secondary border border-border flex items-center justify-center mb-5 group-hover:border-accent/20 group-hover:shadow-glow transition-all duration-500">
                  <Icon
                    size={24}
                    className="text-text-muted group-hover:text-accent transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                  />
                </div>

                {/* Title */}
                <h3 className="font-heading font-semibold text-xl text-white mb-2 flex items-center gap-2">
                  {cat.label}
                  <ArrowUpRight
                    size={16}
                    className="opacity-0 group-hover:opacity-100 text-accent transition-all duration-300 -translate-x-2 group-hover:translate-x-0"
                  />
                </h3>

                {/* Service count */}
                <p className="text-sm text-text-muted">
                  {cat.services.length} specialized services
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
