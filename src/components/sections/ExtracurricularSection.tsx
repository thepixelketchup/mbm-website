'use client'

import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@/lib/sanity.client'
import {
    FaStar,
    FaArrowLeft,
    FaTrophy,
    FaPalette,
    FaLaptopCode,
    FaHeart,
    FaCalendarPlus,
    FaUserTie,
    FaChevronLeft,
    FaChevronRight
} from 'react-icons/fa'
import { useState } from 'react'

interface Activity {
    _key: string
    title: string
    category: string
    description: any[]
    images: any[]
    schedule?: string
    coordinator?: string
    achievements?: string[]
}

interface ExtracurricularSectionProps {
    section: {
        title: string
        subtitle?: string
        heroImage?: any
        introContent?: any[]
        activities: Activity[]
    }
}

export default function ExtracurricularSection({ section }: ExtracurricularSectionProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState<Record<string, number>>({})

    if (!section) return null

    const getCategoryIcon = (category: string) => {
        const icons = {
            sports: <FaTrophy className="w-8 h-8" />,
            arts: <FaPalette className="w-8 h-8" />,
            academic: <FaStar className="w-8 h-8" />,
            tech: <FaLaptopCode className="w-8 h-8" />,
            service: <FaHeart className="w-8 h-8" />,
            events: <FaCalendarPlus className="w-8 h-8" />
        }
        return icons[category as keyof typeof icons] || <FaStar className="w-8 h-8" />
    }

    const getCategoryColor = (category: string) => {
        const colors = {
            sports: 'from-orange-500 to-red-600',
            arts: 'from-pink-500 to-purple-600',
            academic: 'from-blue-500 to-indigo-600',
            tech: 'from-green-500 to-teal-600',
            service: 'from-rose-500 to-pink-600',
            events: 'from-yellow-500 to-orange-600'
        }
        return colors[category as keyof typeof colors] || 'from-indigo-500 to-purple-600'
    }

    const getCategoryTitle = (category: string) => {
        const titles = {
            sports: 'Sports',
            arts: 'Arts & Culture',
            academic: 'Academic Clubs',
            tech: 'Technology',
            service: 'Community Service',
            events: 'Special Events'
        }
        return titles[category as keyof typeof titles] || 'Activities'
    }

    const nextImage = (activityKey: string, totalImages: number) => {
        setCurrentImageIndex(prev => ({
            ...prev,
            [activityKey]: ((prev[activityKey] || 0) + 1) % totalImages
        }))
    }

    const prevImage = (activityKey: string, totalImages: number) => {
        setCurrentImageIndex(prev => ({
            ...prev,
            [activityKey]: ((prev[activityKey] || 0) - 1 + totalImages) % totalImages
        }))
    }

    // Group activities by category
    const groupedActivities = section.activities.reduce((acc, activity) => {
        if (!acc[activity.category]) {
            acc[activity.category] = []
        }
        acc[activity.category].push(activity)
        return acc
    }, {} as Record<string, Activity[]>)

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 overflow-hidden">
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
                    <div className="flex justify-center mb-8">
                        <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <FaStar className="w-12 h-12" />
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
                        <a href="/academics" className="hover:text-purple-600">Academics</a>
                        <span>/</span>
                        <span className="text-purple-600 font-medium">{section.title}</span>
                    </nav>
                </div>
            </section>

            {/* Introduction */}
            {section.introContent && section.introContent.length > 0 && (
                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="prose prose-xl prose-purple max-w-none text-center">
                            <PortableText value={section.introContent} />
                        </div>
                    </div>
                </section>
            )}

            {/* Activities by Category */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
                <div className="max-w-7xl mx-auto px-6">

                    {Object.entries(groupedActivities).map(([category, activities]) => (
                        <div key={category} className="mb-16">

                            {/* Category Header */}
                            <div className={`bg-gradient-to-r ${getCategoryColor(category)} rounded-2xl p-6 mb-8`}>
                                <div className="flex items-center text-white">
                                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-6">
                                        {getCategoryIcon(category)}
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold">
                                            {getCategoryTitle(category)}
                                        </h2>
                                        <p className="text-white/90">
                                            {activities.length} activit{activities.length > 1 ? 'ies' : 'y'} available
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Activities */}
                            <div className="space-y-8">
                                {activities.map((activity) => {
                                    const currentIndex = currentImageIndex[activity._key] || 0
                                    return (
                                        <div key={activity._key} className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">

                                            <div className="grid lg:grid-cols-2 gap-8">

                                                {/* Images Section */}
                                                <div className="relative">
                                                    {activity.images && activity.images.length > 0 && (
                                                        <div className="relative h-80 lg:h-full">
                                                            <Image
                                                                src={urlFor(activity.images[currentIndex]).width(600).height(400).url()}
                                                                alt={activity.title}
                                                                fill
                                                                className="object-cover"
                                                            />

                                                            {/* Image Navigation */}
                                                            {activity.images.length > 1 && (
                                                                <>
                                                                    <button
                                                                        onClick={() => prevImage(activity._key, activity.images.length)}
                                                                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                                                                    >
                                                                        <FaChevronLeft className="w-5 h-5 text-gray-700" />
                                                                    </button>
                                                                    <button
                                                                        onClick={() => nextImage(activity._key, activity.images.length)}
                                                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                                                                    >
                                                                        <FaChevronRight className="w-5 h-5 text-gray-700" />
                                                                    </button>

                                                                    {/* Image Indicators */}
                                                                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                                                                        {activity.images.map((_, index) => (
                                                                            <button
                                                                                key={index}
                                                                                onClick={() => setCurrentImageIndex(prev => ({ ...prev, [activity._key]: index }))}
                                                                                className={`w-2 h-2 rounded-full transition-colors ${
                                                                                    index === currentIndex ? 'bg-white' : 'bg-white/50'
                                                                                }`}
                                                                            />
                                                                        ))}
                                                                    </div>
                                                                </>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Content Section */}
                                                <div className="p-8">
                                                    <div className="flex items-center mb-6">
                                                        <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(category)} rounded-lg flex items-center justify-center mr-4`}>
                                                            {getCategoryIcon(category)}
                                                        </div>
                                                        <div className="flex-grow">
                                                            <h3 className="text-2xl font-bold text-gray-800">
                                                                {activity.title}
                                                            </h3>
                                                        </div>
                                                    </div>

                                                    <div className="prose prose-purple max-w-none mb-6">
                                                        <PortableText value={activity.description} />
                                                    </div>

                                                    {/* Activity Info */}
                                                    <div className="grid grid-cols-1 gap-4 mb-6">
                                                        {activity.schedule && (
                                                            <div className="flex items-center text-gray-600">
                                                                <FaCalendarPlus className="w-4 h-4 mr-3" />
                                                                <span><strong>Schedule:</strong> {activity.schedule}</span>
                                                            </div>
                                                        )}
                                                        {activity.coordinator && (
                                                            <div className="flex items-center text-gray-600">
                                                                <FaUserTie className="w-4 h-4 mr-3" />
                                                                <span><strong>Coordinator:</strong> {activity.coordinator}</span>
                                                            </div>
                                                        )}
                                                    </div>

                                                    {activity.achievements && activity.achievements.length > 0 && (
                                                        <div>
                                                            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                                                                <FaTrophy className="w-4 h-4 mr-2 text-yellow-600" />
                                                                Recent Achievements:
                                                            </h4>
                                                            <ul className="space-y-2">
                                                                {activity.achievements.map((achievement, index) => (
                                                                    <li key={index} className="text-gray-700 flex items-start">
                                                                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                                        {achievement}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Back Navigation */}
            <section className="py-8 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <a
                        href="/academics"
                        className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-800 transition-colors group"
                    >
                        <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Academics
                    </a>
                </div>
            </section>
        </>
    )
}
