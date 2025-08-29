import { defineType, defineField } from 'sanity'

export default defineType({
    name:'quoteSection',
    title:'Quote Section',
    type:'object',
    fields:[
        defineField({ name:'quote', type:'text',   rows:3 }),
        defineField({ name:'author',type:'string' })
    ],
    preview:{ select:{title:'quote'} }
})
