import Link from 'next/link';
import { Terminal } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* Logo Area */}
                <Link href="/" className="flex items-center gap-2 font-bold text-gray-900">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                        <Terminal size={18} />
                    </div>
                    <span className="text-xl">MetaGo<span className="text-blue-600">API</span></span>
                </Link>

                {/* Desktop Links */}
                {/* <div className="hidden md:flex items-center gap-8">
                    <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                        Features
                    </Link>
                </div> */}

                {/* CTA Buttons */}
                {/* <div className="flex items-center gap-4">
                    <a href="https://github.com/yourusername/file-meta-ui" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 transition-colors">
                        View on GitHub
                    </a>
                </div> */}
            </div>
        </nav>
    );
}