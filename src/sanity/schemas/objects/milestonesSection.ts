import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'milestonesSection',
    title: 'Milestones & Achievements Section',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Section Title',
            type: 'string',
            initialValue: 'Milestones & Achievements',
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
            name: 'introduction',
            title: 'Introduction Content',
            type: 'array',
            of: [{ type: 'block' }]
        }),
        defineField({
            name: 'achievements',
            title: 'Major Achievements',
            type: 'array',
            of: [{
                type: 'object',
                name: 'achievement',
                fields: [
                    defineField({
                        name: 'year',
                        title: 'Year',
                        type: 'string',
                        validation: Rule => Rule.required()
                    }),
                    defineField({
                        name: 'title',
                        title: 'Achievement Title',
                        type: 'string',
                        validation: Rule => Rule.required()
                    }),
                    defineField({
                        name: 'description',
                        title: 'Achievement Description',
                        type: 'text',
                        validation: Rule => Rule.required()
                    }),
                    defineField({
                        name: 'category',
                        title: 'Achievement Category',
                        type: 'string',
                        options: {
                            list: [
                                { title: 'Academic Excellence', value: 'academic' },
                                { title: 'Infrastructure', value: 'infrastructure' },
                                { title: 'Recognition & Awards', value: 'awards' },
                                { title: 'Expansion', value: 'expansion' },
                                { title: 'Innovation', value: 'innovation' }
                            ]
                        }
                    }),
                    defineField({
                        name: 'isHighlight',
                        title: 'Highlight Achievement',
                        type: 'boolean',
                        initialValue: false
                    })
                ],
                preview: {
                    select: {
                        title: 'title',
                        subtitle: 'year',
                        category: 'category'
                    },
                    prepare(selection) {
                        return {
                            title: selection.title,
                            subtitle: `${selection.year} - ${selection.category}`
                        }
                    }
                }
            }],
            validation: Rule => Rule.min(1)
        }),
        defineField({
            name: 'statistics',
            title: 'Key Statistics',
            type: 'array',
            of: [{
                type: 'object',
                name: 'statistic',
                fields: [
                    defineField({
                        name: 'number',
                        title: 'Number/Value',
                        type: 'string',
                        validation: Rule => Rule.required()
                    }),
                    defineField({
                        name: 'label',
                        title: 'Label',
                        type: 'string',
                        validation: Rule => Rule.required()
                    })
                ],
                preview: {
                    select: {
                        title: 'number',
                        subtitle: 'label'
                    }
                }
            }]
        })
    ],
    preview: {
        select: {
            title: 'title',
            achievements: 'achievements'
        },
        prepare(selection) {
            return {
                title: selection.title,
                subtitle: `${selection.achievements?.length || 0} achievements`
            }
        }
    }
})
