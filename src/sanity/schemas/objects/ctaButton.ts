import { defineType, defineField } from 'sanity'

export default defineType({
    name:'ctaButton',
    title:'CTA Button',
    type:'object',
    fields:[
        defineField({ name:'text', type:'string', title:'Label' }),
        defineField({ name:'url',  type:'string', title:'URL / Slug' })
    ],
    preview:{ select:{title:'text'} }
})
