type PortfolioItem = {
  title: string;
  category: string;
  year: string;
  image: string;
};

export function Portfolio({ items }: { items: PortfolioItem[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => (
        <article
          key={`${item.title}-${index}`}
          className={`group overflow-hidden rounded-[2rem] border border-white/10 bg-[#121212] ${index === 0 ? 'md:col-span-2' : ''}`}
        >
          <div className="relative overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="h-[300px] w-full object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-90" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 sm:p-6">
              <div>
                <p className="text-[0.62rem] uppercase tracking-[0.22em] text-ivory/70">{item.category}</p>
                <h3 className="mt-2 text-2xl font-black tracking-[-0.06em] text-ivory">{item.title}</h3>
              </div>
              <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[0.62rem] uppercase tracking-[0.2em] text-ivory/80">
                {item.year}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-white/10 px-5 py-4 text-sm text-ivory/70 sm:px-6">
            <span>View Case Study</span>
            <span className="text-lg leading-none text-terracotta">→</span>
          </div>
        </article>
      ))}
    </div>
  );
}
