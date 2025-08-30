import AboutUsSection from '@/components/sections/AboutUsSection'
import ContentPageSection from '@/components/sections/ContentPageSection'
import {getPageBySlug} from "@/lib/pages/page-query";

export default async function Page() {

    const data = await getPageBySlug('about')

    return (
        <main>
            {data.sections?.map((section: any) => {
                switch (section._type) {
                    case 'aboutUsSection':
                        return <AboutUsSection key={section._key} section={section} />

                    case 'contentPageSection':
                        return <ContentPageSection key={section._key} section={section} />
                    default:
                        return null
                }
            })}
        </main>
    )
}
