'use client';

import type { Metadata } from 'next';
import { useState } from 'react';
import { Mail, MessageSquare, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Contact form:', formData);
    };

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Get in touch</h1>
                    <p className="mt-2 text-lg leading-8 text-slate-600">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond within 24 hours.
                    </p>
                </div>

                <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-16 sm:gap-y-20 lg:grid-cols-2">
                    {/* Contact Information */}
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Contact Information</h2>
                        <p className="mt-4 text-base leading-7 text-slate-600">
                            Prefer to reach out directly? Here are our contact details.
                        </p>
                        <dl className="mt-8 space-y-6">
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Email</span>
                                    <Mail className="h-6 w-6 text-blue-600" aria-hidden="true" />
                                </dt>
                                <dd>
                                    <span className="block font-semibold text-slate-900">Email</span>
                                    <a href="mailto:support@metago-api.com" className="text-blue-600 hover:text-blue-500">
                                        support@metago-api.com
                                    </a>
                                </dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Phone</span>
                                    <Phone className="h-6 w-6 text-blue-600" aria-hidden="true" />
                                </dt>
                                <dd>
                                    <span className="block font-semibold text-slate-900">Phone</span>
                                    <a href="tel:+1-555-123-4567" className="text-blue-600 hover:text-blue-500">
                                        +1 (555) 123-4567
                                    </a>
                                </dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Office</span>
                                    <MapPin className="h-6 w-6 text-blue-600" aria-hidden="true" />
                                </dt>
                                <dd>
                                    <span className="block font-semibold text-slate-900">Office</span>
                                    <span className="text-slate-600">
                                        123 Tech Street
                                        <br />
                                        San Francisco, CA 94102
                                    </span>
                                </dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Response Time</span>
                                    <MessageSquare className="h-6 w-6 text-blue-600" aria-hidden="true" />
                                </dt>
                                <dd>
                                    <span className="block font-semibold text-slate-900">Response Time</span>
                                    <span className="text-slate-600">Within 24 hours (weekdays)</span>
                                </dd>
                            </div>
                        </dl>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold leading-6 text-slate-900">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-slate-900">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-semibold leading-6 text-slate-900">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                required
                                value={formData.subject}
                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                placeholder="How can we help?"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-slate-900">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                placeholder="Tell us more about your question or issue..."
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                            >
                                Send message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
