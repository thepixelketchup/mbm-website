import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'methodologyOverviewSection',
  title: 'Methodology Overview Section',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Section Title', type: 'string', initialValue: 'Our Methodology', validation: r => r.required() }),
    defineField({ name: 'subtitle', title: 'Section Subtitle', type: 'string' }),
    defineField({ name: 'heroImage', title: 'Hero Background Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'introContent', title: 'Introduction Content', type: 'array', of: [{ type: 'block' }] }),
    defineField({
      name: 'methodologyCards',
      title: 'Methodology Cards',
      type: 'array',
      of: [{
        type: 'object',
        name: 'methodologyCard',
        fields: [
          defineField({ name: 'title', title: 'Card Title', type: 'string', validation: r => r.required() }),
          defineField({ name: 'description', title: 'Card Description', type: 'text', rows: 3 }),
          defineField({ name: 'iconName', title: 'Icon (describe in words)', type: 'string', description: 'e.g., teacher, lightbulb, clipboard, heart' }),
          defineField({
            name: 'color',
            title: 'Card Color',
            type: 'string',
            options: { list: [
              { title: 'Blue', value: 'blue' },
              { title: 'Green', value: 'green' },
              { title: 'Purple', value: 'purple' },
              { title: 'Orange', value: 'orange' }
            ]}
          }),
          defineField({ name: 'link', title: 'Link to Detailed Page', type: 'string', validation: r => r.required() })
        ]
      }],
      validation: r => r.min(1).max(4)
    })
  ]
})
