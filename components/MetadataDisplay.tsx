'use client';

import React, { useState } from 'react';
import { Check, Copy, FileText, Image as ImageIcon, Shield, Camera, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { copyToClipboard } from '@/lib/utils';
import { motion } from 'framer-motion';

interface MetadataDisplayProps {
    data: any;
}

export default function MetadataDisplay({ data }: MetadataDisplayProps) {
    const [copiedSection, setCopiedSection] = useState<string | null>(null);

    const handleCopy = async (text: string, section: string) => {
        const success = await copyToClipboard(text);
        if (success) {
            setCopiedSection(section);
            setTimeout(() => setCopiedSection(null), 2000);
        }
    };

    const renderCopyButton = (content: any, section: string) => (
        <button
            onClick={() => handleCopy(JSON.stringify(content, null, 2), section)}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
            aria-label={`Copy ${section} to clipboard`}
        >
            {copiedSection === section ? (
                <>
                    <Check className="h-3.5 w-3.5" />
                    Copied!
                </>
            ) : (
                <>
                    <Copy className="h-3.5 w-3.5" />
                    Copy
                </>
            )}
        </button>
    );

    // Extract sections from data
    const fileInfo = {
        filename: data.filename,
        size_bytes: data.size_bytes,
        mime_type: data.mime_type,
        checksum_sha256: data.checksum_sha256,
        extension: data.extension,
    };

    const imageData = data.image;
    const aiDetection = data.image?.ai_detection;
    const screenshotDetection = data.image?.screenshot_detection;

    return (
        <div className="space-y-6">
            {/* File Information */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="rounded-xl bg-white border border-gray-200 overflow-hidden shadow-sm"
            >
                <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-gray-900">File Information</span>
                    </div>
                    {renderCopyButton(fileInfo, 'file')}
                </div>
                <div className="p-6 space-y-3">
                    <InfoRow label="Filename" value={data.filename} mono />
                    <InfoRow label="Size" value={`${data.size_bytes?.toLocaleString()} bytes`} />
                    <InfoRow label="MIME Type" value={data.mime_type} mono />
                    <InfoRow label="Extension" value={data.extension} mono />
                    <InfoRow label="SHA-256 Checksum" value={data.checksum_sha256} mono breakAll />
                </div>
            </motion.div>

            {/* Image Metadata */}
            {imageData && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="rounded-xl bg-white border border-gray-200 overflow-hidden shadow-sm"
                >
                    <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200">
                        <div className="flex items-center gap-3">
                            <ImageIcon className="h-5 w-5 text-purple-600" />
                            <span className="text-sm font-semibold text-gray-900">Image Metadata</span>
                        </div>
                        {renderCopyButton(imageData, 'image')}
                    </div>
                    <div className="p-6 space-y-3">
                        <InfoRow label="Dimensions" value={`${imageData.width} × ${imageData.height} px`} />
                        <InfoRow label="Color Model" value={imageData.color_model} mono />
                    </div>
                </motion.div>
            )}

            {/* AI Detection - HIGHLIGHTED */}
            {aiDetection && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className={`rounded-xl border-2 overflow-hidden shadow-sm ${aiDetection.likely_ai_generated
                        ? 'bg-amber-50/50 border-amber-200'
                        : 'bg-emerald-50/50 border-emerald-200'
                        }`}
                >
                    <div className={`flex items-center justify-between px-4 py-3 border-b ${aiDetection.likely_ai_generated
                        ? 'bg-amber-50 border-amber-200'
                        : 'bg-emerald-50 border-emerald-200'
                        }`}>
                        <div className="flex items-center gap-3">
                            <Shield className={`h-5 w-5 ${aiDetection.likely_ai_generated ? 'text-amber-600' : 'text-emerald-600'
                                }`} />
                            <span className="text-sm font-semibold text-gray-900">AI Detection Analysis</span>
                            <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${aiDetection.likely_ai_generated
                                ? 'bg-amber-100 text-amber-800'
                                : 'bg-emerald-100 text-emerald-800'
                                }`}>
                                {aiDetection.confidence.toUpperCase()}
                            </span>
                        </div>
                        {renderCopyButton(aiDetection, 'ai')}
                    </div>
                    <div className="p-6 space-y-4">
                        <div className="flex items-start gap-3">
                            {aiDetection.likely_ai_generated ? (
                                <AlertTriangle className="h-6 w-6 text-amber-500 flex-shrink-0 mt-0.5" />
                            ) : (
                                <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                            )}
                            <div>
                                <p className={`text-base font-semibold ${aiDetection.likely_ai_generated ? 'text-amber-700' : 'text-emerald-700'
                                    }`}>
                                    {aiDetection.likely_ai_generated
                                        ? 'Likely AI-Generated Image'
                                        : 'Likely Authentic Image'}
                                </p>
                                <p className="text-sm text-gray-600 mt-1">
                                    Confidence: {aiDetection.confidence}
                                </p>
                            </div>
                        </div>

                        {aiDetection.indicators && aiDetection.indicators.length > 0 && (
                            <div className="mt-4">
                                <p className="text-sm font-semibold text-gray-700 mb-2">Detection Indicators:</p>
                                <div className="flex flex-wrap gap-2">
                                    {aiDetection.indicators.map((indicator: string, idx: number) => (
                                        <span
                                            key={idx}
                                            className={`px-3 py-1.5 rounded-lg text-xs font-medium ${aiDetection.likely_ai_generated
                                                ? 'bg-amber-100 text-amber-800 border border-amber-200'
                                                : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                                                }`}
                                        >
                                            {indicator.replace(/_/g, ' ')}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {aiDetection.reasons && aiDetection.reasons.length > 0 && (
                            <div className="mt-4">
                                <p className="text-sm font-semibold text-gray-700 mb-2">Analysis:</p>
                                <ul className="space-y-2">
                                    {aiDetection.reasons.map((reason: string, idx: number) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                            <Info className="h-4 w-4 text-gray-400 flex-shrink-0 mt-0.5" />
                                            {reason}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </motion.div>
            )}

            {/* Screenshot Detection */}
            {screenshotDetection && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="rounded-xl bg-white border border-gray-200 overflow-hidden shadow-sm"
                >
                    <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200">
                        <div className="flex items-center gap-3">
                            <Camera className="h-5 w-5 text-cyan-600" />
                            <span className="text-sm font-semibold text-gray-900">Screenshot Detection</span>
                        </div>
                        {renderCopyButton(screenshotDetection, 'screenshot')}
                    </div>
                    <div className="p-6 space-y-3">
                        <div className="flex items-center gap-3">
                            {screenshotDetection.likely_screenshot ? (
                                <CheckCircle className="h-5 w-5 text-cyan-600" />
                            ) : (
                                <AlertTriangle className="h-5 w-5 text-gray-400" />
                            )}
                            <div>
                                <p className="text-sm font-medium text-gray-900">
                                    {screenshotDetection.likely_screenshot
                                        ? 'Likely Screenshot'
                                        : 'Not a Screenshot'}
                                </p>
                                <p className="text-xs text-gray-500">
                                    Confidence: {screenshotDetection.confidence}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Raw JSON View */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="rounded-xl bg-white border border-gray-200 overflow-hidden shadow-sm"
            >
                <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                        <div className="flex gap-2">
                            <div className="h-3 w-3 rounded-full bg-red-400" />
                            <div className="h-3 w-3 rounded-full bg-yellow-400" />
                            <div className="h-3 w-3 rounded-full bg-green-400" />
                        </div>
                        <span className="text-sm font-semibold text-gray-900">Complete JSON Response</span>
                    </div>
                    {renderCopyButton(data, 'json')}
                </div>
                <pre className="p-6 overflow-x-auto text-sm text-gray-600 font-mono bg-gray-50/50">
                    <code>{JSON.stringify(data, null, 2)}</code>
                </pre>
            </motion.div>
        </div>
    );
}

// Helper component for info rows
function InfoRow({ label, value, mono = false, breakAll = false }: {
    label: string;
    value: string | undefined;
    mono?: boolean;
    breakAll?: boolean;
}) {
    if (!value) return null;

    return (
        <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
            <span className="text-sm font-medium text-gray-500 min-w-[140px]">{label}:</span>
            <span className={`text-sm text-gray-900 ${mono ? 'font-mono' : ''} ${breakAll ? 'break-all' : ''}`}>
                {value}
            </span>
        </div>
    );
}
