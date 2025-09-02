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
        <section className="py-8 md:py-16 bg-muted">
            <div className="max-w-7xl mx-auto md:px-6 px-2">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-normal mb-4">
                        {section.title}
                    </h2>
                    {section.subtitle && (
                        <p className="md:text-lg text-gray-700 w-full">
                            {section.subtitle}
                        </p>
                    )}
                </div>

                <div className="relative">
                    {totalSlides > 1 && (
                        <>
                            <button
                                onClick={prevSlide}
                                className="absolute  top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-1 sm:p-3"
                                aria-label="Previous achievements"
                            >
                                <CgChevronLeft className="sm
                                :w-4 sm:h-4 text-gray-600" />
                            </button>

                            <button
                                onClick={nextSlide}
                                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-1 sm:p-3 hover:bg-gray-50"
                                aria-label="Next achievements"
                            >
                                <CgChevronRight className="w-4 h-4 text-gray-600" />
                            </button>
                        </>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-12">
                        {visibleAchievements.map((achievement) => (
                            <div
                                key={achievement._key}
                                className="rounded-xl overflow-hidden duration-300"
                            >
                                <div className="relative h-64 p-6 flex items-center justify-center">
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

                                <div className="md:p-6">
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
                            className="inline-flex items-center gap-2 text-primary font-semibold text-xl"
                        >
                            View All
                            <CgChevronRight className="w-6 h-6" />
                        </Link>
                    ) : (
                        <button className="inline-flex items-center gap-2 text-primary font-semibold transition-colors">
                            View All
                            <CgChevronRight className="w-4 h-4" />
                        </button>
                    )}
                </div>
            </div>
        </section>
    )
}
