'use client';

import { store } from '@/lib/store';
import { ArrowRight, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function FinalCTA() {
  return (
    <section className="w-full py-20 sm:py-28 text-center bg-gradient-to-b from-transparent via-[#E4E8F1]/40 to-[#E4E8F1] mt-12">
      <ScrollReveal>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-[#2A2A2D] text-white px-4 py-1.5 rounded-full text-[13px] uppercase tracking-widest font-bold mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#637304]" />
            <span>Begin Your Transformation Today</span>
          </div>

          <h2 className="fluid-h2 font-black uppercase text-[#2A2A2D] tracking-tight leading-none mb-8 font-[#Space_Grotesk]">
            READY TO EVOLVE?
          </h2>

          <p className="fluid-body-lg text-[#171C22]/80 max-w-xl font-light mb-10 leading-relaxed">
            Step into a boutique environment built exclusively for focus, power, and physical balance. Book your complimentary trial session now.
          </p>

          <button
            type="button"
            onClick={() => store.setTrialModalOpen(true)}
            className="bg-[#2A2A2D] text-white px-12 py-6 rounded-full font-extrabold text-xs uppercase tracking-widest hover:bg-[#151618] transition-all shadow-2xl flex items-center gap-3 group hover:scale-105 cursor-pointer active:scale-95"
          >
            <span>Book a free trial class</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>
      </ScrollReveal>
    </section>
  );
}
