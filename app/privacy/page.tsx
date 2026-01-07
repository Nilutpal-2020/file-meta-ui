import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'MetaGo API privacy policy outlining how we collect, use, and protect your data.',
};

export default function PrivacyPage() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Privacy Policy</h1>
                    <p className="mt-4 text-sm text-slate-500">Last updated: January 8, 2026</p>

                    <div className="mt-10 space-y-8 text-base leading-7 text-slate-700">
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Introduction</h2>
                            <p>
                                At MetaGo API, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose,
                                and safeguard your information when you use our file metadata extraction API service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Information We Collect</h2>
                            <h3 className="text-lg font-semibold text-slate-900 mt-4 mb-2">Account Information</h3>
                            <p>
                                When you create an account, we collect your name, email address, and payment information (processed securely
                                through our payment provider). We also generate an API key for your account.
                            </p>

                            <h3 className="text-lg font-semibold text-slate-900 mt-4 mb-2">API Usage Data</h3>
                            <p>
                                We collect metadata about your API usage including request timestamps, endpoints accessed, response codes,
                                and file metadata (filename, size, MIME type, checksum). We do <strong>not</strong> store the actual file
                                contents you process through our API.
                            </p>

                            <h3 className="text-lg font-semibold text-slate-900 mt-4 mb-2">Technical Information</h3>
                            <p>
                                We automatically collect certain information about your device, including IP address, browser type, operating
                                system, and referrer URL when you access our website or API.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Use Your Information</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>To provide, maintain, and improve our services</li>
                                <li>To process your transactions and manage your account</li>
                                <li>To send administrative information, such as updates and security alerts</li>
                                <li>To monitor and analyze usage patterns and trends</li>
                                <li>To detect, prevent, and address technical issues or fraudulent activity</li>
                                <li>To comply with legal obligations</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Retention</h2>
                            <p>
                                <strong>File Content:</strong> We process files in-memory only. No file contents are ever written to disk
                                or stored in any database.
                            </p>
                            <p className="mt-2">
                                <strong>Metadata:</strong> API request logs (including file metadata) are retained for 90 days for
                                debugging and analytics purposes.
                            </p>
                            <p className="mt-2">
                                <strong>Account Data:</strong> Your account information is retained until you request account deletion
                                or 2 years after account inactivity.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Security</h2>
                            <p>
                                We implement industry-standard security measures including:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>TLS encryption for all data in transit</li>
                                <li>AES-256 encryption for data at rest</li>
                                <li>Regular security audits and penetration testing</li>
                                <li>SOC 2 Type II compliance</li>
                                <li>Multi-factor authentication for account access</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Third-Party Services</h2>
                            <p>
                                We use the following third-party services that may process your data:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Stripe (payment processing)</li>
                                <li>Google Analytics (website analytics)</li>
                                <li>Amazon Web Services (infrastructure hosting)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights</h2>
                            <p>
                                Depending on your location, you may have the following rights:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
                                <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
                                <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                                <li><strong>Objection:</strong> Object to processing of your personal data</li>
                            </ul>
                            <p className="mt-4">
                                To exercise these rights, contact us at privacy@metago-api.com.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">GDPR Compliance</h2>
                            <p>
                                For users in the European Economic Area (EEA), we comply with the General Data Protection Regulation (GDPR).
                                Our legal basis for processing your data is:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Performance of a contract (providing our services to you)</li>
                                <li>Legitimate interests (improving our services, preventing fraud)</li>
                                <li>Consent (where explicitly provided)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Children's Privacy</h2>
                            <p>
                                Our services are not intended for users under 13 years of age. We do not knowingly collect personal
                                information from children under 13.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to This Policy</h2>
                            <p>
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
                                policy on this page and updating the "Last updated" date. Continued use of our services after changes
                                constitutes acceptance of the updated policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
                            <p>
                                If you have questions about this Privacy Policy, please contact us at:
                            </p>
                            <div className="mt-4 p-4 bg-slate-100 rounded-lg">
                                <p><strong>Email:</strong> privacy@metago-api.com</p>
                                <p className="mt-1"><strong>Address:</strong> 123 Tech Street, San Francisco, CA 94102</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
