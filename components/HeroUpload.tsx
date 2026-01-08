'use client';

import React, { useState, useCallback } from 'react';
import { Upload, FileCheck, Loader2, AlertCircle, X, ArrowRight, FileType, Hash, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MetadataDisplay from './MetadataDisplay';
import { validateFile, formatFileSize } from '@/lib/utils';
import { uploadFileForMetadata } from '@/lib/api';

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export default function HeroUploadDemo() {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const [dragActive, setDragActive] = useState(false);

    const analyzeFile = async (selectedFile: File) => {
        setLoading(true);
        setError(null);

        try {
            // Simulate a small delay for better UX (instant transition can be jarring)
            await new Promise(resolve => setTimeout(resolve, 600));
            const analysisResult = await uploadFileForMetadata(selectedFile);
            setResult(analysisResult);
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to analyze file. Please try again.';
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    const processFile = (selectedFile: File) => {
        setError(null);
        setResult(null);

        // Validate file
        const validation = validateFile(selectedFile, { maxSize: MAX_FILE_SIZE });
        if (!validation.valid) {
            setError(validation.error || 'Invalid file');
            setFile(null);
            return;
        }

        setFile(selectedFile);
        analyzeFile(selectedFile);
    };

    const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            processFile(e.target.files[0]);
        }
    }, []);

    const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            processFile(e.dataTransfer.files[0]);
        }
    }, []);

    const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragActive(true);
    }, []);

    const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragActive(false);
    }, []);

    const handleReset = () => {
        setFile(null);
        setResult(null);
        setError(null);
    };

    const hasResult = !!result || loading;

    return (
        <div className="relative isolate overflow-hidden bg-white min-h-[calc(100vh-4rem)] flex flex-col justify-center">
            {/* Enhanced Background decoration */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute left-1/4 top-0 -translate-x-1/2 blur-3xl opacity-20" aria-hidden="true">
                    <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-blue-200 to-cyan-200" />
                </div>
                <div className="absolute right-1/4 bottom-0 translate-x-1/2 blur-3xl opacity-20" aria-hidden="true">
                    <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tl from-purple-200 to-blue-200" />
                </div>
            </div>

            <div className="mx-auto w-full max-w-[1600px] px-6 py-12 lg:px-8">
                {/* Header Section - Transitions out when result is shown */}
                <AnimatePresence>
                    {!hasResult && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0, height: 'auto' }}
                            exit={{ opacity: 0, y: -20, height: 0, overflow: 'hidden' }}
                            className="mb-12 text-center"
                        >
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
                                File Metadata Extractor
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mt-2">
                                    with AI Detection
                                </span>
                            </h1>
                            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                                Drop any file to instantly extract MIME types, SHA checkums, and identify AI-generated images.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Main Content Area */}
                <motion.div
                    layout
                    transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                    className={`mx-auto ${hasResult ? 'grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-7xl' : 'max-w-2xl'}`}
                >
                    {/* LEFT SIDE - Upload Area */}
                    <motion.div layout className="w-full">
                        <div className={`bg-white/80 backdrop-blur-sm rounded-2xl border transition-all duration-300 ${hasResult ? 'lg:sticky lg:top-24 border-gray-200 shadow-sm' : 'border-white shadow-xl ring-1 ring-gray-900/5 p-2'}`}>

                            {/* Upload Drop Zone */}
                            <div className="flex flex-col">
                                <div
                                    onDrop={handleDrop}
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    className={`relative rounded-xl border-2 border-dashed transition-all duration-300 ${dragActive
                                        ? 'border-blue-500 bg-blue-50/50 scale-[1.01]'
                                        : error
                                            ? 'border-red-300 bg-red-50/50'
                                            : hasResult
                                                ? 'border-gray-200 bg-gray-50/50 min-h-[200px]'
                                                : 'border-gray-300 bg-gray-50/50 hover:border-blue-400 hover:bg-blue-50/30 min-h-[320px]'
                                        } flex items-center justify-center group overflow-hidden`}
                                >
                                    <input
                                        type="file"
                                        onChange={handleFileChange}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                        aria-label="File upload"
                                    />
                                    {!file ? (
                                        <motion.div
                                            initial={{ scale: 0.95 }}
                                            animate={{ scale: 1 }}
                                            className="flex flex-col items-center justify-center p-8 text-center"
                                        >
                                            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${error
                                                ? 'bg-red-100 text-red-600'
                                                : 'bg-white shadow-lg ring-1 ring-gray-900/5 text-blue-600 group-hover:scale-110 group-hover:text-blue-700'
                                                }`}>
                                                <Upload className="h-10 w-10" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                                {dragActive ? 'Drop to upload' : 'Upload your file'}
                                            </h3>
                                            <p className="text-gray-500 mb-6 max-w-xs mx-auto text-sm leading-relaxed">
                                                Drag and drop your file here, or click to browse. We support images, docs, and more.
                                            </p>

                                            <div className="flex flex-wrap justify-center gap-2">
                                                <span className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-600 text-xs font-medium border border-gray-200">PDF</span>
                                                <span className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-600 text-xs font-medium border border-gray-200">JPG</span>
                                                <span className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-600 text-xs font-medium border border-gray-200">PNG</span>
                                                <span className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-600 text-xs font-medium border border-gray-200">Max 10MB</span>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            initial={{ scale: 0.9, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            className="flex flex-col items-center p-8 w-full max-w-sm pointer-events-none relative"
                                        >
                                            {/* Z-index 20 container for interactive elements, pointer-events-auto to re-enable clicks */}
                                            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4 shadow-lg shadow-green-200">
                                                <FileCheck className="h-8 w-8 text-white" />
                                            </div>
                                            <p className="text-lg text-gray-900 font-bold mb-1 text-center truncate w-full px-4">
                                                {file.name}
                                            </p>
                                            <p className="text-sm text-gray-500 mb-6">
                                                {formatFileSize(file.size)}
                                            </p>
                                            <div className="flex gap-3 w-full justify-center relative z-20 pointer-events-auto">
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleReset();
                                                    }}
                                                    className="px-6 py-2.5 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 border border-gray-300 rounded-lg transition-colors shadow-sm hover:shadow"
                                                >
                                                    Upload Different File
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </div>

                                {/* Error Message */}
                                <AnimatePresence>
                                    {error && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="mt-4 p-4 bg-red-50 border border-red-100 rounded-xl flex items-start gap-3">
                                                <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                                                <div className="flex-1">
                                                    <h4 className="text-sm font-semibold text-red-900">Upload failed</h4>
                                                    <p className="text-sm text-red-700 mt-1">{error}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Feature Pills (Only show on centered view) */}
                                {!hasResult && !file && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                        className="grid grid-cols-3 gap-4 mt-6 px-2"
                                    >
                                        {[
                                            { icon: FileType, label: "MIME Type", color: "bg-orange-50 text-orange-600 border-orange-100" },
                                            { icon: Hash, label: "Checksums", color: "bg-purple-50 text-purple-600 border-purple-100" },
                                            { icon: ImageIcon, label: "AI Check", color: "bg-blue-50 text-blue-600 border-blue-100" },
                                        ].map((item, i) => (
                                            <div key={i} className={`flex flex-col items-center justify-center p-3 rounded-xl border ${item.color} bg-opacity-50`}>
                                                <item.icon className="h-5 w-5 mb-1.5 opacity-80" />
                                                <span className="text-xs font-semibold">{item.label}</span>
                                            </div>
                                        ))}
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE - Results Display (Only rendering when needed) */}
                    <AnimatePresence>
                        {hasResult && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="flex flex-col h-full w-full"
                            >
                                <div className="bg-white rounded-2xl border border-gray-200 shadow-xl ring-1 ring-gray-900/5 overflow-hidden">
                                    <div className="p-4 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="p-1.5 rounded-lg bg-white border border-gray-200 shadow-sm">
                                                <FileCheck className="h-4 w-4 text-blue-600" />
                                            </div>
                                            <h2 className="text-sm font-semibold text-gray-900">Metadata Analysis</h2>
                                        </div>
                                        {loading && (
                                            <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-blue-50 border border-blue-100">
                                                <Loader2 className="h-3 w-3 text-blue-600 animate-spin" />
                                                <span className="text-xs font-medium text-blue-600">Processing...</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Results Area */}
                                    <div className="p-6 min-h-[500px] max-h-[800px] overflow-auto custom-scrollbar bg-white">
                                        {loading && !result && (
                                            <div className="flex flex-col items-center justify-center h-64 space-y-4">
                                                <div className="relative">
                                                    <div className="w-16 h-16 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin"></div>
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <FileCheck className="h-6 w-6 text-blue-600/40" />
                                                    </div>
                                                </div>
                                                <div className="text-center">
                                                    <p className="text-gray-900 font-medium">Analyzing file structure...</p>
                                                    <p className="text-gray-500 text-sm">Extracting metadata and verifying integrity</p>
                                                </div>
                                            </div>
                                        )}

                                        {result && <MetadataDisplay data={result} />}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Custom Scrollbar Styles */}
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(209, 213, 219, 0.5);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(156, 163, 175, 0.8);
                }
            `}</style>
        </div>
    );
}