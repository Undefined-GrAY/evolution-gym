'use client';

import { motion } from 'framer-motion';

export default function SocialProofBar() {
  const stats = [
    { value: '23K+', label: 'Active Members' },
    { value: '5 Years', label: 'Running Strong' },
    { value: '50+', label: 'Elite Mentors' },
    { value: 'Vogue', label: 'Featured In' }
  ];

  return (
    <section className="px-6 sm:px-12 max-w-7xl mx-auto w-full -mt-14 relative z-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 backdrop-blur-xl rounded-3xl py-8 px-6 sm:px-12 shadow-2xl border border-white/60 grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-200"
      >
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center text-center pt-4 md:pt-0">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#475470] tracking-tight font-[#Space_Grotesk]">
              {stat.value}
            </span>
            <span className="text-[11px] font-bold text-[#63739A] uppercase tracking-widest mt-1">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
