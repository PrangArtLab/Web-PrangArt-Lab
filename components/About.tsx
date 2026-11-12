const stats = [
  { value: '5+', label: 'Years of creative practice' },
  { value: '50+', label: 'Projects launched' },
  { value: '20+', label: 'Brands and founders supported' },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#121212]">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
            alt="PrangArt Lab creative team"
            className="h-full min-h-[480px] w-full object-cover"
            loading="lazy"
          />
        </div>

        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-ivory/50">About the studio</p>
          <h2 className="text-4xl font-black tracking-[-0.06em] text-ivory sm:text-5xl">We turn ideas into magnetic experiences.</h2>

          <div className="mt-8 space-y-5 text-base leading-7 text-ivory/70">
            <p>
              PrangArt Lab is a creative studio built for ambitious brands that want clarity, beauty, and cultural relevance. We combine strategy, identity, illustration, and motion to create work that resonates beyond a single campaign.
            </p>
            <p>
              From launch narratives to visual systems and digital storytelling, we help founders, teams, and cultural brands turn attention into trust — and trust into momentum.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                <div className="text-3xl font-black tracking-[-0.06em] text-ivory">{stat.value}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-ivory/55">{stat.label}</div>
              </div>
            ))}
          </div>

          <a href="#journal" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ivory underline decoration-white/30 underline-offset-4">
            Meet the Team →
          </a>
        </div>
      </div>
    </section>
  );
}
