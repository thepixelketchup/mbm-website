'use client'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@/lib/sanity.client'
import Image from 'next/image'
import ContactSection from "@/components/sections/ContactSection";

export default function PortableContent({ value }: { value: any }) {
    if (!value) return null

    return (
        <div className="space-y-8">
            {value.map((section: any) => {
                switch (section._type) {
                    case 'contactSection':
                        return <ContactSection key={section._key} section={section} />

                    case 'block':
                        return (
                            <PortableText
                                key={section._key}
                                value={[section]}
                                components={{
                                    types: {
                                        image: ({ value }) => (
                                            <Image
                                                src={urlFor(value).width(800).url()}
                                                alt={value.alt || ''}
                                                width={800}
                                                height={500}
                                                className="rounded-lg my-6"
                                            />
                                        )
                                    }
                                }}
                            />
                        )
                    default:
                        return null
                }
            })}
        </div>
    )
}
