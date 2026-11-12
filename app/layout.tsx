import type { Metadata } from 'next';
import { DM_Sans, Instrument_Serif } from 'next/font/google';
import './globals.css';

const bodyFont = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const displayFont = DM_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const serifFont = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: '400',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://prangartlab.com'),
  title: 'PrangArt Lab — Independent Creative Studio',
  description:
    'An independent creative studio shaping thoughtful brands and visual worlds through identity, illustration, motion, and digital experiences.',
  openGraph: {
    title: 'PrangArt Lab — Independent Creative Studio',
    description:
      'We make meaning visible. Thoughtful brands and visual worlds, made with curiosity and care.',
    siteName: 'PrangArt Lab',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PrangArt Lab independent creative studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PrangArt Lab — Independent Creative Studio',
    description: 'We make meaning visible.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable} ${serifFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
