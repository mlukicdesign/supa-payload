import { GlobalConfig } from "payload/types";

const Footer: GlobalConfig = {
  slug: "footer",
  fields: [
    {
      name: "logo",
      label: "Logo",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "nav",
      label: "Navigation",
      type: "array",
      fields: [
        {
          name: "label",
          label: "Label",
          type: "text",
          required: true,
        },
        {
          name: "link",
          label: "Link",
          type: "text",
          required: true,
        },
      ],
      minRows: 1,
      maxRows: 5,
    },
    {
      name: "copyrightNotice",
      label: "Copyright Notice",
      type: "text",
      required: true,
    },
  ],
};

export default Footer;
