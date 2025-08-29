import { defineType, defineField } from 'sanity'

export default defineType({
    name:'timelineSection',
    title:'Timeline of Events',
    type:'object',
    fields:[
        defineField({
            name:'events',
            type:'array',
            of:[{
                type:'object',
                fields:[
                    { name:'year',  type:'string',  title:'Year / Date' },
                    { name:'title', type:'string',  title:'Title' },
                    { name:'text',  type:'text',    title:'Description', rows:2 }
                ],
                preview:{ select:{title:'title', subtitle:'year'} }
            }]
        })
    ],
    preview:{ prepare:() => ({ title:'Timeline' }) }
})
