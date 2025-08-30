import {getPageBySlug} from "@/lib/pages/page-query";
import DownloadsSection from "@/components/sections/DownloadsSection";
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';

const allAdmissionDocumentsQuery = groq`
  *[_type == "admissionDocument" && isActive == true] | order(displayOrder asc, category asc) {
    _id,
    title,
    description,
    category,
    fileSize,
    lastUpdated,
    isActive,
    displayOrder,
    file{
      asset->{
        url,
        originalFilename
      }
    }
  }
`;

export default async function Page() {
    try {
        const [data, allDocuments] = await Promise.all([
            getPageBySlug('download'),
            client.fetch(allAdmissionDocumentsQuery)
        ]);

        if (!data) {
            return (
                <main>
                    <div className="min-h-screen flex items-center justify-center">
                        <div className="text-center">
                            <h1 className="text-2xl font-bold text-gray-800 mb-4">Page Not Found</h1>
                            <p className="text-gray-600">The downloads page could not be found.</p>
                        </div>
                    </div>
                </main>
            );
        }

        return (
            <main>
                {data.sections?.map((section: any) => {
                    switch (section._type) {
                        case 'downloadsSection':
                            return (
                                <DownloadsSection
                                    key={section._key}
                                    section={section}
                                    allDocuments={allDocuments}
                                />
                            );

                        default:
                            return null;
                    }
                })}
            </main>
        );
    } catch (error) {
        console.error('Error loading downloads page:', error);

        return (
            <main>
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-red-600 mb-4">Error Loading Page</h1>
                        <p className="text-gray-600">There was an error loading the downloads page. Please try again later.</p>
                    </div>
                </div>
            </main>
        );
    }
}
