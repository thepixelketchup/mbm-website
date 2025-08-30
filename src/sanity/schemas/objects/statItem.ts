import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'statItem',
    title: 'Statistic Item',
    type: 'object',
    fields: [
        defineField({
            name: 'number',
            title: 'Number/Value',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'label',
            title: 'Label/Description',
            type: 'string',
            validation: Rule => Rule.required()
        })
    ],
    preview: {
        select: {
            title: 'number',
            subtitle: 'label'
        }
    }
})
