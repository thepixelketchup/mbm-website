'use client'

import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@/lib/sanity.client'
import {
    FaBook,
    FaDownload,
    FaArrowLeft,
    FaGraduationCap,
    FaFileAlt
} from 'react-icons/fa'

interface CurriculumDocument {
    _id: string
    title: string
    description?: string
    file: any
    category: string
    fileSize?: string
    isActive: boolean
    displayOrder?: number
}

interface GradeInfo {
    _key: string
    grade: string
    description?: string
    subjects?: string[]
    syllabusDocument?: CurriculumDocument
}

interface CurriculumSectionProps {
    section: {
        title: string
        subtitle?: string
        heroImage?: any
        introContent?: any[]
        autoSyncDocuments: boolean
        documentCategories?: string[]
        selectedDocuments?: CurriculumDocument[]
        gradeWiseCurriculum?: GradeInfo[]
    }
    allDocuments?: CurriculumDocument[] // Auto-synced documents from admission documents
}

export default function CurriculumSection({ section, allDocuments = [] }: CurriculumSectionProps) {
    if (!section) return null

    // Determine which documents to display
    let documentsToShow: CurriculumDocument[] = []

    if (section.autoSyncDocuments) {
        // Show all active documents, optionally filtered by category
        documentsToShow = allDocuments.filter(doc => {
            if (!doc.isActive) return false
            if (section.documentCategories && section.documentCategories.length > 0) {
                return section.documentCategories.includes(doc.category)
            }
            return true
        })
    } else {
        // Show only selected documents
        documentsToShow = section.selectedDocuments || []
    }

    // Sort documents by display order and then by category
    documentsToShow.sort((a, b) => {
        if (a.displayOrder !== undefined && b.displayOrder !== undefined) {
            return a.displayOrder - b.displayOrder
        }
        if (a.displayOrder !== undefined) return -1
        if (b.displayOrder !== undefined) return 1
        return a.category.localeCompare(b.category)
    })

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 overflow-hidden">
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
                            <FaBook className="w-12 h-12" />
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
                        <div className="prose prose-xl prose-indigo max-w-none text-center">
                            <PortableText value={section.introContent} />
                        </div>
                    </div>
                </section>
            )}

            {/* Quick Downloads */}
            {documentsToShow.length > 0 && (
                <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-indigo-700 mb-4">
                                Download Curriculum Documents
                            </h2>
                            <p className="text-xl text-gray-600">
                                {section.autoSyncDocuments
                                    ? 'Automatically updated curriculum documents'
                                    : 'Selected curriculum documents for download'
                                }
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {documentsToShow.map((doc) => (
                                <div key={doc._id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 group hover:-translate-y-2">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                                            <FaFileAlt className="w-6 h-6 text-white" />
                                        </div>
                                        {doc.fileSize && (
                                            <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {doc.fileSize}
                      </span>
                                        )}
                                    </div>

                                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                                        {doc.title}
                                    </h3>

                                    {doc.description && (
                                        <p className="text-gray-600 text-sm mb-4">
                                            {doc.description}
                                        </p>
                                    )}

                                    <a
                                        href={doc.file.asset.url}
                                        download
                                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-200"
                                    >
                                        <FaDownload className="w-4 h-4" />
                                        Download
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Grade-wise Curriculum */}
            {section.gradeWiseCurriculum && section.gradeWiseCurriculum.length > 0 && (
                <section className="py-20 bg-white">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-indigo-700 mb-4">
                                Grade-wise Curriculum
                            </h2>
                            <p className="text-xl text-gray-600">
                                Detailed curriculum overview for each grade level
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {section.gradeWiseCurriculum.map((grade) => (
                                <div key={grade._key} className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">

                                    <div className="flex items-center mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full flex items-center justify-center mr-4">
                                            <FaGraduationCap className="w-8 h-8 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-indigo-700">
                                                {grade.grade}
                                            </h3>
                                        </div>
                                    </div>

                                    {grade.description && (
                                        <p className="text-gray-700 mb-6 leading-relaxed">
                                            {grade.description}
                                        </p>
                                    )}

                                    {grade.subjects && grade.subjects.length > 0 && (
                                        <div className="mb-6">
                                            <h4 className="font-semibold text-indigo-600 mb-3">Subjects:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {grade.subjects.map((subject, index) => (
                                                    <span key={index} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                            {subject}
                          </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {grade.syllabusDocument && (
                                        <a
                                            href={grade.syllabusDocument.file.asset.url}
                                            download
                                            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200"
                                        >
                                            <FaDownload className="w-4 h-4" />
                                            Download Syllabus
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Auto-sync Notice */}
            {section.autoSyncDocuments && (
                <section className="py-8 bg-blue-600 text-white">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <p className="text-blue-100">
                            📄 Curriculum documents are automatically synced with our admission documents and updated regularly
                        </p>
                    </div>
                </section>
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
