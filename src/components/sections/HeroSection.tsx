'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
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

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" as any }
        }
    }

    return (
        <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
            {/* Dynamic Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full mix-blend-multiply animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/20 blur-[120px] rounded-full mix-blend-multiply animate-pulse" style={{ animationDuration: '10s' }} />
                <div className="absolute top-[30%] left-[40%] w-[30%] h-[30%] bg-secondary/15 blur-[100px] rounded-full mix-blend-multiply animate-pulse" style={{ animationDuration: '6s' }} />
            </div>

            {/* Content Grid */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center pt-20 pb-16">

                {/* Text Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8 max-w-2xl"
                >
                    <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary w-fit">
                        <Sparkles className="w-4 h-4" />
                        <span className="text-sm font-medium">Empowering the Future</span>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants as any}
                        className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight"
                    >
                        {section.title}
                    </motion.h1>

                    {section.subtitle && (
                        <motion.p
                            variants={itemVariants as any}
                            className="text-xl lg:text-2xl text-foreground/70 leading-relaxed font-sans max-w-xl"
                        >
                            {section.subtitle}
                        </motion.p>
                    )}

                    {section.ctaButton && (
                        <motion.div variants={itemVariants as any} className="pt-4 flex flex-wrap gap-4">
                            <Link
                                href={section.ctaButton.link || '#'}
                                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-300 bg-primary rounded-full hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center">
                                    {section.ctaButton.text}
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                            </Link>

                            {/* Optional secondary button style */}
                            <Link
                                href="/about"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-foreground transition-all duration-300 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:shadow-md hover:border-gray-300"
                            >
                                Learn More
                            </Link>
                        </motion.div>
                    )}
                </motion.div>

                {/* Visual Element */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" as any }}
                    className="hidden lg:flex justify-end items-center relative"
                >
                    <div className="relative w-full aspect-square max-w-[600px]">
                        {/* Decorative background circle */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-accent/10 to-transparent rounded-[3rem] rotate-3 scale-105" />

                        {/* Main Image Container */}
                        <div className="absolute inset-0 bg-white rounded-[3rem] shadow-2xl overflow-hidden glass border border-white/50">
                            {/* Ideally replace this with an actual image from CMS using urlFor(section.backgroundImage) */}
                            {section.backgroundImage ? (
                                <Image
                                    src={urlFor(section.backgroundImage).url()}
                                    alt="Hero background"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            ) : (
                                <div className="w-full h-full bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                                    <div className="text-center p-8">
                                        <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                            <Sparkles className="w-12 h-12" />
                                        </div>
                                        <p className="text-xl font-medium text-foreground/80 font-serif">A Tradition of Excellence</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Floating elements */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-8 -left-8 p-6 glass-dark rounded-2xl shadow-xl border border-white/10"
                        >
                            <p className="font-bold text-3xl">100%</p>
                            <p className="text-sm text-gray-300">College Acceptance</p>
                        </motion.div>

                        <motion.div
                            animate={{ y: [10, -10, 10] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -top-8 -right-8 p-6 glass rounded-2xl shadow-xl flex items-center gap-4"
                        >
                            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                                <span className="font-bold text-xl">A+</span>
                            </div>
                            <div>
                                <p className="font-bold text-foreground">Top Rated</p>
                                <p className="text-sm text-foreground/60">Institution</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

