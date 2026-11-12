import { motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const navItems = ['Work', 'Services', 'About', 'Journal', 'Contact'];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-charcoal/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link href="#home" className="flex items-center gap-3" aria-label="PrangArt Lab home">
          <div className="grid h-9 w-9 place-items-center rounded-full border border-terracotta/40 bg-terracotta/10 text-xs font-bold text-terracotta">
            P
          </div>
          <span className="font-display text-xl font-bold tracking-[-0.06em]">PrangArt Lab</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-ivory/70 transition hover:text-ivory"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-charcoal transition duration-300 hover:-translate-y-0.5 hover:bg-[#f97a4d]"
          >
            Start a Project
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/15 p-2 text-ivory md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 flex flex-col justify-between bg-charcoal p-5 md:hidden"
        >
          <div className="flex items-center justify-between">
            <Link href="#home" onClick={() => setIsOpen(false)} className="font-display text-xl font-bold tracking-[-0.06em]">
              PrangArt Lab
            </Link>
            <button type="button" onClick={() => setIsOpen(false)} aria-label="Close mobile menu">
              <X size={20} />
            </button>
          </div>

          <div className="mt-10 flex flex-col gap-6 text-3xl font-medium tracking-[-0.06em]">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="border-b border-white/10 pb-3 text-ivory/80"
              >
                {item}
              </Link>
            ))}
          </div>

          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-5 py-3 text-sm font-semibold text-charcoal"
          >
            Start a Project
          </Link>
        </motion.div>
      )}
    </header>
  );
}
