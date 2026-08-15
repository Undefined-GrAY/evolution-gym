'use client';

import { motion } from 'framer-motion';
import { store } from '@/lib/store';
import { ArrowRight, Play, Users, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[85svh] md:h-[100dvh] md:max-h-[100dvh] flex flex-col items-center justify-between overflow-hidden bg-black text-white pt-[clamp(4.5rem,7vh,6.5rem)] pb-[clamp(4.5rem,8vh,6.5rem)]">
      {/* Full Bleed Media Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2000&auto=format&fit=crop"
          alt="Atmospheric athletic athlete training"
          className="w-full h-full object-cover object-center opacity-45 scale-105 filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
      </div>

      {/* Giant Background Wordmark "EVOLUTION" (Constrained to max-w-[1440px]) */}
      <div className="absolute bottom-8 [@media(min-height:740px)]:bottom-14 left-1/2 -translate-x-1/2 w-full max-w-[1440px] overflow-hidden flex justify-center pointer-events-none select-none z-0 px-6 sm:px-12">
        <h1 className="wordmark-capped font-black uppercase text-white/10 whitespace-nowrap tracking-tighter translate-y-[20%] font-[#Space_Grotesk]">
          EVOLUTION
        </h1>
      </div>

      {/* Desktop Floating Video Teaser & Social Proof Badge Overlay (Absolute Overlay - Raised 4px) */}
      <div className="hidden md:flex [@media(max-height:740px)]:hidden absolute top-[108px] lg:top-[124px] left-0 right-0 z-10 container-fluid justify-between items-center gap-6 pointer-events-none">
        {/* Floating Active Member Badge */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-5 py-2 flex items-center gap-3 shadow-xl pointer-events-auto"
        >
          <div className="flex -space-x-2">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
              className="w-7 h-7 rounded-full border border-white object-cover"
              alt="Member"
            />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
              className="w-7 h-7 rounded-full border border-white object-cover"
              alt="Member"
            />
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"
              className="w-7 h-7 rounded-full border border-white object-cover"
              alt="Member"
            />
          </div>
          <div>
            <div className="text-xs font-black uppercase tracking-wider text-white">23K+ Members</div>
            <div className="text-[13px] text-white/70 uppercase">Join Our Movement</div>
          </div>
        </motion.div>

        {/* Video Preview Card Badge */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-[#2A2A2D]/80 backdrop-blur-xl border border-white/20 rounded-2xl p-2.5 flex items-center gap-3.5 shadow-2xl group cursor-pointer hover:bg-[#2A2A2D] pointer-events-auto"
          onClick={() => store.setTrialModalOpen(true)}
        >
          <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-black border border-white/20">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=200&auto=format&fit=crop"
              alt="Video Teaser"
              className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Play className="w-4 h-4 text-white fill-white" />
            </div>
          </div>
          <div className="pr-2">
            <span className="text-[13px] font-bold uppercase tracking-widest text-[#63739A] block">
              Facility Tour
            </span>
            <span className="text-xs font-bold uppercase tracking-tight text-white block">
              Watch Experience
            </span>
          </div>
        </motion.div>
      </div>

      {/* Main Hero Center Content */}
      <div className="relative z-10 max-w-5xl mx-auto w-full px-4 sm:px-6 text-center my-auto flex flex-col items-center gap-4 lg:gap-5 py-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-[13px] uppercase tracking-widest text-white/90 font-semibold mb-1"
        >
          <Star className="w-3.5 h-3.5 text-[#637304] fill-[#637304]" />
          <span>Boutique Conscious Fitness</span>
        </motion.div>

        {/* Headline with fluid clamp & container query unit styling */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="fluid-h1 font-black uppercase text-white tracking-tight leading-[0.95] font-[#Space_Grotesk] max-w-4xl"
        >
          PREMIUM SPACE FOR YOUR LIFESTYLE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="fluid-body-lg text-white/80 max-w-2xl font-light leading-relaxed"
        >
          Less chaos, more control. Defined by clarity, restraint, and anatomical precision.
        </motion.p>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-3 lg:mt-4 w-full sm:w-auto"
        >
          <button
            onClick={() => store.setTrialModalOpen(true)}
            className="w-full sm:w-auto bg-white text-[#2A2A2D] hover:bg-[#E4E8F1] transition-all duration-300 px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 shadow-2xl group hover:scale-105 cursor-pointer"
          >
            <span>Book a free trial class</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="#categories"
            className="w-full sm:w-auto text-center bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20 transition-all duration-300 px-7 py-3.5 rounded-full font-semibold text-xs uppercase tracking-widest cursor-pointer"
          >
            Explore Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}
