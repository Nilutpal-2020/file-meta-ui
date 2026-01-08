import HeroUploadDemo from '@/components/HeroUpload';
import FeatureGrid from '@/components/FeatureGrid';
import FeaturePreview from '@/components/FeaturePreview';
import Link from 'next/link';
import { Check } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'File Metadata Extraction Tool - AI Detection & Analysis',
  description: 'Free online file metadata extractor with AI-generated image detection, screenshot analysis, MIME type identification, and SHA-256 checksum generation. Extract comprehensive metadata from any file format instantly.',
  keywords: [
    'file metadata extractor',
    'AI image detection',
    'AI generated image detector',
    'screenshot detection',
    'MIME type checker',
    'SHA-256 checksum',
    'file analysis tool',
    'image metadata',
    'EXIF data extractor',
    'file information',
    'metadata extraction API',
    'free metadata tool',
  ],
  openGraph: {
    title: 'File Metadata Extraction Tool - AI Detection & Analysis',
    description: 'Extract comprehensive file metadata including AI detection, checksums, and MIME types. Free online tool with advanced AI-generated image detection.',
    type: 'website',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'File Metadata Extraction - AI Detection',
    description: 'Free tool to extract file metadata with AI-generated image detection and comprehensive analysis',
  },
};

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <HeroUploadDemo />
      <FeatureGrid />
      <FeaturePreview />
    </div>
  );
}