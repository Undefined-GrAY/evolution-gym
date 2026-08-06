'use client';

import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import { Sparkles, ShieldCheck } from "lucide-react";
import { store } from "@/lib/store";

export default function PricingPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 text-center mb-6">
        <div className="inline-flex items-center gap-2 bg-[#2A2A2D] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#637304]" />
          <span>Transparent Membership Tiers</span>
        </div>
        <h1 className="fluid-h1 font-black uppercase text-[#2A2A2D] tracking-tight font-[#Space_Grotesk]">
          Membership & Pricing Plans
        </h1>
        <p className="fluid-body-lg text-[#171C22]/75 max-w-2xl mx-auto font-light">
          Invest in your peak physical output and longevity. Every tier includes access to our high-performance gear, thermal spa, and biometric tracking.
        </p>
      </div>

      <Pricing />

      {/* Trial Banner Callout */}
      <div className="max-w-5xl mx-auto px-6 mb-16">
        <div className="bg-[#475470] text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row justify-between items-center gap-6 shadow-2xl">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/80 mb-2">
              <ShieldCheck className="w-4 h-4 text-[#637304]" />
              <span>Zero Risk Trial</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase font-[#Space_Grotesk]">
              Not ready to commit to a monthly tier?
            </h3>
            <p className="text-xs text-white/80 font-light mt-1">
              Try our complimentary 24-hour pass with full access to group sessions & recovery spa.
            </p>
          </div>
          <button
            onClick={() => store.setTrialModalOpen(true)}
            className="whitespace-nowrap bg-white text-[#2A2A2D] hover:bg-[#E4E8F1] px-8 py-4 rounded-full text-xs font-extrabold uppercase tracking-widest transition-all shadow-xl"
          >
            Book Free Trial Pass
          </button>
        </div>
      </div>

      <FAQ />
    </div>
  );
}
