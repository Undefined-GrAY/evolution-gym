'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView, animate } from 'framer-motion';

function CounterValue({
  targetNumber,
  prefix = '',
  suffix = '',
  staticText
}: {
  targetNumber?: number;
  prefix?: string;
  suffix?: string;
  staticText?: string;
}) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: '-40px' });

  useEffect(() => {
    if (staticText || targetNumber === undefined || !isInView || !nodeRef.current) return;
    const element = nodeRef.current;

    const controls = animate(0, targetNumber, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(value) {
        element.textContent = `${prefix}${Math.floor(value)}${suffix}`;
      }
    });

    return () => controls.stop();
  }, [isInView, targetNumber, prefix, suffix, staticText]);

  if (staticText) {
    return <span>{staticText}</span>;
  }

  return <span ref={nodeRef}>{prefix}0{suffix}</span>;
}

export default function SocialProofBar() {
  const stats = [
    { targetNumber: 23, suffix: 'K+', label: 'Active Members' },
    { targetNumber: 5, suffix: ' Years', label: 'Running Strong' },
    { targetNumber: 50, suffix: '+', label: 'Elite Mentors' },
    { staticText: 'Vogue', label: 'Featured In' }
  ];

  return (
    <section className="container-fluid -mt-14 relative z-20">
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
              <CounterValue
                targetNumber={stat.targetNumber}
                suffix={stat.suffix}
                staticText={stat.staticText}
              />
            </span>
            <span className="text-[13px] font-bold text-[#63739A] uppercase tracking-widest mt-1">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
