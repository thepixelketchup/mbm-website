import { defineType, defineField } from 'sanity'

export default defineType({
    name:'quickUpdate',
    title:'Quick Update',
    type:'document',
    fields:[
        defineField({ name:'title', type:'string', validation:R=>R.required() }),
        defineField({ name:'body',  type:'array',  of:[{type:'block'}] }),
        defineField({ name:'publishedAt', type:'datetime', initialValue: () => new Date().toISOString() })
    ],
    orderings: [
        {
            title: 'Published Date desc', by: [{field: 'publishedAt', direction: 'desc'}],
            name: ''
        }
    ]
})
