'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { store } from '@/lib/store';
import { X, Sparkles, ShieldCheck, Flame, Cpu, ArrowRight } from 'lucide-react';

export default function PhilosophyModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setIsOpen(store.getIsPhilosophyModalOpen());
    });
    return unsubscribe;
  }, []);

  const closeModal = () => {
    store.setPhilosophyModalOpen(false);
  };

  const openTrial = () => {
    store.setPhilosophyModalOpen(false);
    store.setTrialModalOpen(true);
  };

  const pillars = [
    {
      icon: Flame,
      title: 'Zero Vanity Noise',
      desc: 'No chaotic distractions or vanity culture. Designed strictly for internal focus and physical longevity.'
    },
    {
      icon: Cpu,
      title: 'Biomechanical Engineering',
      desc: 'Equipped with Eleiko competition bars and Technogym platforms for peak output and safety.'
    },
    {
      icon: ShieldCheck,
      title: 'Thermal Restoration',
      desc: 'Contrast hydrotherapy, infrared sauna pods, and metabolic recovery suites after every session.'
    },
    {
      icon: Sparkles,
      title: 'Pedigree Mentorship',
      desc: 'Guided by sports science specialists, competitive athletes, and master coaches.'
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container (Bottom Sheet on Mobile, Centered Card on Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className="relative w-full max-w-2xl bg-[#2A2A2D] text-white rounded-t-[2.5rem] sm:rounded-3xl p-6 sm:p-8 shadow-2xl border-t sm:border border-white/15 z-10 max-h-[88vh] sm:max-h-[90vh] flex flex-col overflow-hidden"
          >
            {/* Mobile Drag Indicator Bar */}
            <div className="w-12 h-1 bg-white/20 rounded-full mx-auto mb-4 sm:hidden flex-shrink-0" />

            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#475470]/30 rounded-full blur-3xl pointer-events-none" />

            {/* Fixed Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4 flex-shrink-0">
              <div>
                <span className="text-[11px] sm:text-[13px] font-extrabold uppercase tracking-widest text-[#63739A] block mb-0.5">
                  Philosophical Thesis
                </span>
                <h3 className="text-xl sm:text-3xl font-black uppercase font-[#Space_Grotesk] tracking-tight text-white">
                  THE EVOLUTION MANIFESTO
                </h3>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer flex-shrink-0"
                aria-label="Close Philosophy Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Modal Content */}
            <div className="overflow-y-auto pr-1 flex-1 space-y-4 text-left custom-scrollbar">
              {/* Manifesto Quote */}
              <blockquote className="text-xs sm:text-base italic text-white/90 font-light leading-relaxed border-l-2 border-white/40 pl-3 sm:pl-4 py-1 bg-white/5 rounded-r-xl">
                "We work with those who value their time, their body, and their internal energy. Training here is an intentional ritual for peak human output."
              </blockquote>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {pillars.map((p, idx) => {
                  const Icon = p.icon;
                  return (
                    <div key={idx} className="bg-white/5 border border-white/10 p-3.5 sm:p-4 rounded-2xl">
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-white flex-shrink-0">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wide font-[#Space_Grotesk]">
                          {p.title}
                        </h4>
                      </div>
                      <p className="text-[11px] sm:text-xs text-white/70 font-light leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Sticky Actions Footer */}
            <div className="flex flex-col sm:flex-row gap-2.5 pt-4 border-t border-white/10 mt-3 flex-shrink-0">
              <button
                type="button"
                onClick={openTrial}
                className="w-full sm:flex-1 bg-white text-[#2A2A2D] hover:bg-[#E4E8F1] py-3.5 rounded-full font-extrabold uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer active:scale-95"
              >
                <span>Experience Sanctuary</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="w-full sm:w-auto px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-bold uppercase tracking-widest text-xs transition-all cursor-pointer text-center"
              >
                Close Brief
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
