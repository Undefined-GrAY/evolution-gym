'use client';

import { useState } from 'react';
import { PRICING_PLANS } from '@/lib/data';
import { store } from '@/lib/store';
import { CheckCircle2, ArrowRight, Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [mobileActivePlan, setMobileActivePlan] = useState('plan-transit'); // default to Popular

  // Max 3 plans for mobile preview per SKILL.md rules
  const mobilePlans = PRICING_PLANS.slice(0, 3);

  return (
    <section id="pricing" className="py-16 sm:py-24 container-fluid">
      {/* Top Header */}
      <ScrollReveal>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 sm:mb-16 gap-6 text-center md:text-left">
          <div>
            <span className="text-[13px] uppercase tracking-widest text-[#475470] font-extrabold block mb-2">
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
            <span className="text-[13px] font-extrabold uppercase tracking-widest text-[#63739A] mt-1">
              FROM 2,000+ VERIFIED MEMBER REVIEWS
            </span>
          </div>
        </div>
      </ScrollReveal>

      {/* Billing Switcher Toggle */}
      <ScrollReveal delay={0.1}>
        <div className="flex justify-center mb-10 sm:mb-16">
          <div className="bg-[#E4E8F1] p-1.5 rounded-full flex items-center gap-2">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 sm:px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
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
              className={`px-5 sm:px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                billingCycle === 'annual'
                  ? 'bg-[#2A2A2D] text-white shadow-md'
                  : 'text-[#475470] hover:text-[#2A2A2D]'
              }`}
            >
              <span>Annual Commitment</span>
              <span className="bg-[#637304] text-white text-[13px] font-black px-2 py-0.5 rounded-full">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>
      </ScrollReveal>

      {/* MOBILE & TABLET INTERACTIVE TIER SEGMENT CONTROL (Visible below 1024px) */}
      <div className="flex lg:hidden justify-center mb-8">
        <div className="bg-[#2A2A2D]/10 p-1 rounded-2xl flex items-center gap-1 w-full max-w-sm">
          {mobilePlans.map((plan) => {
            const isSelected = plan.id === mobileActivePlan;
            return (
              <button
                key={plan.id}
                type="button"
                onClick={() => setMobileActivePlan(plan.id)}
                className={`flex-1 py-2.5 rounded-xl text-[13px] font-extrabold uppercase tracking-tight transition-all text-center cursor-pointer ${
                  isSelected
                    ? 'bg-[#2A2A2D] text-white shadow-lg'
                    : 'text-[#475470] hover:text-[#2A2A2D]'
                }`}
              >
                {plan.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* MOBILE & TABLET SINGLE ACTIVE CARD VIEW (Space Efficient) */}
      <div className="block lg:hidden max-w-md mx-auto">
        {mobilePlans.map((plan) => {
          if (plan.id !== mobileActivePlan) return null;
          const discountMultiplier = billingCycle === 'annual' ? 0.8 : 1;
          const displayPrice = Math.round(plan.priceMonthly * discountMultiplier);

          return (
            <div
              key={plan.id}
              className={`p-6 rounded-[2rem] flex flex-col justify-between relative shadow-2xl transition-all ${
                plan.isPopular
                  ? 'bg-[#2A2A2D] text-white border-2 border-white/20'
                  : 'bg-white text-[#2A2A2D] border border-gray-200'
              }`}
            >
              {plan.isPopular && (
                <div className="bg-white text-[#2A2A2D] text-[13px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-md text-center mb-4 w-fit mx-auto">
                  Most Popular Choice
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-3xl font-extrabold uppercase font-[#Space_Grotesk] mb-1">
                  {plan.name}
                </h3>
                <p className={`text-xs italic ${plan.isPopular ? 'text-white/60' : 'text-[#475470]'}`}>
                  {plan.subtitle}
                </p>
                <div className="text-4xl font-black font-[#Space_Grotesk] mt-3">
                  {plan.priceCurrency}{displayPrice.toLocaleString()}
                </div>
                <span className={`text-xs font-light ${plan.isPopular ? 'text-white/60' : 'text-[#63739A]'}`}>
                  / per month
                </span>
              </div>

              <ul className={`flex flex-col gap-2.5 text-xs font-light mb-6 border-t pt-4 ${
                plan.isPopular ? 'border-white/10 text-white/90' : 'border-gray-100 text-[#2A2A2D]/90'
              }`}>
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.isPopular ? 'text-white' : 'text-[#475470]'}`} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => store.setTrialModalOpen(true)}
                className={`w-full py-3.5 rounded-full font-extrabold uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer active:scale-95 ${
                  plan.isPopular
                    ? 'bg-white text-[#2A2A2D] hover:bg-[#E4E8F1]'
                    : 'bg-[#2A2A2D] text-white hover:bg-[#151618]'
                }`}
              >
                <span>Subscribe Tier</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          );
        })}

        <div className="text-center mt-4">
          <a
            href="/pricing"
            className="text-[13px] font-bold uppercase tracking-widest text-[#475470] hover:underline"
          >
            Compare All 4 Membership Tiers →
          </a>
        </div>
      </div>

      {/* DESKTOP 3-COLUMN FEATURED GRID VIEW (Visible at 1024px+ lg) */}
      <div className="hidden lg:block max-w-6xl mx-auto">
        <div className="grid grid-cols-3 gap-8 items-stretch mb-10">
          {mobilePlans.map((plan, idx) => {
            const discountMultiplier = billingCycle === 'annual' ? 0.8 : 1;
            const displayPrice = Math.round(plan.priceMonthly * discountMultiplier);

            if (plan.isPopular) {
              return (
                <ScrollReveal key={plan.id} delay={0.1 * idx} className="flex">
                  <div className="bg-[#2A2A2D] text-white p-8 sm:p-10 rounded-[2.5rem] flex flex-col justify-between relative shadow-2xl scale-105 border-2 border-white/20 z-10 w-full">
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-[#2A2A2D] text-[13px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-md whitespace-nowrap">
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

                    <button
                      type="button"
                      onClick={() => store.setTrialModalOpen(true)}
                      className="w-full bg-white text-[#2A2A2D] py-4 rounded-full font-extrabold uppercase tracking-widest text-xs hover:bg-[#E4E8F1] transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer active:scale-95"
                    >
                      <span>Subscribe Tier</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </ScrollReveal>
              );
            }

            return (
              <ScrollReveal key={plan.id} delay={0.1 * idx} className="flex">
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

                  <button
                    type="button"
                    onClick={() => store.setTrialModalOpen(true)}
                    className="w-full bg-[#475470] text-white py-3.5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#2A2A2D] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <span>Subscribe Tier</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CONTINUUM Tier VIP Banner */}
        <ScrollReveal delay={0.3}>
          <div className="bg-[#151618] text-white rounded-3xl p-6 px-10 flex items-center justify-between border border-white/10 shadow-xl">
            <div className="flex items-center gap-6">
              <div className="bg-white/10 text-white text-[13px] font-black uppercase tracking-widest px-3.5 py-1 rounded-full">
                VIP Unlimited Tier
              </div>
              <div>
                <h4 className="text-xl font-black uppercase font-[#Space_Grotesk]">
                  CONTINUUM : ₴{Math.round(18000 * (billingCycle === 'annual' ? 0.8 : 1)).toLocaleString()} / mo
                </h4>
                <p className="text-xs text-white/60 font-light">
                  Dedicated personal mentor, 24/7 concierge & unlimited access to thermal chambers.
                </p>
              </div>
            </div>
            <a
              href="/pricing"
              className="bg-white text-[#2A2A2D] hover:bg-[#E4E8F1] px-6 py-3 rounded-full text-[13px] font-extrabold uppercase tracking-widest flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <span>Explore VIP Membership</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
