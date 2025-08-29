import {defineType, defineField} from 'sanity'

export default defineType({
    name : 'footer',
    title: 'Footer',
    type : 'document',
    fields: [
        defineField({
            name:'pages',
            title:'Our Pages',
            type:'array',
            of:[{
                type:'object',
                fields:[
                    {name:'label', type:'string', validation:R=>R.required()},
                    {name:'href',  type:'string', validation:R=>R.required()}
                ],
                preview:{select:{title:'label'}}
            }]
        }),

        defineField({
            name:'headOffice',
            title:'Head Office (rich text)',
            type:'array',
            of:[{type:'block'}]
        }),

        defineField({
            name:'branches',
            title:'Branches (rich text)',
            type:'array',
            of:[{type:'block'}]
        }),

        defineField({
            name:'emails',
            title:'Mail IDs',
            type:'array',
            of:[{
                type:'object',
                fields:[
                    {name:'label', type:'string', initialValue:'Email', hidden:true},
                    {name:'href',  type:'string', title:'Email address'}
                ],
                preview:{select:{title:'href'}}
            }]
        }),

        defineField({
            name:'copyright',
            title:'Copyright Text',
            type :'string',
            initialValue:'All Rights Reserved. © Mahatma Buddha Memorial Inter College'
        })
    ],
    preview:{prepare:() => ({title:'Footer'})}
})
