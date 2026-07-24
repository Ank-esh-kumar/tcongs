import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { serviceCategories } from '../../data/services';
import { megaMenuVariants, fadeUp, staggerContainer } from '../../lib/animations';

interface MegaMenuProps {
  onClose: () => void;
}

export function MegaMenu({ onClose }: MegaMenuProps) {
  const [activeCategory, setActiveCategory] = useState(0);
  const activeServices = serviceCategories[activeCategory];

  return (
    <motion.div
      className="absolute top-full left-0 right-0 z-50"
      variants={megaMenuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="section-container py-4">
        <div
          className="relative rounded-[28px] border border-border bg-bg-secondary/95 backdrop-blur-2xl shadow-2xl shadow-black/40 overflow-hidden"
          role="menu"
          aria-label="Solutions menu"
        >
          {/* Accent glow */}
          <div className="absolute top-0 left-[15%] w-60 h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

          <div className="flex flex-col lg:flex-row">
            {/* Left Sidebar — Categories */}
            <div className="lg:w-72 flex-shrink-0 p-4 lg:p-6 lg:border-r border-border">
              <nav className="flex flex-row lg:flex-col gap-1 overflow-x-auto lg:overflow-visible" aria-label="Service categories">
                {serviceCategories.map((cat, idx) => {
                  const Icon = cat.icon;
                  const isActive = idx === activeCategory;
                  return (
                    <button
                      key={cat.id}
                      className={`relative flex items-center gap-3 px-4 py-3.5 rounded-2xl text-left whitespace-nowrap transition-all duration-300 cursor-pointer group w-full ${
                        isActive
                          ? 'bg-accent/10 text-white'
                          : 'text-text-secondary hover:text-white hover:bg-glass'
                      }`}
                      onClick={() => setActiveCategory(idx)}
                      onMouseEnter={() => setActiveCategory(idx)}
                      role="menuitem"
                      aria-selected={isActive}
                    >
                      {/* Animated left indicator */}
                      {isActive && (
                        <motion.div
                          className="absolute left-0 top-2 bottom-2 w-1 bg-accent rounded-full"
                          layoutId="megaCategoryIndicator"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                      <Icon
                        size={18}
                        className={`flex-shrink-0 transition-colors duration-300 ${
                          isActive ? 'text-accent' : 'text-text-muted group-hover:text-white'
                        }`}
                      />
                      <span className="text-sm font-medium">{cat.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Right Side — Service Cards */}
            <div className="flex-1 p-4 lg:p-6 min-h-[380px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  className="grid grid-cols-1 md:grid-cols-2 gap-3"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {activeServices.services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <motion.a
                        key={service.title}
                        href={service.link}
                        className="group relative flex items-start gap-4 p-4 rounded-2xl border border-transparent bg-glass hover:bg-glass-hover hover:border-border transition-all duration-300"
                        variants={fadeUp}
                        whileHover={{ scale: 1.01, y: -2 }}
                        onClick={onClose}
                        role="menuitem"
                      >
                        {/* Icon */}
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-bg-card border border-border flex items-center justify-center group-hover:border-accent/30 group-hover:shadow-glow transition-all duration-300">
                          <Icon
                            size={18}
                            className="text-text-muted group-hover:text-accent transition-colors duration-300"
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm font-semibold text-white group-hover:text-accent transition-colors duration-300 truncate">
                              {service.title}
                            </h4>
                            <ArrowUpRight
                              size={14}
                              className="flex-shrink-0 text-text-muted opacity-0 group-hover:opacity-100 group-hover:text-accent transition-all duration-300 -translate-x-1 group-hover:translate-x-0"
                            />
                          </div>
                          <p className="text-xs text-text-muted mt-1 leading-relaxed line-clamp-2">
                            {service.description}
                          </p>
                        </div>

                        {/* Hover glow */}
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-r from-accent/[0.03] to-transparent" />
                      </motion.a>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
