import { motion } from 'framer-motion';
import { MapPin, Globe, MessageCircle, Share2, ExternalLink } from 'lucide-react';
import { serviceCategories } from '../../data/services';
import { fadeUp, staggerContainer } from '../../lib/animations';

const companyLinks = [
  { label: 'Home', href: '#' },
  { label: 'Company', href: '#company' },
  { label: 'Solution', href: '#services' },
  { label: 'Connect', href: '#contact' },
];

const scaleItems = [
  'Launch on Top Marketplaces',
  'Build High-Converting Stores',
  'Optimize Listings for Sales',
  'Run Profitable Ad Campaigns',
  'Grow Globally',
];

const socialLinks = [
  { icon: Globe, href: '#', label: 'LinkedIn' },
  { icon: MessageCircle, href: '#', label: 'Twitter' },
  { icon: Share2, href: '#', label: 'Instagram' },
  { icon: ExternalLink, href: '#', label: 'Facebook' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-24 pb-10 bg-bg-secondary border-t border-border" aria-label="Footer">
      {/* Top accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-60 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="section-container">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Brand */}
          <motion.div variants={fadeUp} className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <a href="#" className="flex items-center group mb-6">
              <img 
                src="https://tcongsinfotech.com/frontend-assets/images/svgs/logo.svg" 
                alt="TCongs Infotech" 
                className="h-[42px] w-auto transition-transform duration-300 group-hover:scale-105" 
              />
            </a>
            <p className="text-text-muted text-sm leading-relaxed mb-6 max-w-xs">
              Empowering global brands with 8+ years of expertise in custom web
              development, e-commerce marketplace optimization, and Generative
              Engine Optimization (GEO). We turn complex challenges into seamless
              digital growth.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-9 h-9 rounded-xl border border-border bg-glass flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/30 hover:bg-accent/5 hover:-translate-y-1 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={fadeUp}>
            <h4 className="font-heading font-semibold text-white text-base mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-muted hover:text-white animated-underline inline-block transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeUp}>
            <h4 className="font-heading font-semibold text-white text-base mb-5">
              Specialized Services
            </h4>
            <ul className="space-y-3">
              {serviceCategories.map((cat) => (
                <li key={cat.id}>
                  <a
                    href={`#${cat.id}`}
                    className="text-sm text-text-muted hover:text-white animated-underline inline-block transition-colors duration-300"
                  >
                    {cat.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Scale Your Business */}
          <motion.div variants={fadeUp}>
            <h4 className="font-heading font-semibold text-white text-base mb-5">
              Scale Your Online Business
            </h4>
            <ul className="space-y-3">
              {scaleItems.map((item) => (
                <li key={item} className="text-sm text-text-muted flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="my-10 h-px bg-border" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-text-muted">
            <MapPin size={14} className="text-accent" />
            <span>Mumbai Office: Based in Mumbai, India. Serving clients worldwide.</span>
          </div>
          <p className="text-sm text-text-muted">
            © {currentYear} Tcongs Infotech. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
