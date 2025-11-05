import React from 'react';
import { CreditCard, Shield, SmartphoneNfc } from 'lucide-react';

const PaymentOptions = () => {
  const methods = [
    {
      icon: CreditCard,
      title: 'Cards',
      desc: 'Visa, Mastercard, Amex — 3D Secure enabled',
    },
    {
      icon: SmartphoneNfc,
      title: 'Wallets',
      desc: 'Apple Pay, Google Pay — instant checkout',
    },
    {
      icon: Shield,
      title: 'Protected',
      desc: 'PCI-DSS compliant with end‑to‑end encryption',
    },
  ];

  return (
    <section className="mx-auto mt-20 max-w-6xl px-4 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold">Flexible, secure payment options</h2>
        <p className="mt-2 text-white/70">Pay your way with industry‑standard security built in.</p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {methods.map((m) => (
          <div key={m.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <m.icon className="h-6 w-6 text-white" />
            <h3 className="mt-4 text-lg font-medium">{m.title}</h3>
            <p className="mt-1 text-sm text-white/70">{m.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-emerald-200">
        <p className="text-sm">This is a demo UI. Connect a gateway like Stripe or Braintree for live payments.</p>
      </div>
    </section>
  );
};

export default PaymentOptions;
