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

interface NavbarProps {
  onLetsTalkClick?: () => void;
}

export function Navbar({ onLetsTalkClick }: NavbarProps) {
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
          <a href="#" className="flex items-center group" aria-label="TCongs Infotech Home">
            <img 
              src="https://tcongsinfotech.com/frontend-assets/images/svgs/logo.svg" 
              alt="TCongs Infotech" 
              className="h-[42px] w-auto transition-transform duration-300 group-hover:scale-105" 
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10" aria-label="Main navigation">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative flex items-center h-full"
                onMouseEnter={link.hasMega ? handleSolutionEnter : undefined}
                onMouseLeave={link.hasMega ? handleSolutionLeave : undefined}
              >
                <a
                  href={link.href}
                  className={`relative text-[15px] transition-colors duration-300 flex items-center gap-1.5 ${
                    link.active
                      ? 'text-accent font-medium'
                      : 'text-white hover:text-accent font-normal'
                  }`}
                  onClick={link.hasMega ? (e) => e.preventDefault() : undefined}
                  aria-haspopup={link.hasMega ? 'true' : undefined}
                  aria-expanded={link.hasMega ? megaOpen : undefined}
                >
                  <span>{link.label}</span>
                  {link.hasMega && (
                    <motion.span
                      className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-white/10"
                      animate={{ rotate: megaOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ChevronDown size={11} className="text-white/80" strokeWidth={3} />
                    </motion.span>
                  )}
                  {link.active && (
                    <motion.span
                      className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-accent"
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
              <Button variant="primary" size="sm" onClick={onLetsTalkClick}>
                Let's Talk
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
