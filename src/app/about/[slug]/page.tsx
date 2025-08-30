import ContentPageSection from '@/components/sections/ContentPageSection'
import TimelineSection from '@/components/sections/TimelineSection'
import {getPageBySlug} from "@/lib/pages/page-query";
import LeadershipTeamSection from "@/components/sections/LeadershipTeamSection";
import MissionVisionSection from "@/components/sections/MissionVisionSection";
import MilestonesSection from "@/components/sections/MilestonesSection";
import FoundingStorySection from "@/components/sections/FoundingStorySection";

export default async function Page({ params }: { params: { slug: string } }) {

    const data = await getPageBySlug(params.slug);

    return (
        <main>
            {data.sections?.map((section: any) => {
                switch (section._type) {
                    case 'timelineSection':
                        return <TimelineSection key={section._key} section={section} />

                    case 'contentPageSection':
                        return <ContentPageSection key={section._key} section={section} />

                    case 'leadershipTeamSection':
                        return <LeadershipTeamSection key={section._key} section={section} />

                    case 'missionVisionSection':
                        return <MissionVisionSection key={section._key} section={section} />

                    case 'milestonesSection':
                        return <MilestonesSection key={section._key} section={section} />

                    case 'foundingStorySection':
                        return <FoundingStorySection key={section._key} section={section} />

                    default:
                        return null
                }
            })}
        </main>
    )
}
