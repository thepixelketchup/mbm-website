import { defineType, defineField } from 'sanity'

export default defineType({
    name:  'page',
    title: 'Page',
    type:  'document',
    groups: [
        { name: 'content', title: 'Content', default: true },
        { name: 'seo',     title: 'SEO' }
    ],
    fields: [
        defineField({
            name: 'title',
            title:'Title',
            type: 'string',
            validation: R => R.required()
        }),
        defineField({
            name: 'slug',
            title:'Slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96 },
            validation: R => R.required()
        }),
        defineField({
            name: 'sections',
            title:'Sections',
            type:  'array',
            group: 'content',
            of: [
                { type: 'heroSection' },
                { type: 'quoteSection' },
                { type: 'socialFeedSection' },
                { type: 'updatesSection' },
                { type: 'videoBannerSection' },
                { type: 'mapSection' },
                { type: 'contactSection' },
                { type: 'richTextSection' },
                { type: 'gallerySection' },
                { type: 'timelineSection' },
                { type: 'curriculumSection' },
                { type: 'facilitiesSection' },
                { type: 'extracurricularSection' },
                { type: 'methodologySection' },
                { type: 'achievementsSection' },
                { type: 'infoCardsSection' },
                { type: 'educationNetworkSection' },
                { type: 'statsSection' },
                { type: 'aboutUsSection' },
                { type: 'contentPageSection' },
                { type: 'leadershipTeamSection' },
                { type: 'missionVisionSection' },
                { type: 'milestonesSection' },
                { type: 'foundingStorySection' },
                { type: 'admissionsSection' },
            ]
        }),
        defineField({
            name: 'seoTitle',
            title:'SEO Title',
            type: 'string',
            group:'seo'
        }),
        defineField({
            name: 'seoDescription',
            title:'SEO Description',
            type: 'text',
            rows:3,
            group:'seo'
        })
    ]
})
