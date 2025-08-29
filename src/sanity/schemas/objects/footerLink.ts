import {defineType, defineField} from 'sanity'

export default defineType({
    name:  'footerLink',
    title: 'Footer Link',
    type:  'object',
    fields: [
        defineField({name:'label', type:'string',  validation:R=>R.required()}),
        defineField({name:'href',  type:'string',  validation:R=>R.required()})
    ],
    preview:{select:{title:'label'}}
})
