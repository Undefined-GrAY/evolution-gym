'use client';

import { store } from '@/lib/store';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function WhyUs() {
  const highlights = [
    { value: '0%', label: 'Noise, Maximum Focus', desc: 'No distractive clutter or chaos. Dedicated training vectors.' },
    { value: '380+', label: 'Transformations / mo', desc: 'Verified biometric results through disciplined programming.' },
    { value: '100%', label: 'Biomechanical Gear', desc: 'Custom Technogym & Eleiko equipment tailored for performance.' },
    { value: '24/7', label: 'Reprogram Potential', desc: 'Continuous biometric feedback & recovery pod access.' }
  ];

  return (
    <section className="px-4 sm:px-8 max-w-7xl mx-auto w-full py-12">
      <ScrollReveal>
        <div className="bg-[#475470] text-white rounded-[2.5rem] p-8 sm:p-16 relative overflow-hidden shadow-2xl">
          {/* Background Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/20 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <span className="text-xs uppercase tracking-widest text-white/70 font-extrabold block mb-4">
                Philosophical Thesis
              </span>
              <h2 className="fluid-h2 font-black uppercase tracking-tight leading-none mb-6 font-[#Space_Grotesk]">
                RITUAL DEPTH OF PHYSICAL AND MENTAL RESTORATION
              </h2>
              <p className="fluid-body-lg text-white/85 font-light mb-8 max-w-xl">
                We work with those who value their time, their body, and their internal energy. Training here is an intentional ritual for peak human output — zero vanity noise, maximum focus.
              </p>
              <button
                type="button"
                onClick={() => store.setTrialModalOpen(true)}
                className="bg-white/15 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full text-xs font-extrabold uppercase tracking-widest hover:bg-white hover:text-[#2A2A2D] transition-all flex items-center gap-3 group cursor-pointer active:scale-95"
              >
                <span>Discover Philosophy</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {highlights.map((h, i) => (
                <ScrollReveal key={i} delay={0.1 * i} y={20}>
                  <div className="border-t border-white/25 pt-6">
                    <span className="text-4xl sm:text-5xl font-black font-[#Space_Grotesk] block mb-2 text-white">
                      {h.value}
                    </span>
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-white/90 mb-1">
                      {h.label}
                    </h3>
                    <p className="text-xs text-white/70 font-light">
                      {h.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
