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

      // Add other section types here as needed...
    }
  }
`

export async function getPageBySlug(slug: string) {
    return client.fetch(pageBySlugQuery, { slug })
}
