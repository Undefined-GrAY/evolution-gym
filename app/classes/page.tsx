'use client';

import { useState, useEffect } from 'react';
import { store } from '@/lib/store';
import { ClassItem } from '@/lib/data';
import { Clock, Users, Filter, Calendar, Sparkles, ArrowRight } from 'lucide-react';

export default function ClassesPage() {
  const [classes, setClasses] = useState<ClassItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedIntensity, setSelectedIntensity] = useState<string>('all');

  useEffect(() => {
    setClasses(store.getClasses());
    const unsubscribe = store.subscribe(() => {
      setClasses(store.getClasses());
    });
    return () => unsubscribe();
  }, []);

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'strength', label: 'Strength' },
    { id: 'yoga', label: 'Yoga & Flow' },
    { id: 'boxing', label: 'Boxing' },
    { id: 'recovery', label: 'Recovery' },
    { id: 'group', label: 'Group Circuit' },
    { id: 'personal', label: '1-on-1 Personal' }
  ];

  const filtered = classes.filter((cls) => {
    const matchCat = selectedCategory === 'all' || cls.category === selectedCategory;
    const matchInt = selectedIntensity === 'all' || cls.intensity.toLowerCase() === selectedIntensity.toLowerCase();
    return matchCat && matchInt;
  });

  return (
    <div className="pt-32 pb-24 px-6 sm:px-12 max-w-7xl mx-auto w-full min-h-screen">
      {/* Page Header */}
      <div className="mb-12 border-b border-gray-200 pb-8">
        <div className="inline-flex items-center gap-2 bg-[#2A2A2D] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#637304]" />
          <span>Realtime Slot Availability</span>
        </div>
        <h1 className="fluid-h1 font-black uppercase text-[#2A2A2D] tracking-tight font-[#Space_Grotesk] mb-4">
          Classes & Realtime Schedule
        </h1>
        <p className="fluid-body-lg text-[#171C22]/75 max-w-2xl font-light">
          Reserve your spot in real time. Each session is strictly capped to guarantee individual mentor coaching and optimal equipment access.
        </p>
      </div>

      {/* Filter Toolbar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 bg-white p-4 rounded-3xl border border-gray-200 shadow-sm">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto hide-scrollbar py-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#2A2A2D] text-white shadow-md'
                  : 'bg-[#E4E8F1] text-[#475470] hover:bg-gray-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Intensity Filter */}
        <div className="flex items-center gap-3 self-end md:self-auto">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#63739A] flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Intensity:
          </span>
          <select
            value={selectedIntensity}
            onChange={(e) => setSelectedIntensity(e.target.value)}
            className="bg-[#E4E8F1] text-[#2A2A2D] text-xs font-bold rounded-full px-4 py-2 focus:outline-none cursor-pointer"
          >
            <option value="all">All Levels</option>
            <option value="Low">Low (Restorative)</option>
            <option value="Medium">Medium (Balanced)</option>
            <option value="High">High (Demanding)</option>
            <option value="Extreme">Extreme (Peak Output)</option>
          </select>
        </div>
      </div>

      {/* Schedule Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-gray-200">
          <p className="text-base text-[#63739A] font-semibold">No classes match your selected filters.</p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSelectedIntensity('all');
            }}
            className="mt-4 bg-[#2A2A2D] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200 flex flex-col justify-between group hover:border-[#475470] transition-all"
            >
              <div className="relative h-48 overflow-hidden bg-black">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/20">
                    {item.category}
                  </span>
                  <span className="bg-[#637304] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {item.intensity} Intensity
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 right-4 text-white flex justify-between items-center text-xs font-semibold">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {item.time} ({item.duration})
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {item.day}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold uppercase font-[#Space_Grotesk] text-[#2A2A2D] mb-2">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#63739A] font-medium mb-3">
                    Mentor: <strong className="text-[#2A2A2D]">{item.trainer}</strong> ({item.trainerRole})
                  </p>
                  <p className="text-xs text-[#171C22]/70 font-light line-clamp-2 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#637304] flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {item.spotsAvailable} / {item.spotsTotal} spots left
                  </span>
                  <button
                    onClick={() => store.setSelectedClassForBooking(item)}
                    disabled={item.spotsAvailable <= 0}
                    className={`px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-md ${
                      item.spotsAvailable > 0
                        ? 'bg-[#2A2A2D] text-white hover:bg-[#475470]'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <span>{item.spotsAvailable > 0 ? 'Reserve Slot' : 'Class Full'}</span>
                    {item.spotsAvailable > 0 && <ArrowRight className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
