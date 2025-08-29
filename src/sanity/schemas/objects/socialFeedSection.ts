import { defineType, defineField } from 'sanity'

export default defineType({
    name:'socialFeedSection',
    title:'Social Feed Embed',
    type:'object',
    fields:[
        defineField({ name:'embedCode', type:'text', title:'Embed <iFrame/HTML>' })
    ],
    preview:{ prepare:() => ({ title:'Social Media Feed' }) }
})
