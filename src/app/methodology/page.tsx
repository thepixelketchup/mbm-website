import MethodologyOverviewSection from '@/components/sections/MethodologyOverviewSection'
import MethodologyDetailSection from '@/components/sections/MethodologyDetailsSection'
import { getPageBySlug } from "@/lib/pages/page-query"
import { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata(): Promise<Metadata> {
    try {
        const data = await getPageBySlug('methodology')

        return {
            title: data?.seoTitle || data?.title || 'Methodology - Podar Education Network',
            description: data?.seoDescription || 'Discover our proven educational methodology that combines innovative teaching approaches, holistic learning philosophy, fair assessment practices, and deep-rooted Indian values.',
            openGraph: {
                title: data?.seoTitle || data?.title || 'Methodology - Podar Education Network',
                description: data?.seoDescription || 'Discover our proven educational methodology that combines innovative teaching approaches, holistic learning philosophy, fair assessment practices, and deep-rooted Indian values.',
                type: 'website',
            }
        }
    } catch (error) {
        console.error('Error generating metadata:', error)
        return {
            title: 'Methodology - Podar Education Network',
            description: 'Discover our proven educational methodology that combines innovative teaching approaches, holistic learning philosophy, fair assessment practices, and deep-rooted Indian values.'
        }
    }
}

export default async function MethodologyPage() {
    try {
        const data = await getPageBySlug("methodology")

        // Handle page not found
        if (!data) {
            return (
                <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-indigo-50">
                    <div className="text-center px-6">
                        <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">Methodology Page Not Found</h1>
                    </div>
                </main>
            )
        }

        if (!data.sections || data.sections.length === 0) {
            return (
                <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-indigo-50">
                    <div className="text-center px-6">
                        <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-12 h-12 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                            </svg>
                        </div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">Methodology Content Coming Soon</h1>
                        <p className="text-xl text-gray-600 mb-8">
                            This methodology page is being prepared. Please check back later.
                        </p>
                    </div>
                </main>
            )
        }

        return (
            <main className="min-h-screen">
                {data.sections.map((section: any) => {
                    try {
                        switch (section._type) {
                            case 'methodologyOverviewSection':
                                return <MethodologyOverviewSection key={section._key} section={section} />

                            default:
                                console.warn(`Unknown methodology section type: ${section._type}`)
                                return null
                        }
                    } catch (sectionError) {
                        console.error(`Error rendering section ${section._type}:`, sectionError)

                        return (
                            <section key={section._key} className="py-16 bg-red-50">
                                <div className="max-w-4xl mx-auto px-6 text-center">
                                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-red-800 mb-2">
                                        Section Error
                                    </h3>
                                    <p className="text-red-600">
                                        There was an error loading this methodology section. Please try refreshing the page.
                                    </p>
                                </div>
                            </section>
                        )
                    }
                })}
            </main>
        )

    } catch (error) {
        console.error('Error loading methodology page:', error)

        return (
            <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-50">
                <div className="text-center px-6">
                    <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h1 className="text-3xl font-bold text-red-800 mb-4">Something Went Wrong</h1>
                    <p className="text-xl text-red-600 mb-8">
                        We encountered an error while loading this methodology page. Please try again later.
                    </p>
                    <div className="space-y-4">
                        <button
                            onClick={() => window.location.reload()}
                            className="inline-block bg-gradient-to-r from-red-600 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200"
                        >
                            Try Again
                        </button>
                        <br />
                        <Link
                            href="/methodology"
                            className="inline-block text-red-600 hover:text-red-800 font-medium"
                        >
                            Go to Methodology
                        </Link>
                    </div>
                </div>
            </main>
        )
    }
}
