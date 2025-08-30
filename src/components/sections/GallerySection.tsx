'use client'

import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity.client'

interface GallerySectionProps {
    section: {
        sectionTitle: string
        images: any[]
        ctaText?: string
        ctaUrl?: string
    }
}

export default function GallerySection({ section }: GallerySectionProps) {
    if (!section?.images?.length) return null

    return (
        <section className="py-16 bg-gradient-to-br bg-white from-primary/10 to-secondary/10">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-lg lg:text-2xl font-normal text-primary mb-4">
                        {section.sectionTitle}
                    </h2>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {section.images.map((image, index) => (
                        <div
                            key={image._key || index}
                            className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <Image
                                src={urlFor(image).width(400).height(500).url()}
                                alt={`Gallery image ${index + 1}`}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />

                            {/* Subtle overlay on hover */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                {section.ctaUrl && section.ctaText && (
                    <div className="text-center">
                        <Link
                            href={section.ctaUrl}
                            className="inline-block bg-gradient-to-r from-primary via-accent to-secondary text-white font-bold py-4 px-12 rounded-full text-lg tracking-wide transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            {section.ctaText}
                        </Link>
                    </div>
                )}
            </div>
        </section>
    )
}
