import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'facilitiesSection',
    title: 'School Facilities Section',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Section Title',
            type: 'string',
            initialValue: 'School Facilities',
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
            name: 'facilities',
            title: 'School Facilities',
            type: 'array',
            of: [{
                type: 'object',
                name: 'facility',
                fields: [
                    defineField({
                        name: 'name',
                        title: 'Facility Name',
                        type: 'string',
                        validation: Rule => Rule.required()
                    }),
                    defineField({
                        name: 'category',
                        title: 'Category',
                        type: 'string',
                        options: {
                            list: [
                                { title: 'Laboratories', value: 'labs' },
                                { title: 'Sports & Recreation', value: 'sports' },
                                { title: 'Dining & Cafeteria', value: 'dining' },
                                { title: 'Library & Study Areas', value: 'library' },
                                { title: 'Campus Shops', value: 'shops' },
                                { title: 'Other Facilities', value: 'other' }
                            ]
                        },
                        validation: Rule => Rule.required()
                    }),
                    defineField({
                        name: 'description',
                        title: 'Description',
                        type: 'array',
                        of: [{ type: 'block' }],
                        validation: Rule => Rule.required()
                    }),
                    defineField({
                        name: 'images',
                        title: 'Facility Images',
                        type: 'array',
                        of: [{ type: 'image', options: { hotspot: true } }],
                        validation: Rule => Rule.min(1).max(5)
                    }),
                    defineField({
                        name: 'features',
                        title: 'Key Features',
                        type: 'array',
                        of: [{ type: 'string' }]
                    }),
                    defineField({
                        name: 'capacity',
                        title: 'Capacity/Size',
                        type: 'string'
                    })
                ],
                preview: {
                    select: {
                        title: 'name',
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
            facilities: 'facilities'
        },
        prepare(selection) {
            return {
                title: selection.title,
                subtitle: `${selection.facilities?.length || 0} facilities`
            }
        }
    }
})
