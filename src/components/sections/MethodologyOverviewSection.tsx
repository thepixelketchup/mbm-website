'use client'

import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@/lib/sanity.client'
import {
    FaChalkboardTeacher,
    FaLightbulb,
    FaClipboardCheck,
    FaHeart,
    FaArrowRight,
    FaGraduationCap,
    FaBook,
    FaBrain,
    FaUsers
} from 'react-icons/fa'
import Link from "next/link";

interface MethodologyCard {
    _key: string
    title: string
    description: string
    iconName?: string
    color?: string
    link: string
}

interface MethodologyOverviewSectionProps {
    section: {
        title: string
        subtitle?: string
        heroImage?: string
        introContent?: any[]
        methodologyCards: MethodologyCard[]
    }
}

export default function MethodologyOverviewSection({ section }: MethodologyOverviewSectionProps) {
    if (!section) return null

    const getIcon = (iconDescription?: string) => {
        // Simple mapping based on common words in the description
        const iconName = iconDescription?.toLowerCase() || ''

        if (iconName.includes('teacher') || iconName.includes('teaching')) {
            return <FaChalkboardTeacher className="w-12 h-12" />
        }
        if (iconName.includes('lightbulb') || iconName.includes('idea') || iconName.includes('philosophy')) {
            return <FaLightbulb className="w-12 h-12" />
        }
        if (iconName.includes('clipboard') || iconName.includes('assessment') || iconName.includes('check')) {
            return <FaClipboardCheck className="w-12 h-12" />
        }
        if (iconName.includes('heart') || iconName.includes('values') || iconName.includes('culture')) {
            return <FaHeart className="w-12 h-12" />
        }
        if (iconName.includes('book') || iconName.includes('learning')) {
            return <FaBook className="w-12 h-12" />
        }
        if (iconName.includes('brain') || iconName.includes('thinking')) {
            return <FaBrain className="w-12 h-12" />
        }
        if (iconName.includes('users') || iconName.includes('students')) {
            return <FaUsers className="w-12 h-12" />
        }

        // Default icon
        return <FaGraduationCap className="w-12 h-12" />
    }

    const getColorClasses = (color?: string) => {
        const colors = {
            blue: 'from-blue-500 to-blue-600',
            green: 'from-green-500 to-green-600',
            purple: 'from-purple-500 to-purple-600',
            orange: 'from-orange-500 to-orange-600'
        }
        return colors[color as keyof typeof colors] || 'from-indigo-500 to-indigo-600'
    }

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 overflow-hidden">
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

                <div className="relative z-10 text-center text-white px-6 max-w-6xl">
                    <div className="flex justify-center mb-8">
                        <div className="w-28 h-28 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <FaGraduationCap className="w-16 h-16" />
                        </div>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                        {section.title}
                    </h1>
                    {section.subtitle && (
                        <p className="text-2xl lg:text-3xl font-light opacity-90 mb-8">
                            {section.subtitle}
                        </p>
                    )}

                    <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-8 py-4">
                        <p className="text-xl font-semibold">
                            Building Tomorrow&apos;s Leaders Through Proven Methods
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            {section.introContent && section.introContent.length > 0 && (
                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="prose prose-xl prose-indigo max-w-none text-center">
                            <PortableText value={section.introContent} />
                        </div>
                    </div>
                </section>
            )}

            {/* Methodology Cards */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-indigo-700 mb-4">
                            Our Methodology Pillars
                        </h2>
                        <p className="text-xl text-gray-600">
                            Comprehensive approaches that define our educational excellence
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {section.methodologyCards.map((card, index) => (
                            <div key={card._key} className="group">
                                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group-hover:-translate-y-2">

                                    {/* Card Header */}
                                    <div className={`bg-gradient-to-r ${getColorClasses(card.color)} p-8 text-white text-center`}>
                                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                            {getIcon(card.iconName)}
                                        </div>
                                        <h3 className="text-2xl font-bold">
                                            {card.title}
                                        </h3>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-8">
                                        <p className="text-gray-700 leading-relaxed text-lg mb-6">
                                            {card.description}
                                        </p>

                                        <a
                                            href={card.link}
                                            className={`inline-flex items-center gap-2 bg-gradient-to-r ${getColorClasses(card.color)} text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200`}
                                        >
                                            Learn More
                                            <FaArrowRight className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                        Experience Our Methodology in Action
                    </h3>
                    <p className="text-xl text-indigo-100 mb-8">
                        Discover how our proven educational approaches create transformative learning experiences
                    </p>
                    <div className="space-x-4">
                        <Link
                            href="/academics"
                            className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Explore Academics
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
