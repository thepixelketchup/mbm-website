'use client'

import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@/lib/sanity.client'
import { FaTrophy, FaArrowLeft, FaAward, FaBuilding, FaLightbulb, FaExpandArrowsAlt, FaGraduationCap } from 'react-icons/fa'

interface Achievement {
    _key: string
    year: string
    title: string
    description: string
    category: string
    isHighlight?: boolean
}

interface Statistic {
    _key: string
    number: string
    label: string
}

interface MilestonesSectionProps {
    section: {
        title: string
        subtitle?: string
        heroImage?: any
        introduction?: any[]
        achievements: Achievement[]
        statistics?: Statistic[]
    }
}

export default function MilestonesSection({ section }: MilestonesSectionProps) {
    if (!section) return null

    const getCategoryIcon = (category: string) => {
        const icons = {
            academic: <FaGraduationCap className="w-6 h-6" />,
            infrastructure: <FaBuilding className="w-6 h-6" />,
            awards: <FaAward className="w-6 h-6" />,
            expansion: <FaExpandArrowsAlt className="w-6 h-6" />,
            innovation: <FaLightbulb className="w-6 h-6" />
        }
        return icons[category as keyof typeof icons] || <FaTrophy className="w-6 h-6" />
    }

    const getCategoryColor = (category: string) => {
        const colors = {
            academic: 'from-blue-500 to-blue-600',
            infrastructure: 'from-gray-500 to-gray-600',
            awards: 'from-yellow-500 to-yellow-600',
            expansion: 'from-purple-500 to-purple-600',
            innovation: 'from-green-500 to-green-600'
        }
        return colors[category as keyof typeof colors] || 'from-emerald-500 to-emerald-600'
    }

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 overflow-hidden">
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
                            <FaTrophy className="w-12 h-12" />
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

            {/* Introduction */}
            {section.introduction && section.introduction.length > 0 && (
                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="prose prose-xl prose-emerald max-w-none text-center">
                            <PortableText value={section.introduction} />
                        </div>
                    </div>
                </section>
            )}

            {/* Statistics */}
            {section.statistics && section.statistics.length > 0 && (
                <section className="py-16 bg-gradient-to-r from-emerald-50 to-teal-50">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {section.statistics.map((stat) => (
                                <div key={stat._key} className="text-center">
                                    <div className="text-4xl font-bold text-emerald-600 mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-gray-700 font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Achievements */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
                <div className="max-w-6xl mx-auto px-6">

                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-emerald-700 mb-4">
                            Our Major Achievements
                        </h2>
                    </div>

                    <div className="space-y-8">
                        {section.achievements.map((achievement, index) => (
                            <div
                                key={achievement._key}
                                className={`bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                                    achievement.isHighlight ? 'border-4 border-yellow-400 shadow-yellow-100' : ''
                                }`}
                            >
                                <div className="p-8 lg:p-12">
                                    <div className="flex items-start gap-6">

                                        {/* Year Badge */}
                                        <div className="flex-shrink-0">
                                            <div className={`w-20 h-20 bg-gradient-to-r ${getCategoryColor(achievement.category)} rounded-full flex items-center justify-center text-white shadow-lg`}>
                                                {getCategoryIcon(achievement.category)}
                                            </div>
                                            <div className="text-center mt-2 text-sm font-bold text-gray-600">
                                                {achievement.year}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-grow">
                                            <div className="flex items-center gap-3 mb-4">
                                                <h3 className="text-2xl font-bold text-emerald-700">
                                                    {achievement.title}
                                                </h3>
                                                {achievement.isHighlight && (
                                                    <FaAward className="w-6 h-6 text-yellow-500" />
                                                )}
                                            </div>

                                            <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-4">
                                                {achievement.category.charAt(0).toUpperCase() + achievement.category.slice(1)}
                                            </div>

                                            <p className="text-gray-700 leading-relaxed text-lg">
                                                {achievement.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <FaTrophy className="w-16 h-16 text-white mx-auto mb-6" />
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                        Excellence Recognized Globally
                    </h3>
                    <p className="text-xl text-emerald-100">
                        Our commitment to educational excellence continues to earn recognition and accolades
                    </p>
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
