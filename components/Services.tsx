import { ArrowUpRight, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Brand Identity',
    description: 'Positioning, naming, visual systems, and storytelling built to feel distinct in crowded markets.',
    featured: true,
  },
  {
    icon: Sparkles,
    title: 'Illustration',
    description: 'Handcrafted visuals, world-building illustrations, and art direction that bring personality to every touchpoint.',
    featured: false,
  },
  {
    icon: Sparkles,
    title: 'Motion Graphics',
    description: 'Short-form animation, launch films, social assets, and kinetic design for maximum memorability.',
    featured: false,
  },
  {
    icon: Sparkles,
    title: 'Web Design',
    description: 'Elegant digital experiences with emphasis on clarity, pacing, and conversion across devices.',
    featured: false,
  },
  {
    icon: Sparkles,
    title: 'Social Content',
    description: 'Campaign systems, visual templates, and content direction that help brands stay consistent and engaged.',
    featured: false,
  },
  {
    icon: Sparkles,
    title: 'Art Direction',
    description: 'Creative vision, moodboards, and high-impact production guidance from concept to final output.',
    featured: false,
  },
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-ivory/50">What we do</p>
          <h2 className="text-4xl font-black tracking-[-0.06em] text-ivory sm:text-5xl">Strategy, design, and motion with intention.</h2>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map(({ title, description, featured, icon: Icon }) => (
          <article
            key={title}
            className={`group relative overflow-hidden rounded-[2rem] border p-6 transition duration-300 hover:-translate-y-1 hover:border-terracotta/50 hover:shadow-glow ${
              featured ? 'md:col-span-2 xl:col-span-1 xl:row-span-2 border-terracotta/30 bg-[#171717]' : 'border-white/10 bg-white/[0.02]'
            }`}
          >
            <div className="mb-6 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-terracotta/40 bg-terracotta/10 text-terracotta">
                <Icon size={22} />
              </div>
              {featured && (
                <span className="rounded-full border border-terracotta/30 bg-terracotta/10 px-2 py-1 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-terracotta">
                  Featured
                </span>
              )}
            </div>

            <h3 className="mb-4 text-2xl font-black tracking-[-0.05em] text-ivory">{title}</h3>
            <p className="max-w-md text-base leading-7 text-ivory/65">{description}</p>

            <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ivory/75">
              Explore <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
