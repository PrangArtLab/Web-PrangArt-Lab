import type { Metadata } from 'next';
import './globals.css';
import { Space_Grotesk, Manrope } from 'next/font/google';
import { CustomCursor } from '@/components/CustomCursor';

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'PrangArt Lab | Creative Studio & Design Agency',
  description:
    'PrangArt Lab crafts visual stories through branding, illustration, motion, and digital experiences for ambitious brands.',
  keywords: ['creative studio', 'branding agency', 'illustration', 'motion graphics', 'digital content'],
  openGraph: {
    title: 'PrangArt Lab',
    description: 'We craft visual stories that move people.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${grotesk.variable} ${manrope.variable} bg-charcoal text-ivory antialiased`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
