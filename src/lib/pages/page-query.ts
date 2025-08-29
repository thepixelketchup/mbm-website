import { groq } from 'next-sanity'
import {client} from "@/lib/sanity.client";

export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0]{
    title, 
    seoTitle, 
    seoDescription, 
    sections[]{
      _type,
      _key,
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
      // Add other section types as needed...
    }
  }
`

export async function getPageBySlug(slug: string) {
    return client.fetch(pageBySlugQuery, { slug })
}
