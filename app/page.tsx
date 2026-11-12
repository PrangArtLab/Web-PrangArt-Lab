'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Marquee } from '@/components/Marquee';
import { Services } from '@/components/Services';
import { Portfolio } from '@/components/Portfolio';
import { About } from '@/components/About';
import { Process } from '@/components/Process';
import { Testimonials } from '@/components/Testimonials';
import { Journal } from '@/components/Journal';
import { Footer } from '@/components/Footer';

const portfolioItems = [
  {
    title: 'Northstar Rebrand',
    category: 'Branding',
    year: '2024',
    image:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Aster Motion System',
    category: 'Motion',
    year: '2024',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Hush Studio Site',
    category: 'Web',
    year: '2023',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Bloom Atlas',
    category: 'Illustration',
    year: '2023',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Veloura Campaign',
    category: 'Branding',
    year: '2022',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Motive Narrative',
    category: 'Motion',
    year: '2022',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80',
  },
];

const filters = ['All', 'Branding', 'Illustration', 'Motion', 'Web'] as const;

type Filter = (typeof filters)[number];

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All');

  const filteredPortfolio =
    activeFilter === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <main className="bg-charcoal text-ivory selection:bg-terracotta selection:text-ivory">
      <Navbar />

      <section id="home" className="relative overflow-hidden border-b border-white/10 bg-hero-radial">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(230,92,46,0.2),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(198,255,77,0.14),transparent_30%)]" />
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-24 lg:pt-36">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative z-10"
          >
            <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-ivory/60">
              <Sparkles size={14} className="text-terracotta" />
              Creative studio for brands with ambition
            </div>

            <h1 className="max-w-6xl text-[3.4rem] font-black leading-[0.85] tracking-[-0.06em] text-ivory sm:text-[4.7rem] lg:text-[8.2rem]">
              We craft visual stories that move people.
            </h1>

            <div className="mt-7 max-w-xl text-base text-ivory/70 sm:text-lg">
              PrangArt Lab combines strategic thinking, visual craft, and motion-driven storytelling to build brands that feel unforgettable.
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-6 py-3.5 text-sm font-semibold text-charcoal transition duration-300 hover:-translate-y-0.5 hover:bg-[#f97a4d]"
              >
                View Our Work <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-ivory transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
              >
                <Play size={16} className="fill-current" /> Book a Call
              </a>
            </div>
          </motion.div>

          <div className="mt-18 flex items-end justify-between gap-8 border-t border-white/10 pt-8 text-sm text-ivory/60">
            <div>
              <div className="text-3xl font-bold text-ivory">5+ Years</div>
              <div className="mt-1">Crafting brands & stories</div>
            </div>
            <div className="hidden md:block text-right">
              <div className="text-3xl font-bold text-ivory">50+ Projects</div>
              <div className="mt-1">Across culture, commerce & startups</div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 bg-black/10 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-5 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 overflow-hidden whitespace-nowrap text-[0.7rem] font-medium uppercase tracking-[0.35em] text-ivory/60">
              <div className="animate-marquee flex min-w-max gap-8">
                <span>Branding</span>
                <span>✦</span>
                <span>Illustration</span>
                <span>✦</span>
                <span>Motion</span>
                <span>✦</span>
                <span>Digital</span>
                <span>✦</span>
                <span>Branding</span>
                <span>✦</span>
                <span>Illustration</span>
                <span>✦</span>
                <span>Motion</span>
                <span>✦</span>
                <span>Digital</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Marquee />
      <Services />

      <section id="work" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-ivory/50">Selected work</p>
            <h2 className="text-4xl font-black tracking-[-0.06em] text-ivory sm:text-5xl">Work that feels alive.</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] transition ${
                  activeFilter === filter
                    ? 'border-terracotta bg-terracotta text-charcoal'
                    : 'border-white/15 bg-white/5 text-ivory/70 hover:border-white/30 hover:text-ivory'
                }`}
                aria-label={`Filter portfolio by ${filter}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <Portfolio items={filteredPortfolio} />
      </section>

      <About />
      <Process />
      <Testimonials />
      <Journal />

      <section id="contact" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-terracotta/30 bg-[linear-gradient(135deg,#E65C2E_0%,#0F0F0F_65%)] p-8 sm:p-10 lg:p-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-4 text-xs uppercase tracking-[0.28em] text-ivory/70">Let’s build your next chapter</p>
              <h2 className="text-4xl font-black leading-none tracking-[-0.06em] text-ivory sm:text-5xl lg:text-6xl">
                Have a project in mind?
              </h2>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="mailto:hello@prangartlab.com" className="text-lg font-semibold text-ivory underline decoration-white/40 underline-offset-4">
                hello@prangartlab.com
              </a>
              <a
                href="mailto:hello@prangartlab.com"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ivory px-6 py-3.5 text-sm font-semibold text-charcoal transition hover:-translate-y-0.5 hover:bg-white"
              >
                Let’s Talk <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
