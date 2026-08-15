'use client';

export default function CommunityStrip() {
  const images = [
    { url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop', title: 'Strength Rituals' },
    { url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop', title: 'Biomechanical Gear' },
    { url: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800&auto=format&fit=crop', title: 'Combat Performance' },
    { url: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop', title: 'Thermal Recovery' }
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
