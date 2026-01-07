'use client';

import React, { useState, useCallback } from 'react';
import { Upload, FileCheck, Loader2, AlertCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CodeBlock from './CodeBlock';
import { validateFile, formatFileSize } from '@/lib/utils';
import { uploadFileForMetadata } from '@/lib/api';

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export default function HeroUploadDemo() {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const [dragActive, setDragActive] = useState(false);

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
    };

    const handleSubmit = async () => {
        if (!file) return;
        setLoading(true);
        setError(null);

        try {
            const analysisResult = await uploadFileForMetadata(file);
            setResult(analysisResult);
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to analyze file. Please try again.';
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    const handleReset = () => {
        setFile(null);
        setResult(null);
        setError(null);
    };

    return (
        <div className="relative isolate overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 blur-3xl opacity-30" aria-hidden="true">
                    <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-blue-500 to-cyan-400 opacity-30" />
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        File metadata in <span className="text-blue-400">milliseconds</span>
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-slate-300">
                        Upload any file to extract MIME type, SHA-256 checksum, and rich metadata instantly.
                    </p>
                </div>

                {/* Upload Area */}
                <div className="mx-auto mt-16 max-w-2xl">
                    <div
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        className={`relative rounded-2xl border-2 border-dashed p-12 text-center transition-all ${dragActive
                            ? 'border-blue-400 bg-blue-900/30'
                            : error
                                ? 'border-red-500 bg-red-900/20'
                                : 'border-slate-600 bg-slate-800/50'
                            } backdrop-blur hover:border-blue-500`}
                    >
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            aria-label="File upload"
                        />
                        {!file ? (
                            <div className="flex flex-col items-center">
                                <Upload className={`h-12 w-12 mb-4 ${error ? 'text-red-400' : 'text-slate-400'}`} />
                                <p className="text-slate-300 font-medium">
                                    {dragActive ? 'Drop your file here' : 'Drop a file here or click to browse'}
                                </p>
                                <p className="text-sm text-slate-500 mt-2">
                                    PDF, DOCX, Images, or any file up to {formatFileSize(MAX_FILE_SIZE)}
                                </p>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center">
                                <FileCheck className="h-12 w-12 text-green-400 mb-4" />
                                <p className="text-white font-medium">{file.name}</p>
                                <p className="text-sm text-slate-400 mt-1">
                                    {formatFileSize(file.size)}
                                </p>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleReset();
                                    }}
                                    className="mt-4 text-sm text-slate-400 hover:text-white flex items-center gap-1"
                                >
                                    <X className="h-4 w-4" />
                                    Choose different file
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Error Message */}
                    <AnimatePresence>
                        {error && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="mt-4 p-4 bg-red-900/50 border border-red-500 rounded-lg flex items-start gap-3"
                            >
                                <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                                <p className="text-red-200 text-sm">{error}</p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {file && !error && (
                        <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            onClick={handleSubmit}
                            disabled={loading}
                            className="mt-6 w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg hover:bg-blue-500 disabled:bg-slate-600 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="h-5 w-5 animate-spin" />
                                    Analyzing...
                                </>
                            ) : (
                                'Extract Metadata'
                            )}
                        </motion.button>
                    )}

                    {result && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-8"
                        >
                            <CodeBlock data={result} />
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}