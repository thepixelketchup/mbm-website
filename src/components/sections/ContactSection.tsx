'use client'

import Link from 'next/link'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaPaperPlane
} from 'react-icons/fa'

const socialIcons = {
    facebook: FaFacebookF,
    twitter: FaTwitter,
    instagram: FaInstagram,
    linkedin: FaLinkedinIn,
    youtube: FaYoutube
}

interface ContactSectionProps {
    section: {
        sectionTitle?: string
        mapEmbed?: string
        formFields?: Array<{
            name: string
            label: string
            type: string
            required?: boolean
            placeholder?: string
        }>
        headOffice?: any[]
        branches?: any[]
        faculty?: Array<{
            name: string
            designation?: string
            email?: string
            phone?: string
            imageUrl?: string
        }>
        socialLinks?: Array<{
            platform: string
            url: string
        }>
    }
}

export default function ContactSection({ section }: ContactSectionProps) {
    if (!section) return null

    return (
        <section className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e0e7ff' fill-opacity='0.3'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

    <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {section.sectionTitle && (
            <div className="text-center mb-20">
                <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                    {section.sectionTitle}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
            </div>
        )}

        {section.mapEmbed && (
            <div className="mb-20">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-video group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div
                        className="w-full h-full scale-105 group-hover:scale-100 transition-transform duration-700"
                        dangerouslySetInnerHTML={{ __html: section.mapEmbed }}
                    />
                </div>
            </div>
        )}

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2 space-y-12">

                <div className="grid md:grid-cols-2 gap-8">
                    {section.headOffice && (
                        <div className="group">
                            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group-hover:-translate-y-2">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white mr-4">
                                        <FaMapMarkerAlt className="text-xl" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Head Office</h3>
                                </div>
                                <div className="prose prose-gray text-gray-600">
                                    <PortableText value={section.headOffice} />
                                </div>
                            </div>
                        </div>
                    )}

                    {section.branches && (
                        <div className="group">
                            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group-hover:-translate-y-2">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white mr-4">
                                        <FaMapMarkerAlt className="text-xl" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Branches</h3>
                                </div>
                                <div className="prose prose-gray text-gray-600">
                                    <PortableText value={section.branches} />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {section.faculty && section.faculty.length > 0 && (
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                            Faculty Contacts
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {section.faculty.map((member, index) => (
                                <div
                                    key={`${member.name}-${index}`}
                                    className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
                                >
                                    <div className="flex items-start gap-4">
                                        {member.imageUrl && (
                                            <div className="relative w-16 h-16 rounded-full overflow-hidden ring-4 ring-blue-100 group-hover:ring-blue-200 transition-colors flex-shrink-0">
                                                <Image
                                                    src={member.imageUrl}
                                                    alt={member.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        )}
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-lg text-gray-900 mb-1">
                                                {member.name}
                                            </h4>
                                            {member.designation && (
                                                <p className="text-sm text-blue-600 font-medium mb-3">
                                                    {member.designation}
                                                </p>
                                            )}
                                            <div className="space-y-2">
                                                {member.email && (
                                                    <Link
                                                        href={`mailto:${member.email}`}
                                                        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm"
                                                    >
                                                        <FaEnvelope className="text-xs" />
                                                        {member.email}
                                                    </Link>
                                                )}
                                                {member.phone && (
                                                    <Link
                                                        href={`tel:${member.phone}`}
                                                        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm"
                                                    >
                                                        <FaPhone className="text-xs" />
                                                        {member.phone}
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <div className="lg:col-span-1">
                <div className="sticky top-8">
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
                            <h3 className="text-2xl font-bold mb-2">Get In Touch</h3>
                            <p className="text-blue-100">We'd love to hear from you</p>
                        </div>
                        <div className="p-8">
                            <ContactForm fields={section.formFields || []} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {section.socialLinks && section.socialLinks.length > 0 && (
            <div className="mt-20 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Follow Us</h3>
                <div className="flex justify-center gap-4">
                    {section.socialLinks.map((social, index) => {
                        const IconComponent = socialIcons[social.platform as keyof typeof socialIcons]
                        return (
                            <Link
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative"
                            >
                                <div className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-white hover:bg-gradient-to-br hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                                    {IconComponent ? <IconComponent size={20} /> : social.platform}
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        )}
    </div>
</section>
)
}

function ContactForm({ fields }: { fields: any[] }) {
    if (!fields || fields.length === 0) return null

    return (
        <form action="/api/contact" method="POST" className="space-y-6">
            {fields.map((field) => (
                <div key={field.name} className="group">
                    <label
                        htmlFor={field.name}
                        className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                        {field.label}
                        {field.required && <span className="text-red-500 ml-1">*</span>}
                    </label>

                    {field.type === 'textarea' ? (
                        <textarea
                            id={field.name}
                            name={field.name}
                            required={field.required}
                            placeholder={field.placeholder}
                            rows={4}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 resize-none"
                        />
                    ) : (
                        <input
                            type={field.type}
                            id={field.name}
                            name={field.name}
                            required={field.required}
                            placeholder={field.placeholder}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200"
                        />
                    )}
                </div>
            ))}

            <button
                type="submit"
                className="group w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
            >
                <span>Send Message</span>
                <FaPaperPlane className="text-sm group-hover:translate-x-1 transition-transform" />
            </button>
        </form>
    )
}
