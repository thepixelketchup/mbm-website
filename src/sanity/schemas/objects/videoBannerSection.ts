import { defineType, defineField } from 'sanity'

export default defineType({
    name:'videoBannerSection',
    title:'Video Banner',
    type:'object',
    fields:[
        defineField({ name:'videoUrl',  type:'url',    title:'Video URL (YouTube, Vimeo…)' }),
        defineField({ name:'caption',   type:'string', title:'Caption / Alt text' })
    ],
    preview:{ select:{title:'caption'} }
})
