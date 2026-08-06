'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { store } from '@/lib/store';
import { ClassItem } from '@/lib/data';
import { X, CheckCircle2, Clock, Users, Calendar, ArrowRight } from 'lucide-react';

export default function BookingModal() {
  const [selectedClass, setSelectedClass] = useState<ClassItem | null>(null);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setSelectedClass(store.getSelectedClassForBooking());
    });
    return () => unsubscribe();
  }, []);

  const handleClose = () => {
    store.setSelectedClassForBooking(null);
    setSuccess(false);
    setErrorMsg('');
  };

  const handleConfirm = () => {
    if (!selectedClass) return;
    const ok = store.bookClass(selectedClass.id);
    if (ok) {
      setSuccess(true);
      setTimeout(() => {
        handleClose();
      }, 2000);
    } else {
      setErrorMsg('No spots remaining or class already booked in your schedule.');
    }
  };

  return (
    <AnimatePresence>
      {selectedClass && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-[#2A2A2D] text-white rounded-3xl p-8 shadow-2xl border border-white/15 overflow-hidden z-10"
          >
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {success ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <CheckCircle2 className="w-20 h-20 text-[#637304] mb-4" />
                <h3 className="text-2xl font-bold uppercase tracking-tight font-[#Space_Grotesk] mb-2">
                  Class Booked Successfully!
                </h3>
                <p className="text-sm text-white/70 max-w-xs mb-4">
                  You are reserved for {selectedClass.name} at {selectedClass.time}.
                </p>
                <span className="text-xs uppercase tracking-widest text-[#63739A] font-bold">
                  View in your Member Dashboard
                </span>
              </div>
            ) : (
              <div>
                <div className="text-xs uppercase tracking-widest text-[#63739A] font-bold mb-2">
                  Confirm Class Booking
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight font-[#Space_Grotesk] mb-4">
                  {selectedClass.name}
                </h2>

                <div className="bg-black/30 border border-white/10 rounded-2xl p-4 mb-6 flex flex-col gap-3">
                  <div className="flex justify-between items-center text-xs text-white/80">
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-[#63739A]" /> {selectedClass.day}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#63739A]" /> {selectedClass.time} ({selectedClass.duration})</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-white/80 border-t border-white/10 pt-3">
                    <span>Mentor: <strong className="text-white">{selectedClass.trainer}</strong></span>
                    <span className="flex items-center gap-1.5 text-[#637304] font-bold">
                      <Users className="w-4 h-4" /> {selectedClass.spotsAvailable} spots remaining
                    </span>
                  </div>
                </div>

                <p className="text-xs text-white/70 leading-relaxed mb-6 font-light">
                  {selectedClass.description}
                </p>

                {errorMsg && (
                  <p className="text-xs text-red-400 bg-red-950/50 border border-red-800/50 rounded-xl p-3 mb-4 text-center font-medium">
                    {errorMsg}
                  </p>
                )}

                <div className="flex items-center gap-3">
                  <button
                    onClick={handleClose}
                    className="flex-1 bg-white/10 hover:bg-white/20 text-white py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleConfirm}
                    className="flex-1 bg-white text-[#2A2A2D] py-3.5 rounded-xl font-extrabold uppercase tracking-wider text-xs hover:bg-[#E4E8F1] transition-all flex items-center justify-center gap-2 group shadow-xl"
                  >
                    <span>Reserve Spot</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
