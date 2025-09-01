import { defineConfig }  from 'sanity'
import { deskTool }      from 'sanity/desk'
import { visionTool }    from '@sanity/vision'

import { schemaTypes }   from './src/sanity/schemas'
import { structure }     from './src/sanity/structure'

export default defineConfig({
  basePath : '/studio',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset  : process.env.SANITY_STUDIO_DATASET!,

  plugins  : [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    deskTool({ structure: structure as any }),
    visionTool({ defaultApiVersion: '2025-01-01' })
  ],

  schema   : { types: schemaTypes }
})
