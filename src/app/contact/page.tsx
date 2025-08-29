import ContactSection from '@/components/sections/ContactSection'
import {getPageBySlug} from "@/lib/pages/page-query";

export default async function ContactPage() {
    const page = await getPageBySlug('contact')

    if (!page) {
        return <div>Page not found</div>
    }

    const contactSection = page.sections?.find((section: any) =>
        section._type === 'contactSection'
    )

    return (
        <main>
            <h1 className="text-4xl font-bold text-center py-8">{page.title}</h1>
            {contactSection && <ContactSection section={contactSection} />}
        </main>
    )
}
