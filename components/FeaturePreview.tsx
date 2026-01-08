'use client';

import { Shield, Camera, Image as ImageIcon } from 'lucide-react';

const jsonResponse = {
    "filename": "sample_image.png",
    "size_bytes": 252048,
    "mime_type": "image/png",
    "checksum_sha256": "cd72003f0774509a37e57706901c4930a5e5c84d4790119077a97379f79020e1",
    "extension": "png",
    "image": {
        "width": 2880,
        "height": 1124,
        "color_model": "*color.modelFunc",
        "ai_detection": {
            "likely_ai_generated": true,
            "confidence": "high",
            "indicators": [
                "no_camera_metadata",
                "no_camera_technical_data",
                "no_gps_data",
                "no_exif_data"
            ],
            "reasons": [
                "No camera make/model found in EXIF data",
                "No camera technical data (focal length, ISO, flash) found",
                "JPEG image with no EXIF data - typical of AI-generated images"
            ]
        },
        "screenshot_detection": {
            "likely_screenshot": false,
            "confidence": "low"
        }
    }
};

export default function FeaturePreview() {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-blue-600">Advanced Analysis</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                AI & Screenshot Detection
                            </p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Don't just detect file types. Understand the content. Our API automatically analyzes images to detect signs of AI generation and screenshot patterns.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold text-gray-900">
                                        <Shield className="absolute left-1 top-1 h-5 w-5 text-blue-600" aria-hidden="true" />
                                        AI Generation Detection.
                                    </dt>{' '}
                                    <dd className="inline">
                                        Identifies signs of AI-generated content by analyzing EXIF data presence, noise patterns, and compression artifacts.
                                    </dd>
                                </div>
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold text-gray-900">
                                        <Camera className="absolute left-1 top-1 h-5 w-5 text-blue-600" aria-hidden="true" />
                                        Screenshot Classification.
                                    </dt>{' '}
                                    <dd className="inline">
                                        Distinguishes valid photography from device screenshots using resolution heuristics and metadata analysis.
                                    </dd>
                                </div>
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold text-gray-900">
                                        <ImageIcon className="absolute left-1 top-1 h-5 w-5 text-blue-600" aria-hidden="true" />
                                        Rich Metadata.
                                    </dt>{' '}
                                    <dd className="inline">
                                        Extract granular details like dimensions, color models, MIME types, and secure SHA-256 checksums.
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="rounded-xl bg-gray-50 border border-gray-200 shadow-xl overflow-hidden ring-1 ring-gray-900/5">
                            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200 bg-white">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                </div>
                                {/* <span className="text-xs font-semibold text-gray-500 ml-2">analysis_response.json</span> */}
                                {/* <div className="ml-auto flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-50 border border-blue-100">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                                    <span className="text-[10px] font-medium text-blue-600">LIVE</span>
                                </div> */}
                            </div>
                            <pre className="p-6 text-xs sm:text-sm leading-relaxed overflow-x-auto text-gray-700 font-mono">
                                <code>{JSON.stringify(jsonResponse, null, 2)}</code>
                            </pre>
                        </div>
                        {/* Floating Badge */}
                        {/* <div className="absolute -bottom-6 -right-6 rounded-lg bg-blue-600 p-4 shadow-lg ring-1 ring-white/10 sm:bottom-8 sm:right-8">
                            <div className="flex items-center gap-3">
                                <Shield className="h-8 w-8 text-white" />
                                <div>
                                    <p className="text-xs font-medium text-blue-100">AI Confidence</p>
                                    <p className="text-lg font-bold text-white">High (98%)</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
