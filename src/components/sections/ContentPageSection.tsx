'use client'

import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@/lib/sanity.client'

interface ContentPageSectionProps {
    section: {
        pageType: string
        title: string
        subtitle?: string
        heroImage?: any
        content: any[]
    }
}

export default function ContentPageSection({ section }: ContentPageSectionProps) {
    if (!section) return null

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 overflow-hidden">
                {section.heroImage && (
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={urlFor(section.heroImage).width(1920).height(1080).url()}
                            alt={section.title}
                            fill
                            className="object-cover opacity-30"
                        />
                    </div>
                )}

                <div className="relative z-10 text-center text-white px-6 max-w-4xl">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                        {section.title}
                    </h1>
                    {section.subtitle && (
                        <p className="text-xl lg:text-2xl font-light">
                            {section.subtitle}
                        </p>
                    )}
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 bg-gradient-to-br from-gray-50 to-purple-50">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="p-8 lg:p-12">
                            <div className="prose prose-lg prose-purple max-w-none">
                                <PortableText
                                    value={section.content}
                                    components={{
                                        types: {
                                            image: ({ value }) => (
                                                <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
                                                    <Image
                                                        src={urlFor(value).width(800).height(500).url()}
                                                        alt={value.alt || ''}
                                                        width={800}
                                                        height={500}
                                                        className="w-full h-auto"
                                                    />
                                                </div>
                                            )
                                        },
                                        block: {
                                            h2: ({ children }) => (
                                                <h2 className="text-3xl font-bold text-purple-700 mb-6 mt-12">
                                                    {children}
                                                </h2>
                                            ),
                                            h3: ({ children }) => (
                                                <h3 className="text-2xl font-semibold text-purple-600 mb-4 mt-8">
                                                    {children}
                                                </h3>
                                            )
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
