'use client';

import { useEffect, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'framer-motion';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Asterisk,
  Aperture,
  Instagram,
  Menu,
  MoveUpRight,
  Play,
  Quote,
  Sparkles,
  X,
} from 'lucide-react';

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Studio', href: '#studio' },
  { label: 'Journal', href: '#journal' },
];

const services = [
  {
    number: '01',
    title: 'Brand identity',
    description:
      'Distinctive identities built on clear positioning, considered design, and a point of view.',
    size: 'service-card--large',
    icon: Aperture,
  },
  {
    number: '02',
    title: 'Art direction',
    description:
      'A coherent creative vision for every place your brand shows up.',
    size: '',
    icon: Sparkles,
  },
  {
    number: '03',
    title: 'Illustration',
    description:
      'Original visual worlds that make complex ideas feel human.',
    size: '',
    icon: Asterisk,
  },
  {
    number: '04',
    title: 'Motion & film',
    description:
      'Graphic movement and short-form stories designed to stay with you.',
    size: '',
    icon: Play,
  },
  {
    number: '05',
    title: 'Digital experiences',
    description:
      'Thoughtful websites and digital touchpoints with clarity at their core.',
    size: 'service-card--wide',
    icon: MoveUpRight,
  },
  {
    number: '06',
    title: 'Content systems',
    description:
      'Flexible, beautiful content that keeps your brand consistent and in motion.',
    size: '',
    icon: Asterisk,
  },
];

const projects = [
  {
    title: 'Objects for everyday',
    client: 'Forme House',
    category: 'Branding',
    year: '2025',
    image:
      'https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=1400&q=85',
    tone: 'project-image--sage',
  },
  {
    title: 'A softer kind of energy',
    client: 'Soft Current',
    category: 'Motion',
    year: '2025',
    image:
      'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=85',
    tone: 'project-image--orange',
  },
  {
    title: 'A place to begin again',
    client: 'Sunday Objects',
    category: 'Digital',
    year: '2024',
    image:
      'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1200&q=85',
    tone: 'project-image--cream',
  },
  {
    title: 'Made of many things',
    client: 'Common Ground',
    category: 'Illustration',
    year: '2024',
    image:
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1400&q=85',
    tone: 'project-image--blue',
  },
];

const journalEntries = [
  {
    date: 'May 14, 2025',
    category: 'Perspective',
    title: 'The power of a brand that knows what it stands for',
    image:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80',
  },
  {
    date: 'April 28, 2025',
    category: 'In the studio',
    title: 'Making room for the happy accident',
    image:
      'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=900&q=80',
  },
  {
    date: 'April 03, 2025',
    category: 'Field notes',
    title: 'A little less noise. A little more feeling.',
    image:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80',
  },
];

const filters = ['All', 'Branding', 'Illustration', 'Motion', 'Digital'];

function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function CustomCursor() {
  const [point, setPoint] = useState({ x: -100, y: -100 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const move = (event: MouseEvent) => {
      setPoint({ x: event.clientX, y: event.clientY });
    };
    const enter = (event: Event) => {
      if ((event.target as HTMLElement).closest('a, button')) setIsActive(true);
    };
    const leave = () => setIsActive(false);

    document.addEventListener('mousemove', move);
    document.addEventListener('mouseover', enter);
    document.addEventListener('mouseout', leave);

    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', enter);
      document.removeEventListener('mouseout', leave);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`custom-cursor ${isActive ? 'custom-cursor--active' : ''}`}
      style={{ left: point.x, top: point.y }}
    />
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a
          className="wordmark"
          href="#top"
          aria-label="PrangArt Lab homepage"
          onClick={() => setOpen(false)}
        >
          <span className="wordmark-mark">P<span>.</span></span>
          <span>PrangArt <span className="wordmark-light">Lab</span></span>
        </a>

        <div className="desktop-nav">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <a className="nav-cta" href="#contact">
          Start a project <ArrowUpRight size={15} />
        </a>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="mobile-menu-links">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + index * 0.07 }}
                >
                  <span className="mobile-menu-number">0{index + 1}</span>
                  {item.label}
                  <ArrowUpRight size={22} />
                </motion.a>
              ))}
            </div>
            <a className="mobile-menu-contact" href="#contact" onClick={() => setOpen(false)}>
              Have a project? Let&apos;s talk <ArrowRight size={17} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const visibleProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <main id="top">
      <CustomCursor />
      <Navbar />

      <section className="hero">
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-kicker">
            <span className="status-dot" />
            Independent creative studio · Est. 2020
          </div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            We make
            <br />
            <span className="hero-title-line">
              <em>meaning</em> visible<span className="hero-period">.</span>
            </span>
          </motion.h1>

          <div className="hero-bottom">
            <p className="hero-copy">
              PrangArt Lab is an independent creative studio shaping thoughtful
              brands and visual worlds for a more interesting tomorrow.
            </p>
            <div className="hero-actions">
              <a className="button button--accent" href="#work">
                Explore our work <ArrowRight size={16} />
              </a>
              <a className="text-link" href="#contact">
                Get to know us <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <div className="hero-art" aria-label="Abstract creative studio artwork">
            <div className="hero-art-orbit hero-art-orbit--one" />
            <div className="hero-art-orbit hero-art-orbit--two" />
            <div className="hero-art-sun" />
            <div className="hero-art-card">
              <span>Ideas in motion</span>
              <span className="hero-art-star">✳</span>
              <span>Since 2020</span>
            </div>
          </div>

          <a className="scroll-cue" href="#work">
            <span>Scroll to explore</span>
            <ArrowDown size={15} />
          </a>
          <span className="hero-index">01 — 06</span>
        </div>
      </section>

      <section className="intro-strip" aria-label="Studio specialties">
        <div className="intro-strip-track">
          {[0, 1].map((repeat) => (
            <div className="intro-strip-group" key={repeat} aria-hidden={repeat === 1}>
              <span>Identity</span><Asterisk /><span>Illustration</span><Asterisk />
              <span>Digital</span><Asterisk /><span>Motion</span><Asterisk />
              <span>Art direction</span><Asterisk />
            </div>
          ))}
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="section-heading">
          <Reveal>
            <p className="eyebrow"><span>01</span> Selected work</p>
            <h2 className="display-heading">
              Good work makes
              <br />
              <em>a little noise.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="work-heading-side">
            <p>A few recent collaborations, built with curiosity and care.</p>
            <a className="text-link" href="#contact">
              Have a project? <ArrowUpRight size={15} />
            </a>
          </Reveal>
        </div>

        <div className="filter-row" role="group" aria-label="Filter projects">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`filter-button ${activeFilter === filter ? 'is-selected' : ''}`}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div layout className="project-grid">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.article
                layout
                key={project.title}
                className={`project-card ${index === 0 && activeFilter === 'All' ? 'project-card--feature' : ''}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35 }}
              >
                <a className="project-link" href="#contact" aria-label={`Discuss ${project.title} project`}>
                  <div className={`project-image ${project.tone}`}>
                    <img src={project.image} alt={`${project.title} creative project`} loading="lazy" />
                    <span className="project-open"><ArrowUpRight size={19} /></span>
                    <span className="project-image-label">{project.client}</span>
                  </div>
                  <div className="project-meta">
                    <div>
                      <p className="project-category">{project.category} <span>·</span> {project.year}</p>
                      <h3>{project.title}</h3>
                    </div>
                    <ArrowUpRight className="project-arrow" size={18} />
                  </div>
                </a>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {visibleProjects.length === 0 && (
          <p className="empty-state">New projects in this category are coming soon.</p>
        )}
      </section>

      <section className="services-section" id="services">
        <div className="section services-inner">
          <div className="section-heading services-heading">
            <Reveal>
              <p className="eyebrow"><span>02</span> What we do</p>
              <h2 className="display-heading">
                Small studio.
                <br />
                <em>Wide imagination.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="services-intro">
              <p>
                We bring the right mix of thinking and making to every project.
                No off-the-shelf answers, just work made for you.
              </p>
            </Reveal>
          </div>

          <div className="services-grid">
            {services.map(({ number, title, description, size, icon: Icon }, index) => (
              <Reveal key={number} delay={index * 0.04} className={`service-card ${size}`}>
                <div className="service-top">
                  <span className="service-number">{number} / 06</span>
                  <Icon size={20} strokeWidth={1.4} />
                </div>
                <div className="service-bottom">
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <ArrowUpRight className="service-arrow" size={17} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section studio-section" id="studio">
        <div className="studio-image-wrap">
          <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=85"
            alt="A sunlit creative studio with a shared work table"
            loading="lazy"
          />
          <span className="image-caption">A good place to make good things · Jakarta & everywhere</span>
          <div className="studio-image-stamp">Curiosity<br />over routine</div>
        </div>

        <div className="studio-copy">
          <Reveal>
            <p className="eyebrow"><span>03</span> A little about us</p>
            <h2 className="display-heading">
              We believe
              <br />
              <em>feeling is a</em>
              <br />
              strategy.
            </h2>
            <p className="body-copy">
              We are an independent creative studio partnering with people who
              care about what they put into the world. We look for the human
              truth in every brief, then give it a form people can feel.
            </p>
            <p className="body-copy body-copy--muted">
              Thoughtful by nature, playful by design. We work across identity,
              image, motion, and digital to make the complicated feel clear —
              and the familiar feel new again.
            </p>
            <a className="text-link studio-link" href="#contact">
              Get to know the studio <ArrowUpRight size={16} />
            </a>
          </Reveal>
        </div>

        <div className="studio-stats">
          <div><strong>05<span>+</span></strong><span>Years of making</span></div>
          <div><strong>50<span>+</span></strong><span>Projects brought to life</span></div>
          <div><strong>20<span>+</span></strong><span>Good people we met</span></div>
        </div>
      </section>

      <section className="process-section">
        <div className="section">
          <Reveal className="process-heading">
            <p className="eyebrow"><span>04</span> How we get there</p>
            <h2 className="display-heading">A good idea, <em>well made.</em></h2>
          </Reveal>

          <div className="process-grid">
            {[
              ['01', 'Listen closely', 'We begin with questions, context, and a shared sense of what success could look like.'],
              ['02', 'Find the feeling', 'We uncover the idea at the heart of your project and define a clear creative direction.'],
              ['03', 'Make it matter', 'We explore, refine, and craft a visual world that feels unmistakably yours.'],
              ['04', 'Put it to work', 'We deliver a flexible set of tools and help bring the work into the world.'],
            ].map(([number, title, copy], index) => (
              <Reveal key={number} delay={index * 0.07} className="process-item">
                <span className="process-number">{number}</span>
                <div className="process-marker"><span /></div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section quote-section">
        <Reveal className="quote-content">
          <Quote className="quote-icon" size={26} strokeWidth={1.3} />
          <blockquote>
            “They didn’t just make us look different. They helped us understand
            <em> what we wanted to say.</em>”
          </blockquote>
          <div className="quote-author">
            <div className="quote-avatar">AN</div>
            <div>
              <strong>Amara N.</strong>
              <span>Founder, Forme House</span>
            </div>
          </div>
        </Reveal>
        <span className="quote-decoration" aria-hidden="true">“</span>
      </section>

      <section className="section journal-section" id="journal">
        <div className="section-heading">
          <Reveal>
            <p className="eyebrow"><span>05</span> From the journal</p>
            <h2 className="display-heading">Notes from <em>the process.</em></h2>
          </Reveal>
          <Reveal delay={0.1}>
            <a className="text-link" href="mailto:hello@prangartlab.com?subject=Studio%20journal">
              More notes from us <ArrowUpRight size={15} />
            </a>
          </Reveal>
        </div>

        <div className="journal-grid">
          {journalEntries.map((entry, index) => (
            <Reveal key={entry.title} delay={index * 0.08} className="journal-card">
              <a href="mailto:hello@prangartlab.com?subject=Studio%20journal">
                <div className="journal-image">
                  <img src={entry.image} alt="" loading="lazy" />
                  <span><ArrowUpRight size={18} /></span>
                </div>
                <div className="journal-meta"><span>{entry.category}</span><span>{entry.date}</span></div>
                <h3>{entry.title}</h3>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-orb contact-orb--one" aria-hidden="true" />
        <div className="contact-orb contact-orb--two" aria-hidden="true" />
        <Reveal className="contact-content">
          <p className="eyebrow"><span>06</span> Your turn</p>
          <h2>
            Let’s make
            <br />
            <em>something matter.</em>
          </h2>
          <p className="contact-copy">
            A new beginning, a knotty challenge, or just a good conversation.
            We’d love to hear what you’re thinking.
          </p>
          <a className="button button--light" href="mailto:hello@prangartlab.com">
            Tell us about it <ArrowUpRight size={17} />
          </a>
          <a className="contact-email" href="mailto:hello@prangartlab.com">
            hello@prangartlab.com
          </a>
        </Reveal>
        <span className="contact-index">PrangArt Lab · Independent by nature</span>
      </section>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="wordmark" href="#top">
              <span className="wordmark-mark">P<span>.</span></span>
              <span>PrangArt <span className="wordmark-light">Lab</span></span>
            </a>
            <p>Making meaning visible.<br />Jakarta, Indonesia · Working everywhere.</p>
          </div>

          <div className="footer-column">
            <span className="footer-label">Explore</span>
            <a href="#work">Selected work</a>
            <a href="#services">What we do</a>
            <a href="#studio">The studio</a>
            <a href="#journal">Journal</a>
          </div>

          <div className="footer-column">
            <span className="footer-label">Find us</span>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={13} /></a>
            <a href="https://www.behance.net/" target="_blank" rel="noreferrer">Behance <ArrowUpRight size={13} /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} /></a>
          </div>

          <div className="footer-newsletter">
            <span className="footer-label">A note now and then</span>
            <p>Studio thoughts, new work, and things worth looking at.</p>
            <a href="mailto:hello@prangartlab.com?subject=Add%20me%20to%20the%20studio%20mailing%20list">
              Join the mailing list <ArrowRight size={15} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} PrangArt Lab. Made with intention.</span>
          <span>Independent creative studio</span>
          <a href="#top">Back to the top ↑</a>
        </div>
      </footer>
    </main>
  );
}
