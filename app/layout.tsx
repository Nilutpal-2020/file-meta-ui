import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Analytics } from "@vercel/analytics/next"

// Load fonts
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  metadataBase: new URL('https://metago-api.com'),
  title: {
    default: 'MetaGo API | High Performance File Analysis',
    template: '%s | MetaGo API',
  },
  description: 'Extract metadata, checksums, and MIME types in milliseconds with our high-performance Go-powered API. Process 50k+ files per minute with bank-grade security.',
  keywords: [
    'file metadata extraction',
    'API',
    'file analysis',
    'MIME type detection',
    'SHA-256 checksum',
    'Go API',
    'file processing',
    'metadata API',
    'high performance',
  ],
  authors: [{ name: 'MetaGo Team' }],
  creator: 'MetaGo API',
  publisher: 'MetaGo API',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://metago-api.com',
    title: 'MetaGo API | High Performance File Analysis',
    description: 'Extract metadata, checksums, and MIME types in milliseconds with our high-performance Go-powered API.',
    siteName: 'MetaGo API',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MetaGo API - High Performance File Metadata Extraction',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MetaGo API | High Performance File Analysis',
    description: 'Extract metadata, checksums, and MIME types in milliseconds.',
    images: ['/og-image.png'],
    creator: '@metagoapi',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'MetaGo API',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Any',
    description: 'High-performance file metadata extraction API built with Go. Extract MIME types, checksums, and rich metadata in milliseconds.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Free tier with 1,000 files per month',
    },
    author: {
      '@type': 'Organization',
      name: 'MetaGo API',
      url: 'https://metago-api.com',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '127',
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-gray-50 text-gray-900">
        <Analytics />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />

      </body>
    </html>
  );
}