import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '../../data/faq';
import { Button } from '../ui/Button';
import { fadeUp, staggerContainer } from '../../lib/animations';

function FAQItem({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: (typeof faqItems)[0];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        isOpen
          ? 'border-border-hover bg-bg-card/80 shadow-card'
          : 'border-border bg-bg-card/40 hover:border-border-hover hover:bg-bg-card/60'
      }`}
      variants={fadeUp}
    >
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer group"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <span
          className={`font-medium text-base md:text-lg transition-colors duration-300 ${
            isOpen ? 'text-white' : 'text-text-secondary group-hover:text-white'
          }`}
        >
          {item.question}
        </span>
        <motion.span
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
            isOpen ? 'bg-accent/10 text-accent' : 'bg-glass text-text-muted'
          }`}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <ChevronDown size={16} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            role="region"
            aria-labelledby={`faq-question-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-6 pb-5">
              <p className="text-text-secondary text-base leading-relaxed">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 md:py-32" aria-label="FAQ">
      <div className="absolute inset-0 bg-bg-primary" />

      <div className="relative z-10 section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Heading */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:sticky lg:top-32"
          >
            <motion.span
              className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4"
              variants={fadeUp}
            >
              FAQ
            </motion.span>
            <motion.h2
              className="font-heading font-bold text-3xl md:text-4xl lg:text-[48px] leading-[1.1] tracking-tight text-white"
              variants={fadeUp}
            >
              Questions?
              <br />
              We've Got Answers
            </motion.h2>
            <motion.p
              className="mt-6 text-text-secondary text-base md:text-lg leading-relaxed max-w-md"
              variants={fadeUp}
            >
              Tcongs Infotech helps businesses grow with web development, mobile
              apps, eCommerce solutions, and digital marketing. Here are answers to
              common questions from our clients.
            </motion.p>
            <motion.div className="mt-8" variants={fadeUp}>
              <Button variant="primary" showArrow>
                Book a Free Call 🚀
              </Button>
            </motion.div>
          </motion.div>

          {/* Right — Accordion */}
          <motion.div
            className="space-y-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
