'use client';

import { useState, useEffect } from 'react';
import { store } from '@/lib/store';
import { ClassItem } from '@/lib/data';
import { Clock, Users, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

export default function SchedulePreview() {
  const [classes, setClasses] = useState<ClassItem[]>([]);

  useEffect(() => {
    setClasses(store.getClasses());
    const unsubscribe = store.subscribe(() => {
      setClasses(store.getClasses());
    });
    return () => unsubscribe();
  }, []);

  return (
    <section className="container-fluid py-16 sm:py-20">
      <ScrollReveal>
        <div className="bg-[#E4E8F1] rounded-[2.5rem] p-6 sm:p-14 text-center">
          <span className="text-[13px] uppercase tracking-widest text-[#475470] font-extrabold block mb-2">
            Realtime Slot Availability
          </span>
          <h2 className="fluid-h2 font-black uppercase text-[#2A2A2D] tracking-tight font-[#Space_Grotesk] mb-4">
            Upcoming Sessions
          </h2>
          <p className="fluid-body-lg text-[#171C22]/80 max-w-2xl mx-auto font-light mb-12">
            Plan your transformation. Explore our carefully curated schedule of classes designed to optimize physical output and rapid recovery.
          </p>

          {/* Real-time Cards Teaser */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-12">
            {classes.slice(0, 3).map((item, idx) => (
              <ScrollReveal key={item.id} delay={0.1 * idx}>
                <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-200/80 flex flex-col justify-between hover:shadow-xl transition-all group h-full">
                  <div>
                    <div className="flex justify-between items-center text-xs text-[#63739A] font-bold uppercase tracking-wider mb-3">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#475470]" /> {item.time}
                      </span>
                      <span className="bg-[#E4E8F1] text-[#2A2A2D] px-2.5 py-0.5 rounded-full text-[13px]">
                        {item.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold uppercase font-[#Space_Grotesk] text-[#2A2A2D] mb-2 group-hover:text-[#475470] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#63739A] font-medium mb-4">
                      Coach: <strong className="text-[#2A2A2D]">{item.trainer}</strong>
                    </p>
                  </div>

                  <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#637304] flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" />
                      {item.spotsAvailable} spots left
                    </span>
                    <button
                      type="button"
                      onClick={() => store.setSelectedClassForBooking(item)}
                      className="bg-[#2A2A2D] text-white hover:bg-[#475470] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1 cursor-pointer active:scale-95"
                    >
                      <span>Book</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <Link
            href="/classes"
            className="inline-flex items-center gap-2 bg-[#2A2A2D] text-white px-10 py-4 rounded-full text-xs font-extrabold uppercase tracking-widest hover:bg-[#475470] transition-all shadow-xl cursor-pointer"
          >
            <span>View Full Realtime Schedule</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
