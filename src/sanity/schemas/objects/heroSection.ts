import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'heroSection',
    title: 'Hero Section',
    type: 'object',
    fields: [
        defineField({
            name: 'backgroundImage',
            title: 'Background Image',
            type: 'image',
            options: { hotspot: true },
            validation: R => R.required()
        }),
        defineField({
            name: 'title',
            title: 'Main Title',
            type: 'string',
            validation: R => R.required().max(100)
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle/Description',
            type: 'text',
            rows: 3
        }),
        defineField({
            name: 'ctaButton',
            title: 'Call to Action Button',
            type: 'object',
            fields: [
                defineField({
                    name: 'text',
                    title: 'Button Text',
                    type: 'string',
                    validation: R => R.required()
                }),
                defineField({
                    name: 'link',
                    title: 'Button Link',
                    type: 'url'
                })
            ]
        }),
        defineField({
            name: 'textPosition',
            title: 'Text Position',
            type: 'string',
            options: {
                list: [
                    { title: 'Left', value: 'left' },
                    { title: 'Center', value: 'center' },
                    { title: 'Right', value: 'right' }
                ]
            },
            initialValue: 'left'
        })
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'subtitle',
            media: 'backgroundImage'
        },
        prepare(selection) {
            return {
                title: selection.title || 'Hero Section',
                subtitle: selection.subtitle,
                media: selection.media
            }
        }
    }
})
