'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { urlFor } from '@/lib/sanity.client'
import { ArrowRight } from 'lucide-react'

interface InfoCard {
    _key: string
    icon: any
    label: string
    link: string
}

interface InfoCardsSectionProps {
    section: {
        sectionTitle?: string
        cards: InfoCard[]
    }
}

export default function InfoCardsSection({ section }: InfoCardsSectionProps) {
    if (!section?.cards?.length) return null

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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring" as any, stiffness: 100, damping: 15 }
        }
    }

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Soft decorative background gradients */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent/5 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Section Title */}
                {section.sectionTitle && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-foreground">
                            {section.sectionTitle}
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-6 rounded-full" />
                    </motion.div>
                )}

                {/* Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
                >
                    {section.cards.map((card) => (
                        <motion.div key={card._key} variants={itemVariants}>
                            <Link href={card.link || '#'} className="block h-full outline-none">
                                <div className="group relative h-full glass rounded-3xl p-6 lg:p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-primary/5 hover:border-primary/20 overflow-hidden">

                                    {/* Hover gradient effect inside card */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                    {/* Icon Container */}
                                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-6 rounded-2xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 z-10 p-4">
                                        {card.icon ? (
                                            <Image
                                                src={urlFor(card.icon).width(80).height(80).url()}
                                                alt={card.label}
                                                fill
                                                className="object-contain p-3"
                                            />
                                        ) : (
                                            <div className="w-8 h-8 bg-primary/20 rounded-full" />
                                        )}
                                    </div>

                                    {/* Label */}
                                    <h3 className="text-foreground/90 font-semibold text-lg sm:text-xl group-hover:text-primary transition-colors duration-300 z-10">
                                        {card.label}
                                    </h3>

                                    {/* Micro-interaction indicator */}
                                    <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-10">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

