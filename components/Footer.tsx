'use client';

import Link from 'next/link';
import { ArrowUpRight, Share2, Globe, Send, Mail } from 'lucide-react';
import { store } from '@/lib/store';

export default function Footer() {
  return (
    <footer className="bg-[#151618] text-white w-full pt-16 sm:pt-20 pb-10 sm:pb-12 border-t border-white/10 relative overflow-hidden px-4 sm:px-8">
      {/* Background Watermark (Fills 100% width on smaller screens, capped at max-w-[1440px]) */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full max-w-[1440px] text-center pointer-events-none select-none opacity-5 overflow-hidden flex justify-center px-2 sm:px-4">
        <h2 className="wordmark-capped font-black uppercase tracking-tighter leading-none text-white whitespace-nowrap font-[#Space_Grotesk]">
          EVOLUTION
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-10 lg:gap-12 mb-10 sm:mb-20 relative z-10">
        {/* Brand & Mission Column (Centered on mobile) */}
        <div className="col-span-2 sm:col-span-1 flex flex-col justify-between items-center sm:items-start text-center sm:text-left mb-2 sm:mb-0">
          <div>
            <Link href="/" className="text-2xl font-black uppercase tracking-widest text-white block mb-3 sm:mb-4">
              EVOLUTION
            </Link>
            <p className="text-sm text-white/70 leading-relaxed font-light mb-5 sm:mb-6 max-w-sm sm:max-w-none">
              A boutique performance and conscious restoration sanctuary. Designed for clarity, strength, and internal focus.
            </p>
          </div>
          <button
            onClick={() => store.setTrialModalOpen(true)}
            className="w-fit mx-auto sm:mx-0 bg-white text-[#2A2A2D] px-6 py-3 rounded-full text-[13px] font-bold uppercase tracking-widest hover:bg-[#E4E8F1] transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Book Trial Pass</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Links Column (Left 50% on mobile, centered text) */}
        <div className="col-span-1 text-center sm:text-left">
          <h4 className="text-[13px] uppercase tracking-widest font-bold text-[#63739A] mb-3 sm:mb-6">Explore</h4>
          <ul className="flex flex-col gap-2.5 sm:gap-3 text-sm font-medium">
            <li>
              <Link href="/" className="text-white/80 hover:text-white transition-colors">
                About Club
              </Link>
            </li>
            <li>
              <Link href="/classes" className="text-white/80 hover:text-white transition-colors">
                Classes & Schedule
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="text-white/80 hover:text-white transition-colors">
                Membership Tiers
              </Link>
            </li>
            <li>
              <Link href="/trainers" className="text-white/80 hover:text-white transition-colors">
                Our Elite Mentors
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="text-white/80 hover:text-white transition-colors">
                Member Portal
              </Link>
            </li>
          </ul>
        </div>

        {/* Facility Info Column (Right 50% on mobile, centered text) */}
        <div className="col-span-1 text-center sm:text-left">
          <h4 className="text-[13px] uppercase tracking-widest font-bold text-[#63739A] mb-3 sm:mb-6">Hours & Access</h4>
          <div className="flex flex-col gap-3 sm:gap-3 text-sm text-white/80 font-light">
            <div>
              <strong className="font-semibold text-white block text-xs uppercase tracking-wider mb-0.5 sm:inline sm:text-sm sm:normal-case sm:tracking-normal sm:mb-0">Mon to Fri: </strong>
              <span className="text-xs sm:text-sm text-white/80 block sm:inline">06:00 AM : 11:00 PM</span>
            </div>
            <div>
              <strong className="font-semibold text-white block text-xs uppercase tracking-wider mb-0.5 sm:inline sm:text-sm sm:normal-case sm:tracking-normal sm:mb-0">Sat to Sun: </strong>
              <span className="text-xs sm:text-sm text-white/80 block sm:inline">07:00 AM : 10:00 PM</span>
            </div>
            <div>
              <strong className="font-semibold text-white block text-xs uppercase tracking-wider mb-0.5 sm:inline sm:text-sm sm:normal-case sm:tracking-normal sm:mb-0">Thermal SPA: </strong>
              <span className="text-xs sm:text-sm text-white/80 block sm:inline">08:00 AM : 10:00 PM</span>
            </div>
            <p className="text-[13px] text-white/50 pt-2 hidden sm:block">Biometric keycard required for off-peak access.</p>
          </div>
        </div>

        {/* Newsletter & Socials (Full width on mobile, centered text & icons) */}
        <div className="col-span-2 sm:col-span-1 text-center sm:text-left mt-2 sm:mt-0">
          <h4 className="text-[13px] uppercase tracking-widest font-bold text-[#63739A] mb-3 sm:mb-6">Stay Connected</h4>
          <p className="text-[13px] text-white/70 mb-4 max-w-sm mx-auto sm:mx-0">Subscribe for schedule drops and exclusive private masterclasses.</p>
          <div className="flex items-center bg-white/10 border border-white/15 rounded-full p-1 mb-6 max-w-sm mx-auto sm:mx-0">
            <Mail className="w-4 h-4 text-white/50 ml-3 mr-2 flex-shrink-0" />
            <input
              type="email"
              placeholder="Enter your email..."
              className="bg-transparent text-xs text-white placeholder:text-white/40 focus:outline-none w-full pr-2"
            />
            <button className="bg-white text-[#2A2A2D] rounded-full p-2 hover:bg-gray-200 transition-colors cursor-pointer flex-shrink-0">
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3">
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all" aria-label="Social Link">
              <Share2 className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all" aria-label="Global Link">
              <Globe className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all" aria-label="Direct Link">
              <Send className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left text-[13px] text-white/60 gap-4 relative z-10">
        <p>© {new Date().getFullYear()} EVOLUTION Fitness Club. All Rights Reserved.</p>
        <div className="flex items-center justify-center gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Membership</a>
          <a href="#" className="hover:text-white transition-colors">Club Rules</a>
        </div>
      </div>
    </footer>
  );
}
