import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Clock, Target, FileCheck, Mail, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { fadeUp, staggerContainer, slideInLeft, slideInRight } from '../../lib/animations';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  consent: z.literal(true, {
    message: 'Please verify you are human',
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const processSteps = [
  { icon: Clock, text: "You'll hear from us within one business day." },
  { icon: Target, text: "We'll understand your goals and requirements." },
  { icon: FileCheck, text: "You'll receive a clear proposal with pricing & timeline." },
];

function FloatingInput({
  label,
  id,
  type = 'text',
  error,
  ...props
}: {
  label: string;
  id: string;
  type?: string;
  error?: string;
  [key: string]: any;
}) {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        placeholder=" "
        className={`peer w-full px-5 py-4 pt-6 rounded-2xl border bg-bg-card/60 text-white text-base outline-none transition-all duration-300 placeholder-transparent
          ${
            error
              ? 'border-red-500/50 focus:border-red-500'
              : 'border-border focus:border-accent hover:border-border-hover'
          }
          focus:ring-1 focus:ring-accent/20`}
        {...props}
      />
      <label
        htmlFor={id}
        className={`absolute left-5 top-2 text-xs font-medium transition-all duration-300
          peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal
          peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:font-medium
          ${error ? 'text-red-400' : 'text-text-muted peer-focus:text-accent'}`}
      >
        {label}
      </label>
      {error && (
        <p className="mt-1.5 text-xs text-red-400 px-1">{error}</p>
      )}
    </div>
  );
}

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (_data: ContactFormData) => {
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32" aria-label="Contact">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary to-bg-secondary" />
      {/* Accent glow */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[100px]" />

      <div className="relative z-10 section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.h2
              className="font-heading font-bold text-3xl md:text-4xl lg:text-[48px] leading-[1.1] tracking-tight text-white"
              variants={slideInLeft}
            >
              Let's Build Something
              <br />
              You'll Be Proud Of
            </motion.h2>
            <motion.p
              className="mt-6 text-text-secondary text-lg leading-relaxed max-w-md"
              variants={slideInLeft}
            >
              Have a project in mind? Whether you need a website, mobile app, or
              digital solution, our team is ready to turn your ideas into reality.
            </motion.p>

            {/* Process steps */}
            <motion.div className="mt-10 space-y-4" variants={slideInLeft}>
              {processSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={i}
                    className="flex items-start gap-4 group"
                    variants={fadeUp}
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Icon size={18} className="text-accent" />
                    </div>
                    <p className="text-text-secondary text-base pt-2">
                      {step.text}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Email */}
            <motion.div className="mt-10" variants={fadeUp}>
              <p className="text-text-muted text-sm mb-2">
                Prefer email instead? Feel free to contact us directly.
              </p>
              <a
                href="mailto:info@tcongsinfotech.com"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors group"
              >
                <Mail size={16} />
                <span className="animated-underline font-medium">
                  info@tcongsinfotech.com
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            className="rounded-[24px] border border-border bg-bg-card/40 backdrop-blur-sm p-8 md:p-10"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {isSubmitted ? (
              <motion.div
                className="flex flex-col items-center justify-center py-16 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                  <CheckCircle size={32} className="text-green-500" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-white mb-3">
                  Message Sent!
                </h3>
                <p className="text-text-secondary max-w-sm">
                  Thank you for reaching out. We'll get back to you within one
                  business day.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <FloatingInput
                  label="Full Name"
                  id="contact-name"
                  error={errors.name?.message}
                  {...register('name')}
                />
                <FloatingInput
                  label="Email Address"
                  id="contact-email"
                  type="email"
                  error={errors.email?.message}
                  {...register('email')}
                />
                <FloatingInput
                  label="Phone Number (optional)"
                  id="contact-phone"
                  type="tel"
                  error={errors.phone?.message}
                  {...register('phone')}
                />

                {/* Textarea */}
                <div className="relative">
                  <textarea
                    id="contact-message"
                    placeholder=" "
                    rows={4}
                    className={`peer w-full px-5 py-4 pt-6 rounded-2xl border bg-bg-card/60 text-white text-base outline-none transition-all duration-300 placeholder-transparent resize-none
                      ${
                        errors.message
                          ? 'border-red-500/50 focus:border-red-500'
                          : 'border-border focus:border-accent hover:border-border-hover'
                      }
                      focus:ring-1 focus:ring-accent/20`}
                    {...register('message')}
                  />
                  <label
                    htmlFor="contact-message"
                    className={`absolute left-5 top-2 text-xs font-medium transition-all duration-300
                      peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal
                      peer-focus:top-2 peer-focus:text-xs peer-focus:font-medium
                      ${errors.message ? 'text-red-400' : 'text-text-muted peer-focus:text-accent'}`}
                  >
                    Your Message
                  </label>
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-400 px-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Human verification */}
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded-md border-2 border-border bg-bg-card accent-accent cursor-pointer"
                    {...register('consent')}
                  />
                  <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                    Human Verification: I confirm I am not a robot
                  </span>
                </label>
                {errors.consent && (
                  <p className="text-xs text-red-400 px-1 -mt-3">
                    {errors.consent.message}
                  </p>
                )}

                {/* Submit */}
                <Button
                  variant="primary"
                  size="lg"
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
