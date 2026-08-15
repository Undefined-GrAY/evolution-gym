'use client';

import { useState, useRef } from 'react';
import { TESTIMONIALS } from '@/lib/data';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const slideRight = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const firstCard = container.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard ? firstCard.clientWidth + 24 : 380; // card width + gap

    const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 30;
    if (isAtEnd) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
      setActiveIdx(0);
    } else {
      container.scrollBy({ left: cardWidth, behavior: 'smooth' });
      setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
    }
  };

  const slideLeft = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const firstCard = container.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard ? firstCard.clientWidth + 24 : 380;

    const isAtStart = container.scrollLeft <= 15;
    if (isAtStart) {
      container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' });
      setActiveIdx(TESTIMONIALS.length - 1);
    } else {
      container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      setActiveIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    }
  };

  const selectCard = (idx: number) => {
    setActiveIdx(idx);
    if (!containerRef.current) return;
    const container = containerRef.current;
    const firstCard = container.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard ? firstCard.clientWidth + 24 : 380;
    container.scrollTo({ left: idx * cardWidth, behavior: 'smooth' });
  };

  return (
    <section className="py-16 sm:py-24 bg-white text-[#2A2A2D] w-full overflow-hidden border-t border-gray-100">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-12 text-center mb-12 sm:mb-16">
          <span className="text-[13px] font-bold uppercase tracking-widest text-[#475470] block mb-3">
            ({TESTIMONIALS.length}) Authentic Member Feedback
          </span>
          <h2 className="fluid-h2 font-black uppercase text-[#2A2A2D] tracking-tight max-w-4xl mx-auto font-[#Space_Grotesk] leading-none">
            VOICES OF MEMBERS WHO VALUE QUALITY OVER COMPROMISE
          </h2>
        </div>
      </ScrollReveal>

      {/* Curved Fan Carousel */}
      <ScrollReveal delay={0.15}>
        <div className="w-full max-w-7xl mx-auto px-0 sm:px-12 relative">
          <div
            ref={containerRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto pb-12 pt-6 snap-x snap-mandatory hide-scrollbar justify-start items-center scroll-smooth px-4 sm:px-2"
          >
            {TESTIMONIALS.map((t, idx) => {
              const isCurrent = idx === activeIdx;
              return (
                <div
                  key={t.id}
                  onClick={() => selectCard(idx)}
                  className={`w-[85vw] max-w-[360px] sm:min-w-[420px] bg-[#E4E8F1] p-6 sm:p-10 rounded-[2.5rem] snap-start flex-shrink-0 flex flex-col justify-between shadow-xl cursor-pointer transition-all duration-500 transform ${
                    t.rotation
                  } ${isCurrent ? 'scale-105 bg-white border-2 border-[#475470] shadow-2xl -rotate-0 z-10' : 'opacity-85 hover:opacity-100'}`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-[#475470]/30 flex-shrink-0">
                      <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold font-[#Space_Grotesk] text-[#2A2A2D]">
                        {t.name}
                      </h3>
                      <p className="text-xs text-[#475470] font-medium leading-tight">
                        {t.role} <br />
                        <span className="text-[#63739A] font-normal">{t.tenure}</span>
                      </p>
                    </div>
                  </div>

                  <div>
                    <Quote className="w-8 h-8 text-[#475470]/30 mb-3" />
                    <p className="text-sm sm:text-base text-[#2A2A2D]/90 italic font-light leading-relaxed mb-6">
                      "{t.quote}"
                    </p>
                    <div className="border-t border-[#475470]/20 pt-4 flex justify-between items-center text-[13px] font-bold uppercase tracking-widest text-[#475470]">
                      <span>FOCUS: {t.focus}</span>
                      <span>Verified Member</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel Navigation Controls */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              type="button"
              onClick={slideLeft}
              className="w-12 h-12 rounded-full bg-[#E4E8F1] hover:bg-[#475470] text-[#2A2A2D] hover:text-white flex items-center justify-center transition-all shadow-md cursor-pointer active:scale-90"
              aria-label="Previous Testimonial Card"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => selectCard(i)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    i === activeIdx ? 'w-8 bg-[#475470]' : 'w-2 bg-[#E4E8F1] hover:bg-[#63739A]'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={slideRight}
              className="w-12 h-12 rounded-full bg-[#E4E8F1] hover:bg-[#475470] text-[#2A2A2D] hover:text-white flex items-center justify-center transition-all shadow-md cursor-pointer active:scale-90"
              aria-label="Next Testimonial Card"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
