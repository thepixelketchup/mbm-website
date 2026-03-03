import ContactSection from '@/components/sections/ContactSection'
import { getPageBySlug } from "@/lib/pages/page-query";
import { getFooter } from "@/lib/navigation/footer/getFooter";

export default async function ContactPage() {
    const page = await getPageBySlug('contact')
    const footerData = await getFooter()

    if (!page) {
        return <div>Page not found</div>
    }

    const contactSection = page.sections?.find((section: any) =>
        section._type === 'contactSection'
    )

    return (
        <main>
            {contactSection && <ContactSection section={contactSection} footerData={footerData} />}
        </main>
    )
}
