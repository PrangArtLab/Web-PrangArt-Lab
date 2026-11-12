import { ArrowRight, Compass, DraftingCompass, Rocket, Sparkles } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We unpack your vision, audience, and opportunity to shape the creative foundation.',
    icon: Compass,
  },
  {
    number: '02',
    title: 'Define',
    description: 'We build a strategy, look, and message system aligned to your goals and brand story.',
    icon: DraftingCompass,
  },
  {
    number: '03',
    title: 'Design',
    description: 'Concepts, art direction, and production become a sharp visual language with real depth.',
    icon: Sparkles,
  },
  {
    number: '04',
    title: 'Deliver',
    description: 'We package everything for launch, refinement, and long-term use across channels.',
    icon: Rocket,
  },
];

export function Process() {
  return (
    <section className="bg-[#111111] py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-ivory/50">How we work</p>
          <h2 className="text-4xl font-black tracking-[-0.06em] text-ivory sm:text-5xl">Clear process. Considered craft.</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map(({ number, title, description, icon: Icon }) => (
            <div key={number} className="relative rounded-[2rem] border border-white/10 bg-white/[0.02] p-6">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.28em] text-ivory/50">{number}</span>
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-terracotta/30 bg-terracotta/10 text-terracotta">
                  <Icon size={18} />
                </div>
              </div>
              <h3 className="mb-3 text-2xl font-black tracking-[-0.06em] text-ivory">{title}</h3>
              <p className="text-base leading-7 text-ivory/65">{description}</p>
              <div className="mt-8 flex items-center gap-2 text-sm font-medium text-ivory/75">
                Next <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
