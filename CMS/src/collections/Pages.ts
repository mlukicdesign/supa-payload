import { CollectionConfig } from "payload/types";

export const Pages: CollectionConfig = {
slug: "pages",
fields: [
   { 
    name: 'slug',
    label: 'Slug',
    type: 'text',
    required: true,
    admin: {
        position: 'sidebar',
    }
   },
   {
    name: 'layout',
    label: 'Layout',
    type: 'blocks',
    blocks: [
        
    ]
   }

]



}