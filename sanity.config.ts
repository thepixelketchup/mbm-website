// sanity.config.ts
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
    deskTool({ structure }),
    visionTool({ defaultApiVersion: '2025-01-01' })
  ],

  schema   : { types: schemaTypes }
})
