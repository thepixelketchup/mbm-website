'use client'

import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity.client'

interface EducationNetworkSectionProps {
    section: {
        sectionTitle: string
        sectionSubtitle?: string
        image: any
        description: string
        readMoreUrl?: string
    }
}

export default function EducationNetworkSection({ section }: EducationNetworkSectionProps) {
    if (!section) return null

    return (
        <section className='w-full h-auto flex flex-col items-center bg-white px-2 pb-20 pt-4 lg:px-20 md:pt-10'>
             <h2 className="flex flex-col items-center justify-start h-full  my-10"><span className="bg-gradient-to-b from-primary via-accent to-secondary bg-clip-text text-transparent">{section.sectionTitle.split(' ')[0]}</span><span className="bg-gradient-to-b from-primary via-accent to-secondary bg-clip-text text-transparent">{section.sectionTitle.split(' ').slice(1).join(' ')}</span></h2>


              <div className='w-full lg:h-[500px] flex flex-col lg:flex-row bg-gradient-to-r from-secondary/10 via-accent/30 to-background/20 rounded-xl items-center px-2 md:px-10 lg:px-0 py-10 justify-start'>
               
                 {section.image && (
                                    <div className="relative h-full w-full min-h-[250px] md:min-h-[350px] lg:w-[55%] rounded-xl overflow-hidden mb-6 lg:mb-0">
                                        <Image
                                            src={urlFor(section.image).url()}
                                            alt={section.sectionTitle}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                 )}
                <div className='w-full lg:w-[40%] h-full flex flex-col justify-start items-center px-5'>
                    <p className='mb-10'>
                        {section.description}
                    </p>
                    <Link href="#" className='flex flex-row items-center text-xl w-full'>
                        Read More
                        <svg
                                            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform text-secondary ml-3"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                    </Link>
                </div>
              </div>
        </section>
    )
}
