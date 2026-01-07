import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service',
    description: 'MetaGo API terms of service outlining acceptable use, limitations, and legal agreements.',
};

export default function TermsPage() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Terms of Service</h1>
                    <p className="mt-4 text-sm text-slate-500">Last updated: January 8, 2026</p>

                    <div className="mt-10 space-y-8 text-base leading-7 text-slate-700">
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
                            <p>
                                By accessing or using MetaGo API ("Service"), you agree to be bound by these Terms of Service ("Terms").
                                If you disagree with any part of these terms, you may not access the Service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Description of Service</h2>
                            <p>
                                MetaGo API provides a file metadata extraction service that analyzes uploaded files to extract information
                                including MIME types, checksums, file sizes, and other metadata. The Service is provided via RESTful API
                                endpoints accessible over HTTPS.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Account Registration</h2>
                            <p>To use the Service, you must:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Provide accurate, current, and complete information</li>
                                <li>Maintain the security of your account and API keys</li>
                                <li>Notify us immediately of any unauthorized access</li>
                                <li>Be at least 13 years old</li>
                                <li>Not use the Service if we have previously banned you</li>
                            </ul>
                            <p className="mt-4">
                                You are responsible for all activity under your account. Do not share your API keys with unauthorized parties.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Acceptable Use</h2>
                            <p>You agree NOT to:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Upload malicious files (viruses, malware, ransomware)</li>
                                <li>Process illegal content (child exploitation material, pirated content)</li>
                                <li>Attempt to reverse engineer or decompile the Service</li>
                                <li>Perform load testing without prior written consent</li>
                                <li>Circumvent rate limits or usage quotas</li>
                                <li>Resell or redistribute the Service without authorization</li>
                                <li>Use the Service to harass, abuse, or harm others</li>
                                <li>Violate any applicable laws or regulations</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. API Usage Limits</h2>
                            <p>Your usage is subject to the limits of your chosen plan:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li><strong>Free Tier:</strong> 1,000 files per month</li>
                                <li><strong>Pro Tier:</strong> 100,000 files per month</li>
                                <li><strong>Enterprise Tier:</strong> Custom limits</li>
                            </ul>
                            <p className="mt-4">
                                Exceeding your plan limit will result in HTTP 429 (Too Many Requests) responses. We may throttle or suspend
                                accounts that consistently exceed limits.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Payment and Billing</h2>
                            <p>
                                Paid plans are billed monthly or annually in advance. Fees are non-refundable except as required by law.
                                We may change pricing with 30 days' notice. Failure to pay may result in service suspension.
                            </p>
                            <p className="mt-2">
                                You authorize us to charge your payment method for all fees incurred. Disputed charges must be reported
                                within 30 days.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Intellectual Property</h2>
                            <p>
                                The Service and its original content, features, and functionality are owned by MetaGo API and are protected
                                by international copyright, trademark, and other intellectual property laws.
                            </p>
                            <p className="mt-2">
                                <strong>Your Content:</strong> You retain ownership of files you upload. By using the Service, you grant us
                                a limited license to process files solely to provide the Service. We do not claim ownership of your content.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Service Level Agreement (SLA)</h2>
                            <p>
                                We aim to provide the following uptime guarantees:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li><strong>Free Tier:</strong> No SLA (best effort)</li>
                                <li><strong>Pro Tier:</strong> 99.9% monthly uptime</li>
                                <li><strong>Enterprise Tier:</strong> 99.99% monthly uptime</li>
                            </ul>
                            <p className="mt-4">
                                Downtime credits are calculated as a percentage of your monthly fee and will be applied to your next invoice.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Limitation of Liability</h2>
                            <p>
                                TO THE MAXIMUM EXTENT PERMITTED BY LAW, METAGO API SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                                CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY,
                                OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
                            </p>
                            <p className="mt-4">
                                Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Disclaimer of Warranties</h2>
                            <p>
                                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED,
                                INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Termination</h2>
                            <p>
                                We may terminate or suspend your account immediately, without prior notice, for any breach of these Terms.
                                You may cancel your account at any time through the dashboard or by contacting support.
                            </p>
                            <p className="mt-2">
                                Upon termination, your right to use the Service will immediately cease. All provisions that by their nature
                                should survive termination shall survive.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Governing Law</h2>
                            <p>
                                These Terms shall be governed by the laws of the State of California, United States, without regard to its
                                conflict of law provisions. Any disputes shall be resolved in the courts of San Francisco County, California.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Changes to Terms</h2>
                            <p>
                                We reserve the right to modify these Terms at any time. We will provide notice of material changes via
                                email or through the Service. Continued use after changes constitutes acceptance of new Terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">14. Contact Information</h2>
                            <p>
                                Questions about these Terms should be sent to:
                            </p>
                            <div className="mt-4 p-4 bg-slate-100 rounded-lg">
                                <p><strong>Email:</strong> legal@metago-api.com</p>
                                <p className="mt-1"><strong>Address:</strong> MetaGo API, 123 Tech Street, San Francisco, CA 94102</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
