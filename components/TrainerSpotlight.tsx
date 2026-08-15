'use client';

import { TRAINERS } from '@/lib/data';
import { store } from '@/lib/store';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

export default function TrainerSpotlight() {
  return (
    <section className="container-fluid py-16 sm:py-20">
      <div className="bg-[#2A2A2D] text-white rounded-[2.5rem] p-6 sm:p-16 shadow-2xl relative overflow-hidden">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 sm:mb-16 gap-8 border-b border-white/10 pb-10">
            <div>
              <span className="text-[13px] uppercase tracking-widest text-[#63739A] font-extrabold block mb-2">
                Architects of Your Form
              </span>
              <h2 className="fluid-h2 font-black uppercase tracking-tight leading-none font-[#Space_Grotesk]">
                Our Mentors
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light mb-4">
                Each of our trainers is an elite specialist selected for their deep anatomical knowledge, competitive pedigree, and personal dedication to your transformation.
              </p>
              <Link
                href="/trainers"
                className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest text-white hover:text-[#63739A] transition-colors cursor-pointer"
              >
                <span>View All Trainer Profiles</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* Grid of Trainers (Max 2 cards visible on Mobile to prevent vertical clutter) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {TRAINERS.map((t, index) => {
            const isMobileHidden = index > 1; // Hide 3rd and 4th cards on mobile (< md)

            if (t.isFeatured) {
              return (
                <ScrollReveal key={t.id} className="col-span-1 sm:col-span-2 row-span-2" delay={0.1}>
                  <div
                    className="relative rounded-3xl overflow-hidden bg-black border border-white/15 min-h-[360px] sm:min-h-[440px] group flex flex-col justify-end p-6 sm:p-8 shadow-2xl cursor-pointer active:scale-98 transition-transform"
                    onClick={() => store.setTrialModalOpen(true)}
                  >
                    <img
                      src={t.image}
                      alt={t.name}
                      className="absolute inset-0 w-full h-full object-cover object-top grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    <div className="relative z-10">
                      <span className="inline-block bg-white/20 backdrop-blur-md text-white text-[13px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                        Head Mentor • {t.experience}
                      </span>
                      <h3 className="text-2xl sm:text-4xl font-extrabold uppercase font-[#Space_Grotesk] text-white mb-2">
                        {t.name}
                      </h3>
                      <p className="text-[13px] text-[#63739A] uppercase tracking-wider font-semibold mb-2 sm:mb-3">
                        {t.role}
                      </p>
                      <p className="text-xs text-white/80 font-light leading-relaxed max-w-md mb-6 line-clamp-3 sm:line-clamp-none">
                        {t.bio}
                      </p>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          store.setTrialModalOpen(true);
                        }}
                        className="bg-white text-[#2A2A2D] px-6 py-3 rounded-full text-[13px] font-extrabold uppercase tracking-widest hover:bg-[#E4E8F1] transition-colors flex items-center gap-2 cursor-pointer active:scale-95"
                      >
                        <span>Book Private Session</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              );
            }

            const isLast = index === TRAINERS.length - 1;

            return (
              <ScrollReveal
                key={t.id}
                className={`col-span-1 ${isLast ? 'lg:col-span-2' : ''} ${isMobileHidden ? 'hidden md:block' : 'block'}`}
                delay={0.1 * index}
              >
                <div
                  className={`relative rounded-3xl overflow-hidden bg-black/40 border border-white/10 aspect-[4/3] sm:aspect-[3/4] ${
                    isLast ? 'lg:aspect-auto lg:h-full lg:min-h-[200px]' : ''
                  } group cursor-pointer flex flex-col justify-end p-4 sm:p-6 hover:border-white/30 transition-all shadow-lg active:scale-98`}
                  onClick={() => store.setTrialModalOpen(true)}
                >
                  <img
                    src={t.image}
                    alt={t.name}
                    className="absolute inset-0 w-full h-full object-cover object-top grayscale opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <div className="relative z-10">
                    <span className="text-[13px] font-semibold text-[#63739A] uppercase tracking-widest block mb-0.5">
                      {t.experience}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold uppercase font-[#Space_Grotesk] text-white mb-0.5 leading-tight">
                      {t.name}
                    </h3>
                    <p className="text-[13px] text-white/70 font-light line-clamp-1">
                      {t.role}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Mobile View All Mentors Button */}
        <div className="mt-6 text-center md:hidden">
          <Link
            href="/trainers"
            className="w-full justify-center bg-white/10 border border-white/20 text-white px-6 py-3.5 rounded-full text-[13px] font-bold uppercase tracking-widest flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <span>Explore All 4 Mentors</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
