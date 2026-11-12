import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#0F0F0F',
        ivory: '#F5F1EA',
        cream: '#EFE7DA',
        terracotta: '#E65C2E',
        lime: '#C6FF4D',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(230, 92, 46, 0.3), 0 24px 80px rgba(230, 92, 46, 0.18)',
      },
      letterSpacing: {
        tightish: '-0.04em',
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at top, rgba(230, 92, 46, 0.28), transparent 40%), radial-gradient(circle at bottom right, rgba(198,255,77,0.18), transparent 30%)',
      },
    },
  },
  plugins: [],
};

export default config;
