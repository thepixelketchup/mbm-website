'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { urlFor } from '@/lib/sanity.client'
import { Camera, ArrowRight, Expand } from 'lucide-react'

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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 30 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" as any }
        }
    }

    return (
        <section className="py-24 relative bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
                >
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 border border-primary/20">
                            <Camera className="w-4 h-4" />
                            <span className="font-semibold text-sm tracking-wide uppercase">
                                Campus Life
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground">
                            {section.sectionTitle}
                        </h2>
                    </div>

                    {/* Desktop CTA */}
                    {section.ctaUrl && section.ctaText && (
                        <div className="hidden md:block">
                            <Link
                                href={section.ctaUrl}
                                className="group relative inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-primary transition-all duration-300 bg-primary/10 rounded-full hover:bg-primary hover:text-white border border-primary/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center">
                                    {section.ctaText}
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>
                        </div>
                    )}
                </motion.div>

                {/* Responsive Masonry-like Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12"
                >
                    {section.images.slice(0, 8).map((image, index) => {
                        // Make the first item larger on desktop grids
                        const isFeatured = index === 0 || index === 5;

                        return (
                            <motion.div
                                variants={itemVariants}
                                key={image._key || index}
                                className={`group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 w-full ${isFeatured ? "sm:col-span-2 sm:row-span-2 aspect-[4/3] sm:aspect-auto" : "aspect-[4/3] sm:aspect-[4/5] "
                                    }`}
                            >
                                <Image
                                    src={urlFor(image).width(isFeatured ? 800 : 400).height(isFeatured ? 600 : 500).url()}
                                    alt={`Gallery image ${index + 1}`}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                />

                                {/* Glassmorphic Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-500 delay-100 text-white border border-white/50">
                                        <Expand className="w-6 h-6" />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Mobile CTA */}
                {section.ctaUrl && section.ctaText && (
                    <div className="md:hidden text-center mt-10">
                        <Link
                            href={section.ctaUrl}
                            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-300 bg-primary rounded-full hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 overflow-hidden w-full"
                        >
                            <span className="relative z-10 flex items-center">
                                {section.ctaText}
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                    </div>
                )}
            </div>
        </section>
    )
}

