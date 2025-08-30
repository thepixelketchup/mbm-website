import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'admissionDocument',
    title: 'Admission Document',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Document Title',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'description',
            title: 'Document Description',
            type: 'text',
            rows: 2
        }),
        defineField({
            name: 'file',
            title: 'Document File',
            type: 'file',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'category',
            title: 'Document Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Application Forms', value: 'forms' },
                    { title: 'Fee Structure', value: 'fees' },
                    { title: 'Academic Documents', value: 'academic' },
                    { title: 'Admission Guidelines', value: 'guidelines' },
                    { title: 'Prospectus', value: 'prospectus' },
                    { title: 'Other Documents', value: 'other' }
                ]
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'fileSize',
            title: 'File Size',
            type: 'string',
            description: 'e.g., 2.5 MB'
        }),
        defineField({
            name: 'lastUpdated',
            title: 'Last Updated',
            type: 'date'
        }),
        defineField({
            name: 'isActive',
            title: 'Is Active',
            type: 'boolean',
            initialValue: true,
            description: 'Uncheck to hide this document from public view'
        }),
        defineField({
            name: 'displayOrder',
            title: 'Display Order',
            type: 'number',
            description: 'Lower numbers appear first'
        })
    ],
    preview: {
        select: {
            title: 'title',
            category: 'category',
            isActive: 'isActive'
        },
        prepare(selection) {
            return {
                title: selection.title,
                subtitle: `${selection.category}${selection.isActive ? '' : ' (Inactive)'}`
            }
        }
    },
    orderings: [
        {
            title: 'Display Order',
            name: 'displayOrder',
            by: [{ field: 'displayOrder', direction: 'asc' }]
        },
        {
            title: 'Category',
            name: 'category',
            by: [{ field: 'category', direction: 'asc' }]
        }
    ]
})
