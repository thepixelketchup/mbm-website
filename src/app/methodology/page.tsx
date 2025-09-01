import MethodologyOverviewSection from '@/components/sections/MethodologyOverviewSection'
import MethodologyDetailSection from '@/components/sections/MethodologyDetailsSection'
import { getPageBySlug } from '@/lib/pages/page-query'
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
      },
    }
  } catch {
    return {
      title: 'Methodology - Podar Education Network',
      description: 'Discover our proven educational methodology that combines innovative teaching approaches, holistic learning philosophy, fair assessment practices, and deep-rooted Indian values.',
    }
  }
}

export default async function MethodologyPage() {
  try {
    const data = await getPageBySlug('methodology')

    if (!data) {
      return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-indigo-50">
          <div className="text-center px-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Methodology Page Not Found</h1>
            <Link href="/" className="text-indigo-600 hover:underline">Return Home</Link>
          </div>
        </main>
      )
    }

    if (!data.sections?.length) {
      return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-indigo-50">
          <div className="text-center px-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Methodology Content Coming Soon</h1>
            <p className="text-xl text-gray-600">This methodology page is being prepared.</p>
          </div>
        </main>
      )
    }

    return (
      <main className="min-h-screen">
        {data.sections.map((section: any) => {
          switch (section._type) {
            case 'methodologyOverviewSection':
              return <MethodologyOverviewSection key={section._key} section={section} />
            case 'methodologyDetailSection': // <- render detail if a detail block was added
              return <MethodologyDetailSection key={section._key} section={section} />
            default:
              console.warn(`Unknown methodology section type: ${section._type}`)
              return null
          }
        })}
      </main>
    )
  } catch (error) {
    console.error('Error loading methodology page:', error)
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-50">
        <div className="text-center px-6">
          <h1 className="text-3xl font-bold text-red-800 mb-4">Something Went Wrong</h1>
          <Link href="/methodology" className="text-red-600 hover:underline">Go to Methodology</Link>
        </div>
      </main>
    )
  }
}
