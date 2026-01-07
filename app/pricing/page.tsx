import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Pricing',
    description: 'Simple, transparent pricing for developers and enterprises. Start free with 1,000 files per month.',
    openGraph: {
        title: 'Pricing | MetaGo API',
        description: 'Simple, transparent pricing for developers and enterprises.',
    },
};

const tiers = [
    {
        name: 'Free',
        id: 'tier-free',
        price: { monthly: '$0', annually: '$0' },
        description: 'Perfect for hobby projects and testing',
        features: [
            '1,000 files/month',
            'All file formats supported',
            'SHA-256 checksums',
            'MIME type detection',
            'Community support',
            'API documentation',
        ],
        cta: 'Get Started',
        href: '/register',
        featured: false,
    },
    {
        name: 'Pro',
        id: 'tier-pro',
        price: { monthly: '$9', annually: '$81' },
        description: 'For professional developers and small teams',
        features: [
            '100,000 files/month',
            'Priority processing',
            'Advanced metadata extraction',
            'Webhook notifications',
            '99.9% uptime SLA',
            'Email support (24h response)',
            'Multiple API keys',
            'Team collaboration',
        ],
        cta: 'Start Free Trial',
        href: '/register?plan=pro',
        featured: true,
    },
    {
        name: 'Enterprise',
        id: 'tier-enterprise',
        price: { monthly: 'Custom', annually: 'Custom' },
        description: 'For large-scale applications',
        features: [
            'Unlimited files',
            'Dedicated infrastructure',
            'Custom integrations',
            'White-label options',
            '99.99% uptime SLA',
            'Priority support (1h response)',
            'Account manager',
            'Custom contract terms',
        ],
        cta: 'Contact Sales',
        href: '/contact?plan=enterprise',
        featured: false,
    },
];

const faqs = [
    {
        question: 'Can I switch plans at any time?',
        answer: 'Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect at the start of the next billing cycle.',
    },
    {
        question: 'What happens if I exceed my monthly limit?',
        answer: 'Requests beyond your plan limit will return a 429 status code. You can upgrade your plan or wait for the next billing cycle to reset.',
    },
    {
        question: 'Do you offer discounts for annual billing?',
        answer: 'Yes! Annual billing gives you 2 months free (roughly 16% savings) compared to monthly billing.',
    },
    {
        question: 'Is there a free trial for paid plans?',
        answer: 'Yes, Pro plans include a 14-day free trial. No credit card required to start.',
    },
    {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards (Visa, Mastercard, Amex) and can arrange invoice billing for Enterprise customers.',
    },
];

export default function PricingPage() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="text-base font-semibold leading-7 text-blue-600">Pricing</h1>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                        Plans that scale with your needs
                    </p>
                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        Start free and upgrade as you grow. All plans include access to our high-performance API.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {tiers.map((tier) => (
                        <div
                            key={tier.id}
                            className={`rounded-3xl p-8 xl:p-10 ${tier.featured
                                ? 'ring-2 ring-blue-600 bg-slate-50'
                                : 'ring-1 ring-slate-200'
                                }`}
                        >
                            <div className="flex items-center justify-between gap-x-4">
                                <h2 className="text-lg font-semibold leading-8 text-slate-900">
                                    {tier.name}
                                </h2>
                                {tier.featured && (
                                    <p className="rounded-full bg-blue-600 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                                        Most popular
                                    </p>
                                )}
                            </div>
                            <p className="mt-4 text-sm leading-6 text-slate-600">{tier.description}</p>
                            <p className="mt-6 flex items-baseline gap-x-1">
                                <span className="text-4xl font-bold tracking-tight text-slate-900">
                                    {tier.price.monthly}
                                </span>
                                {tier.price.monthly !== 'Custom' && (
                                    <span className="text-sm font-semibold leading-6 text-slate-600">/month</span>
                                )}
                            </p>
                            <Link
                                href={tier.href}
                                className={`mt-6 block rounded-lg px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${tier.featured
                                    ? 'bg-blue-600 text-white shadow-sm hover:bg-blue-500 focus-visible:outline-blue-600'
                                    : 'bg-slate-900 text-white hover:bg-slate-800 focus-visible:outline-slate-900'
                                    }`}
                            >
                                {tier.cta}
                            </Link>
                            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-slate-600">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex gap-x-3">
                                        <Check className="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* FAQ Section */}
                <div className="mx-auto mt-24 max-w-4xl">
                    <h2 className="text-2xl font-bold leading-10 tracking-tight text-slate-900">
                        Frequently asked questions
                    </h2>
                    <dl className="mt-10 space-y-8 divide-y divide-slate-200">
                        {faqs.map((faq) => (
                            <div key={faq.question} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
                                <dt className="text-base font-semibold leading-7 text-slate-900 lg:col-span-5">
                                    {faq.question}
                                </dt>
                                <dd className="mt-4 lg:col-span-7 lg:mt-0">
                                    <p className="text-base leading-7 text-slate-600">{faq.answer}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>

                {/* CTA Section */}
                <div className="mt-24 bg-blue-600 rounded-3xl px-6 py-16 sm:px-16">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Still have questions?
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
                            Our team is here to help. Get in touch and we'll respond within 24 hours.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                                href="/contact"
                                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50"
                            >
                                Contact us
                            </Link>
                            <Link href="/docs" className="text-sm font-semibold leading-6 text-white">
                                View documentation <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
