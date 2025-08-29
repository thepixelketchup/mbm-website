import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'achievement',
    title: 'Achievement',
    type: 'object',
    fields: [
        defineField({
            name: 'image',
            title: 'Achievement Image',
            type: 'image',
            options: { hotspot: true },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'description',
            title: 'Achievement Description',
            type: 'text',
            rows: 4,
            validation: Rule => Rule.required().max(200)
        })
    ],
    preview: {
        select: {
            title: 'description',
            media: 'image'
        },
        prepare(selection) {
            return {
                title: selection.title?.substring(0, 50) + '...',
                media: selection.media
            }
        }
    }
})
