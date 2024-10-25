import { GlobalConfig } from 'payload/types';

const Footer: GlobalConfig = {
    slug: 'footer',
    fields: [
        {
        name: 'title',
        label: 'Title',
        type: 'text',
        required: true,
        },
        {
        name: 'logo',
        label: 'Logo',
        type: 'upload',
        relationTo: 'media',
        required: true,
        },
    ],
}

export default Footer;