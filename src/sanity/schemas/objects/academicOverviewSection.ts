import { defineType, defineField } from 'sanity'

// Define icon options for easy selection
const iconOptions = [
    { title: '📚 Book', value: 'FaBook' },
    { title: '🎓 Graduation Cap', value: 'FaGraduationCap' },
    { title: '👥 Users/People', value: 'FaUsers' },
    { title: '🏆 Trophy', value: 'FaTrophy' },
    { title: '🏢 Building', value: 'FaBuilding' },
    { title: '🧪 Laboratory Flask', value: 'FaFlask' },
    { title: '⚽ Football/Sports', value: 'FaFutbol' },
    { title: '🍴 Utensils/Dining', value: 'FaUtensils' },
    { title: '🎨 Art Palette', value: 'FaPalette' },
    { title: '💻 Laptop/Computer', value: 'FaLaptopCode' },
    { title: '📅 Calendar', value: 'FaCalendarAlt' },
    { title: '📄 File/Document', value: 'FaFileAlt' },
    { title: '⬇️ Download', value: 'FaDownload' },
    { title: '➡️ Arrow Right', value: 'FaArrowRight' },
    { title: '▶️ Play Button', value: 'FaPlay' },
    { title: '📊 Chart/Statistics', value: 'FaChartLine' },
    { title: '⭐ Star', value: 'FaStar' },
    { title: '❤️ Heart', value: 'FaHeart' },
    { title: '🔬 Microscope', value: 'FaMicroscope' },
    { title: '📖 Open Book', value: 'FaBookOpen' },
    { title: '🏃 Running/Exercise', value: 'FaRunning' },
    { title: '🎭 Theater Masks', value: 'FaTheaterMasks' },
    { title: '🎵 Music Note', value: 'FaMusic' },
    { title: '🏀 Basketball', value: 'FaBasketballBall' },
    { title: '🏊 Swimming', value: 'FaSwimmer' },
    { title: '🎯 Target/Goal', value: 'FaBullseye' },
    { title: '🔥 Fire/Excellence', value: 'FaFire' },
    { title: '💡 Light Bulb/Ideas', value: 'FaLightbulb' },
    { title: '🌟 Sparkles', value: 'FaSparkles' }
]

export default defineType({
    name: 'academicsOverviewSection',
    title: 'Academics Overview Section',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Section Title',
            type: 'string',
            initialValue: 'Academics',
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
            name: 'introContent',
            title: 'Introduction Content',
            type: 'array',
            of: [{ type: 'block' }]
        }),

        // Academic Statistics with Icon Dropdown
        defineField({
            name: 'academicStats',
            title: 'Academic Statistics',
            type: 'array',
            of: [{
                type: 'object',
                name: 'stat',
                fields: [
                    defineField({
                        name: 'number',
                        title: 'Number',
                        type: 'string',
                        validation: Rule => Rule.required(),
                        placeholder: 'e.g., 98, 25,000+, 95%'
                    }),
                    defineField({
                        name: 'label',
                        title: 'Label',
                        type: 'string',
                        validation: Rule => Rule.required(),
                        placeholder: 'e.g., Years of Excellence, Students'
                    }),
                    defineField({
                        name: 'icon',
                        title: 'Icon',
                        type: 'string',
                        options: {
                            list: iconOptions
                        },
                        description: 'Choose an icon that represents this statistic'
                    })
                ],
                preview: {
                    select: {
                        title: 'number',
                        subtitle: 'label',
                        icon: 'icon'
                    },
                    prepare(selection) {
                        const iconEmoji = iconOptions.find(opt => opt.value === selection.icon)?.title.split(' ')[0] || '📊'
                        return {
                            title: `${iconEmoji} ${selection.title}`,
                            subtitle: selection.subtitle
                        }
                    }
                }
            }]
        }),

        // Curriculum Highlights
        defineField({
            name: 'curriculumHighlights',
            title: 'Curriculum Highlights',
            type: 'object',
            fields: [
                defineField({ name: 'title', title: 'Title', type: 'string', initialValue: 'Academic Excellence' }),
                defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
                defineField({
                    name: 'featuredDocuments',
                    title: 'Featured Documents',
                    type: 'array',
                    of: [{ type: 'reference', to: [{ type: 'admissionDocument' }] }],
                    validation: Rule => Rule.max(4),
                    description: 'Select up to 4 important documents to highlight'
                }),
                defineField({ name: 'viewAllLink', title: 'View All Link', type: 'string', initialValue: '/academics/curriculum' })
            ]
        }),

        // Facilities Highlights with Icon Dropdown
        defineField({
            name: 'facilitiesHighlights',
            title: 'Facilities Highlights',
            type: 'object',
            fields: [
                defineField({ name: 'title', title: 'Title', type: 'string', initialValue: 'World-Class Facilities' }),
                defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
                defineField({
                    name: 'featuredFacilities',
                    title: 'Featured Facilities',
                    type: 'array',
                    of: [{
                        type: 'object',
                        name: 'facility',
                        fields: [
                            defineField({
                                name: 'name',
                                title: 'Facility Name',
                                type: 'string',
                                validation: Rule => Rule.required(),
                                placeholder: 'e.g., Science Laboratory, Sports Complex'
                            }),
                            defineField({
                                name: 'description',
                                title: 'Description',
                                type: 'text',
                                rows: 2,
                                placeholder: 'Brief description of this facility'
                            }),
                            defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
                            defineField({
                                name: 'icon',
                                title: 'Icon',
                                type: 'string',
                                options: {
                                    list: iconOptions
                                },
                                description: 'Choose an icon that represents this facility'
                            })
                        ],
                        preview: {
                            select: {
                                title: 'name',
                                media: 'image',
                                icon: 'icon'
                            },
                            prepare(selection) {
                                const iconEmoji = iconOptions.find(opt => opt.value === selection.icon)?.title.split(' ')[0] || '🏢'
                                return {
                                    title: `${iconEmoji} ${selection.title}`,
                                    media: selection.media
                                }
                            }
                        }
                    }],
                    validation: Rule => Rule.max(6),
                    description: 'Select up to 6 key facilities to showcase'
                }),
                defineField({ name: 'viewAllLink', title: 'View All Link', type: 'string', initialValue: '/academics/facilities' })
            ]
        }),

        // Activities Highlights
        defineField({
            name: 'activitiesHighlights',
            title: 'Activities Highlights',
            type: 'object',
            fields: [
                defineField({ name: 'title', title: 'Title', type: 'string', initialValue: 'Beyond the Classroom' }),
                defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
                defineField({
                    name: 'featuredActivities',
                    title: 'Featured Activities',
                    type: 'array',
                    of: [{
                        type: 'object',
                        name: 'activity',
                        fields: [
                            defineField({
                                name: 'name',
                                title: 'Activity Name',
                                type: 'string',
                                validation: Rule => Rule.required(),
                                placeholder: 'e.g., Dance Club, Robotics Team'
                            }),
                            defineField({
                                name: 'description',
                                title: 'Description',
                                type: 'text',
                                rows: 2,
                                placeholder: 'What makes this activity special?'
                            }),
                            defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
                            defineField({
                                name: 'category',
                                title: 'Category',
                                type: 'string',
                                options: {
                                    list: [
                                        { title: '🏃 Sports', value: 'sports' },
                                        { title: '🎨 Arts & Culture', value: 'arts' },
                                        { title: '📚 Academic Clubs', value: 'academic' },
                                        { title: '💻 Technology', value: 'tech' },
                                        { title: '❤️ Community Service', value: 'service' },
                                        { title: '🎉 Special Events', value: 'events' }
                                    ]
                                }
                            })
                        ],
                        preview: {
                            select: {
                                title: 'name',
                                subtitle: 'category',
                                media: 'image'
                            }
                        }
                    }],
                    validation: Rule => Rule.max(4),
                    description: 'Select up to 4 popular activities to highlight'
                }),
                defineField({ name: 'viewAllLink', title: 'View All Link', type: 'string', initialValue: '/academics/extracurricular' })
            ]
        }),

        // Gallery Highlights
        defineField({
            name: 'galleryHighlights',
            title: 'Gallery Highlights',
            type: 'object',
            fields: [
                defineField({ name: 'title', title: 'Title', type: 'string', initialValue: 'Campus Life Gallery' }),
                defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
                defineField({
                    name: 'featuredImages',
                    title: 'Featured Images',
                    type: 'array',
                    of: [{ type: 'image', options: { hotspot: true } }],
                    validation: Rule => Rule.min(4).max(8),
                    description: 'Select 4-8 beautiful images that showcase campus life'
                }),
                defineField({ name: 'viewAllLink', title: 'View All Link', type: 'string', initialValue: '/academics/gallery' })
            ]
        }),

        // Quick Links with Icon and Color Dropdowns
        defineField({
            name: 'quickLinks',
            title: 'Quick Access Links',
            type: 'array',
            of: [{
                type: 'object',
                name: 'quickLink',
                fields: [
                    defineField({
                        name: 'title',
                        title: 'Link Title',
                        type: 'string',
                        validation: Rule => Rule.required(),
                        placeholder: 'e.g., Academic Calendar, Admission Process'
                    }),
                    defineField({
                        name: 'description',
                        title: 'Description',
                        type: 'string',
                        placeholder: 'Brief description of what this link leads to'
                    }),
                    defineField({
                        name: 'url',
                        title: 'URL',
                        type: 'string',
                        validation: Rule => Rule.required(),
                        placeholder: '/academics/calendar or https://example.com'
                    }),
                    defineField({
                        name: 'icon',
                        title: 'Icon',
                        type: 'string',
                        options: {
                            list: iconOptions
                        },
                        description: 'Choose an icon that represents this link'
                    }),
                    defineField({
                        name: 'color',
                        title: 'Color Theme',
                        type: 'string',
                        options: {
                            list: [
                                { title: '🔵 Blue', value: 'blue' },
                                { title: '🟢 Green', value: 'green' },
                                { title: '🟣 Purple', value: 'purple' },
                                { title: '🟠 Orange', value: 'orange' },
                                { title: '🩷 Pink', value: 'pink' },
                                { title: '🩵 Teal', value: 'teal' },
                                { title: '🔴 Red', value: 'red' },
                                { title: '🟡 Yellow', value: 'yellow' }
                            ]
                        },
                        description: 'Choose a color theme for this link card'
                    })
                ],
                preview: {
                    select: {
                        title: 'title',
                        subtitle: 'description',
                        icon: 'icon',
                        color: 'color'
                    },
                    prepare(selection) {
                        const iconEmoji = iconOptions.find(opt => opt.value === selection.icon)?.title.split(' ')[0] || '🔗'
                        const colorEmoji = {
                            blue: '🔵', green: '🟢', purple: '🟣', orange: '🟠',
                            pink: '🩷', teal: '🩵', red: '🔴', yellow: '🟡'
                        }[selection.color] || '🔵'

                        return {
                            title: `${iconEmoji} ${colorEmoji} ${selection.title}`,
                            subtitle: selection.subtitle
                        }
                    }
                }
            }],
            description: 'Add quick access links to important pages'
        })
    ],
    preview: {
        select: { title: 'title' }
    }
})
