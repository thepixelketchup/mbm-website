import {groq} from "next-sanity";

export const navQuery = groq`
*[_type=="navigation"][0]{
  "logoUrl": logo.asset->url,
  items[]{
    label,
    href,
    submenu[]{ label, href }
  }
}`
