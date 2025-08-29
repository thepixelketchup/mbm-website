import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'educationNetworkSection',
    title: 'Education Network Section',
    type: 'object',
    fields: [
        defineField({
            name: 'sectionTitle',
            title: 'Section Title',
            type: 'string',
            initialValue: 'Podar Education Network',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'sectionSubtitle',
            title: 'Section Subtitle',
            type: 'string',
            initialValue: 'More Than Grades'
        }),
        defineField({
            name: 'image',
            title: 'Section Image/Video Thumbnail',
            type: 'image',
            options: { hotspot: true },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'description',
            title: 'Description Text',
            type: 'text',
            rows: 6,
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'readMoreUrl',
            title: 'Read More URL',
            type: 'string',
            description: 'URL for the Read More button (as string)'
        })
    ],
    preview: {
        select: {
            title: 'sectionTitle',
            subtitle: 'sectionSubtitle',
            media: 'image'
        }
    }
})
