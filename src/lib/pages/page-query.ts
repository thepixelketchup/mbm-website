import { groq } from 'next-sanity'
import { client } from '@/lib/sanity.client'
export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0]{
    title,
    seoTitle,
    seoDescription,
    sections[]{
      _type,
      _key,
      
      // MAIN SECTIONS
      
      // Hero section fields
      _type == "heroSection" => {
        title,
        subtitle,
        backgroundImage{
          asset->{
            url
          }
        },
        ctaButton{
          text,
          link
        },
        textPosition
      },
      // Gallery section fields
      _type == "gallerySection" => {
        sectionTitle,
        ctaText,
        ctaUrl,
        images[]{
          _key,
          asset->{
            url
          }
        }
      },
      
      // Stats section fields
      _type == "statsSection" => {
        stats[]{
          _key,
          number,
          label
        }
      },
      
      // Education Network section fields
      _type == "educationNetworkSection" => {
        sectionTitle,
        sectionSubtitle,
        description,
        readMoreUrl,
        image{
          asset->{
            url
          }
        }
      },
      
      // Info Cards section fields
      _type == "infoCardsSection" => {
        sectionTitle,
        cards[]{
          _key,
          label,
          link,
          icon{
            asset->{
              url
            }
          }
        }
      },
      
      // Achievements section fields
      _type == "achievementsSection" => {
        title,
        subtitle,
        viewAllLink,
        achievements[]{
          _key,
          description,
          image{
            asset->{
              url
            }
          }
        }
      },
      // Contact section fields
      _type == "contactSection" => {
        sectionTitle,
        mapEmbed,
        formFields[]{
          name, label, type, required, placeholder
        },
        headOffice,
        branches,
        faculty[]{
          name, designation, email, phone,
          "imageUrl": image.asset->url
        },
        socialLinks[]{
          platform, url
        }
      },
      // ABOUT US SECTIONS
      // About Us section fields
      _type == "aboutUsSection" => {
        title,
        heroImage{
          asset->{
            url
          }
        },
        description,
        personName,
        personRole,
        personImage{
          asset->{
            url
          }
        },
        personMessage,
        missionTitle,
        missionContent,
        visionTitle,
        visionContent
      },
      // Content Page section fields (for generic about pages)
      _type == "contentPageSection" => {
        pageType,
        title,
        subtitle,
        heroImage{
          asset->{
            url
          }
        },
        content
      },
      
      // Timeline section fields
      _type == "timelineSection" => {
        title,
        subtitle,
        heroImage{
          asset->{
            url
          }
        },
        events[]{
          _key,
          year,
          title,
          description,
          isHighlight,
          image{
            asset->{
              url
            }
          }
        }
      },
      
      // Leadership Team section fields
      _type == "leadershipTeamSection" => {
        title,
        subtitle,
        heroImage{
          asset->{
            url
          }
        },
        members[]{
          _key,
          name,
          role,
          description,
          image{
            asset->{
              url
            }
          }
        }
      },
      
      // Mission & Vision section fields
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
      
      // Founding Story section fields
      _type == "foundingStorySection" => {
        title,
        subtitle,
        heroImage{
          asset->{
            url
          }
        },
        foundingYear,
        founderName,
        storyContent,
        milestones[]{
          _key,
          year,
          description
        },
        legacyContent
      },
      // Milestones & Achievements section fields
      _type == "milestonesSection" => {
        title,
        subtitle,
        heroImage{
          asset->{
            url
          }
        },
        introduction,
        achievements[]{
          _key,
          year,
          title,
          description,
          category,
          isHighlight
        },
        statistics[]{
          _key,
          number,
          label
        }
      },
      // METHODOLOGY SECTIONS (NEWLY ADDED)
      // Methodology Overview section fields
      _type == "methodologyOverviewSection" => {
        title,
        subtitle,
        heroImage{
          asset->{
            url
          }
        },
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
      // Methodology Detail section fields
      _type == "methodologyDetailSection" => {
        title,
        subtitle,
        heroImage{
          asset->{
            url
          }
        },
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
          image{
            asset->{
              url
            }
          }
        },
        outcomes
      },
      // ACADEMICS SECTIONS
      // Curriculum section fields
      _type == "curriculumSection" => {
        title,
        subtitle,
        heroImage{
          asset->{
            url
          }
        },
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
          file{
            asset->{
              url,
              originalFilename
            }
          }
        },
        gradeWiseCurriculum[]{
          _key,
          grade,
          description,
          subjects,
          syllabusDocument->{
            _id,
            title,
            file{
              asset->{
                url,
                originalFilename
              }
            }
          }
        }
      },
      // Facilities section fields
      _type == "facilitiesSection" => {
        title,
        subtitle,
        heroImage{
          asset->{
            url
          }
        },
        introContent,
        facilities[]{
          _key,
          name,
          category,
          description,
          capacity,
          features,
          images[]{
            asset->{
              url
            }
          }
        }
      },
      // Extracurricular section fields
      _type == "extracurricularSection" => {
        title,
        subtitle,
        heroImage{
          asset->{
            url
          }
        },
        introContent,
        activities[]{
          _key,
          title,
          category,
          description,
          schedule,
          coordinator,
          achievements,
          images[]{
            asset->{
              url
            }
          }
        }
      },
      // Photo & Video Gallery section fields
      _type == "photoVideoGallery" => {
        title,
        subtitle,
        heroImage{
          asset->{
            url
          }
        },
        introContent,
        mediaItems[]{
          _key,
          type,
          title,
          caption,
          category,
          date,
          videoUrl,
          image{
            asset->{
              url
            }
          }
        }
      },
      // ADMISSIONS & DOWNLOADS SECTIONS
      
      // Admissions section fields
      _type == "admissionsSection" => {
        title,
        subtitle,
        heroImage{
          asset->{
            url
          }
        },
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
          file{
            asset->{
              url,
              originalFilename
            }
          }
        },
        admissionProcess[]{
          _key,
          stepNumber,
          title,
          description
        },
        contactInfo{
          phone,
          email,
          office,
          hours
        }
      },
      // Downloads section fields
      _type == "downloadsSection" => {
        title,
        subtitle,
        heroImage{
          asset->{
            url
          }
        },
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
          file{
            asset->{
              url,
              originalFilename
            }
          }
        }
      },
      
      // Academics Overview section fields
      _type == "academicsOverviewSection" => {
        title,
        subtitle,
        heroImage{
          asset->{
            url
          }
        },
        introContent,
        academicStats[]{
          _key,
          number,
          label,
          icon
        },
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
            file{
              asset->{
                url,
                originalFilename
              }
            }
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
            image{
              asset->{
                url
              }
            }
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
            image{
              asset->{
                url
              }
            }
          }
        },
        galleryHighlights{
          title,
          description,
          viewAllLink,
          featuredImages[]{
            asset->{
              url
            }
          }
        },
        quickLinks[]{
          _key,
          title,
          description,
          url,
          icon,
          color
        }
      },

      // in your pageBySlugQuery
// ...
// Methodology Overview section
_type == "methodologyOverviewSection" => {
  title,
  subtitle,
  heroImage{asset->{url}},
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

// Methodology Detail section
_type == "methodologyDetailSection" => {
  title,
  subtitle,
  heroImage{asset->{url}},
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
    image{asset->{url}}
  },
  outcomes
},
// ...

    }
  }
`
export async function getPageBySlug(slug: string) {
    return client.fetch(pageBySlugQuery, { slug })
}
export const allAdmissionDocumentsQuery = groq`
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
`
export async function getAllAdmissionDocuments() {
    return client.fetch(allAdmissionDocumentsQuery)
}
export const homePageQuery = groq`
  *[_type == "page" && slug.current == "home"][0]{
    title,
    sections[_type in ["heroSection", "statsSection", "achievementsSection", "gallerySection"]]{
      _type,
      _key,
      ...
    }
  }
`
export const aboutPageQuery = groq`
  *[_type == "page" && slug.current == $slug][0]{
    title,
    sections[_type in ["aboutUsSection", "leadershipTeamSection", "missionVisionSection", "foundingStorySection", "milestonesSection", "timelineSection"]]{
      _type,
      _key,
      ...
    }
  }
`