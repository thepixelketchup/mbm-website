import {defineType, defineField} from 'sanity'

export default defineType({
    name:  'facilitiesSection',
    title: 'Facilities Section',
    type:  'object',
    fields: [
        defineField({name: 'content', type: 'array', of: [{type: 'block'}]}),
        defineField({name: 'images',  type: 'array', of: [{type: 'image', options:{hotspot:true}}]})
    ],
    preview: {prepare: () => ({title: 'Facilities Section'})}
})
