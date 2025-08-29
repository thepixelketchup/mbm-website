import {defineType, defineField} from 'sanity'

export default defineType({
    name:  'contactFormField',
    title: 'Contact Form Field',
    type:  'object',
    fields: [
        defineField({
            name: 'name',
            title: 'Field Name (HTML attribute)',
            type: 'string',
            validation: R => R.required()
        }),
        defineField({
            name: 'label',
            title: 'Field Label',
            type: 'string',
            validation: R => R.required()
        }),
        defineField({
            name: 'type',
            title: 'Input Type',
            type: 'string',
            initialValue: 'text',
            options: {
                list: [
                    {title: 'Text', value: 'text'},
                    {title: 'Email', value: 'email'},
                    {title: 'Phone', value: 'tel'},
                    {title: 'Textarea', value: 'textarea'}
                ]
            }
        }),
        defineField({
            name: 'required',
            title: 'Required Field',
            type: 'boolean',
            initialValue: true
        }),
        defineField({
            name: 'placeholder',
            title: 'Placeholder Text',
            type: 'string'
        })
    ],
    preview: {
        select: {
            title: 'label',
            subtitle: 'type'
        }
    }
})
