'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { store } from '@/lib/store';
import { Sparkles, ArrowRight, Lock, Mail, User, CheckCircle2 } from 'lucide-react';

export default function AuthPage() {
  const [tab, setTab] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Update store with authenticated state
    store.setUser({
      name: name || 'Alex Vance',
      email: email || 'alex.vance@evolution.com',
      tier: 'TRANSIT',
      memberId: `EVO-${Math.floor(100000 + Math.random() * 900000)}`
    });

    setTimeout(() => {
      router.push('/dashboard');
    }, 1200);
  };

  return (
    <div className="pt-32 pb-24 px-6 sm:px-12 max-w-md mx-auto w-full min-h-screen flex flex-col justify-center">
      <div className="bg-[#2A2A2D] text-white rounded-[2.5rem] p-8 shadow-2xl border border-white/15 relative overflow-hidden">
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#475470]/30 rounded-full filter blur-3xl pointer-events-none" />

        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs uppercase tracking-widest text-white/80 font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#637304]" />
            <span>Supabase Auth Portal</span>
          </div>
          <h1 className="text-3xl font-extrabold uppercase font-[#Space_Grotesk] tracking-tight">
            {tab === 'signin' ? 'Welcome Back' : 'Join Evolution'}
          </h1>
          <p className="text-xs text-white/60 font-light mt-1">
            {tab === 'signin' ? 'Sign in to access your member dashboard' : 'Create an account to track your sessions'}
          </p>
        </div>

        {/* Auth Toggle Tabs */}
        <div className="flex bg-black/40 p-1 rounded-full mb-6">
          <button
            onClick={() => setTab('signin')}
            className={`flex-1 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
              tab === 'signin' ? 'bg-white text-[#2A2A2D] shadow-md' : 'text-white/60 hover:text-white'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setTab('signup')}
            className={`flex-1 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
              tab === 'signup' ? 'bg-white text-[#2A2A2D] shadow-md' : 'text-white/60 hover:text-white'
            }`}
          >
            Sign Up
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-8">
            <CheckCircle2 className="w-16 h-16 text-[#637304] mx-auto mb-3" />
            <h3 className="text-xl font-bold uppercase font-[#Space_Grotesk] mb-1">
              Authentication Success!
            </h3>
            <p className="text-xs text-white/60">Redirecting to your member dashboard...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {tab === 'signup' && (
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-white/60 mb-1">
                  Full Name
                </label>
                <div className="relative flex items-center">
                  <User className="w-4 h-4 text-white/40 absolute left-4" />
                  <input
                    required
                    type="text"
                    placeholder="Alex Vance"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/5 border border-white/15 rounded-xl pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:border-white/50"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-white/60 mb-1">
                Email Address
              </label>
              <div className="relative flex items-center">
                <Mail className="w-4 h-4 text-white/40 absolute left-4" />
                <input
                  required
                  type="email"
                  placeholder="alex.vance@evolution.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/15 rounded-xl pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:border-white/50"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-white/60 mb-1">
                Password
              </label>
              <div className="relative flex items-center">
                <Lock className="w-4 h-4 text-white/40 absolute left-4" />
                <input
                  required
                  type="password"
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/15 rounded-xl pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:border-white/50"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-[#2A2A2D] py-4 rounded-xl font-extrabold uppercase tracking-widest text-xs mt-2 hover:bg-[#E4E8F1] transition-all flex items-center justify-center gap-2 shadow-xl"
            >
              <span>{tab === 'signin' ? 'Sign In to Dashboard' : 'Create Account'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
