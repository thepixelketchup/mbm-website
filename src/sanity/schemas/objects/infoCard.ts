import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'infoCard',
    title: 'Information Card',
    type: 'object',
    fields: [
        defineField({
            name: 'icon',
            title: 'Icon',
            type: 'image',
            options: { hotspot: true },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'label',
            title: 'Label',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'link',
            title: 'Link/URL',
            type: 'string',
            validation: Rule => Rule.required()
        })
    ],
    preview: {
        select: {
            title: 'label',
            media: 'icon'
        }
    }
})
