import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'contentPageSection',
    title: 'Content Page Section',
    type: 'object',
    fields: [
        defineField({
            name: 'pageType',
            title: 'Page Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Leadership Team', value: 'leadership' },
                    { title: 'Milestones & Achievements', value: 'milestones' },
                    { title: 'Founding Story', value: 'founding' },
                    { title: 'Mission & Vision', value: 'mission' },
                    { title: 'Timeline of Key Events', value: 'timeline' }
                ]
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'title',
            title: 'Page Title',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'subtitle',
            title: 'Page Subtitle',
            type: 'string'
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero Background Image',
            type: 'image',
            options: { hotspot: true }
        }),
        defineField({
            name: 'content',
            title: 'Main Content',
            type: 'array',
            of: [
                { type: 'block' },
                {
                    type: 'image',
                    options: { hotspot: true }
                }
            ],
            validation: Rule => Rule.required()
        })
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'pageType',
            media: 'heroImage'
        }
    }
})
