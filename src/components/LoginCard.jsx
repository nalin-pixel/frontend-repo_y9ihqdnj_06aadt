import React from 'react';
import { Mail, Lock } from 'lucide-react';

const LoginCard = () => {
  return (
    <section id="login" className="mx-auto mt-20 max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur-lg sm:p-8">
      <h2 className="text-2xl font-semibold">Welcome back</h2>
      <p className="mt-1 text-sm text-white/70">Sign in to manage your bookings and saved trips.</p>

      <form onSubmit={(e) => e.preventDefault()} className="mt-6 space-y-4">
        <div className="rounded-lg border border-white/10 bg-black/40 p-3">
          <label className="mb-1 block text-xs uppercase tracking-wide text-white/60">Email</label>
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-white/60" />
            <input type="email" placeholder="you@example.com" className="w-full bg-transparent text-sm placeholder-white/40 outline-none" />
          </div>
        </div>
        <div className="rounded-lg border border-white/10 bg-black/40 p-3">
          <label className="mb-1 block text-xs uppercase tracking-wide text-white/60">Password</label>
          <div className="flex items-center gap-2">
            <Lock size={16} className="text-white/60" />
            <input type="password" placeholder="••••••••" className="w-full bg-transparent text-sm placeholder-white/40 outline-none" />
          </div>
        </div>
        <button type="submit" className="w-full rounded-lg bg-white py-3 font-semibold text-black transition hover:bg-white/90">Sign In</button>
      </form>

      <p className="mt-4 text-center text-xs text-white/60">New here? <a href="#" className="underline decoration-white/40 underline-offset-4 hover:decoration-white">Create an account</a></p>
    </section>
  );
};

export default LoginCard;
