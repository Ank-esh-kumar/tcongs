import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { Button } from '../ui/Button';
import { MegaMenu } from './MegaMenu';
import { MobileMenu } from './MobileMenu';

const navLinks = [
  { label: 'Home', href: '#', active: true },
  { label: 'Company', href: '#company' },
  { label: 'Solution', href: '#', hasMega: true },
  { label: 'Connect', href: '#contact' },
];

export function Navbar() {
  const { isScrolled } = useScrollPosition();
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSolutionEnter = useCallback(() => setMegaOpen(true), []);
  const handleSolutionLeave = useCallback(() => setMegaOpen(false), []);
  const closeMega = useCallback(() => setMegaOpen(false), []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3 bg-bg-primary/80 backdrop-blur-xl border-b border-border shadow-lg shadow-black/20'
            : 'py-5 bg-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group" aria-label="TCongs Infotech Home">
            <div className="relative w-9 h-9 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-orange-400 rounded-lg rotate-6 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative text-white font-heading font-bold text-lg">t</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-heading font-bold text-lg text-white tracking-tight">
                TCONGS
              </span>
              <span className="text-[10px] text-text-secondary tracking-[0.15em] uppercase">
                Infotech
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={link.hasMega ? handleSolutionEnter : undefined}
                onMouseLeave={link.hasMega ? handleSolutionLeave : undefined}
              >
                <a
                  href={link.href}
                  className={`relative px-5 py-2.5 text-[15px] font-medium transition-colors duration-300 flex items-center gap-1.5 rounded-full ${
                    link.active
                      ? 'text-accent'
                      : 'text-text-secondary hover:text-white'
                  }`}
                  onClick={link.hasMega ? (e) => e.preventDefault() : undefined}
                  aria-haspopup={link.hasMega ? 'true' : undefined}
                  aria-expanded={link.hasMega ? megaOpen : undefined}
                >
                  <span className="animated-underline">{link.label}</span>
                  {link.hasMega && (
                    <motion.span
                      animate={{ rotate: megaOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ChevronDown size={14} />
                    </motion.span>
                  )}
                  {link.active && (
                    <motion.span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-accent rounded-full"
                      layoutId="activeNav"
                    />
                  )}
                </a>
              </div>
            ))}
          </nav>

          {/* CTA Button + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <Button variant="primary" size="sm" showArrow href="#contact">
                Launch Your Idea 🚀
              </Button>
            </div>
            <button
              className="lg:hidden p-2 text-white hover:text-accent transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mega Menu (Desktop) */}
        <div
          onMouseEnter={handleSolutionEnter}
          onMouseLeave={handleSolutionLeave}
        >
          <AnimatePresence>
            {megaOpen && <MegaMenu onClose={closeMega} />}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
