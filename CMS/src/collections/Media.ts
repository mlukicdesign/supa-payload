import { CollectionConfig } from "payload/types";

const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true, // Allows all users to read media files (adjust as needed)
  },
  upload: {
    staticDir: "media", // Local storage folder; ignored if using S3 storage
    mimeTypes: ["image/*", "video/*", "application/pdf"], // Adjust mime types as needed
    disableLocalStorage: true, // Disables local storage if you're using S3
  },
  fields: [
    {
      name: "altText",
      type: "text",
      required: true,
      label: "Alt Text",
      admin: {
        description: "A short description for accessibility and SEO.",
      },
    },
    {
      name: "caption",
      type: "text",
      label: "Caption",
      admin: {
        description: "A caption to display with the media.",
      },
    },
    {
      name: "tags",
      type: "array",
      label: "Tags",
      labels: {
        singular: "Tag",
        plural: "Tags",
      },
      fields: [
        {
          name: "tag",
          type: "text",
          label: "Tag",
        },
      ],
    },
  ],
  timestamps: true,
};

export default Media;