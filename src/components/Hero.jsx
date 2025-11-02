import React from 'react';
import { Rocket, Search, BarChart3 } from 'lucide-react';

const Hero = () => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_50%)]" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6 pt-8">
        {/* Top nav */}
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-blue-600 text-white grid place-items-center shadow-lg shadow-blue-600/30">
              <Rocket className="h-5 w-5" />
            </div>
            <span className="font-semibold text-slate-900 text-lg">RankPilot</span>
          </div>
          <div className="hidden md:flex items-center gap-7 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#testimonials" className="hover:text-slate-900">Social Proof</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex h-10 items-center rounded-md px-4 text-sm font-medium text-slate-700 hover:text-slate-900">Sign in</button>
            <button className="inline-flex h-10 items-center rounded-md bg-slate-900 px-4 text-sm font-medium text-white shadow hover:bg-slate-800">Get started</button>
          </div>
        </nav>

        {/* Hero content */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mt-16 pb-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              New: AI suggestions for on-page SEO
            </div>
            <h1 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Grow organic traffic with actionable SEO insights
            </h1>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              RankPilot analyzes your site, competitors, and search intent to deliver clear steps that actually move rankings. No fluff. Just results.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex h-11 items-center justify-center rounded-md bg-blue-600 px-5 text-white font-medium shadow-lg shadow-blue-600/30 hover:bg-blue-500">
                Start free trial
              </a>
              <a href="#features" className="inline-flex h-11 items-center justify-center rounded-md border border-slate-200 bg-white px-5 text-slate-900 font-medium hover:bg-slate-50">
                See how it works
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Search className="h-4 w-4 text-blue-600" />
                Real-time audits
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-blue-600" />
                Competitor tracking
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative mx-auto w-full max-w-[560px] rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
              <div className="rounded-lg bg-slate-950 p-4 text-slate-100">
                <div className="flex gap-2 mb-4">
                  <span className="h-3 w-3 rounded-full bg-red-500"></span>
                  <span className="h-3 w-3 rounded-full bg-amber-400"></span>
                  <span className="h-3 w-3 rounded-full bg-emerald-500"></span>
                </div>
                <pre className="text-xs leading-relaxed overflow-auto">
{`> Crawling yoursite.com\n> Found 128 pages\n> Checking titles, meta, headings, links...\n\n✔ No duplicate titles\n✔ All pages indexable\n⚠ 17 images missing alt text\n⚠ 9 slow pages (LCP > 2.5s)\n\nAI suggestions:\n- Compress hero images on blog\n- Add internal links to /pricing from top 5 blog posts\n- Target \"best crm for freelancers\" (KD: 9, Volume: 2.1k)`}
                </pre>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block h-28 w-28 rounded-2xl bg-blue-100 blur-2xl" aria-hidden="true" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
