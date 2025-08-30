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
        <section className="py-16 bg-gradient-to-r from-pink-50/80 via-purple-50/80 to-orange-50/80">
            <div className="w-full mx-auto px-6">
                <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12">
                    {section.stats.map((stat, index) => (
                        <div key={stat._key} className="flex items-center">
                            {/* Stat Item */}
                            <div className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-sm lg:text-base text-purple-700 font-medium">
                                    {stat.label}
                                </div>
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
