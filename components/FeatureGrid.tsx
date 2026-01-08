import { ShieldCheck, Zap, Layers, Lock } from 'lucide-react';

const features = [
    {
        name: 'Instant Extraction',
        description: 'Powered by Go, our parser handles files in memory with zero-copy overhead for sub-millisecond responses.',
        icon: Zap,
    },
    {
        name: 'Security First',
        description: 'We calculate SHA-256 checksums automatically, verifying file integrity before you even process content.',
        icon: ShieldCheck,
    },
    {
        name: '30+ Formats',
        description: 'From PDFs and Docx to rare binary formats. If it has magic bytes, we can identify it.',
        icon: Layers,
    }
];

export default function FeatureGrid() {
    return (
        <div className="py-24 bg-white sm:py-32" id="features">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-blue-600">High Performance</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Everything you need to analyze files
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Stop building fragile regex parsers. Use a battle-tested API designed for heavy I/O workloads.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}