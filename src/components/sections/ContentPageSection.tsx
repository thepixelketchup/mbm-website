'use client'

import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@/lib/sanity.client'
import {
    FaUsers,
    FaTrophy,
    FaBook,
    FaEye,
    FaArrowLeft
} from 'react-icons/fa'

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

    const getPageTypeConfig = (pageType: string) => {
        const configs = {
            leadership: {
                bgGradient: 'from-purple-600 via-blue-600 to-indigo-600',
                icon: <FaUsers className="w-12 h-12" />
            },
            milestones: {
                bgGradient: 'from-green-600 via-emerald-600 to-teal-600',
                icon: <FaTrophy className="w-12 h-12" />
            },
            founding: {
                bgGradient: 'from-amber-600 via-orange-600 to-red-600',
                icon: <FaBook className="w-12 h-12" />
            },
            mission: {
                bgGradient: 'from-pink-600 via-purple-600 to-indigo-600',
                icon: <FaEye className="w-12 h-12" />
            }
        }
        return configs[pageType as keyof typeof configs] || configs.leadership
    }

    const config = getPageTypeConfig(section.pageType)

    return (
        <>
            {/* Hero Section */}
            <section className={`relative h-[60vh] flex items-center justify-center bg-gradient-to-br ${config.bgGradient} overflow-hidden`}>
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
                            {config.icon}
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
                        <a href="/about-us" className="hover:text-purple-600">About Us</a>
                        <span>/</span>
                        <span className="text-purple-600 font-medium">{section.title}</span>
                    </nav>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                        <div className="p-8 lg:p-16">
                            <div className="prose prose-xl prose-purple max-w-none">
                                <PortableText
                                    value={section.content}
                                    components={{
                                        types: {
                                            image: ({ value }) => (
                                                <div className="my-12 rounded-2xl overflow-hidden shadow-xl">
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
                                            h1: ({ children }) => (
                                                <h1 className="text-4xl font-bold text-purple-700 mb-8 text-center">
                                                    {children}
                                                </h1>
                                            ),
                                            h2: ({ children }) => (
                                                <h2 className="text-3xl font-bold text-purple-700 mb-6 mt-12">
                                                    {children}
                                                </h2>
                                            ),
                                            h3: ({ children }) => (
                                                <h3 className="text-2xl font-semibold text-purple-600 mb-4 mt-8">
                                                    {children}
                                                </h3>
                                            ),
                                            normal: ({ children }) => (
                                                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                                                    {children}
                                                </p>
                                            )
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Back Navigation */}
            <section className="py-8 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <a
                        href="/about-us"
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
