'use client'

import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@/lib/sanity.client'
import { FaBook, FaArrowLeft, FaClock, FaStar } from 'react-icons/fa'

interface Milestone {
    _key: string
    year: string
    description: string
}

interface FoundingStorySectionProps {
    section: {
        title: string
        subtitle?: string
        heroImage?: any
        foundingYear: string
        founderName?: string
        storyContent: any[]
        milestones?: Milestone[]
        legacyContent?: any[]
    }
}

export default function FoundingStorySection({ section }: FoundingStorySectionProps) {
    if (!section) return null

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 overflow-hidden">
                {section.heroImage && (
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={urlFor(section.heroImage).width(1920).height(1080).url()}
                            alt={section.title}
                            fill
                            className="object-cover opacity-20"
                        />
                    </div>
                )}

                <div className="relative z-10 text-center text-white px-6 max-w-5xl">
                    {/* Icon */}
                    <div className="flex justify-center mb-8">
                        <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <FaBook className="w-12 h-12" />
                        </div>
                    </div>

                    <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                        {section.title}
                    </h1>
                    {section.subtitle && (
                        <p className="text-xl lg:text-2xl font-light opacity-90">
                            {section.subtitle}
                        </p>
                    )}
                </div>
            </section>

            {/* Breadcrumb */}
            <section className="bg-white py-4 border-b">
                <div className="max-w-6xl mx-auto px-6">
                    <nav className="flex items-center space-x-2 text-sm text-gray-600">
                        <a href="/" className="hover:text-purple-600">Home</a>
                        <span>/</span>
                        <a href="/about" className="hover:text-purple-600">About Us</a>
                        <span>/</span>
                        <span className="text-purple-600 font-medium">{section.title}</span>
                    </nav>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
                <div className="max-w-6xl mx-auto px-6">

                    {/* Founding Year Banner */}
                    <div className="text-center mb-16">
                        <div className="inline-block bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full text-2xl font-bold mb-4">
                            Est. {section.foundingYear}
                        </div>
                        {section.founderName && (
                            <p className="text-xl text-gray-700">
                                Founded by <strong>{section.founderName}</strong>
                            </p>
                        )}
                    </div>

                    {/* Story Content */}
                    <div className="mb-16">
                        <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-16">
                            <div className="prose prose-xl prose-orange max-w-none">
                                <PortableText
                                    value={section.storyContent}
                                    components={{
                                        block: {
                                            h1: ({ children }) => (
                                                <h1 className="text-4xl font-bold text-orange-700 mb-8 text-center">
                                                    {children}
                                                </h1>
                                            ),
                                            h2: ({ children }) => (
                                                <h2 className="text-3xl font-bold text-orange-700 mb-6 mt-12">
                                                    {children}
                                                </h2>
                                            ),
                                            h3: ({ children }) => (
                                                <h3 className="text-2xl font-semibold text-orange-600 mb-4 mt-8">
                                                    {children}
                                                </h3>
                                            ),
                                            normal: ({ children }) => (
                                                <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                                                    {children}
                                                </p>
                                            )
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Key Milestones */}
                    {section.milestones && section.milestones.length > 0 && (
                        <div className="mb-16">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl font-bold text-orange-700 mb-4">
                                    Key Founding Milestones
                                </h2>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {section.milestones.map((milestone, index) => (
                                    <div key={milestone._key} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                                        <div className="flex items-center mb-4">
                                            <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mr-4">
                                                <FaClock className="w-6 h-6 text-white" />
                                            </div>
                                            <div className="text-2xl font-bold text-orange-600">
                                                {milestone.year}
                                            </div>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed">
                                            {milestone.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Legacy Content */}
                    {section.legacyContent && section.legacyContent.length > 0 && (
                        <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-3xl p-8 lg:p-16 shadow-lg">
                            <div className="text-center mb-8">
                                <FaStar className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                                <h2 className="text-4xl font-bold text-orange-700">
                                    Our Legacy
                                </h2>
                            </div>

                            <div className="prose prose-xl prose-orange max-w-none">
                                <PortableText value={section.legacyContent} />
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Back Navigation */}
            <section className="py-8 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <a
                        href="/about"
                        className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-800 transition-colors group"
                    >
                        <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to About Us
                    </a>
                </div>
            </section>
        </>
    )
}
