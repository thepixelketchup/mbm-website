import { defineType, defineField } from 'sanity'

export default defineType({
    name:'extracurricularSection',
    title:'Extracurricular Activities',
    type:'object',
    fields:[
        defineField({ name:'activities', type:'array', of:[{
                type:'object',
                fields:[
                    { name:'name',  type:'string', title:'Activity Name' },
                    { name:'image', type:'image',  title:'Image', options:{hotspot:true} },
                    { name:'text',  type:'text',   title:'Description', rows:2 }
                ],
                preview:{ select:{title:'name', media:'image'} }
            }] })
    ],
    preview:{ prepare:() => ({ title:'Extracurricular Activities' }) }
})
