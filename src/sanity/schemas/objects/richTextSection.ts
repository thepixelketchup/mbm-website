import { defineType } from 'sanity'

export default defineType({
    name:'richTextSection',
    title:'Rich Text Block',
    type:'object',
    fields:[
        { name:'content', type:'array', of:[{type:'block'}] }
    ],
    preview:{ prepare:() => ({ title:'Rich Text' }) }
})
