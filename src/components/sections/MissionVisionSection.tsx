'use client'

import { PortableText } from '@portabletext/react'
import { FaEye, FaRocket, FaHeart, FaArrowLeft } from 'react-icons/fa'

interface MissionVisionSectionProps {
    section: {
        title: string
        subtitle?: string
        introduction?: any[]
        missionTitle?: string
        missionContent: any[]
        visionTitle?: string
        visionContent: any[]
        valuesTitle?: string
        valuesContent?: any[]
    }
}

export default function MissionVisionSection({ section }: MissionVisionSectionProps) {
    if (!section) return null

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600 overflow-hidden">
                <div className="relative z-10 text-center text-white px-6 max-w-5xl">
                    {/* Icon */}
                    <div className="flex justify-center mb-8">
                        <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <FaEye className="w-12 h-12" />
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

            {/* Main Content */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
                <div className="max-w-6xl mx-auto px-6">

                    {/* Introduction Section (if provided) */}
                    {section.introduction && section.introduction.length > 0 && (
                        <div className="mb-16">
                            <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12">
                                <div className="prose prose-xl prose-purple max-w-none text-center">
                                    <PortableText value={section.introduction} />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Mission & Vision Cards */}
                    <div className="grid lg:grid-cols-2 gap-12 mb-16">

                        {/* Mission Card */}
                        <div className="group">
                            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group-hover:-translate-y-2">

                                {/* Mission Header */}
                                <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-8 text-white text-center">
                                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <FaRocket className="w-8 h-8" />
                                    </div>
                                    <h2 className="text-3xl font-bold">
                                        {section.missionTitle || 'Our Mission'}
                                    </h2>
                                </div>

                                {/* Mission Content */}
                                <div className="p-8 lg:p-12">
                                    <div className="prose prose-lg prose-purple max-w-none">
                                        <PortableText
                                            value={section.missionContent}
                                            components={{
                                                block: {
                                                    normal: ({ children }) => (
                                                        <p className="text-gray-700 leading-relaxed text-lg mb-4 text-justify">
                                                            {children}
                                                        </p>
                                                    ),
                                                    h2: ({ children }) => (
                                                        <h2 className="text-2xl font-bold text-purple-700 mb-4">
                                                            {children}
                                                        </h2>
                                                    )
                                                }
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Vision Card */}
                        <div className="group">
                            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group-hover:-translate-y-2">

                                {/* Vision Header */}
                                <div className="bg-gradient-to-r from-pink-500 to-pink-600 p-8 text-white text-center">
                                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <FaEye className="w-8 h-8" />
                                    </div>
                                    <h2 className="text-3xl font-bold">
                                        {section.visionTitle || 'Our Vision'}
                                    </h2>
                                </div>

                                {/* Vision Content */}
                                <div className="p-8 lg:p-12">
                                    <div className="prose prose-lg prose-purple max-w-none">
                                        <PortableText
                                            value={section.visionContent}
                                            components={{
                                                block: {
                                                    normal: ({ children }) => (
                                                        <p className="text-gray-700 leading-relaxed text-lg mb-4 text-justify">
                                                            {children}
                                                        </p>
                                                    ),
                                                    h2: ({ children }) => (
                                                        <h2 className="text-2xl font-bold text-pink-700 mb-4">
                                                            {children}
                                                        </h2>
                                                    )
                                                }
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Core Values Section (if provided) */}
                    {section.valuesTitle && section.valuesContent && (
                        <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12">
                            <div className="text-center mb-8">
                                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <FaHeart className="w-8 h-8 text-white" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-800">
                                    {section.valuesTitle}
                                </h2>
                            </div>

                            <div className="prose prose-lg prose-gray max-w-none">
                                <PortableText
                                    value={section.valuesContent}
                                    components={{
                                        block: {
                                            normal: ({ children }) => (
                                                <p className="text-gray-700 leading-relaxed text-lg mb-4 text-center">
                                                    {children}
                                                </p>
                                            )
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    )}
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
