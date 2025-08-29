import { defineType, defineField } from 'sanity'

export default defineType({
    name:'download',
    title:'Downloadable File',
    type:'document',
    fields:[
        defineField({ name:'title', type:'string', validation:R=>R.required() }),
        defineField({ name:'file',  type:'file',   validation:R=>R.required() }),
        defineField({ name:'category', type:'string',
            options:{ list:[
                    {title:'Admission Form', value:'admission'},
                    {title:'Academic Calendar', value:'calendar'},
                    {title:'Brochure', value:'brochure'}
                ]}
        })
    ]
})
