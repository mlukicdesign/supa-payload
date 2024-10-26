import { Block, CollectionConfig } from 'payload/types'
import { slateEditor } from "@payloadcms/richtext-slate";

export const CallToAction: Block = {
  slug: "cta",
  labels: {
    singular: "Call to Action",
    plural: "Calls to Action",
  },
  fields: [
    {
      name: "content",
      type: "richText",
      // Pass the Slate editor here and configure it accordingly
      editor: slateEditor({
        admin: {
          elements: [
            // customize elements allowed in Slate editor here
          ],
          leaves: [
            // customize leaves allowed in Slate editor here
          ],
        },
      }),
    },
  ],
};

export const Content: CollectionConfig = {
  slug: "content",
  fields: [
    {
      name: "blocks",
      label: "Blocks",
      type: "blocks",
      blocks: [CallToAction],
    },
  ],
};