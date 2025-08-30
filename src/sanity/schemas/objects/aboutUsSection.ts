import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'aboutUsSection',
    title: 'About Us Section',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Section Title',
            type: 'string',
            initialValue: 'About Us',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'heroImage',
            title: 'Main Hero Image',
            type: 'image',
            options: { hotspot: true },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'description',
            title: 'Main Description',
            type: 'array',
            of: [{ type: 'block' }],
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'personName',
            title: 'Person Name',
            type: 'string',
            placeholder: 'Dr. Jane Smith'
        }),
        defineField({
            name: 'personRole',
            title: 'Person Role/Title',
            type: 'string',
            placeholder: 'Principal / Trustee / Chairman / Director'
        }),
        defineField({
            name: 'personImage',
            title: 'Person Photo',
            type: 'image',
            options: { hotspot: true }
        }),
        defineField({
            name: 'personMessage',
            title: 'Message from Person',
            type: 'array',
            of: [{ type: 'block' }]
        }),
        defineField({
            name: 'missionTitle',
            title: 'Mission Title',
            type: 'string',
            initialValue: 'Our Mission'
        }),
        defineField({
            name: 'missionContent',
            title: 'Mission Statement',
            type: 'array',
            of: [{ type: 'block' }],
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'visionTitle',
            title: 'Vision Title',
            type: 'string',
            initialValue: 'Our Vision'
        }),
        defineField({
            name: 'visionContent',
            title: 'Vision Statement',
            type: 'array',
            of: [{ type: 'block' }],
            validation: Rule => Rule.required()
        })
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'personName',
            media: 'heroImage'
        }
    }
})
