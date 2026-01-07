import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'MetaGo API - File Metadata Extraction',
        short_name: 'MetaGo API',
        description: 'High-performance file metadata extraction API. Extract MIME types, checksums, and rich metadata in milliseconds.',
        start_url: '/',
        display: 'standalone',
        background_color: '#0f172a',
        theme_color: '#3b82f6',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    };
}
