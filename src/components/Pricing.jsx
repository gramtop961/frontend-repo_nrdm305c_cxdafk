import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'Best for trying things out',
    features: ['1 project', 'Weekly audits', '5 keywords tracked', 'Email support'],
    cta: 'Get started',
    highlight: false,
  },
  {
    name: 'Growth',
    price: '$39/mo',
    description: 'For growing startups',
    features: ['10 projects', 'Daily audits', '250 keywords', 'Competitor tracking', 'Priority support'],
    cta: 'Start free trial',
    highlight: true,
  },
  {
    name: 'Scale',
    price: '$99/mo',
    description: 'For agencies & teams',
    features: ['Unlimited projects', 'API access', 'White-label reports', 'Custom limits'],
    cta: 'Contact sales',
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Simple, transparent pricing</h2>
          <p className="mt-4 text-slate-600 text-lg">Start free, upgrade when you see results. Cancel anytime.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border p-6 ${
                tier.highlight ? 'border-blue-300 bg-blue-50/40 shadow-[0_10px_40px_-12px_rgba(37,99,235,0.35)]' : 'border-slate-200 bg-white shadow-sm'
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-6 rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white shadow">Most popular</span>
              )}
              <h3 className="text-xl font-semibold text-slate-900">{tier.name}</h3>
              <p className="mt-1 text-slate-600 text-sm">{tier.description}</p>
              <div className="mt-5 text-3xl font-bold text-slate-900">{tier.price}</div>
              <ul className="mt-5 space-y-2 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-6 w-full h-11 rounded-md font-medium ${
                  tier.highlight
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500'
                    : 'border border-slate-200 bg-white text-slate-900 hover:bg-slate-50'
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
