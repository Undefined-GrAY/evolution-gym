'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import { store } from '@/lib/store';

export default function ClassCategories() {
  const [activeIdx, setActiveIdx] = useState(3); // Default expanded "Strength"

  const categories = [
    {
      id: 'yoga',
      title: 'Yoga',
      subtitle: 'Mind & Posture Alignment',
      image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop',
      desc: 'Synchronize movement with breathwork. Develop somatic awareness, spinal mobility, and inner calm.'
    },
    {
      id: 'group',
      title: 'Group Classes',
      subtitle: 'High Energy Community',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop',
      desc: 'Collective motivation in tactical HYROX, HIIT, and endurance conditioning sessions.'
    },
    {
      id: 'personal',
      title: 'Personal Training',
      subtitle: 'Bespoke 1-on-1 Mentorship',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop',
      desc: 'Custom biomechanical programming tailored specifically to your physique goals and recovery bandwidth.'
    },
    {
      id: 'strength',
      title: 'Strength',
      subtitle: 'Power & Functional Muscle',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop',
      desc: 'Refined strength training where technique, strategy, and power meet. Engineered to transform performance.'
    },
    {
      id: 'recovery',
      title: 'Recovery & Mobility',
      subtitle: 'Tissue Release & Thermal SPA',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop',
      desc: 'Active joint decompression, infrared therapy, cold plunge chambers, and guided tissue rehab.'
    },
    {
      id: 'boxing',
      title: 'Boxing',
      subtitle: 'Combat Reflexes & Endurance',
      image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800&auto=format&fit=crop',
      desc: 'High-octane technical strike combinations, footwork rhythm, and heavy bag conditioning.'
    }
  ];

  return (
    <section id="categories" className="px-6 sm:px-12 max-w-7xl mx-auto w-full py-24">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#475470] block mb-2">
              Curated Discipline
            </span>
            <h2 className="fluid-h2 font-black uppercase text-[#2A2A2D] tracking-tight font-[#Space_Grotesk]">
              Our Services
            </h2>
          </div>
          <Link
            href="/classes"
            className="text-xs font-bold uppercase tracking-widest text-[#475470] hover:text-[#2A2A2D] flex items-center gap-1 group cursor-pointer"
          >
            <span>Explore All Schedules</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </ScrollReveal>

      {/* Desktop Vertical Accordion Pills */}
      <ScrollReveal delay={0.15}>
        <div className="hidden lg:flex h-[580px] w-full gap-4">
          {categories.map((cat, idx) => {
            const isActive = idx === activeIdx;
            return (
              <motion.div
                key={cat.id}
                onClick={() => setActiveIdx(idx)}
                layout
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                className={`relative rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-end p-8 transition-all ${
                  isActive
                    ? 'flex-[2.5] bg-[#2A2A2D] text-white shadow-2xl'
                    : 'flex-[0.6] bg-[#E4E8F1] hover:bg-[#475470] text-[#2A2A2D] hover:text-white'
                }`}
              >
                {isActive ? (
                  <>
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-60 filter contrast-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    <div className="relative z-10">
                      <span className="text-xs uppercase tracking-widest text-white/70 font-semibold mb-1 block">
                        {cat.subtitle}
                      </span>
                      <h3 className="text-3xl font-extrabold uppercase font-[#Space_Grotesk] mb-3 text-white">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-white/80 max-w-md leading-relaxed mb-6 font-light">
                        {cat.desc}
                      </p>
                      <Link
                        href={`/classes?category=${cat.id}`}
                        className="inline-flex items-center gap-2 bg-white text-[#2A2A2D] px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-widest hover:bg-[#E4E8F1] transition-colors cursor-pointer"
                      >
                        <span>Book Slot</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-between h-full py-6">
                    <div className="transform -rotate-90 origin-center whitespace-nowrap text-xl font-bold uppercase tracking-wider mt-24">
                      {cat.title}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <ArrowDown className="w-4 h-4" />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </ScrollReveal>

      {/* Mobile Stacked Card View */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
        {categories.map((cat, idx) => (
          <ScrollReveal key={cat.id} delay={idx * 0.08}>
            <div
              onClick={() => store.setTrialModalOpen(true)}
              className="relative rounded-3xl overflow-hidden bg-[#2A2A2D] text-white p-6 min-h-[260px] flex flex-col justify-end group shadow-lg cursor-pointer active:scale-98 transition-transform"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="relative z-10">
                <span className="text-[10px] uppercase tracking-widest text-white/70 font-semibold block mb-1">
                  {cat.subtitle}
                </span>
                <h3 className="text-2xl font-bold uppercase font-[#Space_Grotesk] mb-2 text-white">
                  {cat.title}
                </h3>
                <p className="text-xs text-white/80 line-clamp-2 mb-4 font-light">
                  {cat.desc}
                </p>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    store.setTrialModalOpen(true);
                  }}
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-white hover:underline cursor-pointer"
                >
                  <span>Select Category</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
