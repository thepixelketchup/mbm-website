import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'foundingStorySection',
    title: 'Founding Story Section',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Section Title',
            type: 'string',
            initialValue: 'Founding Story',
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
            name: 'foundingYear',
            title: 'Founding Year',
            type: 'string',
            initialValue: '1927'
        }),
        defineField({
            name: 'founderName',
            title: 'Founder Name',
            type: 'string'
        }),
        defineField({
            name: 'storyContent',
            title: 'Founding Story Content',
            type: 'array',
            of: [{ type: 'block' }],
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'milestones',
            title: 'Key Founding Milestones',
            type: 'array',
            of: [{
                type: 'object',
                name: 'milestone',
                fields: [
                    defineField({
                        name: 'year',
                        title: 'Year',
                        type: 'string',
                        validation: Rule => Rule.required()
                    }),
                    defineField({
                        name: 'description',
                        title: 'Milestone Description',
                        type: 'text',
                        validation: Rule => Rule.required()
                    })
                ],
                preview: {
                    select: {
                        title: 'year',
                        subtitle: 'description'
                    }
                }
            }]
        }),
        defineField({
            name: 'legacyContent',
            title: 'Legacy & Impact Content',
            type: 'array',
            of: [{ type: 'block' }]
        })
    ],
    preview: {
        select: {
            title: 'title',
            media: 'heroImage'
        }
    }
})
