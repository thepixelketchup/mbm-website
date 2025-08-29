import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'teamMember',
    title:'Team Member',
    type: 'document',
    fields: [
        defineField({ name:'name',  title:'Name',  type:'string', validation:R=>R.required() }),
        defineField({ name:'role',  title:'Position / Role', type:'string' }),
        defineField({ name:'bio',   title:'Bio',   type:'array', of:[{type:'block'}]}),
        defineField({ name:'image', title:'Photo', type:'image', options:{hotspot:true} })
    ]
})
