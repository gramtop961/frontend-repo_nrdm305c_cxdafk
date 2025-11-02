import React from 'react';
import { Search, Shield, BarChart3, Link as LinkIcon } from 'lucide-react';

const features = [
  {
    title: 'Site-wide Audits',
    description:
      'Run comprehensive technical and on-page audits with prioritized fixes ranked by impact.',
    icon: Search,
  },
  {
    title: 'Backlink Intelligence',
    description:
      'Discover link opportunities your competitors are using and track new referring domains.',
    icon: LinkIcon,
  },
  {
    title: 'Rank Tracking',
    description:
      'Monitor keyword movements daily across locations and devices with shareable reports.',
    icon: BarChart3,
  },
  {
    title: 'Core Web Vitals',
    description:
      'Detect performance bottlenecks and get actionable steps to improve LCP, CLS and INP.',
    icon: Shield,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Everything you need for modern SEO</h2>
          <p className="mt-4 text-slate-600 text-lg">
            A single place to audit, prioritize, and execute SEO work that actually moves the needle.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-11 w-11 rounded-lg bg-blue-600/10 text-blue-700 grid place-items-center mb-4">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
