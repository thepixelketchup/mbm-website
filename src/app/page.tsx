import HeroSection from '@/components/sections/HeroSection'
import {getPageBySlug} from "@/lib/pages/page-query";

export default async function HomePage() {
    const page = await getPageBySlug('home')

    return (
        <main>
            {page.sections?.map((section: any) => {
                switch (section._type) {
                    case 'heroSection':
                        return <HeroSection key={section._key} section={section} />
                    default:
                        return null
                }
            })}
        </main>
    )
}
