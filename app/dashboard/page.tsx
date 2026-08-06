'use client';

import { useState, useEffect } from 'react';
import { store, UserBooking, UserProfile } from '@/lib/store';
import { Calendar, Clock, User, QrCode, Trash2, Plus, Sparkles, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const [user, setUser] = useState<UserProfile>(store.getCurrentUser());
  const [bookings, setBookings] = useState<UserBooking[]>(store.getUserBookings());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setUser(store.getCurrentUser());
      setBookings(store.getUserBookings());
    });
    return () => unsubscribe();
  }, []);

  const handleCancel = (bookingId: string) => {
    store.cancelBooking(bookingId);
  };

  return (
    <div className="pt-32 pb-24 px-6 sm:px-12 max-w-6xl mx-auto w-full min-h-screen">
      {/* Dashboard Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b border-gray-200 pb-8">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#2A2A2D] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#637304]" />
            <span>Member Portal</span>
          </div>
          <h1 className="fluid-h1 font-black uppercase text-[#2A2A2D] tracking-tight font-[#Space_Grotesk]">
            Welcome, {user.name}
          </h1>
          <p className="text-xs text-[#63739A] uppercase tracking-widest font-semibold mt-1">
            Member ID: {user.memberId}
          </p>
        </div>

        {/* Active Membership Badge */}
        <div className="bg-[#2A2A2D] text-white px-6 py-4 rounded-2xl flex items-center gap-4 shadow-xl border border-white/10">
          <ShieldCheck className="w-8 h-8 text-[#637304]" />
          <div>
            <span className="text-[10px] uppercase tracking-widest text-white/60 font-bold block">
              Active Plan
            </span>
            <span className="text-xl font-extrabold uppercase font-[#Space_Grotesk]">
              {user.tier} TIER
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left 2 Columns: Booked Sessions */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-extrabold uppercase font-[#Space_Grotesk] text-[#2A2A2D]">
              Your Scheduled Classes ({bookings.length})
            </h2>
            <Link
              href="/classes"
              className="bg-[#2A2A2D] text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#475470] transition-colors flex items-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Book Session</span>
            </Link>
          </div>

          {bookings.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-gray-200 shadow-sm">
              <Calendar className="w-12 h-12 text-[#63739A] mx-auto mb-3" />
              <h3 className="text-lg font-bold uppercase font-[#Space_Grotesk] text-[#2A2A2D] mb-1">
                No Upcoming Sessions Booked
              </h3>
              <p className="text-xs text-[#171C22]/70 mb-6 font-light">
                Explore our realtime schedule to reserve your spot in a strength, yoga, or recovery class.
              </p>
              <Link
                href="/classes"
                className="bg-[#2A2A2D] text-white px-6 py-3 rounded-full text-xs font-extrabold uppercase tracking-widest"
              >
                Browse Realtime Schedule
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {bookings.map((b) => (
                <div
                  key={b.id}
                  className="bg-white rounded-3xl p-6 border border-gray-200 shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-[#475470] transition-all"
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#637304] mb-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{b.day} at {b.time}</span>
                    </div>
                    <h3 className="text-xl font-bold uppercase font-[#Space_Grotesk] text-[#2A2A2D] mb-1">
                      {b.className}
                    </h3>
                    <p className="text-xs text-[#63739A] font-medium">
                      Coach: <strong className="text-[#2A2A2D]">{b.trainer}</strong>
                    </p>
                  </div>

                  <button
                    onClick={() => handleCancel(b.id)}
                    className="bg-red-50 text-red-600 hover:bg-red-100 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 self-end sm:self-auto"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Cancel</span>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Digital Keycard Pass */}
        <div>
          <div className="bg-[#2A2A2D] text-white rounded-3xl p-8 shadow-2xl border border-white/10 relative overflow-hidden">
            <div className="flex justify-between items-start mb-8">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#63739A] font-extrabold block mb-1">
                  Digital Access Pass
                </span>
                <h3 className="text-2xl font-black uppercase font-[#Space_Grotesk]">
                  EVOLUTION
                </h3>
              </div>
              <QrCode className="w-8 h-8 text-white/80" />
            </div>

            <div className="bg-white p-4 rounded-2xl flex flex-col items-center justify-center my-6">
              {/* Mock Barcode */}
              <div className="flex gap-1 items-center h-16 w-full justify-center opacity-90">
                {Array.from({ length: 32 }).map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-full bg-black ${
                      idx % 3 === 0 ? 'w-1.5' : idx % 2 === 0 ? 'w-1' : 'w-0.5'
                    }`}
                  />
                ))}
              </div>
              <span className="text-[10px] font-mono tracking-widest text-[#2A2A2D] font-bold mt-2">
                {user.memberId}
              </span>
            </div>

            <div className="text-xs text-white/70 font-light text-center border-t border-white/10 pt-4">
              Scan barcode at turnstiles for off-peak turnstile & locker access.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
