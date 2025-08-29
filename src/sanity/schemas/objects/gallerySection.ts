import { defineType, defineField } from 'sanity'

export default defineType({
    name:'gallerySection',
    title:'Photo / Video Gallery',
    type:'object',
    fields:[
        defineField({
            name:'items',
            type:'array',
            of:[
                { type:'image', options:{hotspot:true} },
                { type:'file',  title:'Video File' }
            ]
        })
    ],
    preview:{ prepare:() => ({ title:'Gallery' }) }
})
