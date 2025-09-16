import { defineField, defineType } from "sanity";

const schoolAltTexts = [
  "Students studying in modern classroom",
  "School building exterior view",
  "Library with students reading books",
  "Science laboratory equipment",
  "Students playing in school playground",
  "Graduation ceremony celebration",
  "Teacher explaining lesson to class",
  "School cafeteria during lunch time",
  "Computer lab with students learning",
  "School sports field and facilities",
  "Art classroom with creative projects",
  "School auditorium for events",
  "Students collaborating on group project",
  "School entrance and main gate",
  "Music room with instruments",
  "School garden and outdoor learning space",
];

export default defineType({
  name: "mediaLibrary",
  title: "Media Library",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Library Name",
      type: "string",
      validation: (Rule) => Rule.required(),
      initialValue: "School Images",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
      initialValue: "Collection of images for the school website",
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
              initialValue: () =>
                schoolAltTexts[
                  Math.floor(Math.random() * schoolAltTexts.length)
                ],
            }),
            defineField({
              name: "caption",
              title: "Caption",
              type: "string",
            }),
          ],
        },
      ],
      options: {
        layout: "grid",
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
      media: "images.0",
    },
  },
});
