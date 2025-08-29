import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'achievementsSection',
    title: 'Achievements Section',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Section Title',
            type: 'string',
            initialValue: 'Our Achievements',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'subtitle',
            title: 'Section Subtitle',
            type: 'string',
            initialValue: 'We are honoured to be recognised for our commitment to quality'
        }),
        defineField({
            name: 'achievements',
            title: 'Achievements List',
            type: 'array',
            of: [{ type: 'achievement' }],
            validation: Rule => Rule.min(1).max(20)
        }),
        defineField({
            name: 'viewAllLink',
            title: 'View All Link (optional)',
            type: 'string'
        })
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'achievements'
        },
        prepare(selection) {
            return {
                title: selection.title,
                subtitle: `${selection.subtitle?.length || 0} achievements`
            }
        }
    }
})
