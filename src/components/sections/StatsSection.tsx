'use client'

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

    return (
        <section className="w-screen bg-white">
            <div className="w-full mx-auto px-6 py-16 bg-gradient-to-r from-secondary/10 via-accent/20 to-background/10 flex items-center justify-center lg:px-40">
                <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12">
                    {section.stats.map((stat, index) => (
                        <div key={stat._key} className="flex items-center">
                            {/* Stat Item */}
                            <div className="text-center">
                                <p className="font-bold text-6xl text-primary mb-2">
                                    {stat.number}
                                </p>
                                <p className="text-primary font-light text-lg">
                                    {stat.label}
                                </p>
                            </div>

                            {/* Diamond Separator (except for last item) */}
                            {index < section.stats.length - 1 && (
                                <div className="hidden md:block ml-16">
                                    <div className="w-3 h-3 bg-orange-400 transform rotate-45"></div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
