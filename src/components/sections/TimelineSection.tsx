'use client'

import Image from 'next/image'
import { urlFor } from '@/lib/sanity.client'
import {
    FaClock,
    FaArrowLeft,
    FaStar
} from 'react-icons/fa'

interface TimelineEvent {
    _key: string
    year: string
    title: string
    description: string
    image?: any
    isHighlight?: boolean
}

interface TimelineSectionProps {
    section: {
        title: string
        subtitle?: string
        heroImage?: any
        events: TimelineEvent[]
    }
}

export default function TimelineSection({ section }: TimelineSectionProps) {
    if (!section) return null

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 overflow-hidden">
                {section.heroImage && (
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={urlFor(section.heroImage).width(1920).height(1080).url()}
                            alt={section.title}
                            fill
                            className="object-cover opacity-20"
                        />
                    </div>
                )}

                <div className="relative z-10 text-center text-white px-6 max-w-5xl">
                    {/* Timeline Icon */}
                    <div className="flex justify-center mb-8">
                        <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <FaClock className="w-12 h-12" />
                        </div>
                    </div>

                    <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                        {section.title}
                    </h1>
                    {section.subtitle && (
                        <p className="text-xl lg:text-2xl font-light opacity-90">
                            {section.subtitle}
                        </p>
                    )}
                </div>
            </section>

            {/* Breadcrumb */}
            <section className="bg-white py-4 border-b">
                <div className="max-w-6xl mx-auto px-6">
                    <nav className="flex items-center space-x-2 text-sm text-gray-600">
                        <a href="/" className="hover:text-purple-600">Home</a>
                        <span>/</span>
                        <a href="/about" className="hover:text-purple-600">About Us</a>
                        <span>/</span>
                        <span className="text-purple-600 font-medium">{section.title}</span>
                    </nav>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
                <div className="max-w-6xl mx-auto px-6">

                    {/* Timeline Container */}
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-pink-500 rounded-full"></div>

                        {/* Timeline Events */}
                        <div className="space-y-16">
                            {section.events.map((event, index) => (
                                <div
                                    key={event._key}
                                    className={`relative flex items-center ${
                                        index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                                    }`}
                                >
                                    {/* Event Card */}
                                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                                        <div className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 ${
                                            event.isHighlight ? 'border-4 border-yellow-400 shadow-yellow-100' : ''
                                        }`}>

                                            {/* Year Badge */}
                                            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-white font-bold text-lg mb-4 ${
                                                event.isHighlight
                                                    ? 'bg-gradient-to-r from-yellow-500 to-orange-500'
                                                    : 'bg-gradient-to-r from-purple-600 to-pink-500'
                                            }`}>
                                                {event.isHighlight && <FaStar className="w-4 h-4" />}
                                                {event.year}
                                            </div>

                                            {/* Event Image */}
                                            {event.image && (
                                                <div className="relative h-48 rounded-xl overflow-hidden mb-6">
                                                    <Image
                                                        src={urlFor(event.image).width(400).height(200).url()}
                                                        alt={event.title}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                            )}

                                            {/* Event Content */}
                                            <h3 className="text-2xl font-bold text-purple-700 mb-4">
                                                {event.title}
                                            </h3>
                                            <p className="text-gray-700 leading-relaxed">
                                                {event.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Timeline Dot */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                                        <div className={`w-6 h-6 rounded-full border-4 border-white shadow-lg ${
                                            event.isHighlight
                                                ? 'bg-gradient-to-r from-yellow-500 to-orange-500'
                                                : 'bg-gradient-to-r from-purple-600 to-pink-500'
                                        }`}>
                                        </div>
                                    </div>

                                    {/* Empty Space for Alternating Layout */}
                                    <div className="w-5/12"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Back Navigation */}
            <section className="py-8 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <a
                        href="/about"
                        className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-800 transition-colors group"
                    >
                        <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to About Us
                    </a>
                </div>
            </section>
        </>
    )
}
