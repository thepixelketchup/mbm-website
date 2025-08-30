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

      // Content Page section fields
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
    }
  }
`

export async function getPageBySlug(slug: string) {
    return client.fetch(pageBySlugQuery, { slug })
}
