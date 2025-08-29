import { defineType, defineField } from 'sanity'

export default defineType({
    name:'siteSettings',
    title:'Site Settings',
    type:'document',
    groups:[
        {name:'nav',    title:'Navigation', default:true},
        {name:'footer', title:'Footer'},
        {name:'social', title:'Social Media'}
    ],
    fields:[
        defineField({
            name:'mainNav',
            title:'Main Navigation Links',
            type:'array',
            group:'nav',
            of:[{
                type:'object',
                fields:[
                    { name:'label', type:'string', title:'Label' },
                    { name:'href',  type:'string', title:'URL / Slug' }
                ],
                preview:{ select:{title:'label'} }
            }]
        }),
        defineField({
            name:'footerLinks',
            title:'Footer Links',
            type:'array',
            group:'footer',
            of:[{ type:'reference', to:[{type:'page'}] }]
        }),
        defineField({
            name:'policies',
            title:'Policy Pages',
            type:'array',
            group:'footer',
            of:[{ type:'reference', to:[{type:'page'}] }]
        }),
        defineField({
            name:'social',
            title:'Social Media Profiles',
            type:'array',
            group:'social',
            of:[{
                type:'object',
                fields:[
                    { name:'platform', type:'string', title:'Platform' },
                    { name:'url',      type:'url',    title:'URL' }
                ],
                preview:{ select:{title:'platform'} }
            }]
        })
    ]
})
