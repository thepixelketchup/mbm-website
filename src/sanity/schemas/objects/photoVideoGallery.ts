import { defineType, defineField } from "sanity";

export default defineType({
  name: "photoVideoGallery",
  title: "Photo & Video Gallery Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Gallery Title",
      type: "string",
      initialValue: "Photo & Video Gallery",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Gallery Subtitle",
      type: "string",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Background Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "introContent",
      title: "Introduction Content",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "mediaItems",
      title: "Gallery Items",
      type: "array",
      of: [
        {
          type: "object",
          name: "mediaItem",
          fields: [
            defineField({
              name: "type",
              title: "Media Type",
              type: "string",
              options: {
                list: [
                  { title: "Image", value: "image" },
                  { title: "Video", value: "video" },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              hidden: ({ parent }) => parent?.type !== "image",
            }),
            defineField({
              name: "videoUrl",
              title: "Video URL",
              type: "url",
              hidden: ({ parent }) => parent?.type !== "video",
            }),
            defineField({
              name: "date",
              title: "Date",
              type: "date",
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "category",
              media: "image",
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),
  ],
  preview: {
    select: {
      title: "title",
      mediaItems: "mediaItems",
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: `${selection.mediaItems?.length || 0} media items`,
      };
    },
  },
});
