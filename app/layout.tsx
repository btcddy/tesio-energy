import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#F0EBE1',
};

export const metadata: Metadata = {
  title: 'TESIO Energy — Roof + Solar + Tax Incentives at Zero Cost',
  description: 'Tesio Energy combines premium roof retrofits with solar installations and a 40% Investment Tax Credit to turn aging roofs into profit centers — at no upfront cost.',
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'TESIO Energy — Roof + Solar + Tax Incentives at Zero Cost',
    description: 'Tesio Energy combines premium roof retrofits with solar installations and a 40% Investment Tax Credit to turn aging roofs into profit centers — at no upfront cost.',
    url: 'https://tesioenergy.com',
    siteName: 'TESIO Energy',
    images: [
      {
        url: '/Flat_roof_BLDG.png',
        width: 1200,
        height: 630,
        alt: 'TESIO Energy',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TESIO Energy — Roof + Solar + Tax Incentives at Zero Cost',
    description: 'Tesio Energy combines premium roof retrofits with solar installations and a 40% Investment Tax Credit to turn aging roofs into profit centers — at no upfront cost.',
    images: ['/Flat_roof_BLDG.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}