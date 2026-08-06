'use client';

import { useState } from 'react';
import { PRICING_PLANS } from '@/lib/data';
import { store } from '@/lib/store';
import { CheckCircle2, ArrowRight, Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section id="pricing" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto w-full">
      {/* Top Header matching input_file_2.png */}
      <ScrollReveal>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6 text-center md:text-left">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#475470] font-extrabold block mb-2">
              Membership Tiers
            </span>
            <h2 className="fluid-h2 font-black uppercase text-[#2A2A2D] tracking-tight font-[#Space_Grotesk] leading-none">
              SUBSCRIBE TO CHANGES
            </h2>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center gap-1 text-amber-500 text-sm font-bold">
              <Star className="w-4 h-4 fill-amber-500" />
              <Star className="w-4 h-4 fill-amber-500" />
              <Star className="w-4 h-4 fill-amber-500" />
              <Star className="w-4 h-4 fill-amber-500" />
              <Star className="w-4 h-4 fill-amber-500" />
              <span className="text-[#2A2A2D] ml-1 font-extrabold text-base">5.0</span>
            </div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#63739A] mt-1">
              FROM 2,000+ VERIFIED MEMBER REVIEWS
            </span>
          </div>
        </div>
      </ScrollReveal>

      {/* Billing Switcher Toggle */}
      <ScrollReveal delay={0.1}>
        <div className="flex justify-center mb-16">
          <div className="bg-[#E4E8F1] p-1.5 rounded-full flex items-center gap-2">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-[#2A2A2D] text-white shadow-md'
                  : 'text-[#475470] hover:text-[#2A2A2D]'
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                billingCycle === 'annual'
                  ? 'bg-[#2A2A2D] text-white shadow-md'
                  : 'text-[#475470] hover:text-[#2A2A2D]'
              }`}
            >
              <span>Annual Commitment</span>
              <span className="bg-[#637304] text-white text-[9px] font-black px-2 py-0.5 rounded-full">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>
      </ScrollReveal>

      {/* Subscription Cards Flex Wrapping Container at < xl (1280px) for Breathing Space */}
      <div className="flex flex-wrap xl:flex-nowrap justify-center gap-8 items-stretch">
        {PRICING_PLANS.map((plan, idx) => {
          const discountMultiplier = billingCycle === 'annual' ? 0.8 : 1;
          const displayPrice = Math.round(plan.priceMonthly * discountMultiplier);

          if (plan.isPopular) {
            // Featured Dark Card for TRANSIT
            return (
              <ScrollReveal key={plan.id} delay={0.1 * idx} className="w-full md:w-[calc(50%-16px)] xl:w-1/4 flex">
                <div className="bg-[#2A2A2D] text-white p-8 sm:p-10 rounded-[2.5rem] flex flex-col justify-between relative shadow-2xl scale-105 border-2 border-white/20 z-10 w-full">
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-[#2A2A2D] text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-md whitespace-nowrap">
                    Most Popular Choice
                  </div>

                  <div>
                    <div className="text-center mt-2 mb-6">
                      <h3 className="text-3xl font-extrabold uppercase font-[#Space_Grotesk] mb-1">
                        {plan.name}
                      </h3>
                      <p className="text-xs text-white/60 italic">{plan.subtitle}</p>
                      <div className="text-5xl font-black font-[#Space_Grotesk] mt-4 text-white">
                        {plan.priceCurrency}{displayPrice.toLocaleString()}
                      </div>
                      <span className="text-xs text-white/60 font-light">/ per month</span>
                    </div>

                    <ul className="flex flex-col gap-3 text-xs text-white/85 font-light mb-8 border-t border-white/10 pt-6">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-3">
                    <button
                      type="button"
                      onClick={() => store.setTrialModalOpen(true)}
                      className="w-full bg-white text-[#2A2A2D] py-4 rounded-full font-extrabold uppercase tracking-widest text-xs hover:bg-[#E4E8F1] transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer active:scale-95"
                    >
                      <span>Subscribe Tier</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => store.setTrialModalOpen(true)}
                      className="w-full bg-white/15 text-white py-3.5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                    >
                      <span>Book a Call</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            );
          }

          return (
            <ScrollReveal key={plan.id} delay={0.1 * idx} className="w-full md:w-[calc(50%-16px)] xl:w-1/4 flex">
              <div className="bg-white text-[#2A2A2D] p-8 sm:p-10 rounded-[2.5rem] border border-gray-200 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all w-full">
                <div>
                  <div className="text-center mb-6">
                    <h3 className="text-3xl font-extrabold uppercase font-[#Space_Grotesk] mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-[#475470] italic">{plan.subtitle}</p>
                    <div className="text-4xl font-black font-[#Space_Grotesk] mt-4 text-[#2A2A2D]">
                      {plan.priceCurrency}{displayPrice.toLocaleString()}
                    </div>
                    <span className="text-xs text-[#63739A] font-light">/ per month</span>
                  </div>

                  <ul className="flex flex-col gap-3 text-xs text-[#2A2A2D]/85 font-light mb-8 border-t border-gray-100 pt-6">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#475470] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={() => store.setTrialModalOpen(true)}
                    className="w-full bg-[#475470] text-white py-3.5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#2A2A2D] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <span>Subscribe Tier</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => store.setTrialModalOpen(true)}
                    className="w-full bg-[#E4E8F1] text-[#475470] py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-gray-300 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <span>Book a Call</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
