import React from 'react';
import HeroCover from './components/HeroCover';
import FlightSearch from './components/FlightSearch';
import LoginCard from './components/LoginCard';
import PaymentOptions from './components/PaymentOptions';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <HeroCover />
      <main className="relative z-10 mx-auto max-w-6xl px-4 pb-24">
        <FlightSearch />
        <PaymentOptions />
        <LoginCard />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-xs text-white/50">
        © {new Date().getFullYear()} SkyFlow — Flight booking demo UI
      </footer>
    </div>
  );
}

export default App;
