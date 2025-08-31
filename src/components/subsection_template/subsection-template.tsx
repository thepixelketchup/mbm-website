'use client'

import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@/lib/sanity.client'
import { FaArrowLeft } from 'react-icons/fa'
import { ReactNode } from 'react'

interface SubsectionTemplateProps {
  title: string
  subtitle?: string
  heroImage?: any
  introContent?: any[]
  heroIcon: ReactNode
  children: ReactNode
}

export default function SubsectionTemplate({
  title,
  subtitle,
  heroImage,
  introContent,
  heroIcon,
  children
}: SubsectionTemplateProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-white">
        <h1 className="text-center py-20 font-bold text-5xl">
          <span className="bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
            {title}
          </span>
        </h1>
      </section>

      <section className="relative h-[60vh] flex items-center justify-center bg-white overflow-hidden">
        {heroImage && (
          <div className="absolute inset-0 z-100 w-full px-10">
            <Image
              src={urlFor(heroImage).url()}
              alt={title}
              fill
              className="object-fill"
            />
          </div>
        )}

        <div className="relative z-10 text-center text-white px-6 max-w-5xl">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              {heroIcon}
            </div>
          </div>

          {/* <h1 className="text-4xl lg:text-6xl font-bold mb-4">{title}</h1>
          {subtitle && (
            <p className="text-xl lg:text-2xl font-light opacity-90">{subtitle}</p>
          )} */}
        </div>
      </section>

      {/* Introduction */}
      {introContent && introContent.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="prose prose-xl max-w-none text-center">
              <PortableText value={introContent} />
            </div>
          </div>
        </section>
      )}

      {/* Children Content */}
      {children}

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
