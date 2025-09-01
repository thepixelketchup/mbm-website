'use client'

import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@/lib/sanity.client'
import {
    FaBook,
    FaGraduationCap,
    FaUsers,
    FaTrophy,
    FaBuilding,
    FaFlask,
    FaFutbol,
    FaUtensils,
    FaPalette,
    FaLaptopCode,
    FaDownload,
    FaArrowRight,
    FaPlay,
    FaCalendarAlt,
    FaFileAlt,
    FaChartLine
} from 'react-icons/fa'
import { JSX } from 'react'

interface Stat {
    _key: string
    number: string
    label: string
    icon?: string
}

interface Document {
    _id: string
    title: string
    description?: string
    file: any
    category: string
    fileSize?: string
}

interface Facility {
    _key: string
    name: string
    description: string
    image?: any
    icon?: string
}

interface Activity {
    _key: string
    name: string
    description: string
    image?: any
    category?: string
}

interface QuickLink {
    _key: string
    title: string
    description?: string
    url: string
    icon?: string
    color?: string
}

interface AcademicsOverviewSectionProps {
    section: {
        title: string
        subtitle?: string
        heroImage?: any
        introContent?: any[]
        academicStats?: Stat[]
        curriculumHighlights?: {
            title: string
            description: string
            featuredDocuments?: Document[]
            viewAllLink: string
        }
        facilitiesHighlights?: {
            title: string
            description: string
            featuredFacilities?: Facility[]
            viewAllLink: string
        }
        activitiesHighlights?: {
            title: string
            description: string
            featuredActivities?: Activity[]
            viewAllLink: string
        }
        galleryHighlights?: {
            title: string
            description: string
            featuredImages?: any[]
            viewAllLink: string
        }
        quickLinks?: QuickLink[]
    }
}

export default function AcademicsOverviewSection({ section }: AcademicsOverviewSectionProps) {
    if (!section) return null

    const getIcon = (iconName?: string) => {
        const icons: Record<string, JSX.Element> = {
            FaBook: <FaBook className="w-6 h-6" />,
            FaUsers: <FaUsers className="w-6 h-6" />,
            FaTrophy: <FaTrophy className="w-6 h-6" />,
            FaGraduationCap: <FaGraduationCap className="w-6 h-6" />,
            FaChartLine: <FaChartLine className="w-6 h-6" />,
            FaBuilding: <FaBuilding className="w-6 h-6" />,
            FaFlask: <FaFlask className="w-6 h-6" />,
            FaFutbol: <FaFutbol className="w-6 h-6" />,
            FaUtensils: <FaUtensils className="w-6 h-6" />,
            FaPalette: <FaPalette className="w-6 h-6" />,
            FaLaptopCode: <FaLaptopCode className="w-6 h-6" />,
            FaCalendarAlt: <FaCalendarAlt className="w-6 h-6" />,
            FaFileAlt: <FaFileAlt className="w-6 h-6" />
        }
        return icons[iconName || 'FaBook'] || <FaBook className="w-6 h-6" />
    }

    const getColorClasses = (color?: string) => {
        const colors = {
            blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
            green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
            purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
            orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
            pink: 'from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700',
            teal: 'from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700'
        }
        return colors[color as keyof typeof colors] || colors.blue
    }

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 overflow-hidden">
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

                <div className="relative z-10 text-center text-white px-6 max-w-6xl">
                    <div className="flex justify-center mb-8">
                        <div className="w-28 h-28 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <FaGraduationCap className="w-16 h-16" />
                        </div>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                        {section.title}
                    </h1>
                    {section.subtitle && (
                        <p className="text-2xl lg:text-3xl font-light opacity-90 mb-8">
                            {section.subtitle}
                        </p>
                    )}

                    <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-8 py-4">
                        <p className="text-xl font-semibold">
                            Excellence in Education Since 1927
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            {section.introContent && section.introContent.length > 0 && (
                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="prose prose-xl prose-indigo max-w-none text-center">
                            <PortableText value={section.introContent} />
                        </div>
                    </div>
                </section>
            )}

            {/* Academic Statistics */}
            {section.academicStats && section.academicStats.length > 0 && (
                <section className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-indigo-700 mb-4">Academic Excellence in Numbers</h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {section.academicStats.map((stat) => (
                                <div key={stat._key} className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                                        {getIcon(stat.icon)}
                                    </div>
                                    <div className="text-3xl font-bold text-indigo-700 mb-2">{stat.number}</div>
                                    <div className="text-gray-600 font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Curriculum Highlights */}
            {section.curriculumHighlights && (
                <section className="py-20 bg-white">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-800 mb-4">{section.curriculumHighlights.title}</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{section.curriculumHighlights.description}</p>
                        </div>

                        {section.curriculumHighlights.featuredDocuments && section.curriculumHighlights.featuredDocuments.length > 0 && (
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                                {section.curriculumHighlights.featuredDocuments.map((doc) => (
                                    <div key={doc._id} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 hover:shadow-lg transition-shadow group">
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                                            <FaFileAlt className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-2">{doc.title}</h3>
                                        {doc.description && (
                                            <p className="text-gray-600 text-sm mb-4">{doc.description}</p>
                                        )}
                                        <a
                                            href={doc.file.asset.url}
                                            download
                                            className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-700"
                                        >
                                            <FaDownload className="w-4 h-4" />
                                            Download
                                        </a>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="text-center">
                            <a
                                href={section.curriculumHighlights.viewAllLink}
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform duration-200"
                            >
                                View Complete Curriculum
                                <FaArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </section>
            )}

            {/* Facilities Highlights */}
            {section.facilitiesHighlights && (
                <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-800 mb-4">{section.facilitiesHighlights.title}</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{section.facilitiesHighlights.description}</p>
                        </div>

                        {section.facilitiesHighlights.featuredFacilities && section.facilitiesHighlights.featuredFacilities.length > 0 && (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                {section.facilitiesHighlights.featuredFacilities.map((facility) => (
                                    <div key={facility._key} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                                        {facility.image && (
                                            <div className="relative h-48">
                                                <Image
                                                    src={urlFor(facility.image).width(400).height(300).url()}
                                                    alt={facility.name}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                                                />
                                            </div>
                                        )}
                                        <div className="p-6">
                                            <div className="flex items-center mb-4">
                                                <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mr-3 text-white">
                                                    {getIcon(facility.icon)}
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-800">{facility.name}</h3>
                                            </div>
                                            <p className="text-gray-600">{facility.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="text-center">
                            <a
                                href={section.facilitiesHighlights.viewAllLink}
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-teal-700 text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform duration-200"
                            >
                                Explore All Facilities
                                <FaArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </section>
            )}

            {/* Activities Highlights */}
            {section.activitiesHighlights && (
                <section className="py-20 bg-white">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-800 mb-4">{section.activitiesHighlights.title}</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{section.activitiesHighlights.description}</p>
                        </div>

                        {section.activitiesHighlights.featuredActivities && section.activitiesHighlights.featuredActivities.length > 0 && (
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                                {section.activitiesHighlights.featuredActivities.map((activity) => (
                                    <div key={activity._key} className="group">
                                        <div className="relative overflow-hidden rounded-2xl shadow-lg">
                                            {activity.image && (
                                                <div className="relative h-64">
                                                    <Image
                                                        src={urlFor(activity.image).width(300).height(300).url()}
                                                        alt={activity.name}
                                                        fill
                                                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                                        <h3 className="text-lg font-bold mb-1">{activity.name}</h3>
                                                        {activity.category && (
                                                            <span className="text-sm bg-white/20 px-2 py-1 rounded-full">
                                {activity.category}
                              </span>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <p className="text-gray-600 mt-4 px-2">{activity.description}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="text-center">
                            <a
                                href={section.activitiesHighlights.viewAllLink}
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform duration-200"
                            >
                                Discover All Activities
                                <FaArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </section>
            )}

            {/* Gallery Highlights */}
            {section.galleryHighlights && section.galleryHighlights.featuredImages && (
                <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-800 mb-4">{section.galleryHighlights.title}</h2>
                            <p className="text-xl text-gray-600">{section.galleryHighlights.description}</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                            {section.galleryHighlights.featuredImages.slice(0, 8).map((image, index) => (
                                <div key={index} className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer">
                                    <Image
                                        src={urlFor(image).width(300).height(300).url()}
                                        alt="Gallery image"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                            <FaPlay className="w-5 h-5 text-white ml-1" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center">
                            <a
                                href={section.galleryHighlights.viewAllLink}
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform duration-200"
                            >
                                View Complete Gallery
                                <FaArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </section>
            )}

            {/* Quick Links */}
            {section.quickLinks && section.quickLinks.length > 0 && (
                <section className="py-20 bg-white">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Access</h2>
                            <p className="text-xl text-gray-600">Find what you're looking for faster</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {section.quickLinks.map((link) => (
                                <a
                                    key={link._key}
                                    href={link.url}
                                    className={`group block p-6 bg-gradient-to-r ${getColorClasses(link.color)} text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
                                >
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                                            {getIcon(link.icon)}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold">{link.title}</h3>
                                        </div>
                                    </div>
                                    {link.description && (
                                        <p className="text-white/90 mb-4">{link.description}</p>
                                    )}
                                    <div className="flex items-center text-white group-hover:translate-x-2 transition-transform">
                                        <span className="font-semibold mr-2">Access Now</span>
                                        <FaArrowRight className="w-4 h-4" />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}
