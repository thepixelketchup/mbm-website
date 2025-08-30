import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'curriculumSection',
    title: 'Academic Curriculum Section',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Section Title',
            type: 'string',
            initialValue: 'Academic Curriculum',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'subtitle',
            title: 'Section Subtitle',
            type: 'string'
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero Background Image',
            type: 'image',
            options: { hotspot: true }
        }),
        defineField({
            name: 'introContent',
            title: 'Introduction Content',
            type: 'array',
            of: [{ type: 'block' }]
        }),
        // REMOVED: curriculumDocuments field - now using auto-sync
        defineField({
            name: 'autoSyncDocuments',
            title: 'Auto-sync with Admission Documents',
            type: 'boolean',
            initialValue: true,
            description: 'Automatically show curriculum-related documents from admission documents'
        }),
        defineField({
            name: 'documentCategories',
            title: 'Document Categories to Show',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'Academic Documents', value: 'academic' },
                    { title: 'Application Forms', value: 'forms' },
                    { title: 'Prospectus', value: 'prospectus' },
                    { title: 'Other Documents', value: 'other' }
                ]
            },
            description: 'Select which document categories to display (leave empty to show all)',
            hidden: ({ parent }) => !parent?.autoSyncDocuments
        }),
        defineField({
            name: 'selectedDocuments',
            title: 'Selected Documents (if not auto-syncing)',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{ type: 'admissionDocument' }]
            }],
            hidden: ({ parent }) => parent?.autoSyncDocuments,
            description: 'Manually select specific documents to display'
        }),
        defineField({
            name: 'gradeWiseCurriculum',
            title: 'Grade-wise Curriculum',
            type: 'array',
            of: [{
                type: 'object',
                name: 'gradeInfo',
                fields: [
                    defineField({
                        name: 'grade',
                        title: 'Grade/Class',
                        type: 'string',
                        validation: Rule => Rule.required()
                    }),
                    defineField({
                        name: 'description',
                        title: 'Description',
                        type: 'text',
                        rows: 2
                    }),
                    defineField({
                        name: 'subjects',
                        title: 'Subjects',
                        type: 'array',
                        of: [{ type: 'string' }]
                    }),
                    defineField({
                        name: 'syllabusDocument',
                        title: 'Syllabus Document',
                        type: 'reference',
                        to: [{ type: 'admissionDocument' }]
                    })
                ],
                preview: {
                    select: {
                        title: 'grade',
                        subtitle: 'description'
                    }
                }
            }]
        })
    ],
    preview: {
        select: {
            title: 'title',
            autoSync: 'autoSyncDocuments'
        },
        prepare(selection) {
            return {
                title: selection.title,
                subtitle: selection.autoSync ? 'Auto-synced with admission documents' : 'Manual document selection'
            }
        }
    }
})
