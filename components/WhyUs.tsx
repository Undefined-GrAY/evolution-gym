'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { store } from '@/lib/store';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

function CounterValue({
  targetNumber,
  prefix = '',
  suffix = '',
  staticText
}: {
  targetNumber?: number;
  prefix?: string;
  suffix?: string;
  staticText?: string;
}) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: '-40px' });

  useEffect(() => {
    if (staticText || targetNumber === undefined || !isInView || !nodeRef.current) return;
    const element = nodeRef.current;

    const controls = animate(0, targetNumber, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(value) {
        element.textContent = `${prefix}${Math.floor(value)}${suffix}`;
      }
    });

    return () => controls.stop();
  }, [isInView, targetNumber, prefix, suffix, staticText]);

  if (staticText) {
    return <span>{staticText}</span>;
  }

  return <span ref={nodeRef}>{prefix}0{suffix}</span>;
}

export default function WhyUs() {
  const highlights = [
    { targetNumber: 0, suffix: '%', label: 'Noise, Maximum Focus', desc: 'No distractive clutter or chaos. Dedicated training vectors.' },
    { targetNumber: 380, suffix: '+', label: 'Transformations / mo', desc: 'Verified biometric results through disciplined programming.' },
    { targetNumber: 100, suffix: '%', label: 'Biomechanical Gear', desc: 'Custom Technogym & Eleiko equipment tailored for performance.' },
    { staticText: '24/7', label: 'Reprogram Potential', desc: 'Continuous biometric feedback & recovery pod access.' }
  ];

  return (
    <section className="w-full py-6 sm:py-16">
      <ScrollReveal>
        <div className="w-full sm:w-[90%] lg:w-[88%] max-w-7xl mx-auto bg-[#475470] text-white rounded-none sm:rounded-[2.5rem] px-6 sm:px-16 py-10 sm:py-16 relative overflow-hidden shadow-2xl">
          {/* Background Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/20 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
            <div>
              <span className="text-[13px] uppercase tracking-widest text-white/70 font-extrabold block mb-3">
                Philosophical Thesis
              </span>
              <h2 className="fluid-h2 font-black uppercase tracking-tight leading-none mb-4 sm:mb-6 font-[#Space_Grotesk]">
                RITUAL DEPTH OF PHYSICAL AND MENTAL RESTORATION
              </h2>
              <p className="fluid-body-lg text-white/85 font-light mb-6 sm:mb-8 max-w-xl">
                <span className="sm:hidden">Intentional ritual for peak human output. Zero vanity noise, maximum focus.</span>
                <span className="hidden sm:inline">We work with those who value their time, their body, and their internal energy. Training here is an intentional ritual for peak human output. Zero vanity noise, maximum focus.</span>
              </p>
              <button
                type="button"
                onClick={() => store.setPhilosophyModalOpen(true)}
                className="w-full sm:w-auto justify-center bg-white/15 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full text-[13px] font-extrabold uppercase tracking-widest hover:bg-white hover:text-[#2A2A2D] transition-all flex items-center gap-3 group cursor-pointer active:scale-95"
              >
                <span>Discover Philosophy</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Mobile 2x2 Compact Stat Grid */}
            <div className="grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-6 sm:gap-y-10">
              {highlights.map((h, i) => (
                <ScrollReveal key={i} delay={0.1 * i} y={15}>
                  <div className="border-t lg:border-t-0 border-white/25 pt-3 sm:pt-6">
                    <span className="text-3xl sm:text-5xl font-bold font-[#Space_Grotesk] block mb-1 text-white">
                      <CounterValue
                        targetNumber={h.targetNumber}
                        suffix={h.suffix}
                        staticText={h.staticText}
                      />
                    </span>
                    <h3 className="text-[13px] font-medium md:font-semibold lg:font-extrabold uppercase tracking-wider text-white/90 mb-1 leading-tight">
                      {h.label}
                    </h3>
                    <p className="text-xs text-white/70 font-light hidden sm:block">
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
