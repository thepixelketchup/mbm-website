import {groq} from "next-sanity";

export const footerQuery = groq`
*[_type=="footer"][0]{
  pages[]{label,href},
  headOffice,
  branches,
  emails[]{href},
  copyright
}`