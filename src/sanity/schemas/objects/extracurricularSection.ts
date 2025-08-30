import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'extracurricularSection',
    title: 'Extracurricular Activities Section',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Section Title',
            type: 'string',
            initialValue: 'Extracurricular Activities',
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
            name: 'activities',
            title: 'Activities & Events',
            type: 'array',
            of: [{
                type: 'object',
                name: 'activity',
                fields: [
                    defineField({
                        name: 'title',
                        title: 'Activity/Event Title',
                        type: 'string',
                        validation: Rule => Rule.required()
                    }),
                    defineField({
                        name: 'category',
                        title: 'Category',
                        type: 'string',
                        options: {
                            list: [
                                { title: 'Sports', value: 'sports' },
                                { title: 'Arts & Culture', value: 'arts' },
                                { title: 'Academic Clubs', value: 'academic' },
                                { title: 'Technology', value: 'tech' },
                                { title: 'Community Service', value: 'service' },
                                { title: 'Special Events', value: 'events' }
                            ]
                        },
                        validation: Rule => Rule.required()
                    }),
                    defineField({
                        name: 'description',
                        title: 'Activity Description',
                        type: 'array',
                        of: [{ type: 'block' }],
                        validation: Rule => Rule.required()
                    }),
                    defineField({
                        name: 'images',
                        title: 'Activity Images',
                        type: 'array',
                        of: [{ type: 'image', options: { hotspot: true } }],
                        validation: Rule => Rule.min(1).max(6)
                    }),
                    defineField({
                        name: 'schedule',
                        title: 'Schedule/Frequency',
                        type: 'string'
                    }),
                    defineField({
                        name: 'coordinator',
                        title: 'Activity Coordinator',
                        type: 'string'
                    }),
                    defineField({
                        name: 'achievements',
                        title: 'Recent Achievements',
                        type: 'array',
                        of: [{ type: 'string' }]
                    })
                ],
                preview: {
                    select: {
                        title: 'title',
                        subtitle: 'category',
                        media: 'images.0'
                    }
                }
            }],
            validation: Rule => Rule.min(1)
        })
    ],
    preview: {
        select: {
            title: 'title',
            activities: 'activities'
        },
        prepare(selection) {
            return {
                title: selection.title,
                subtitle: `${selection.activities?.length || 0} activities`
            }
        }
    }
})
