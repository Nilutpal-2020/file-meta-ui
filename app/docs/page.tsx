import type { Metadata } from 'next';
import { Terminal, Copy } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Documentation',
    description: 'Complete API documentation for MetaGo API. Learn how to integrate file metadata extraction into your application.',
    openGraph: {
        title: 'Documentation | MetaGo API',
        description: 'Complete API documentation for MetaGo API.',
    },
};

export default function DocsPage() {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

                {/* Sidebar */}
                <div className="hidden lg:block lg:col-span-1 space-y-8">
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-4">Getting Started</h3>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li className="text-blue-600 font-medium">Introduction</li>
                            <li className="hover:text-slate-900 cursor-pointer">Authentication</li>
                            <li className="hover:text-slate-900 cursor-pointer">Rate Limits</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-4">Endpoints</h3>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li className="hover:text-slate-900 cursor-pointer">POST /extract</li>
                            <li className="hover:text-slate-900 cursor-pointer">GET /health</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-3 space-y-12">

                    {/* Section: Intro */}
                    <section>
                        <h1 className="text-3xl font-bold text-slate-900 mb-4">Introduction</h1>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Welcome to the MetaGo API documentation. This API allows you to extract metadata, calculate checksums, and detect MIME types from any file using a high-performance Go backend.
                        </p>
                    </section>

                    {/* Section: Authentication */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900">Authentication</h2>
                        <p className="text-slate-600">
                            Authenticate your requests by including your API key in the <code className="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono text-slate-800">Authorization</code> header.
                        </p>

                        <div className="rounded-lg bg-slate-900 p-4 relative overflow-hidden">
                            <div className="flex justify-between items-center text-slate-400 text-xs mb-2">
                                <span>cURL Request</span>
                                <Copy size={14} className="cursor-pointer hover:text-white" />
                            </div>
                            <pre className="font-mono text-sm text-green-400 overflow-x-auto">
                                {`curl -X POST https://api.metago.com/v1/extract \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -F "file=@/path/to/document.pdf"`}
                            </pre>
                        </div>
                    </section>

                    {/* Section: Response Format */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900">Response Object</h2>
                        <p className="text-slate-600">
                            The API returns a JSON object containing the file analysis.
                        </p>
                        <div className="rounded-lg bg-slate-900 p-4">
                            <pre className="font-mono text-sm text-blue-300 overflow-x-auto">
                                {`{
  "filename": "document.pdf",
  "mime_type": "application/pdf",
  "checksum_sha256": "8d7f...",
  "size_bytes": 102400
}`}
                            </pre>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}