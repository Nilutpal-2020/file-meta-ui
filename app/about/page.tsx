import type { Metadata } from 'next';
import { Terminal, Zap, Shield, Users } from 'lucide-react';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn about MetaGo API, our mission to simplify file metadata extraction, and the technology powering our platform.',
};

export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
                            About MetaGo API
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            We're on a mission to make file metadata extraction fast, reliable, and accessible for developers worldwide.
                        </p>
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-x-12">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Our Mission</h2>
                            <p className="mt-6 text-lg leading-8 text-slate-600">
                                File metadata extraction shouldn't be complicated. Traditional approaches involve parsing file headers manually,
                                maintaining custom regex patterns, and dealing with countless edge cases across different file formats.
                            </p>
                            <p className="mt-6 text-lg leading-8 text-slate-600">
                                We built MetaGo API to abstract away this complexity. Our Go-powered backend handles 30+ file formats out of the box,
                                providing consistent, reliable metadata extraction in milliseconds.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Our Values</h2>
                            <dl className="mt-6 space-y-6 text-base leading-7 text-slate-600">
                                <div className="relative pl-9">
                                    <dt className="font-semibold text-slate-900">
                                        <Zap className="absolute left-0 top-1 h-5 w-5 text-blue-600" />
                                        Performance First
                                    </dt>
                                    <dd className="mt-2">Every millisecond counts. We optimize for speed without compromising accuracy.</dd>
                                </div>
                                <div className="relative pl-9">
                                    <dt className="font-semibold text-slate-900">
                                        <Shield className="absolute left-0 top-1 h-5 w-5 text-blue-600" />
                                        Security by Default
                                    </dt>
                                    <dd className="mt-2">Your files are processed in memory and never stored. Zero-trust architecture.</dd>
                                </div>
                                <div className="relative pl-9">
                                    <dt className="font-semibold text-slate-900">
                                        <Users className="absolute left-0 top-1 h-5 w-5 text-blue-600" />
                                        Developer Experience
                                    </dt>
                                    <dd className="mt-2">Clean APIs, comprehensive docs, and responsive support. We build for developers.</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>

            {/* Technology Stack */}
            <div className="bg-slate-50 py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Built with Modern Technology
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            We leverage cutting-edge tools to deliver a best-in-class developer experience.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                            <div className="flex flex-col">
                                <dt className="text-base font-semibold leading-7 text-slate-900">
                                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                                        <Terminal className="h-6 w-6 text-white" />
                                    </div>
                                    Go Backend
                                </dt>
                                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-slate-600">
                                    <p className="flex-auto">
                                        Our API is built with Go for maximum performance and concurrency. Handle 50k+ requests per minute
                                        with sub-millisecond latency.
                                    </p>
                                </dd>
                            </div>
                            <div className="flex flex-col">
                                <dt className="text-base font-semibold leading-7 text-slate-900">
                                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                                        <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
                                        </svg>
                                    </div>
                                    Next.js Frontend
                                </dt>
                                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-slate-600">
                                    <p className="flex-auto">
                                        React-powered interface with server-side rendering for optimal SEO and lightning-fast page loads.
                                    </p>
                                </dd>
                            </div>
                            <div className="flex flex-col">
                                <dt className="text-base font-semibold leading-7 text-slate-900">
                                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                                        <Shield className="h-6 w-6 text-white" />
                                    </div>
                                    Enterprise Security
                                </dt>
                                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-slate-600">
                                    <p className="flex-auto">
                                        Bank-grade encryption, zero-storage policy, and comprehensive audit logs. SOC 2 Type II certified.
                                    </p>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-white">
                <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                    <div className="relative isolate overflow-hidden bg-slate-900 px-6 py-24 text-center shadow-2xl rounded-3xl sm:px-16">
                        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Ready to get started?
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
                            Join thousands of developers using MetaGo API to handle file metadata at scale.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="/register"
                                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100"
                            >
                                Get started for free
                            </a>
                            <a href="/docs" className="text-sm font-semibold leading-6 text-white">
                                Read the docs <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
