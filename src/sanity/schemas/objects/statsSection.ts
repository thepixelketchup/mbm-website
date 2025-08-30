import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'statsSection',
    title: 'Statistics Section',
    type: 'object',
    fields: [
        defineField({
            name: 'stats',
            title: 'Statistics',
            type: 'array',
            of: [{ type: 'statItem' }],
            validation: Rule => Rule.min(1).max(8)
        })
    ],
    preview: {
        select: {
            stats: 'stats'
        },
        prepare(selection) {
            return {
                title: 'Statistics Section',
                subtitle: `${selection.stats?.length || 0} stats`
            }
        }
    }
})
