import {defineType, defineField} from 'sanity'

export default defineType({
    name:  'navigation',
    title: 'Navigation',
    type:  'document',
    groups:[
        {name:'general', title:'General', default:true},
        {name:'links',   title:'Links'}
    ],
    fields: [
        defineField({
            name:'logo',
            title:'Logo Image',
            type:'image',
            group:'general',
            options:{hotspot:true}
        }),

        defineField({
            name:'items',
            title:'Main Links',
            type:'array',
            group:'links',
            of:[{
                type:'object',
                fields:[
                    {name:'label', type:'string',  title:'Text', validation:R=>R.required()},
                    {name:'href',  type:'string',  title:'URL / Slug', validation:R=>R.required()},
                    {name:'submenu', title:'Sub-links', type:'array', of:[{
                            type:'object',
                            fields:[
                                {name:'label', type:'string',  title:'Text', validation:R=>R.required()},
                                {name:'href',  type:'string',  title:'URL / Slug', validation:R=>R.required()}
                            ],
                            preview:{select:{title:'label'}}
                        }]}
                ],
                preview:{select:{title:'label'}}
            }]
        })
    ]
})
