import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'leadershipTeamSection',
    title: 'Leadership Team Section',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Section Title',
            type: 'string',
            initialValue: 'Management Committee',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'subtitle',
            title: 'Section Subtitle',
            type: 'string'
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero Background Image',
            type: 'image',
            options: { hotspot: true }
        }),
        defineField({
            name: 'members',
            title: 'Team Members',
            type: 'array',
            of: [{
                type: 'object',
                name: 'teamMember',
                fields: [
                    defineField({
                        name: 'name',
                        title: 'Full Name',
                        type: 'string',
                        validation: Rule => Rule.required()
                    }),
                    defineField({
                        name: 'role',
                        title: 'Role/Position',
                        type: 'string',
                        validation: Rule => Rule.required()
                    }),
                    defineField({
                        name: 'description',
                        title: 'Description/Bio',
                        type: 'array',
                        of: [{ type: 'block' }],
                        validation: Rule => Rule.required()
                    }),
                    defineField({
                        name: 'image',
                        title: 'Photo',
                        type: 'image',
                        options: { hotspot: true },
                        validation: Rule => Rule.required()
                    })
                ],
                preview: {
                    select: {
                        title: 'name',
                        subtitle: 'role',
                        media: 'image'
                    }
                }
            }],
            validation: Rule => Rule.min(1)
        })
    ],
    preview: {
        select: {
            title: 'title',
            members: 'members'
        },
        prepare(selection) {
            return {
                title: selection.title,
                subtitle: `${selection.members?.length || 0} members`
            }
        }
    }
})
