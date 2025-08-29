'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity.client'
import {CgChevronLeft, CgChevronRight} from "react-icons/cg";

interface Achievement {
    _key: string
    image: any
    description: string
}

interface AchievementsSectionProps {
    section: {
        title: string
        subtitle?: string
        achievements: Achievement[]
        viewAllLink?: string
    }
}

export default function AchievementsSection({ section }: AchievementsSectionProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const { achievements } = section
    const cardsPerView = 3
    const totalSlides = Math.max(0, achievements.length - cardsPerView + 1)

    const nextSlide = () => {
        setCurrentIndex(prev => (prev + 1) % totalSlides)
    }

    const prevSlide = () => {
        setCurrentIndex(prev => (prev - 1 + totalSlides) % totalSlides)
    }

    const visibleAchievements = achievements.slice(currentIndex, currentIndex + cardsPerView)

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-purple-600 mb-4">
                        {section.title}
                    </h2>
                    {section.subtitle && (
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            {section.subtitle}
                        </p>
                    )}
                </div>

                <div className="relative">
                    {totalSlides > 1 && (
                        <>
                            <button
                                onClick={prevSlide}
                                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
                                aria-label="Previous achievements"
                            >
                                <CgChevronLeft className="w-6 h-6 text-gray-600" />
                            </button>

                            <button
                                onClick={nextSlide}
                                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
                                aria-label="Next achievements"
                            >
                                <CgChevronRight className="w-6 h-6 text-gray-600" />
                            </button>
                        </>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-12">
                        {visibleAchievements.map((achievement) => (
                            <div
                                key={achievement._key}
                                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="relative h-64 bg-gradient-to-br from-blue-50 to-purple-50 p-6 flex items-center justify-center">
                                    {achievement.image && (
                                        <Image
                                            src={urlFor(achievement.image).width(400).height(300).url()}
                                            alt={achievement.description}
                                            width={400}
                                            height={300}
                                            className="object-contain max-h-full max-w-full"
                                        />
                                    )}
                                </div>

                                <div className="p-6">
                                    <p className="text-gray-700 text-center leading-relaxed">
                                        {achievement.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-12">
                    {section.viewAllLink ? (
                        <Link
                            href={section.viewAllLink}
                            className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                        >
                            View All
                            <CgChevronRight className="w-4 h-4" />
                        </Link>
                    ) : (
                        <button className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                            View All
                            <CgChevronRight className="w-4 h-4" />
                        </button>
                    )}
                </div>
            </div>
        </section>
    )
}
