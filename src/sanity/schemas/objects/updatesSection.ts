import { defineType, defineField } from 'sanity'

export default defineType({
    name:'updatesSection',
    title:'Quick Updates List',
    type:'object',
    fields:[
        defineField({
            name:'items',
            title:'Updates (Reference list)',
            type:'array',
            of:[{ type:'reference', to:[{type:'quickUpdate'}] }]
        })
    ],
    preview:{ prepare:() => ({ title:'Quick Updates' }) }
})
