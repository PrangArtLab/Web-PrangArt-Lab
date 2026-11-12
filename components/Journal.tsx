const articles = [
  {
    category: 'Brand Strategy',
    title: 'Why visual consistency creates brand trust long before conversion',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1000&q=80',
  },
  {
    category: 'Motion',
    title: 'Designing motion systems that feel cinematic without losing clarity',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80',
  },
  {
    category: 'Creative Process',
    title: 'The creative rituals behind impactful, insight-led brand work',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80',
  },
];

export function Journal() {
  return (
    <section id="journal" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-ivory/50">Journal</p>
          <h2 className="text-4xl font-black tracking-[-0.06em] text-ivory sm:text-5xl">Notes from the studio.</h2>
        </div>

        <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-ivory underline decoration-white/30 underline-offset-4">
          Read All Articles →
        </a>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {articles.map((article) => (
          <article key={article.title} className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#121212]">
            <img src={article.image} alt={article.title} className="h-64 w-full object-cover" loading="lazy" />
            <div className="p-5">
              <div className="mb-4 flex items-center justify-between gap-3 text-[0.62rem] uppercase tracking-[0.22em] text-ivory/60">
                <span>{article.category}</span>
                <span>{article.readTime}</span>
              </div>
              <h3 className="text-2xl font-black tracking-[-0.05em] text-ivory">{article.title}</h3>
              <a href="#" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-terracotta">
                Read More →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
