import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'gallerySection',
    title: 'Gallery Section',
    type: 'object',
    fields: [
        defineField({
            name: 'sectionTitle',
            title: 'Section Title',
            type: 'string',
            initialValue: 'A Glimpse into a Student\'s Journey at Podar',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'images',
            title: 'Gallery Images',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
            validation: Rule => Rule.min(3).max(8)
        }),
        defineField({
            name: 'ctaText',
            title: 'CTA Button Text',
            type: 'string',
            initialValue: 'ENTER THE STUDENTS JOURNEY'
        }),
        defineField({
            name: 'ctaUrl',
            title: 'CTA Button URL',
            type: 'string',
            description: 'URL as string for the CTA button'
        })
    ],
    preview: {
        select: {
            title: 'sectionTitle',
            images: 'images'
        },
        prepare(selection) {
            return {
                title: selection.title,
                subtitle: `${selection.images?.length || 0} images`
            }
        }
    }
})
