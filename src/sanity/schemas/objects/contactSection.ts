import {defineType, defineField} from 'sanity'

export default defineType({
    name:  'contactSection',
    title: 'Contact Section',
    type:  'object',
    fields: [
        defineField({
            name: 'sectionTitle',
            title: 'Section Title',
            type: 'string',
            initialValue: 'Contact Us'
        }),

        defineField({
            name: 'mapEmbed',
            title: 'Google Map Embed Code',
            type: 'text',
            rows: 3,
            description: 'Paste the complete iframe code from Google Maps "Embed map"'
        }),

        defineField({
            name: 'formFields',
            title: 'Contact Form Fields',
            type: 'array',
            of: [{type: 'contactFormField'}],
            validation: R => R.min(1).error('At least one form field is required')
        }),

        defineField({
            name: 'headOffice',
            title: 'Head Office Information',
            type: 'array',
            of: [{type: 'block'}]
        }),

        defineField({
            name: 'branches',
            title: 'Branch Information',
            type: 'array',
            of: [{type: 'block'}]
        }),

        defineField({
            name: 'faculty',
            title: 'Faculty Contacts',
            type: 'array',
            of: [{
                type: 'object',
                name: 'facultyMember',
                fields: [
                    defineField({
                        name: 'name',
                        title: 'Faculty Name',
                        type: 'string',
                        validation: R => R.required()
                    }),
                    defineField({
                        name: 'designation',
                        title: 'Position/Designation',
                        type: 'string'
                    }),
                    defineField({
                        name: 'email',
                        title: 'Email Address',
                        type: 'string'
                    }),
                    defineField({
                        name: 'phone',
                        title: 'Phone Number',
                        type: 'string'
                    }),
                    defineField({
                        name: 'image',
                        title: 'Photo',
                        type: 'image',
                        options: {hotspot: true}
                    })
                ],
                preview: {
                    select: {
                        title: 'name',
                        subtitle: 'designation',
                        media: 'image'
                    }
                }
            }]
        }),

        defineField({
            name: 'socialLinks',
            title: 'Social Media Links',
            type: 'array',
            of: [{
                type: 'object',
                name: 'socialLink',
                fields: [
                    defineField({
                        name: 'platform',
                        title: 'Platform',
                        type: 'string',
                        options: {
                            list: [
                                {title: 'Facebook', value: 'facebook'},
                                {title: 'Twitter', value: 'twitter'},
                                {title: 'Instagram', value: 'instagram'},
                                {title: 'LinkedIn', value: 'linkedin'},
                                {title: 'YouTube', value: 'youtube'}
                            ]
                        }
                    }),
                    defineField({
                        name: 'url',
                        title: 'Profile URL',
                        type: 'url'
                    })
                ],
                preview: {
                    select: {
                        title: 'platform',
                        subtitle: 'url'
                    }
                }
            }]
        })
    ],
    preview: {
        select: {
            title: 'sectionTitle'
        },
        prepare(selection) {
            return {
                title: selection.title || 'Contact Section'
            }
        }
    }
})
