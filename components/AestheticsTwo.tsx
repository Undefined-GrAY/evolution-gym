'use client';

import { Flame, Droplets, Shield } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function AestheticsTwo() {
  const highlights = [
    {
      icon: Flame,
      title: 'Thermal Sauna & Infra Spa',
      desc: 'Deep infrared heat therapy engineered to flush lactic acid and optimize growth hormone secretion.'
    },
    {
      icon: Droplets,
      title: 'Cryo & Cold Plunge Pods',
      desc: 'Controlled 4°C immersion tanks for rapid metabolic reset, mental resilience, and joint inflammation reduction.'
    },
    {
      icon: Shield,
      title: 'Biometric Access Lockers',
      desc: 'Seamless touchless entry, private thermal showers, and organic apothecary amenities in every suite.'
    }
  ];

  return (
    <section className="w-full py-20 sm:py-24 bg-[#151618] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-12 relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[13px] uppercase tracking-widest text-[#63739A] font-extrabold block mb-3">
              Aesthetics & Architecture : 02
            </span>
            <h2 className="fluid-h2 font-black uppercase tracking-tight font-[#Space_Grotesk] mb-4">
              RECOVERY ENGINEERING
            </h2>
            <p className="fluid-body-lg text-white/70 font-light">
              Hard training is only 50% of the equation. Our luxury thermal chambers and recovery pods ensure you return stronger every single session.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {highlights.map((item, idx) => {
            const IconComponent = item.icon;
            const isLastItem = idx === highlights.length - 1;
            return (
              <ScrollReveal key={idx} delay={idx * 0.1} className={isLastItem ? "md:col-span-2 lg:col-span-1" : ""}>
                <div className="bg-[#2A2A2D]/60 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-white/30 transition-all group h-full">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 text-[#637304] group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold uppercase font-[#Space_Grotesk] text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/70 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Architectural Image Showcase */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScrollReveal delay={0.15}>
            <div className="relative rounded-3xl overflow-hidden h-[340px] group border border-white/10">
              <img
                src="/images/recovery.jpg"
                alt="Thermal Spa Recovery Chamber"
                className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs uppercase tracking-widest text-white/70 block font-semibold mb-1">
                  Hydro & Heat Suite
                </span>
                <h4 className="text-2xl font-bold uppercase font-[#Space_Grotesk]">
                  Thermal Decompression
                </h4>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <div className="relative rounded-3xl overflow-hidden h-[340px] group border border-white/10">
              <img
                src="/images/equipment.jpg"
                alt="Minimalist Gym Architecture"
                className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs uppercase tracking-widest text-white/70 block font-semibold mb-1">
                  Monochrome Architecture
                </span>
                <h4 className="text-2xl font-bold uppercase font-[#Space_Grotesk]">
                  Pure Training Sanctuary
                </h4>
              </div>
            </div>
          </ScrollReveal>
        </div> */}
      </div>
    </section>
  );
}
