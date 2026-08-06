'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { store } from '@/lib/store';
import { X, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

export default function TrialModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Strength & Conditioning',
    preferredTime: 'Morning'
  });

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setIsOpen(store.getIsTrialModalOpen());
    });
    return () => unsubscribe();
  }, []);

  const handleClose = () => {
    store.setTrialModalOpen(false);
    setTimeout(() => setSubmitted(false), 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      handleClose();
    }, 2200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-[#2A2A2D] text-white rounded-3xl p-8 shadow-2xl border border-white/15 overflow-hidden z-10"
          >
            {/* Background Accent glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#475470]/30 rounded-full filter blur-3xl pointer-events-none" />

            <button
              onClick={handleClose}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                >
                  <CheckCircle2 className="w-20 h-20 text-[#637304] mb-4" />
                </motion.div>
                <h3 className="text-2xl font-bold uppercase tracking-tight font-[#Space_Grotesk] mb-2">
                  Trial Reservation Confirmed!
                </h3>
                <p className="text-sm text-white/70 max-w-xs">
                  We have saved your complimentary trial pass. A mentor will contact you shortly to confirm your time slot.
                </p>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#63739A] font-bold mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Complimentary Pass</span>
                </div>
                <h2 className="text-3xl font-extrabold uppercase tracking-tight font-[#Space_Grotesk] mb-2">
                  Book A Free Trial
                </h2>
                <p className="text-sm text-white/70 mb-6 font-light">
                  Experience EVOLUTION with zero commitment. Access our state-of-the-art facility, thermal spa, and expert coaching.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-white/60 mb-1">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Alex Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/50 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-white/60 mb-1">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="alex@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-white/60 mb-1">
                        Phone Number
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="+380 (50) 123-4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-white/60 mb-1">
                        Primary Interest
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full bg-[#151618] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/50 transition-colors"
                      >
                        <option value="Strength & Conditioning">Strength & Conditioning</option>
                        <option value="Ashtanga Yoga">Ashtanga Yoga</option>
                        <option value="Technical Boxing">Technical Boxing</option>
                        <option value="Thermal Recovery Spa">Thermal Recovery Spa</option>
                        <option value="1-on-1 Personal Training">1-on-1 Personal Training</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-white/60 mb-1">
                        Preferred Window
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full bg-[#151618] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/50 transition-colors"
                      >
                        <option value="Morning">Morning (07:00 – 12:00)</option>
                        <option value="Afternoon">Afternoon (12:00 – 17:00)</option>
                        <option value="Evening">Evening (17:00 – 21:00)</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-white text-[#2A2A2D] py-4 rounded-xl font-extrabold uppercase tracking-widest text-xs mt-4 hover:bg-[#E4E8F1] transition-all flex items-center justify-center gap-2 group shadow-xl"
                  >
                    <span>Claim Free Trial Pass</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
