import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'We grew organic signups by 142% in three months. The AI suggestions told us exactly what to fix and what to write next.',
    name: 'Maya Patel',
    role: 'Head of Growth, ClearFlow',
  },
  {
    quote:
      'Finally an SEO tool focused on action. Weekly briefs make prioritization effortless for our small team.',
    name: 'Daniel Kim',
    role: 'Founder, Mailo.io',
  },
  {
    quote:
      'RankPilot replaced three tools and saved us hours each week. The technical audit is spot on.',
    name: 'Elena Garcia',
    role: 'SEO Lead, NovaApps',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Loved by growth teams</h2>
          <p className="mt-4 text-slate-600 text-lg">
            Marketers and founders use RankPilot to turn SEO into a repeatable growth channel.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <figure key={idx} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="mt-4 text-slate-700 leading-relaxed">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-600">
                <span className="font-semibold text-slate-900">{t.name}</span> — {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
