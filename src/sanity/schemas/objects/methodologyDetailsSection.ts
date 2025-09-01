import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'methodologyDetailSection',
    title: 'Methodology Detail Section',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Section Title',
            type: 'string',
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
            name: 'keyPrinciples',
            title: 'Key Principles',
            type: 'array',
            of: [{
                type: 'object',
                name: 'principle',
                fields: [
                    defineField({
                        name: 'title',
                        title: 'Principle Title',
                        type: 'string',
                        validation: Rule => Rule.required()
                    }),
                    defineField({
                        name: 'description',
                        title: 'Principle Description',
                        type: 'array',
                        of: [{ type: 'block' }]
                    }),
                    defineField({
                        name: 'iconDescription',
                        title: 'Icon Description',
                        type: 'string',
                        description: 'Describe what icon represents this principle (e.g., "target", "brain", "heart", "plant")'
                    })
                ],
                preview: {
                    select: { title: 'title' }
                }
            }]
        }),
        defineField({
            name: 'practicalApplications',
            title: 'Practical Applications',
            type: 'array',
            of: [{
                type: 'object',
                name: 'application',
                fields: [
                    defineField({
                        name: 'title',
                        title: 'Application Title',
                        type: 'string',
                        validation: Rule => Rule.required()
                    }),
                    defineField({
                        name: 'description',
                        title: 'Description',
                        type: 'text',
                        rows: 3
                    }),
                    defineField({
                        name: 'image',
                        title: 'Application Image',
                        type: 'image',
                        options: { hotspot: true }
                    }),
                    defineField({
                        name: 'benefits',
                        title: 'Benefits',
                        type: 'array',
                        of: [{ type: 'string' }]
                    })
                ],
                preview: {
                    select: { title: 'title', media: 'image' }
                }
            }]
        }),
        defineField({
            name: 'outcomes',
            title: 'Expected Outcomes',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'List the key outcomes students achieve through this methodology'
        })
    ]
})
