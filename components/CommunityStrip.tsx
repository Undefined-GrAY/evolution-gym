'use client';

export default function CommunityStrip() {
  const images = [
    { url: '/images/hero-bg.jpg', title: 'Strength Rituals' },
    { url: '/images/equipment.jpg', title: 'Biomechanical Gear' },
    { url: '/images/boxing.jpg', title: 'Combat Performance' },
    { url: '/images/recovery.jpg', title: 'Thermal Recovery' }
  ];

  return (
    <section className="w-full my-12 sm:my-20 overflow-hidden relative">
      <div className="flex w-full overflow-x-auto snap-x snap-mandatory hide-scrollbar sm:overflow-hidden h-52 sm:h-80 gap-2 sm:gap-1 bg-[#151618] p-2 sm:p-0">
        {images.map((item, i) => (
          <div key={i} className="w-[260px] sm:w-1/4 h-full relative overflow-hidden group rounded-2xl sm:rounded-none flex-shrink-0 sm:flex-shrink snap-start">
            <img
              src={item.url}
              alt={item.title}
              className="w-full h-full object-cover grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 cursor-pointer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[13px] font-bold uppercase tracking-widest block text-white/90">
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
