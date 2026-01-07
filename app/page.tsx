import HeroUploadDemo from '@/components/HeroUpload';
import FeatureGrid from '@/components/FeatureGrid';
import Link from 'next/link';
import { Check } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <HeroUploadDemo />
      <FeatureGrid />

      {/* Pricing Section */}
      <section id="pricing" className="bg-slate-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Pricing</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Plans that scale with you
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Start free and upgrade as you grow. All plans include access to our high-performance API.
            </p>
          </div>

          <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Free Tier */}
            <div className="rounded-3xl p-8 ring-1 ring-slate-200 xl:p-10 bg-white">
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-lg font-semibold leading-8 text-slate-900">Free</h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">Perfect for hobby projects and testing</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-slate-900">$0</span>
                <span className="text-sm font-semibold leading-6 text-slate-600">/month</span>
              </p>
              <Link
                href="/register"
                className="mt-6 block rounded-lg bg-slate-900 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-800"
              >
                Get started
              </Link>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-slate-600">
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-blue-600" />
                  1,000 files/month
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-blue-600" />
                  All file formats
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-blue-600" />
                  SHA-256 checksums
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-blue-600" />
                  Community support
                </li>
              </ul>
            </div>

            {/* Pro Tier */}
            <div className="rounded-3xl p-8 ring-2 ring-blue-600 bg-slate-50 xl:p-10">
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-lg font-semibold leading-8 text-slate-900">Pro</h3>
                <p className="rounded-full bg-blue-600 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                  Most popular
                </p>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">For professional developers</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-slate-900">$49</span>
                <span className="text-sm font-semibold leading-6 text-slate-600">/month</span>
              </p>
              <Link
                href="/register?plan=pro"
                className="mt-6 block rounded-lg bg-blue-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500"
              >
                Start free trial
              </Link>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-slate-600">
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-blue-600" />
                  100,000 files/month
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-blue-600" />
                  Priority processing
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-blue-600" />
                  Advanced metadata
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-blue-600" />
                  99.9% uptime SLA
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-blue-600" />
                  Email support (24h)
                </li>
              </ul>
            </div>

            {/* Enterprise Tier */}
            <div className="rounded-3xl p-8 ring-1 ring-slate-200 xl:p-10 bg-white">
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-lg font-semibold leading-8 text-slate-900">Enterprise</h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">For large-scale applications</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-slate-900">Custom</span>
              </p>
              <Link
                href="/contact?plan=enterprise"
                className="mt-6 block rounded-lg bg-slate-900 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-800"
              >
                Contact sales
              </Link>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-slate-600">
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-blue-600" />
                  Unlimited files
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-blue-600" />
                  Dedicated infrastructure
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-blue-600" />
                  Custom integrations
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-blue-600" />
                  99.99% uptime SLA
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-blue-600" />
                  Priority support (1h)
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/pricing"
              className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500"
            >
              View detailed pricing and FAQ <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-slate-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to handle files at scale?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Get your API key today and start processing up to 1,000 files/month for free.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/register"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </Link>
              <Link href="/docs" className="text-sm font-semibold leading-6 text-white">
                Read the docs <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}