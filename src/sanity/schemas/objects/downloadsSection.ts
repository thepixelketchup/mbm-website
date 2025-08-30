import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'downloadsSection',
    title: 'Downloads Section',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Section Title',
            type: 'string',
            initialValue: 'Downloads',
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
            name: 'autoSync',
            title: 'Auto-sync with Admissions',
            type: 'boolean',
            initialValue: true,
            description: 'Automatically show all active admission documents'
        }),
        defineField({
            name: 'selectedDocuments',
            title: 'Selected Documents (if not auto-syncing)',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{ type: 'admissionDocument' }]
            }],
            hidden: ({ parent }) => parent?.autoSync,
            description: 'Manually select specific documents to display'
        }),
        defineField({
            name: 'categoryFilter',
            title: 'Category Filter',
            type: 'array',
            of: [{ type: 'string' }],
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
            description: 'Show only documents from selected categories (leave empty to show all)'
        })
    ],
    preview: {
        select: {
            title: 'title',
            autoSync: 'autoSync'
        },
        prepare(selection) {
            return {
                title: selection.title,
                subtitle: selection.autoSync ? 'Auto-synced' : 'Manual selection'
            }
        }
    }
})
