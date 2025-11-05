import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroCover = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/80" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 pb-16 text-center text-white sm:pt-32">
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium tracking-wide backdrop-blur">Modern • Fintech • Travel</span>
        <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Book Flights with Confidence
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          Seamless search, secure payments, and a delightful booking experience. Your next adventure starts here.
        </p>
        <div className="mt-8 flex items-center gap-3">
          <a
            href="#search"
            className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Start Searching
          </a>
          <a
            href="#login"
            className="rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
          >
            Sign In
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroCover;
