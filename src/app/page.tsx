// app/page.tsx (Home)
export const dynamic = 'force-dynamic' // show fresh CMS data while debugging [12][6]

import HeroSection from '@/components/sections/HeroSection'
import AchievementsSection from '@/components/sections/AchievementsSection'
import InfoCardsSection from '@/components/sections/InfoCardsSection'
import EducationNetworkSection from '@/components/sections/EducationNetworkSection'
import StatsSection from '@/components/sections/StatsSection'
import GallerySection from '@/components/sections/GallerySection'
import { getPageBySlug } from '@/lib/pages/page-query'

export default async function HomePage() {
  const page = await getPageBySlug('home')

  if (process.env.NODE_ENV !== 'production') {
    console.log('HOME sections:', page?.sections?.map((s: any) => s?._type)) // server logs appear in dev [14]
  }

  if (!page?.sections?.length) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Content coming soon</h1>
          <p className="text-gray-600">No sections found on the Home page document.</p>
        </div>
      </main>
    )
  }

  return (
    <main>
      {page.sections.map((section: any) => {
        try {
          switch (section._type) {
            case 'heroSection':
              return <HeroSection key={section._key} section={section} />
            case 'achievementsSection':
              return <AchievementsSection key={section._key} section={section} />
            case 'infoCardsSection':
              return <InfoCardsSection key={section._key} section={section} />
            case 'educationNetworkSection':
              return <EducationNetworkSection key={section._key} section={section} />
            case 'statsSection':
              return <StatsSection key={section._key} section={section} />
            case 'gallerySection':
              return <GallerySection key={section._key} section={section} />
            default:
              // Make unknown/typo’d types visible so nothing fails silently [13]
              return (
                <pre key={section?._key} className="p-4 m-4 bg-yellow-50 text-yellow-800 rounded">
                  Unknown section: {String(section?._type)}
                </pre>
              )
          }
        } catch (err) {
          // Bubble up to the route error boundary (step below) [2][3]
          throw err
        }
      })}
    </main>
  )
}
