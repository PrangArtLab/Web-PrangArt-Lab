import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'PrangArt Lab translated our vision into a brand system that feels premium, clear, and genuinely distinctive. Every decision had intention behind it.',
    name: 'Maya N.',
    role: 'Founder',
    company: 'Northstar Studio',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
  },
  {
    quote: 'Their visual storytelling made our product launch feel culturally relevant and impossible to ignore. The final output elevated every touchpoint.',
    name: 'Arman D.',
    role: 'Marketing Director',
    company: 'Veloura',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
  },
  {
    quote: 'From identity concept to motion assets, the team was strategic, collaborative, and wildly creative. We saw a direct lift in engagement almost immediately.',
    name: 'Sofia K.',
    role: 'Brand Lead',
    company: 'Motive Lab',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
  },
];

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 text-xs uppercase tracking-[0.28em] text-ivory/50">Client notes</p>
        <h2 className="text-4xl font-black tracking-[-0.06em] text-ivory sm:text-5xl">What our clients say.</h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.name} className="rounded-[2rem] border border-white/10 bg-[#121212] p-6">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-terracotta/30 bg-terracotta/10 text-terracotta">
                <Quote size={18} />
              </div>
              <img src={item.image} alt={item.name} className="h-12 w-12 rounded-full object-cover" loading="lazy" />
            </div>
            <p className="text-lg leading-8 text-ivory/80">“{item.quote}”</p>
            <div className="mt-8 border-t border-white/10 pt-5">
              <div className="font-semibold text-ivory">{item.name}</div>
              <div className="mt-1 text-sm text-ivory/60">
                {item.role} · {item.company}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
