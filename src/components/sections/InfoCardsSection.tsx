'use client'

import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity.client'

interface InfoCard {
    _key: string
    icon: any
    label: string
    link: string
}

interface InfoCardsSectionProps {
    section: {
        sectionTitle: string
        cards: InfoCard[]
    }
}

export default function InfoCardsSection({ section }: InfoCardsSectionProps) {
    if (!section?.cards?.length) return null

    return (
        <section className="py-16 bg-white bg-gradient-to-br from-primary/10 via-accent/20 to-secondary/20">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <p>
                        {section.sectionTitle}
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
                    {section.cards.map((card) => (
                        <Link
                            key={card._key}
                            href={card.link}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-4 py-8 w-50 text-center group-hover:scale-105 border border-gray-100">
                                {/* Icon */}
                                <div className="flex justify-center mb-6">
                                    <div className="relative w-10 h-10">
                                        {card.icon && (
                                            <Image
                                                src={urlFor(card.icon).width(64).height(64).url()}
                                                alt={card.label}
                                                fill
                                                className="object-contain"
                                            />
                                        )}
                                    </div>
                                </div>

                                {/* Label */}
                                <p className="text-foreground/80 font-medium text-lg">
                                    {card.label}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
