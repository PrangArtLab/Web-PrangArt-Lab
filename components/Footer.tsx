import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0b0b]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full border border-terracotta/40 bg-terracotta/10 text-xs font-bold text-terracotta">
                P
              </div>
              <span className="font-display text-2xl font-bold tracking-[-0.06em]">PrangArt Lab</span>
            </div>
            <p className="mt-5 max-w-sm text-base leading-7 text-ivory/65">
              We design visual stories for brands with ambition, clarity, and culture at heart.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-sm uppercase tracking-[0.24em] text-ivory/50">Sitemap</h3>
            <ul className="space-y-3 text-base text-ivory/75">
              <li><a href="#work">Work</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#journal">Journal</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm uppercase tracking-[0.24em] text-ivory/50">Social</h3>
            <ul className="space-y-3 text-base text-ivory/75">
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Behance</a></li>
              <li><a href="#">Dribbble</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm uppercase tracking-[0.24em] text-ivory/50">Newsletter</h3>
            <form className="flex gap-3 rounded-full border border-white/10 bg-white/[0.02] p-2">
              <label className="sr-only" htmlFor="newsletter-email">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent px-3 py-2 text-sm text-ivory placeholder:text-ivory/35 focus:outline-none"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-terracotta px-4 py-2 text-sm font-semibold text-charcoal transition hover:bg-[#f97a4d]"
                aria-label="Submit email"
              >
                <ArrowUpRight size={16} />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-ivory/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025 PrangArt Lab. Crafted with intention.</p>
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-flex items-center gap-2 text-ivory/75 hover:text-ivory">
            Back to top <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
