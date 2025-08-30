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
        <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e0e7ff' fill-opacity='0.3'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title Section */}
                {section.sectionTitle && (
                    <div className="text-center mb-12 lg:mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent mb-4">
                            {section.sectionTitle}
                        </h2>
                        <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full"></div>
                    </div>
                )}

                {/* Map Section */}
                {section.mapEmbed && (
                    <div className="mb-12 lg:mb-16">
                        <div className="relative overflow-hidden rounded-xl lg:rounded-2xl shadow-xl aspect-video group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-accent to-secondary z-10 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                            <div
                                className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                                dangerouslySetInnerHTML={{ __html: section.mapEmbed }}
                            />
                        </div>
                    </div>
                )}

                {/* Contact Cards Grid */}
                <div className="space-y-12 lg:space-y-16">
                    {/* Office Information Cards */}
                    {(section.headOffice || section.branches) && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {section.headOffice && (
                                <ContactCard
                                    icon={<FaMapMarkerAlt />}
                                    title="Head Office"
                                    content={<PortableText value={section.headOffice} />}
                                />
                            )}
                            {section.branches && (
                                <ContactCard
                                    icon={<FaMapMarkerAlt />}
                                    title="Branches"
                                    content={<PortableText value={section.branches} />}
                                />
                            )}
                        </div>
                    )}

                    {/* Faculty Cards */}
                    {section.faculty && section.faculty.length > 0 && (
                        <div>
                            <h3 className="text-2xl lg:text-3xl font-normal text-foreground mb-8 text-center">
                                Faculty Contacts
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6">
                                {section.faculty.map((member, index) => (
                                    <FacultyCard key={`${member.name}-${index}`} member={member} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Contact Form */}
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white rounded-xl lg:rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                            <div className="bg-gradient-to-r from-primary via-accent/90 to-secondary/80 p-6 lg:p-8 text-white">
                                <h3 className="text-xl lg:text-2xl font-normal text-foreground mb-2">Get In Touch</h3>
                                <p className="text-blue-100 text-sm lg:text-base">We'd love to hear from you</p>
                            </div>
                            <div className="p-6 lg:p-8">
                                <ContactForm fields={section.formFields || []} />
                            </div>
                        </div>
                    </div>

                    {/* Social Links */}
                    {section.socialLinks && section.socialLinks.length > 0 && (
                        <div className="text-center">
                            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 lg:mb-8">
                                Follow Us
                            </h3>
                            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                                {section.socialLinks.map((social, index) => {
                                    const IconComponent = socialIcons[social.platform as keyof typeof socialIcons]
                                    return (
                                        <Link
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group"
                                        >
                                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-white hover:bg-gradient-to-br hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                                                {IconComponent ? <IconComponent size={18} /> : social.platform}
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

// Contact Card Component
function ContactCard({ icon, title, content }: { icon: React.ReactNode; title: string; content: React.ReactNode }) {
    return (
        <div className="group">
            <div className="bg-white rounded-xl lg:rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group-hover:-translate-y-1">
                <div className="flex items-center mb-4 lg:mb-6">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-accent to-secondary rounded-lg lg:rounded-xl flex items-center justify-center text-white mr-3 lg:mr-4 flex-shrink-0">
                        <div className="text-lg lg:text-xl">{icon}</div>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-normal text-foreground">{title}</h3>
                </div>
                <div className="prose prose-sm lg:prose-base prose-gray text-foreground/70 max-w-none">
                    {content}
                </div>
            </div>
        </div>
    )
}

// Faculty Card Component
function FacultyCard({ member }: { member: any }) {
    return (
        <div className="group bg-white rounded-lg lg:rounded-xl p-4 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
            <div className="flex flex-col sm:flex-row items-start gap-3 lg:gap-4">
                {member.imageUrl && (
                    <div className="relative w-12 h-12 lg:w-16 lg:h-16 rounded-full overflow-hidden ring-2 lg:ring-4 ring-blue-100 group-hover:ring-blue-200 transition-colors flex-shrink-0 mx-auto sm:mx-0">
                        <Image
                            src={member.imageUrl}
                            alt={member.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                )}
                <div className="flex-1 text-center sm:text-left">
                    <h4 className="font-normal text-base lg:text-lg text-foreground mb-1">
                        {member.name}
                    </h4>
                    {member.designation && (
                        <p className="text-xs lg:text-sm text-foreground font-medium mb-2 lg:mb-3">
                            {member.designation}
                        </p>
                    )}
                    <div className="space-y-1 lg:space-y-2">
                        {member.email && (
                            <Link
                                href={`mailto:${member.email}`}
                                className="flex items-center justify-center sm:justify-start gap-2 text-gray-600 hover:text-primary transition-colors text-xs lg:text-sm"
                            >
                                <FaEnvelope className="text-xs flex-shrink-0" />
                                <span className="truncate">{member.email}</span>
                            </Link>
                        )}
                        {member.phone && (
                            <Link
                                href={`tel:${member.phone}`}
                                className="flex items-center justify-center sm:justify-start gap-2 text-gray-600 hover:text-primary transition-colors text-xs lg:text-sm"
                            >
                                <FaPhone className="text-xs flex-shrink-0" />
                                <span>{member.phone}</span>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

// Contact Form Component
function ContactForm({ fields }: { fields: any[] }) {
    if (!fields || fields.length === 0) return null

    return (
        <form action="/api/contact" method="POST" className="space-y-4 lg:space-y-6">
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
                            className="w-full px-3 lg:px-4 py-2 lg:py-3 border-2 border-gray-200 rounded-lg lg:rounded-xl shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 lg:focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 resize-none text-sm lg:text-base"
                        />
                    ) : (
                        <input
                            type={field.type}
                            id={field.name}
                            name={field.name}
                            required={field.required}
                            placeholder={field.placeholder}
                            className="w-full px-3 lg:px-4 py-2 lg:py-3 border-2 border-gray-200 rounded-lg lg:rounded-xl shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 lg:focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 text-sm lg:text-base"
                        />
                    )}
                </div>
            ))}

            <button
                type="submit"
                className="group w-full bg-gradient-to-r from-primary via-accent to-secondary text-white py-3 lg:py-4 px-4 lg:px-6 rounded-lg lg:rounded-xl font-semibold focus:outline-none focus:ring-2 lg:focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 active:scale-95 text-sm lg:text-base"
            >
                <span>Send Message</span>
                <FaPaperPlane className="text-xs lg:text-sm group-hover:translate-x-1 transition-transform" />
            </button>
        </form>
    )
}
