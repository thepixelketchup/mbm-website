'use client'

import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity.client'

interface EducationNetworkSectionProps {
    section: {
        sectionTitle: string
        sectionSubtitle?: string
        image: any
        description: string
        readMoreUrl?: string
    }
}

export default function EducationNetworkSection({ section }: EducationNetworkSectionProps) {
    if (!section) return null

    return (
        <section className="py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-gradient-to-br from-pink-100/60 via-purple-100/60 to-orange-100/60 rounded-3xl p-8 lg:p-16 relative overflow-hidden">

                    {/* Decorative Elements */}
                    <div className="absolute top-8 right-8 opacity-20">
                        <div className="w-24 h-24 border-2 border-pink-300 rounded-full"></div>
                    </div>
                    <div className="absolute bottom-8 left-8 opacity-20">
                        <div className="w-16 h-16 bg-purple-200 rounded-lg transform rotate-12"></div>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                        {/* Left Side - Image with Play Button */}
                        <div className="relative">
                            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                                {section.image && (
                                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                                        <Image
                                            src={urlFor(section.image).width(600).height(400).url()}
                                            alt={section.sectionTitle}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right Side - Text Content */}
                        <div className="space-y-6">
                            {/* Title */}
                            <div>
                                <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                    {section.sectionTitle.split(' ')[0]}
                  </span>
                                    <br />
                                    <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                    {section.sectionTitle.split(' ').slice(1).join(' ')}
                  </span>
                                </h2>

                                {section.sectionSubtitle && (
                                    <p className="text-xl text-gray-600 font-light">
                                        {section.sectionSubtitle}
                                    </p>
                                )}
                            </div>

                            {/* Description */}
                            <div className="text-gray-700 leading-relaxed text-lg">
                                <p>{section.description}</p>
                            </div>

                            {/* Read More Button */}
                            {section.readMoreUrl && (
                                <div className="pt-4">
                                    <Link
                                        href={section.readMoreUrl}
                                        className="inline-flex items-center gap-2 text-purple-600 font-semibold text-lg hover:text-purple-800 transition-colors group"
                                    >
                                        Read More
                                        <svg
                                            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
