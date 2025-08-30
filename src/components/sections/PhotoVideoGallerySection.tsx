'use client'

import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@/lib/sanity.client'
import {
    FaCamera,
    FaArrowLeft,
    FaPlay,
    FaCalendarAlt,
    FaTimes
} from 'react-icons/fa'
import { useState } from 'react'

interface MediaItem {
    _key: string
    type: 'image' | 'video'
    image?: any
    videoUrl?: string
    title?: string
    caption?: string
    category?: string
    date?: string
}

interface PhotoVideoGallerySectionProps {
    section: {
        title: string
        subtitle?: string
        heroImage?: any
        introContent?: any[]
        mediaItems: MediaItem[]
    }
}

export default function PhotoVideoGallerySection({ section }: PhotoVideoGallerySectionProps) {
    const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null)
    const [selectedCategory, setSelectedCategory] = useState<string>('all')

    if (!section) return null

    // Get unique categories
    const categories = ['all', ...Array.from(new Set(section.mediaItems.map(item => item.category).filter(Boolean)))]

    // Filter items by category
    const filteredItems = selectedCategory === 'all'
        ? section.mediaItems
        : section.mediaItems.filter(item => item.category === selectedCategory)

    const getCategoryTitle = (category: string) => {
        const titles = {
            campus: 'Campus Life',
            sports: 'Sports Events',
            cultural: 'Cultural Programs',
            academic: 'Academic Activities',
            events: 'Special Events',
            achievements: 'Achievements',
            all: 'All Media'
        }
        return titles[category as keyof typeof titles] || category
    }

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-600 overflow-hidden">
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
                    <div className="flex justify-center mb-8">
                        <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <FaCamera className="w-12 h-12" />
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
                        <a href="/academics" className="hover:text-purple-600">Academics</a>
                        <span>/</span>
                        <span className="text-purple-600 font-medium">{section.title}</span>
                    </nav>
                </div>
            </section>

            {/* Introduction */}
            {section.introContent && section.introContent.length > 0 && (
                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="prose prose-xl prose-blue max-w-none text-center">
                            <PortableText value={section.introContent} />
                        </div>
                    </div>
                </section>
            )}

            {/* Category Filters */}
            <section className="py-8 bg-gradient-to-r from-blue-50 to-indigo-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category!)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                                    selectedCategory === category
                                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                                        : 'bg-white text-gray-700 hover:bg-blue-100 shadow-md hover:shadow-lg'
                                }`}
                            >
                                {getCategoryTitle(category!)}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-6">

                    {filteredItems.length === 0 ? (
                        <div className="text-center py-16">
                            <FaCamera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-2xl font-semibold text-gray-600 mb-2">No Media Found</h3>
                            <p className="text-gray-500">No media items found for the selected category.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredItems.map((item) => (
                                <div
                                    key={item._key}
                                    className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
                                    onClick={() => setSelectedItem(item)}
                                >
                                    <div className="relative aspect-square">
                                        {item.type === 'image' && item.image ? (
                                            <Image
                                                src={urlFor(item.image).width(400).height(400).url()}
                                                alt={item.title || 'Gallery image'}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-300"
                                            />
                                        ) : item.type === 'video' && item.videoUrl ? (
                                            <div className="relative w-full h-full bg-gray-900 flex items-center justify-center">
                                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                                                    <FaPlay className="w-8 h-8 text-white ml-1" />
                                                </div>
                                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                            </div>
                                        ) : null}

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        {/* Content Overlay */}
                                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                                            {item.title && (
                                                <h3 className="font-semibold text-lg mb-1 line-clamp-2">
                                                    {item.title}
                                                </h3>
                                            )}
                                            {item.date && (
                                                <div className="flex items-center text-sm opacity-90">
                                                    <FaCalendarAlt className="w-3 h-3 mr-2" />
                                                    {new Date(item.date).toLocaleDateString()}
                                                </div>
                                            )}
                                        </div>

                                        {/* Category Badge */}
                                        {item.category && (
                                            <div className="absolute top-3 left-3">
                        <span className="bg-black/50 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                          {getCategoryTitle(item.category)}
                        </span>
                                            </div>
                                        )}

                                        {/* Video Indicator */}
                                        {item.type === 'video' && (
                                            <div className="absolute top-3 right-3">
                                                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                                                    <FaPlay className="w-3 h-3 text-white ml-0.5" />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedItem && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                    <div className="relative max-w-4xl max-h-full w-full">

                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedItem(null)}
                            className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
                        >
                            <FaTimes className="w-8 h-8" />
                        </button>

                        {/* Media Content */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                            {selectedItem.type === 'image' && selectedItem.image ? (
                                <div className="relative aspect-video max-h-[70vh]">
                                    <Image
                                        src={urlFor(selectedItem.image).width(800).height(600).url()}
                                        alt={selectedItem.title || 'Gallery image'}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            ) : selectedItem.type === 'video' && selectedItem.videoUrl ? (
                                <div className="aspect-video">
                                    <iframe
                                        src={selectedItem.videoUrl}
                                        className="w-full h-full"
                                        allowFullScreen
                                        frameBorder="0"
                                    />
                                </div>
                            ) : null}

                            {/* Media Info */}
                            {(selectedItem.title || selectedItem.caption || selectedItem.date) && (
                                <div className="p-6">
                                    {selectedItem.title && (
                                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                            {selectedItem.title}
                                        </h3>
                                    )}
                                    {selectedItem.caption && (
                                        <p className="text-gray-600 mb-3 leading-relaxed">
                                            {selectedItem.caption}
                                        </p>
                                    )}
                                    {selectedItem.date && (
                                        <div className="flex items-center text-sm text-gray-500">
                                            <FaCalendarAlt className="w-4 h-4 mr-2" />
                                            {new Date(selectedItem.date).toLocaleDateString()}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Back Navigation */}
            <section className="py-8 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <a
                        href="/academics"
                        className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-800 transition-colors group"
                    >
                        <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Academics
                    </a>
                </div>
            </section>
        </>
    )
}
