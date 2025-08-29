import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'infoCardsSection',
    title: 'Information Cards Section',
    type: 'object',
    fields: [
        defineField({
            name: 'sectionTitle',
            title: 'Section Title',
            type: 'string',
            initialValue: 'Information on Podar International School',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'cards',
            title: 'Information Cards',
            type: 'array',
            of: [{ type: 'infoCard' }],
            validation: Rule => Rule.min(1).max(6)
        })
    ],
    preview: {
        select: {
            title: 'sectionTitle',
            cards: 'cards'
        },
        prepare(selection) {
            return {
                title: selection.title,
                subtitle: `${selection.cards?.length || 0} cards`
            }
        }
    }
})
