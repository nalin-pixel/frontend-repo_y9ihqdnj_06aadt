import React, { useState } from 'react';
import { Plane, Calendar, Users } from 'lucide-react';

const FlightSearch = () => {
  const [tripType, setTripType] = useState('oneway');

  return (
    <section id="search" className="relative mx-auto -mt-12 max-w-5xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg sm:p-8">
      <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-white/80">
        <button
          onClick={() => setTripType('oneway')}
          className={`rounded-full px-4 py-2 transition ${tripType === 'oneway' ? 'bg-white text-black' : 'bg-white/10 hover:bg-white/20'}`}
        >
          One-way
        </button>
        <button
          onClick={() => setTripType('roundtrip')}
          className={`rounded-full px-4 py-2 transition ${tripType === 'roundtrip' ? 'bg-white text-black' : 'bg-white/10 hover:bg-white/20'}`}
        >
          Round trip
        </button>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6"
      >
        <div className="col-span-2 rounded-lg border border-white/10 bg-black/40 p-4 text-white">
          <label className="mb-1 block text-xs uppercase tracking-wide text-white/60">From</label>
          <div className="flex items-center gap-2">
            <Plane size={16} className="text-white/60" />
            <input
              type="text"
              placeholder="City or airport"
              className="w-full bg-transparent text-sm placeholder-white/40 outline-none"
            />
          </div>
        </div>
        <div className="col-span-2 rounded-lg border border-white/10 bg-black/40 p-4 text-white">
          <label className="mb-1 block text-xs uppercase tracking-wide text-white/60">To</label>
          <div className="flex items-center gap-2">
            <Plane size={16} className="rotate-90 text-white/60" />
            <input
              type="text"
              placeholder="City or airport"
              className="w-full bg-transparent text-sm placeholder-white/40 outline-none"
            />
          </div>
        </div>
        <div className="rounded-lg border border-white/10 bg-black/40 p-4 text-white">
          <label className="mb-1 block text-xs uppercase tracking-wide text-white/60">Depart</label>
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-white/60" />
            <input type="date" className="w-full bg-transparent text-sm text-white outline-none [color-scheme:dark]" />
          </div>
        </div>
        <div className={`rounded-lg border border-white/10 bg-black/40 p-4 text-white ${tripType === 'roundtrip' ? '' : 'opacity-50'}`}>
          <label className="mb-1 block text-xs uppercase tracking-wide text-white/60">Return</label>
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-white/60" />
            <input type="date" disabled={tripType !== 'roundtrip'} className="w-full bg-transparent text-sm text-white outline-none [color-scheme:dark]" />
          </div>
        </div>
        <div className="rounded-lg border border-white/10 bg-black/40 p-4 text-white">
          <label className="mb-1 block text-xs uppercase tracking-wide text-white/60">Passengers</label>
          <div className="flex items-center gap-2">
            <Users size={16} className="text-white/60" />
            <input type="number" min="1" defaultValue={1} className="w-full bg-transparent text-sm text-white outline-none" />
          </div>
        </div>
        <div className="flex items-end">
          <button type="submit" className="w-full rounded-lg bg-white py-3 font-semibold text-black transition hover:bg-white/90">
            Search Flights
          </button>
        </div>
      </form>

      <p className="mt-4 text-center text-xs text-white/60">Demo UI only. Connect to backend search later.</p>
    </section>
  );
};

export default FlightSearch;
