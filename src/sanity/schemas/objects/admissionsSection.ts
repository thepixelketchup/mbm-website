import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'admissionsSection',
    title: 'Admissions Section',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Section Title',
            type: 'string',
            initialValue: 'Admissions',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'subtitle',
            title: 'Section Subtitle',
            type: 'string',
            description: 'Brief description about admissions process'
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
            of: [{ type: 'block' }],
            description: 'Introduction text about the admissions process'
        }),
        defineField({
            name: 'documents',
            title: 'Downloadable Documents',
            type: 'array',
            of: [{
                type: 'object',
                name: 'admissionDocument', // ← Changed from 'document' to avoid conflict
                fields: [
                    defineField({
                        name: 'title',
                        title: 'Document Title',
                        type: 'string',
                        validation: Rule => Rule.required()
                    }),
                    defineField({
                        name: 'description',
                        title: 'Document Description',
                        type: 'text',
                        rows: 2
                    }),
                    defineField({
                        name: 'file',
                        title: 'Document File',
                        type: 'file',
                        validation: Rule => Rule.required()
                    }),
                    defineField({
                        name: 'category',
                        title: 'Document Category',
                        type: 'string',
                        options: {
                            list: [
                                { title: 'Application Forms', value: 'forms' },
                                { title: 'Fee Structure', value: 'fees' },
                                { title: 'Academic Documents', value: 'academic' },
                                { title: 'Admission Guidelines', value: 'guidelines' },
                                { title: 'Prospectus', value: 'prospectus' },
                                { title: 'Other Documents', value: 'other' }
                            ]
                        },
                        validation: Rule => Rule.required()
                    }),
                    defineField({
                        name: 'fileSize',
                        title: 'File Size (optional)',
                        type: 'string',
                        description: 'e.g., 2.5 MB'
                    }),
                    defineField({
                        name: 'lastUpdated',
                        title: 'Last Updated',
                        type: 'date'
                    })
                ],
                preview: {
                    select: {
                        title: 'title',
                        category: 'category',
                        media: 'file'
                    },
                    prepare(selection) {
                        return {
                            title: selection.title,
                            subtitle: selection.category
                        }
                    }
                }
            }],
            validation: Rule => Rule.min(1)
        }),
        defineField({
            name: 'admissionProcess',
            title: 'Admission Process Steps',
            type: 'array',
            of: [{
                type: 'object',
                name: 'processStep', // ← Using unique name
                fields: [
                    defineField({
                        name: 'stepNumber',
                        title: 'Step Number',
                        type: 'number',
                        validation: Rule => Rule.required().min(1)
                    }),
                    defineField({
                        name: 'title',
                        title: 'Step Title',
                        type: 'string',
                        validation: Rule => Rule.required()
                    }),
                    defineField({
                        name: 'description',
                        title: 'Step Description',
                        type: 'text',
                        validation: Rule => Rule.required()
                    })
                ],
                preview: {
                    select: {
                        title: 'title',
                        stepNumber: 'stepNumber'
                    },
                    prepare(selection) {
                        return {
                            title: `Step ${selection.stepNumber}: ${selection.title}`
                        }
                    }
                }
            }]
        }),
        defineField({
            name: 'contactInfo',
            title: 'Admissions Contact Information',
            type: 'object',
            fields: [
                defineField({
                    name: 'phone',
                    title: 'Phone Number',
                    type: 'string'
                }),
                defineField({
                    name: 'email',
                    title: 'Email Address',
                    type: 'string'
                }),
                defineField({
                    name: 'office',
                    title: 'Office Address',
                    type: 'text',
                    rows: 2
                }),
                defineField({
                    name: 'hours',
                    title: 'Office Hours',
                    type: 'string'
                })
            ]
        })
    ],
    preview: {
        select: {
            title: 'title',
            documents: 'documents'
        },
        prepare(selection) {
            return {
                title: selection.title,
                subtitle: `${selection.documents?.length || 0} documents`
            }
        }
    }
})
