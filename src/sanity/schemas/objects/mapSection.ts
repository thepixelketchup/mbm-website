import { defineType, defineField } from 'sanity'

export default defineType({
    name:'mapSection',
    title:'Google Map Section',
    type:'object',
    fields:[
        defineField({ name:'iframe', type:'text', title:'Google Maps Embed <iFrame>' })
    ],
    preview:{ prepare:() => ({ title:'Google Map' }) }
})
