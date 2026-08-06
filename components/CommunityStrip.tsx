'use client';

export default function CommunityStrip() {
  const images = [
    'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop'
  ];

  return (
    <section className="w-full my-20">
      <div className="flex w-full overflow-hidden h-64 sm:h-80 gap-1 bg-[#151618]">
        {images.map((img, i) => (
          <div key={i} className="w-1/4 h-full relative overflow-hidden group">
            <img
              src={img}
              alt="Community workout"
              className="w-full h-full object-cover grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 cursor-pointer"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
          </div>
        ))}
      </div>
    </section>
  );
}
