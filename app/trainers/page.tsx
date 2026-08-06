'use client';

import { TRAINERS } from '@/lib/data';
import { store } from '@/lib/store';
import { Award, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';

export default function TrainersPage() {
  return (
    <div className="pt-32 pb-24 px-6 sm:px-12 max-w-7xl mx-auto w-full min-h-screen">
      {/* Header */}
      <div className="mb-16 border-b border-gray-200 pb-10 text-center md:text-left">
        <div className="inline-flex items-center gap-2 bg-[#2A2A2D] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#637304]" />
          <span>Architects of Your Form</span>
        </div>
        <h1 className="fluid-h1 font-black uppercase text-[#2A2A2D] tracking-tight font-[#Space_Grotesk] mb-4">
          Our Elite Mentors
        </h1>
        <p className="fluid-body-lg text-[#171C22]/75 max-w-2xl font-light">
          Gyms are a trust purchase. You are not buying access to equipment — you are partnering with elite coaches who understand human biomechanics, focus, and peak output.
        </p>
      </div>

      {/* Trainers Detailed Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {TRAINERS.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-[2.5rem] p-8 border border-gray-200 shadow-xl flex flex-col justify-between group hover:border-[#475470] transition-all"
          >
            <div>
              <div className="relative h-80 rounded-2xl overflow-hidden mb-6 bg-black">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white flex justify-between items-end">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-white/70 block mb-1">
                      {t.experience} Experience
                    </span>
                    <h3 className="text-3xl font-extrabold uppercase font-[#Space_Grotesk]">
                      {t.name}
                    </h3>
                  </div>
                  <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/20">
                    {t.specialty.split('&')[0]}
                  </span>
                </div>
              </div>

              <h4 className="text-xs uppercase tracking-widest font-extrabold text-[#475470] mb-2">
                {t.role}
              </h4>
              <p className="text-xs text-[#171C22]/80 font-light leading-relaxed mb-6">
                {t.bio}
              </p>

              <div className="bg-[#E4E8F1] rounded-2xl p-4 mb-6">
                <span className="text-[10px] uppercase tracking-widest font-extrabold text-[#475470] block mb-2">
                  Specialization & Methodology
                </span>
                <p className="text-xs font-semibold text-[#2A2A2D] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#637304]" />
                  {t.specialty}
                </p>
              </div>
            </div>

            <button
              onClick={() => store.setTrialModalOpen(true)}
              className="w-full bg-[#2A2A2D] text-white py-4 rounded-full font-extrabold uppercase tracking-widest text-xs hover:bg-[#475470] transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Schedule 1-on-1 Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
