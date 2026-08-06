'use client';

import { Sparkles, ArrowUpRight } from 'lucide-react';
import { store } from '@/lib/store';
import ScrollReveal from './ScrollReveal';

export default function AestheticsOne() {
  return (
    <section className="relative w-full py-28 bg-[#F8F9FF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left Column: Copy & Details */}
          <div className="flex-1 max-w-xl">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 bg-[#E4E8F1] px-4 py-1.5 rounded-full text-xs uppercase tracking-widest text-[#475470] font-bold mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Aesthetics & Precision — 01</span>
              </div>
              <h2 className="fluid-h2 font-black uppercase text-[#2A2A2D] tracking-tight leading-none mb-6 font-[#Space_Grotesk]">
                ANATOMICAL MASTERCLASS
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="fluid-body-lg text-[#171C22]/80 font-light mb-8 leading-relaxed">
                True strength is not accidental. It is engineered through biomechanical alignment, continuous muscle tension, and uncompromised post-workout restoration.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <button
                  type="button"
                  onClick={() => store.setTrialModalOpen(true)}
                  className="bg-[#2A2A2D] text-white hover:bg-[#151618] transition-all px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-xl cursor-pointer active:scale-95"
                >
                  <span>Experience Sanctuary</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <div className="text-xs text-[#63739A] uppercase tracking-wider font-semibold">
                  Anatomical Precision • High Contrast
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: High Contrast Athlete Back Stretch Image */}
          <div className="flex-1 relative w-full max-w-lg">
            <ScrollReveal delay={0.2} y={50}>
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-black/10 group">
                <img
                  src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1200&auto=format&fit=crop"
                  alt="Athletic posture back stretch monochrome"
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#E4E8F1]/80 mb-1">
                    Postural Symmetry & Flexibility
                  </div>
                  <div className="text-2xl font-extrabold uppercase font-[#Space_Grotesk]">
                    Sculpted Resilience
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>

      {/* Giant Overlay Background Typography "EVOLUTION" */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden flex justify-center pointer-events-none select-none z-0">
        <h2 className="fluid-giant font-black uppercase text-black/[0.06] tracking-tighter whitespace-nowrap translate-y-[25%] font-[#Space_Grotesk]">
          EVOLUTION
        </h2>
      </div>
    </section>
  );
}
