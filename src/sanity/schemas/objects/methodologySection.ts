import { defineType, defineField } from 'sanity'

export default defineType({
    name:'methodologySection',
    title:'Methodology Section',
    type:'object',
    fields:[
        defineField({
            name:'variant',
            title:'Sub-topic',
            type:'string',
            options:{ list:[
                    { title:'Teaching Approach',      value:'teaching' },
                    { title:'Learning Philosophy',    value:'learning' },
                    { title:'Assessment Practices',   value:'assessment' },
                    { title:'Values & Indian Culture',value:'values' }
                ]},
            validation:R=>R.required()
        }),
        defineField({ name:'content', type:'array', of:[{type:'block'}] })
    ],
    preview:{ select:{title:'variant'} }
})
