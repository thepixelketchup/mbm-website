'use client'

import { motion } from 'framer-motion'
import { DivideIcon as LucideIcon } from 'lucide-react'

interface StatItem {
    _key: string
    number: string
    label: string
}

interface StatsSectionProps {
    section: {
        stats: StatItem[]
    }
}

export default function StatsSection({ section }: StatsSectionProps) {
    if (!section?.stats?.length) return null

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: "spring" as any, stiffness: 100, damping: 15 }
        }
    }

    return (
        <section className="w-full relative py-24 bg-background overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-primary/5 pattern-dots pattern-primary/10 pattern-size-4 pattern-opacity-20" />
            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12"
                >
                    {section.stats.map((stat, index) => (
                        <motion.div
                            key={stat._key}
                            variants={itemVariants}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-50" />
                            <div className="relative h-full text-center glass rounded-3xl p-8 border border-primary/10 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <motion.div
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5, type: 'spring' }}
                                    viewport={{ once: true }}
                                >
                                    <p className="font-bold text-5xl sm:text-6xl text-primary mb-3 font-serif tracking-tight">
                                        {stat.number}
                                    </p>
                                </motion.div>
                                <p className="text-foreground/80 font-medium text-lg lg:text-xl">
                                    {stat.label}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

