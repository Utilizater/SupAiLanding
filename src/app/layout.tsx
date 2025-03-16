import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import ThemeRegistry from '@/components/ThemeRegistry';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'SupElite | AI-Driven Personalized Supplements',
  description:
    'SupElite offers AI-driven personalization for supplements, professional guidance from biohacker doctors, and an integrated e-commerce platform.',
  keywords: 'supplements, AI, personalization, biohacking, health, wellness',
  icons: {
    icon: [
      { url: '/favicon/Group 7.svg', type: 'image/svg+xml' },
      { url: '/favicon/Group 7.png', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
