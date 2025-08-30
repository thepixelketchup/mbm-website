'use client'

import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@/lib/sanity.client'
import { FaUsers, FaArrowLeft } from 'react-icons/fa'

interface TeamMember {
    _key: string
    name: string
    role: string
    description: any[]
    image: any
}

interface LeadershipTeamSectionProps {
    section: {
        title: string
        subtitle?: string
        heroImage?: any
        members: TeamMember[]
    }
}

export default function LeadershipTeamSection({ section }: LeadershipTeamSectionProps) {
    if (!section) return null

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 overflow-hidden">
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
                    {/* Icon */}
                    <div className="flex justify-center mb-8">
                        <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <FaUsers className="w-12 h-12" />
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

            {/* Team Members */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-purple-700 mb-4">
                            {section.title}
                        </h2>
                    </div>

                    {/* Team Members List */}
                    <div className="space-y-16">
                        {section.members.map((member, index) => (
                            <div key={member._key} className="bg-white rounded-3xl shadow-2xl overflow-hidden">

                                {/* Member Header with Name and Role */}
                                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6">
                                    <h3 className="text-2xl lg:text-3xl font-bold text-white">
                                        {member.name}
                                    </h3>
                                    <p className="text-purple-100 text-lg font-medium">
                                        ({member.role})
                                    </p>
                                </div>

                                {/* Content: Text on Left, Image on Right */}
                                <div className="grid lg:grid-cols-3 gap-8 p-8 lg:p-12">

                                    {/* Text Content - Left Side (2 columns) */}
                                    <div className="lg:col-span-2">
                                        <div className="prose prose-lg prose-purple max-w-none">
                                            <PortableText
                                                value={member.description}
                                                components={{
                                                    block: {
                                                        normal: ({ children }) => (
                                                            <p className="text-gray-700 leading-relaxed text-lg mb-6 text-justify">
                                                                {children}
                                                            </p>
                                                        ),
                                                        h2: ({ children }) => (
                                                            <h2 className="text-2xl font-bold text-purple-700 mb-4">
                                                                {children}
                                                            </h2>
                                                        ),
                                                        h3: ({ children }) => (
                                                            <h3 className="text-xl font-semibold text-purple-600 mb-3">
                                                                {children}
                                                            </h3>
                                                        )
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Image - Right Side (1 column) */}
                                    <div className="lg:col-span-1 flex justify-center lg:justify-end">
                                        <div className="relative">
                                            <div className="w-64 h-80 relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                                                <Image
                                                    src={urlFor(member.image).width(400).height(500).url()}
                                                    alt={member.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            {/* Decorative border */}
                                            <div className="absolute inset-0 w-64 h-80 rounded-2xl border-4 border-purple-200 transform translate-x-2 translate-y-2 -z-10"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
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
