import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, ArrowUpRight } from 'lucide-react';
import { serviceCategories } from '../../data/services';
import { Button } from '../ui/Button';

interface MobileMenuProps {
  onClose: () => void;
}

const navLinks = [
  { label: 'Home', href: '#', active: true },
  { label: 'Company', href: '#company' },
  { label: 'Connect', href: '#contact' },
];

export function MobileMenu({ onClose }: MobileMenuProps) {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-bg-primary/98 backdrop-blur-xl overflow-y-auto"
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-border">
        <a href="#" className="flex items-center group" onClick={onClose}>
          <img 
            src="https://tcongsinfotech.com/frontend-assets/images/svgs/logo.svg" 
            alt="TCongs Infotech" 
            className="h-[36px] w-auto transition-transform duration-300 group-hover:scale-105" 
          />
        </a>
        <button
          onClick={onClose}
          className="p-2 text-text-secondary hover:text-white transition-colors"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="p-6 space-y-2" aria-label="Mobile navigation">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`block py-3 px-4 text-lg font-medium rounded-xl transition-colors ${
              link.active ? 'text-accent bg-accent/10' : 'text-white hover:bg-glass'
            }`}
            onClick={onClose}
          >
            {link.label}
          </a>
        ))}

        {/* Solutions Accordion */}
        <div className="pt-4 border-t border-border mt-4">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-text-muted px-4 mb-3">
            Solutions
          </p>
          {serviceCategories.map((cat, idx) => {
            const Icon = cat.icon;
            const isExpanded = expandedCategory === idx;
            return (
              <div key={cat.id} className="mb-1">
                <button
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all cursor-pointer ${
                    isExpanded
                      ? 'bg-accent/10 text-white'
                      : 'text-text-secondary hover:text-white hover:bg-glass'
                  }`}
                  onClick={() => setExpandedCategory(isExpanded ? null : idx)}
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={18} className={isExpanded ? 'text-accent' : ''} />
                    <span className="text-sm font-medium">{cat.label}</span>
                  </div>
                  <motion.span
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronDown size={16} />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pl-6 pr-2 py-2 space-y-1">
                        {cat.services.map((service) => (
                          <a
                            key={service.title}
                            href={service.link}
                            className="flex items-center gap-2 px-3 py-2.5 text-sm text-text-secondary hover:text-white rounded-lg hover:bg-glass transition-colors group"
                            onClick={onClose}
                          >
                            <span className="flex-1">{service.title}</span>
                            <ArrowUpRight
                              size={12}
                              className="opacity-0 group-hover:opacity-100 text-accent transition-opacity"
                            />
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </nav>

      {/* CTA */}
      <div className="p-6 pt-0">
        <Button variant="primary" size="lg" showArrow href="#contact" className="w-full">
          Launch Your Idea 🚀
        </Button>
      </div>
    </motion.div>
  );
}
