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
        defineField({
            name: 'documents',
            title: 'Admission Documents',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{ type: 'admissionDocument' }]
            }],
            description: 'Select documents to display in admissions section'
        }),
        defineField({
            name: 'admissionProcess',
            title: 'Admission Process Steps',
            type: 'array',
            of: [{
                type: 'object',
                name: 'processStep',
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
                defineField({ name: 'phone', title: 'Phone Number', type: 'string' }),
                defineField({ name: 'email', title: 'Email Address', type: 'string' }),
                defineField({ name: 'office', title: 'Office Address', type: 'text', rows: 2 }),
                defineField({ name: 'hours', title: 'Office Hours', type: 'string' })
            ]
        })
    ],
    preview: {
        select: {
            title: 'title'
        }
    }
})
