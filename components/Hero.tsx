'use client';

import { motion } from 'framer-motion';
import { store } from '@/lib/store';
import { ArrowRight, Play, Users, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-between overflow-hidden bg-black text-white pt-32 pb-16">
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

      {/* Giant Background Wordmark "EVOLUTION" (vw / clamp) */}
      <div className="absolute bottom-10 left-0 w-full overflow-hidden flex justify-center pointer-events-none select-none z-0">
        <h1 className="fluid-giant font-black uppercase text-white/10 whitespace-nowrap tracking-tighter translate-y-[20%] font-[#Space_Grotesk]">
          EVOLUTION
        </h1>
      </div>

      {/* Top Floating Video Teaser & Social Proof Badge Overlay */}
      <div className="relative z-10 max-w-7xl w-full px-6 sm:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mt-4">
        {/* Floating Active Member Badge */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-5 py-2.5 flex items-center gap-3 shadow-xl"
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
            <div className="text-[10px] text-white/70 uppercase">Join Our Movement</div>
          </div>
        </motion.div>

        {/* Video Preview Card Badge */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-[#2A2A2D]/80 backdrop-blur-xl border border-white/20 rounded-2xl p-3 flex items-center gap-4 shadow-2xl group cursor-pointer hover:bg-[#2A2A2D]"
          onClick={() => store.setTrialModalOpen(true)}
        >
          <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-black border border-white/20">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=200&auto=format&fit=crop"
              alt="Video Teaser"
              className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Play className="w-5 h-5 text-white fill-white" />
            </div>
          </div>
          <div className="pr-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#63739A] block">
              Facility Tour
            </span>
            <span className="text-xs font-bold uppercase tracking-tight text-white block">
              Watch Experience
            </span>
          </div>
        </motion.div>
      </div>

      {/* Main Hero Center Content */}
      <div className="relative z-10 max-w-5xl mx-auto w-full px-6 text-center my-auto flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs uppercase tracking-widest text-white/90 font-semibold mb-2"
        >
          <Star className="w-3.5 h-3.5 text-[#637304] fill-[#637304]" />
          <span>Boutique Conscious Fitness</span>
        </motion.div>

        {/* Headline with fluid clamp & container query unit styling */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="fluid-h1 font-black uppercase text-white tracking-tight leading-tight font-[#Space_Grotesk]"
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
          className="flex flex-col sm:flex-row items-center gap-4 mt-6"
        >
          <button
            onClick={() => store.setTrialModalOpen(true)}
            className="bg-white text-[#2A2A2D] hover:bg-[#E4E8F1] transition-all duration-300 px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest flex items-center gap-3 shadow-2xl group hover:scale-105"
          >
            <span>Book a free trial class</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="#categories"
            className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20 transition-all duration-300 px-8 py-4 rounded-full font-semibold text-xs uppercase tracking-widest"
          >
            Explore Services
          </a>
        </motion.div>
      </div>

      <div className="relative z-10 w-full text-center text-[10px] uppercase tracking-widest text-white/40">
        Scroll down to experience transformation
      </div>
    </section>
  );
}
