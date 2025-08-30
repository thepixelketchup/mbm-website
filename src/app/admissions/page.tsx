import AdmissionsSection from '@/components/sections/AdmissionsSection'
import {getPageBySlug} from "@/lib/pages/page-query";

export default async function Page() {

    const data = await getPageBySlug('admissions');

    return (
        <main>
            {data.sections?.map((section: any) => {
                switch (section._type) {
                    case 'admissionsSection':
                        return <AdmissionsSection key={section._key} section={section} />

                    default:
                        return null
                }
            })}
        </main>
    )
}
