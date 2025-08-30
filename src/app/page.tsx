import HeroSection from '@/components/sections/HeroSection'
import {getPageBySlug} from "@/lib/pages/page-query";
import AchievementsSection from "@/components/sections/AchievementsSection";
import InfoCardsSection from "@/components/sections/InfoCardsSection";
import EducationNetworkSection from "@/components/sections/EducationNetworkSection";
import StatsSection from "@/components/sections/StatsSection";
import GallerySection from "@/components/sections/GallerySection";

export default async function HomePage() {
    const page = await getPageBySlug('home')

    return (
        <main>
            {page.sections?.map((section: any) => {
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
                        return null
                }
            })}
        </main>
    )
}
