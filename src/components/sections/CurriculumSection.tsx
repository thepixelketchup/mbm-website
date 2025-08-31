'use client'

import { FaBook } from 'react-icons/fa'
import SubsectionTemplate from '../subsection_template/subsection-template'

interface CurriculumSectionProps {
  section: {
    title: string
    subtitle?: string
    heroImage?: any
    introContent?: any[]
    autoSyncDocuments?: boolean
    selectedDocuments?: any[]
    gradeWiseCurriculum?: any[]
  }
}

export default function CurriculumSection({ section }: CurriculumSectionProps) {
  return (
    <SubsectionTemplate
      title={section.title}
      subtitle={section.subtitle}
      heroImage={section.heroImage}
      introContent={section.introContent}
      heroIcon={<FaBook className="w-12 h-12" />}
    >
      {/* Add your actual content here - this is the children! */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-indigo-700 mb-4">
            Download Curriculum Documents
          </h2>
          
          {/* Your documents grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Your document cards */}
          </div>
        </div>
      </section>

      {section.gradeWiseCurriculum && (
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-indigo-700 mb-4">
              Grade-wise Curriculum
            </h2>
            {/* Your grade curriculum content */}
          </div>
        </section>
      )}
    </SubsectionTemplate>
  )
}
