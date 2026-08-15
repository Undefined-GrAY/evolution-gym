'use client';

import { useState } from 'react';
import { FAQS } from '@/lib/data';
import { ChevronDown } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="container-fluid max-w-4xl py-16 sm:py-20">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="text-[13px] uppercase tracking-widest text-[#475470] font-extrabold block mb-2">
            Clear Ambiguities
          </span>
          <h2 className="fluid-h2 font-black uppercase text-[#2A2A2D] tracking-tight font-[#Space_Grotesk]">
            Frequently Asked Questions
          </h2>
        </div>
      </ScrollReveal>

      <div className="flex flex-col gap-4">
        {FAQS.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <ScrollReveal key={idx} delay={idx * 0.08}>
              <div
                className="bg-white border border-[#E4E8F1] rounded-2xl p-6 sm:p-8 cursor-pointer hover:border-[#475470] transition-colors shadow-sm active:scale-99"
                onClick={() => toggle(idx)}
              >
                <div className="flex justify-between items-center text-[#2A2A2D]">
                  <h3 className="text-lg sm:text-xl font-bold font-[#Space_Grotesk] uppercase tracking-tight">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-[#475470] transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                {isOpen && (
                  <p className="text-sm text-[#171C22]/75 font-light leading-relaxed mt-4 pt-4 border-t border-gray-100">
                    {faq.answer}
                  </p>
                )}
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
