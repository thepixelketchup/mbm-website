import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'methodologyDetailSection',
  title: 'Methodology Detail Section',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Section Title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'subtitle', title: 'Section Subtitle', type: 'string' }),
    defineField({ name: 'heroImage', title: 'Hero Background Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'introContent', title: 'Introduction Content', type: 'array', of: [{ type: 'block' }] }),
    defineField({
      name: 'keyPrinciples',
      title: 'Key Principles',
      type: 'array',
      of: [{
        type: 'object',
        name: 'principle',
        fields: [
          defineField({ name: 'title', title: 'Principle Title', type: 'string', validation: r => r.required() }),
          defineField({ name: 'description', title: 'Principle Description', type: 'array', of: [{ type: 'block' }] }),
          defineField({ name: 'iconDescription', title: 'Icon (describe in words)', type: 'string', description: 'e.g., target, brain, heart, plant' })
        ]
      }]
    }),
    defineField({
      name: 'practicalApplications',
      title: 'Practical Applications',
      type: 'array',
      of: [{
        type: 'object',
        name: 'application',
        fields: [
          defineField({ name: 'title', title: 'Application Title', type: 'string', validation: r => r.required() }),
          defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
          defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
          defineField({ name: 'benefits', title: 'Benefits', type: 'array', of: [{ type: 'string' }] })
        ]
      }]
    }),
    defineField({ name: 'outcomes', title: 'Expected Outcomes', type: 'array', of: [{ type: 'string' }], description: 'Summarize what students gain' })
  ]
})
