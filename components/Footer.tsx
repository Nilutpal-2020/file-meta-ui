import Link from 'next/link';
import { Github, Twitter, Terminal } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white text-gray-600 border-t border-gray-200">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    {/* Brand */}
                    <div className="col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                                <Terminal size={18} />
                            </div>
                            <span className="text-xl font-bold text-gray-900">
                                MetaGo<span className="text-blue-600">API</span>
                            </span>
                        </div>
                        <p className="text-sm text-gray-500">
                            High-performance file metadata extraction API built with Go.
                        </p>
                    </div>


                    <div className="flex gap-6">
                        <a href="https://github.com/Nilutpal-2020/file-meta-api" className="text-gray-400 hover:text-blue-600 transition-colors">
                            <Github size={20} />
                        </a>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} MetaGo API.
                    </p>
                </div>
            </div>
        </footer>
    );
}
