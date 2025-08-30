import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'missionVisionSection',
    title: 'Mission & Vision Section',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Section Title',
            type: 'string',
            initialValue: 'Mission & Vision',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'subtitle',
            title: 'Section Subtitle',
            type: 'string'
        }),
        defineField({
            name: 'introduction',
            title: 'Introduction Content (optional)',
            type: 'array',
            of: [{ type: 'block' }],
            description: 'Optional introduction text before Mission and Vision'
        }),
        defineField({
            name: 'missionTitle',
            title: 'Mission Title',
            type: 'string',
            initialValue: 'Our Mission'
        }),
        defineField({
            name: 'missionContent',
            title: 'Mission Statement',
            type: 'array',
            of: [{ type: 'block' }],
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'visionTitle',
            title: 'Vision Title',
            type: 'string',
            initialValue: 'Our Vision'
        }),
        defineField({
            name: 'visionContent',
            title: 'Vision Statement',
            type: 'array',
            of: [{ type: 'block' }],
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'valuesTitle',
            title: 'Core Values Title (optional)',
            type: 'string'
        }),
        defineField({
            name: 'valuesContent',
            title: 'Core Values Content (optional)',
            type: 'array',
            of: [{ type: 'block' }]
        })
    ],
    preview: {
        select: {
            title: 'title'
        }
    }
})
