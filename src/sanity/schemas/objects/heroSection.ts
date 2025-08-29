import { defineType, defineField } from 'sanity'
import ctaButton from './ctaButton'

export default defineType({
    name:'heroSection',
    title:'Hero Section',
    type:'object',
    fields:[
        defineField({ name:'backgroundImage', type:'image', title:'Background Image', options:{hotspot:true} }),
        defineField({ name:'title',           type:'string', title:'Heading' }),
        defineField({ name:'subtitle',        type:'string', title:'Sub-heading' }),
        defineField({ name:'cta',             type:'ctaButton', title:'Primary CTA' })
    ],
    preview:{ select:{title:'title', media:'backgroundImage'} }
})
