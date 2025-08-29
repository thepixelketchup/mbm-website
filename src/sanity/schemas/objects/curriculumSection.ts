import { defineType, defineField } from 'sanity'
import ctaButton from './ctaButton'

export default defineType({
    name:'curriculumSection',
    title:'Curriculum & Board Syllabus',
    type:'object',
    fields:[
        defineField({ name:'intro', type:'array', of:[{type:'block'}], title:'Intro Rich Text' }),
        defineField({ name:'syllabusPdf', type:'file', title:'Download Syllabus (PDF)' }),
        defineField({ name:'academicCalendar', type:'file', title:'Academic Calendar (PDF)' }),
        defineField({ name:'cta', type:'ctaButton', title:'Optional CTA Button' })
    ],
    preview:{ prepare:() => ({ title:'Curriculum Section' }) }
})
