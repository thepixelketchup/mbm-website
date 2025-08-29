import { defineType, defineField } from 'sanity'

export default defineType({
    name:'contactSection',
    title:'Contact Details & Form',
    type:'object',
    fields:[
        defineField({ name:'address', type:'string' }),
        defineField({ name:'phone',   type:'string' }),
        defineField({ name:'email',   type:'string' }),
        defineField({ name:'showForm',type:'boolean', initialValue:true, title:'Include Enquiry Form?' })
    ],
    preview:{ prepare:() => ({ title:'Contact Section' }) }
})
