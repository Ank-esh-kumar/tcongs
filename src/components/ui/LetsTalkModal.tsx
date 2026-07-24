import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { X, Loader2 } from 'lucide-react';


const schema = z.object({
  name: z.string().min(2, 'Required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(5, 'Required'),
  project: z.string().min(5, 'Required'),
  mathAnswer: z.string().min(1, 'Required'),
});

type FormData = z.infer<typeof schema>;

interface LetsTalkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LetsTalkModal({ isOpen, onClose }: LetsTalkModalProps) {
  const [mathSum, setMathSum] = useState({ a: 0, b: 0 });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMathSum({
        a: Math.floor(Math.random() * 10) + 1,
        b: Math.floor(Math.random() * 10) + 1,
      });
      setIsSubmitted(false);
      reset();
    }
  }, [isOpen]);

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    if (parseInt(data.mathAnswer) !== mathSum.a + mathSum.b) {
      setError('mathAnswer', { type: 'manual', message: 'Incorrect sum' });
      setMathSum({
        a: Math.floor(Math.random() * 10) + 1,
        b: Math.floor(Math.random() * 10) + 1,
      });
      return;
    }
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1000));
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-[480px] p-[1.5px] rounded-[24px] bg-gradient-to-br from-[#D89B1F] to-[#EA2B4D] shadow-2xl z-10"
          >
            <div className="bg-[#111] rounded-[22.5px] p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto custom-scrollbar">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-xl bg-[#222] hover:bg-[#333] flex items-center justify-center text-white transition-colors"
                aria-label="Close"
              >
                <X size={16} />
              </button>

              <div className="text-center mb-6">
                <img
                  src="https://tcongsinfotech.com/frontend-assets/images/svgs/logo.svg"
                  alt="TCongs Infotech"
                  className="h-[28px] mx-auto mb-3"
                />
                <h2 className="text-[26px] font-bold text-white leading-tight font-heading">
                  Let's Talk
                </h2>
                <p className="text-[#B8B8B8] text-[15px] mt-1.5">
                  Tell us a bit about your project and we'll reach out shortly.
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-500 text-3xl">✓</span>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                  <p className="text-text-secondary">We'll be in touch very soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                  {/* Full Name */}
                  <div>
                    <label className="block text-white text-[14px] font-bold mb-1.5">Full Name</label>
                    <input
                      type="text"
                      placeholder="Full Name*"
                      className={`w-full bg-[#1A1A1A] border rounded-xl px-4 py-3 text-[15px] text-white placeholder-[#666] focus:outline-none transition-colors ${errors.name ? 'border-red-500' : 'border-[#333] focus:border-accent'}`}
                      {...register('name')}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-white text-[14px] font-bold mb-1.5">Email Address</label>
                    <input
                      type="email"
                      placeholder="Email Address*"
                      className={`w-full bg-[#1A1A1A] border rounded-xl px-4 py-3 text-[15px] text-white placeholder-[#666] focus:outline-none transition-colors ${errors.email ? 'border-red-500' : 'border-[#333] focus:border-accent'}`}
                      {...register('email')}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-white text-[14px] font-bold mb-1.5">Phone Number</label>
                    <div className={`flex bg-[#1A1A1A] border rounded-xl overflow-hidden focus-within:border-accent transition-colors ${errors.phone ? 'border-red-500' : 'border-[#333]'}`}>
                      <div className="flex items-center gap-1.5 px-3 border-r border-[#333] bg-[#222]">
                        <span className="text-lg">🇮🇳</span>
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L5 5L9 1" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <input
                        type="tel"
                        placeholder="Phone Number*"
                        className="flex-1 bg-transparent px-4 py-3 text-[15px] text-white placeholder-[#666] focus:outline-none"
                        {...register('phone')}
                      />
                    </div>
                  </div>

                  {/* Project */}
                  <div>
                    <textarea
                      placeholder="Tell us about your project*"
                      rows={3}
                      className={`w-full bg-[#1A1A1A] border rounded-xl px-4 py-3 text-[15px] text-white placeholder-[#666] focus:outline-none resize-none transition-colors mt-2 ${errors.project ? 'border-red-500' : 'border-[#333] focus:border-accent'}`}
                      {...register('project')}
                    />
                  </div>

                  {/* Captcha */}
                  <div className="p-4 rounded-xl border border-[#333] bg-white/[0.02]">
                    <p className="text-[15px] text-[#B8B8B8] mb-3 font-medium">
                      Human Verification: {mathSum.a} + {mathSum.b} =
                    </p>
                    <input
                      type="number"
                      placeholder="Enter Sum*"
                      className={`w-full bg-[#1A1A1A] border rounded-xl px-4 py-3 text-[15px] text-white placeholder-[#666] focus:outline-none transition-colors ${errors.mathAnswer ? 'border-red-500' : 'border-[#333] focus:border-accent'}`}
                      {...register('mathAnswer')}
                    />
                    {errors.mathAnswer && (
                      <p className="text-red-400 text-xs mt-1">{errors.mathAnswer.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#D89B1F] to-[#EA2B4D] text-[#111] font-bold text-[16px] py-3.5 rounded-xl hover:opacity-90 transition-opacity mt-2 flex justify-center items-center gap-2"
                  >
                    {isSubmitting ? (
                      <><Loader2 size={18} className="animate-spin" /> Submitting...</>
                    ) : (
                      'Submit Inquiry'
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
