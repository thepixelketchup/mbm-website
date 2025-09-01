import { groq } from 'next-sanity'
import { client } from '@/lib/sanity.client'

export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug]{
    title,
    seoTitle,
    seoDescription,
    sections[]{
      _type,
      _key,

      // MAIN SECTIONS

      // Hero
      _type == "heroSection" => {
        title,
        subtitle,
        backgroundImage{ asset->{ url } },
        ctaButton{ text, link },
        textPosition
      },

      // Gallery (home hero gallery format)
      _type == "gallerySection" => {
        sectionTitle,
        ctaText,
        ctaUrl,
        images[]{
          _key,
          asset->{ url }
        }
      },

      // Stats
      _type == "statsSection" => {
        stats[]{ _key, number, label }
      },

      // Education Network
      _type == "educationNetworkSection" => {
        sectionTitle,
        sectionSubtitle,
        description,
        readMoreUrl,
        image{ asset->{ url } }
      },

      // Info Cards
      _type == "infoCardsSection" => {
        sectionTitle,
        cards[]{
          _key,
          label,
          link,
          icon{ asset->{ url } }
        }
      },

      // Achievements (grid)
      _type == "achievementsSection" => {
        title,
        subtitle,
        viewAllLink,
        achievements[]{
          _key,
          description,
          image{ asset->{ url } }
        }
      },

      // Contact
      _type == "contactSection" => {
        sectionTitle,
        mapEmbed,
        formFields[]{ name, label, type, required, placeholder },
        headOffice,
        branches,
        faculty[]{ name, designation, email, phone, "imageUrl": image.asset->url },
        socialLinks[]{ platform, url }
      },

      // ABOUT US SECTIONS

      _type == "aboutUsSection" => {
        title,
        heroImage{ asset->{ url } },
        description,
        personName,
        personRole,
        personImage{ asset->{ url } },
        personMessage,
        missionTitle,
        missionContent,
        visionTitle,
        visionContent
      },

      _type == "contentPageSection" => {
        pageType,
        title,
        subtitle,
        heroImage{ asset->{ url } },
        content
      },

      _type == "timelineSection" => {
        title,
        subtitle,
        heroImage{ asset->{ url } },
        events[]{
          _key,
          year,
          title,
          description,
          isHighlight,
          image{ asset->{ url } }
        }
      },

      _type == "leadershipTeamSection" => {
        title,
        subtitle,
        heroImage{ asset->{ url } },
        members[]{
          _key,
          name,
          role,
          description,
          image{ asset->{ url } }
        }
      },

      _type == "missionVisionSection" => {
        title,
        subtitle,
        introduction,
        missionTitle,
        missionContent,
        visionTitle,
        visionContent,
        valuesTitle,
        valuesContent
      },

      _type == "foundingStorySection" => {
        title,
        subtitle,
        heroImage{ asset->{ url } },
        foundingYear,
        founderName,
        storyContent,
        milestones[]{ _key, year, description },
        legacyContent
      },

      _type == "milestonesSection" => {
        title,
        subtitle,
        heroImage{ asset->{ url } },
        introduction,
        achievements[]{ _key, year, title, description, category, isHighlight },
        statistics[]{ _key, number, label }
      },

      // METHODOLOGY SECTIONS

      _type == "methodologyOverviewSection" => {
        title,
        subtitle,
        heroImage{ asset->{ url } },
        introContent,
        methodologyCards[]{
          _key,
          title,
          description,
          iconName,
          color,
          link
        }
      },

      _type == "methodologyDetailSection" => {
        title,
        subtitle,
        heroImage{ asset->{ url } },
        introContent,
        keyPrinciples[]{
          _key,
          title,
          description,
          iconDescription
        },
        practicalApplications[]{
          _key,
          title,
          description,
          benefits,
          image{ asset->{ url } }
        },
        outcomes
      },

      // ACADEMICS SECTIONS

      _type == "curriculumSection" => {
        title,
        subtitle,
        heroImage{ asset->{ url } },
        introContent,
        autoSyncDocuments,
        documentCategories,
        selectedDocuments[]->{
          _id,
          title,
          description,
          category,
          fileSize,
          isActive,
          displayOrder,
          file{ asset->{ url, originalFilename } }
        },
        gradeWiseCurriculum[]{
          _key,
          grade,
          description,
          subjects,
          syllabusDocument->{
            _id,
            title,
            file{ asset->{ url, originalFilename } }
          }
        }
      },

      _type == "facilitiesSection" => {
        title,
        subtitle,
        heroImage{ asset->{ url } },
        introContent,
        facilities[]{
          _key,
          name,
          category,
          description,
          capacity,
          features,
          images[]{ asset->{ url } }
        }
      },

      _type == "extracurricularSection" => {
        title,
        subtitle,
        heroImage{ asset->{ url } },
        introContent,
        activities[]{
          _key,
          title,
          category,
          description,
          schedule,
          coordinator,
          achievements,
          images[]{ asset->{ url } }
        }
      },

      _type == "photoVideoGallery" => {
        title,
        subtitle,
        heroImage{ asset->{ url } },
        introContent,
        mediaItems[]{
          _key,
          type,
          title,
          caption,
          category,
          date,
          videoUrl,
          image{ asset->{ url } }
        }
      },

      // ADMISSIONS & DOWNLOADS

      _type == "admissionsSection" => {
        title,
        subtitle,
        heroImage{ asset->{ url } },
        introContent,
        documents[]->{
          _id,
          title,
          description,
          category,
          fileSize,
          lastUpdated,
          isActive,
          displayOrder,
          file{ asset->{ url, originalFilename } }
        },
        admissionProcess[]{ _key, stepNumber, title, description },
        contactInfo{ phone, email, office, hours }
      },

      _type == "downloadsSection" => {
        title,
        subtitle,
        heroImage{ asset->{ url } },
        introContent,
        autoSync,
        categoryFilter,
        selectedDocuments[]->{
          _id,
          title,
          description,
          category,
          fileSize,
          lastUpdated,
          isActive,
          displayOrder,
          file{ asset->{ url, originalFilename } }
        }
      },

      // Academics Overview
      _type == "academicsOverviewSection" => {
        title,
        subtitle,
        heroImage{ asset->{ url } },
        introContent,
        academicStats[]{ _key, number, label, icon },
        curriculumHighlights{
          title,
          description,
          viewAllLink,
          featuredDocuments[]->{
            _id,
            title,
            description,
            category,
            fileSize,
            file{ asset->{ url, originalFilename } }
          }
        },
        facilitiesHighlights{
          title,
          description,
          viewAllLink,
          featuredFacilities[]{
            _key,
            name,
            description,
            icon,
            image{ asset->{ url } }
          }
        },
        activitiesHighlights{
          title,
          description,
          viewAllLink,
          featuredActivities[]{
            _key,
            name,
            description,
            category,
            image{ asset->{ url } }
          }
        },
        galleryHighlights{
          title,
          description,
          viewAllLink,
          featuredImages[]{ asset->{ url } }
        },
        quickLinks[]{ _key, title, description, url, icon, color }
      }
    }
  }
`

export async function getPageBySlug(slug: string) {
  return client.fetch(pageBySlugQuery, { slug })
}

export const allAdmissionDocumentsQuery = groq`
  *[_type == "admissionDocument" && isActive == true]
  | order(displayOrder asc, category asc){
    _id,
    title,
    description,
    category,
    fileSize,
    lastUpdated,
    isActive,
    displayOrder,
    file{ asset->{ url, originalFilename } }
  }
`

export async function getAllAdmissionDocuments() {
  return client.fetch(allAdmissionDocumentsQuery)
}

export const homePageQuery = groq`
  *[_type == "page" && slug.current == "home"]{
    title,
    sections[_type in ["heroSection", "statsSection", "achievementsSection", "gallerySection"]]{
      _type,
      _key,
      ...
    }
  }
`

export const aboutPageQuery = groq`
  *[_type == "page" && slug.current == $slug]{
    title,
    sections[_type in ["aboutUsSection", "leadershipTeamSection", "missionVisionSection", "foundingStorySection", "milestonesSection", "timelineSection"]]{
      _type,
      _key,
      ...
    }
  }
`
