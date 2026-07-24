import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-[320px] sm:w-[350px] bg-[#0c0c0c] border border-[#262626] rounded-[20px] overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#262626]">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-[46px] h-[46px] bg-white rounded-full flex items-center justify-center overflow-hidden relative">
                    <img 
                      src="https://tcongsinfotech.com/frontend-assets/images/svgs/logo.svg" 
                      alt="TCongs" 
                      className="absolute left-[6px] top-[11px] h-6 w-auto max-w-none" 
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#22c55e] rounded-full border-2 border-[#0c0c0c]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-[15px] leading-none mb-1">Tcongs Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-[#22c55e] rounded-full" />
                    <span className="text-[#22c55e] text-xs font-medium">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center bg-[#222] hover:bg-[#333] transition-colors rounded-xl text-white"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 flex flex-col gap-4 h-[320px] bg-[#0c0c0c] overflow-y-auto">
              {/* Bot Message */}
              <div className="bg-[#1c1c1c] px-4 py-3.5 rounded-[16px] rounded-tl-sm text-white text-[14px] max-w-[90%] border border-[#2a2a2a] leading-snug">
                Hi! Welcome to Tcongs Infotech.<br/>How can we help you today?
              </div>

              {/* Quick Replies */}
              <div className="flex flex-wrap gap-2 mt-1">
                {["Our Services", "Contact Details", "About Us", "Careers"].map((reply) => (
                  <button 
                    key={reply}
                    className="px-4 py-1.5 rounded-full border border-accent bg-transparent text-white text-[13px] hover:bg-accent/10 transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-[#262626] flex items-center gap-2 bg-[#0c0c0c]">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-1 bg-[#1a1a1a] border border-[#262626] rounded-xl px-4 py-2.5 text-sm text-white placeholder-text-muted focus:outline-none focus:border-accent/50 transition-colors"
              />
              <button className="bg-gradient-to-r from-gold to-accent text-black font-bold px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity text-sm">
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Toggle Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-gold to-accent px-5 py-3.5 rounded-full flex items-center gap-2 shadow-lg shadow-accent/20"
          aria-label="Open chat"
        >
          <div className="w-2.5 h-2.5 bg-[#111] rounded-full" />
          <span className="text-[#111] font-bold text-[15px]">Chat</span>
        </motion.button>
      )}
    </div>
  );
}
