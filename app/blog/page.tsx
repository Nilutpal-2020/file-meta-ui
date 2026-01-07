import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Learn about file metadata extraction, API best practices, and updates from the MetaGo team.',
};

const posts = [
    {
        id: 1,
        title: 'Introducing MetaGo API: High-Performance File Metadata Extraction',
        href: '/blog/introducing-metago-api',
        description: 'Learn how we built a Go-powered API that processes metadata from 50k+ files per minute with sub-millisecond latency.',
        date: 'Jan 3, 2026',
        datetime: '2026-01-03',
        category: { title: 'Product', href: '/blog/category/product' },
        author: {
            name: 'MetaGo Team',
            role: 'Engineering',
            imageUrl: '/avatars/team.png',
        },
        readingTime: '5 min read',
    },
    {
        id: 2,
        title: 'Building Secure File Upload Systems: Best Practices',
        href: '/blog/secure-file-uploads',
        description: 'A comprehensive guide to implementing secure file upload flows with validation, virus scanning, and metadata extraction.',
        date: 'Dec 28, 2025',
        datetime: '2025-12-28',
        category: { title: 'Tutorial', href: '/blog/category/tutorial' },
        author: {
            name: 'MetaGo Team',
            role: 'Engineering',
            imageUrl: '/avatars/team.png',
        },
        readingTime: '8 min read',
    },
    {
        id: 3,
        title: 'Understanding MIME Types and File Extensions',
        href: '/blog/mime-types-explained',
        description: 'Deep dive into how MIME type detection works, common pitfalls, and why relying on file extensions alone is dangerous.',
        date: 'Dec 20, 2025',
        datetime: '2025-12-20',
        category: { title: 'Education', href: '/blog/category/education' },
        author: {
            name: 'MetaGo Team',
            role: 'Engineering',
            imageUrl: '/avatars/team.png',
        },
        readingTime: '6 min read',
    },
    {
        id: 4,
        title: 'How We Achieve 99.99% Uptime with Go',
        href: '/blog/go-reliability',
        description: 'Technical overview of our infrastructure: circuit breakers, graceful degradation, and horizontal scaling strategies.',
        date: 'Dec 15, 2025',
        datetime: '2025-12-15',
        category: { title: 'Engineering', href: '/blog/category/engineering' },
        author: {
            name: 'MetaGo Team',
            role: 'Engineering',
            imageUrl: '/avatars/team.png',
        },
        readingTime: '10 min read',
    },
    {
        id: 5,
        title: 'API Rate Limiting: Why and How',
        href: '/blog/api-rate-limiting',
        description: 'Learn about our rate limiting strategy, how to handle 429 responses, and optimizing your API usage.',
        date: 'Dec 10, 2025',
        datetime: '2025-12-10',
        category: { title: 'Tutorial', href: '/blog/category/tutorial' },
        author: {
            name: 'MetaGo Team',
            role: 'Engineering',
            imageUrl: '/avatars/team.png',
        },
        readingTime: '4 min read',
    },
    {
        id: 6,
        title: 'The Power of SHA-256 Checksums for File Verification',
        href: '/blog/sha256-checksums',
        description: 'Why cryptographic checksums matter for file integrity, deduplication, and security verification.',
        date: 'Dec 5, 2025',
        datetime: '2025-12-05',
        category: { title: 'Education', href: '/blog/category/education' },
        author: {
            name: 'MetaGo Team',
            role: 'Engineering',
            imageUrl: '/avatars/team.png',
        },
        readingTime: '7 min read',
    },
];

export default function BlogPage() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        From the blog
                    </h1>
                    <p className="mt-2 text-lg leading-8 text-slate-600">
                        Learn about file metadata, API best practices, and product updates from our team.
                    </p>
                </div>

                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex flex-col items-start">
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime={post.datetime} className="text-slate-500 flex items-center gap-1">
                                    <Calendar className="h-4 w-4" />
                                    {post.date}
                                </time>
                                <Link
                                    href={post.category.href}
                                    className="relative z-10 rounded-full bg-slate-100 px-3 py-1.5 font-medium text-slate-600 hover:bg-slate-200"
                                >
                                    {post.category.title}
                                </Link>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-900 group-hover:text-slate-600">
                                    <Link href={post.href}>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </Link>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-600">{post.description}</p>
                            </div>
                            <div className="mt-6 flex items-center gap-x-4">
                                <div className="flex items-center gap-2 text-xs text-slate-500">
                                    <Clock className="h-4 w-4" />
                                    {post.readingTime}
                                </div>
                                <Link
                                    href={post.href}
                                    className="text-sm font-semibold text-blue-600 hover:text-blue-500 flex items-center gap-1"
                                >
                                    Read more
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Newsletter CTA */}
                <div className="mt-20 bg-slate-50 rounded-3xl p-8 sm:p-12">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                            Subscribe to our newsletter
                        </h2>
                        <p className="mt-4 text-lg leading-8 text-slate-600">
                            Get the latest articles and product updates delivered to your inbox weekly.
                        </p>
                        <form className="mt-6 sm:flex sm:max-w-md mx-auto">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                type="email"
                                name="email-address"
                                id="email-address"
                                autoComplete="email"
                                required
                                className="w-full min-w-0 rounded-md border-0 px-4 py-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                placeholder="Enter your email"
                            />
                            <div className="mt-4 sm:mt-0 sm:ml-4 sm:flex-shrink-0">
                                <button
                                    type="submit"
                                    className="w-full rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
