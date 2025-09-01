import { getPageBySlug } from "@/lib/pages/page-query"
import { Metadata } from 'next'
import AcademicsOverviewSection from "@/components/sections/AcademicsSection";

export const metadata: Metadata = {
    title: 'Academics - Podar Education Network',
    description: 'Explore our comprehensive academic programs, world-class facilities, extracurricular activities, and campus life at Podar Education Network.',
}

export default async function AcademicsPage() {
    try {
        const data = await getPageBySlug('academics')

        if (!data) {
            return (
                <main className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-800 mb-4">Page Not Found</h1>
                        <p className="text-gray-600">The academics page could not be found.</p>
                    </div>
                </main>
            )
        }

        return (
            <main className="min-h-screen">
                {data.sections?.map((section: any) => {
                    switch (section._type) {
                        case 'academicsOverviewSection':
                            return <AcademicsOverviewSection key={section._key} section={section} />

                        default:
                            return null
                    }
                })}
            </main>
        )
    } catch (error) {
        return (
            <main className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
                    <p className="text-gray-600">There was an error loading the academics page.</p>
                </div>
            </main>
        )
    }
}
