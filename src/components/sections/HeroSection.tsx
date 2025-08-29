'use client'

import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity.client'

interface HeroSectionAdvancedProps {
    section: {
        backgroundImage?: any
        title: string
        subtitle?: string
        ctaButton?: {
            text: string
            link: string
        }
        textPosition?: 'left' | 'center' | 'right'
    }
}

export default function HeroSectionAdvanced({ section }: HeroSectionAdvancedProps) {
    if (!section) return null

    return (
        <section className="relative w-full h-screen min-h-[700px] overflow-hidden">
            {/* Background with Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400">
                {section.backgroundImage && (
                    <div className="absolute inset-0 opacity-80">
                        <Image
                            src={urlFor(section.backgroundImage).width(1920).height(1080).url()}
                            alt={section.title}
                            fill
                            className="object-cover mix-blend-multiply"
                            priority
                            quality={90}
                        />
                    </div>
                )}
            </div>

            {/* Content Grid */}
            <div className="relative z-10 h-full grid lg:grid-cols-2 items-center px-8 lg:px-16">

                {/* Text Content */}
                <div className="space-y-8 max-w-2xl">
                    <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] drop-shadow-2xl">
                        {section.title}
                    </h1>

                    {section.subtitle && (
                        <p className="text-xl lg:text-2xl text-white/95 leading-relaxed drop-shadow-lg">
                            {section.subtitle}
                        </p>
                    )}

                    {section.ctaButton && (
                        <div className="pt-6">
                            <Link
                                href={section.ctaButton.link || '#'}
                                className="inline-flex items-center px-10 py-5 bg-white/95 backdrop-blur-sm text-gray-900 font-bold text-lg rounded-full hover:bg-white hover:scale-105 transform transition-all duration-300 shadow-2xl hover:shadow-3xl border-2 border-white/20"
                            >
                                {section.ctaButton.text}
                            </Link>
                        </div>
                    )}
                </div>

                {/* Visual Element */}
                <div className="hidden lg:flex justify-end items-center">
                    <div className="relative">
                        {/* You can add decorative elements, students image, or icons here */}
                        <div className="w-96 h-96 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                            <div className="w-80 h-80 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                <div className="text-white text-center">
                                    {/* Add your school logo or students image here */}
                                    <svg className="w-32 h-32 mx-auto mb-4 opacity-80" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                                    </svg>
                                    <p className="text-lg font-semibold">Excellence in Education</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Shapes */}
            <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-32 left-20 w-20 h-20 bg-white/10 rounded-full animate-pulse delay-300"></div>
        </section>
    )
}
