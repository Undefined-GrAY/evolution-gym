'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { store } from '@/lib/store';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomepage = pathname === '/';

  const navLinks = [
    { name: 'Home', shortName: 'Home', href: '/' },
    { name: ' Schedule', shortName: 'Schedule', href: '/classes' },
    { name: 'Pricing', shortName: 'Pricing', href: '/pricing' },
    { name: 'Trainers', shortName: 'Trainers', href: '/trainers' },
    { name: 'Dashboard', shortName: 'Dashboard', href: '/dashboard' }
  ];

  return (
    <>
      {/* Floating Navbar Container */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 pointer-events-none py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">

          {/* DESKTOP NAV BAR */}
          <nav
            className={`hidden md:flex items-center justify-between w-full mx-auto transition-all duration-500 ${
              isScrolled
                ? 'bg-[#2A2A2D]/90 backdrop-blur-xl border border-white/20 text-white rounded-full px-8 py-3.5 shadow-2xl max-w-5xl'
                : isHomepage
                ? 'bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full px-8 py-4 max-w-7xl shadow-lg'
                : 'bg-[#2A2A2D] backdrop-blur-md border border-white/20 text-white rounded-full px-8 py-4 max-w-7xl shadow-xl'
            }`}
          >
            {/* Brand Wordmark Logo */}
            <Link
              href="/"
              className="text-xl tracking-tighter font-extrabold uppercase text-white flex items-center gap-2 group cursor-pointer"
            >
              <span className="bg-white text-[#2A2A2D] w-7 h-7 rounded-full flex items-center justify-center text-xs font-black group-hover:rotate-45 transition-transform duration-300">
                E
              </span>
              <span className="font-[#Space_Grotesk] tracking-widest text-lg font-bold">
                EVOLUTION
              </span>
            </Link>

            {/* Navigation Links */}
            <ul className="flex items-center gap-1 lg:gap-2 text-xs font-semibold uppercase tracking-wider">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                const label = isScrolled ? link.shortName : link.name;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-1 whitespace-nowrap ${
                        isActive
                          ? 'bg-white text-[#2A2A2D] font-bold shadow-md'
                          : 'text-white/80 hover:text-white hover:bg-white/15'
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* CTA Button */}
            <button
              type="button"
              onClick={() => store.setTrialModalOpen(true)}
              className="bg-white text-[#2A2A2D] hover:bg-[#E4E8F1] transition-all duration-300 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg group hover:scale-105 cursor-pointer active:scale-95 whitespace-nowrap"
            >
              <span>Book a free trial</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </nav>

          {/* MOBILE NAV BAR (Logo on Left, Fancy Menu Button on Right ONLY) */}
          <nav className="flex md:hidden items-center justify-between w-full bg-[#2A2A2D]/95 backdrop-blur-xl border border-white/20 text-white rounded-full px-5 py-3 shadow-2xl">
            {/* ONLY BRAND NAME LOGO */}
            <Link href="/" className="text-base tracking-widest font-black uppercase text-white flex items-center gap-2 cursor-pointer">
              <span className="bg-white text-[#2A2A2D] w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                E
              </span>
              <span>EVOLUTION</span>
            </Link>

            {/* Fancy Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-white focus:outline-none active:scale-90 transition-transform cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>

        </div>
      </header>

      {/* MOBILE FULL-SCREEN MENU DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#151618]/98 backdrop-blur-2xl text-white flex flex-col justify-between p-8 pt-28 md:hidden"
          >
            <div className="flex flex-col gap-6">
              <div className="text-xs uppercase tracking-widest text-[#63739A] font-bold border-b border-white/10 pb-4 flex justify-between items-center">
                <span>Navigation</span>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <ul className="flex flex-col gap-5 text-2xl font-bold uppercase tracking-tight font-[#Space_Grotesk]">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between text-white/90 hover:text-white transition-colors cursor-pointer py-1"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-6 h-6 text-white/50" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4 border-t border-white/10 pt-6">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  store.setTrialModalOpen(true);
                }}
                className="w-full bg-white text-[#2A2A2D] py-4 rounded-full font-extrabold uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-xl cursor-pointer active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-[#475470]" />
                <span>Book a free trial class</span>
              </button>
              <div className="text-center text-[10px] text-white/40 uppercase tracking-widest">
                EVOLUTION • Conscious Performance Space
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
