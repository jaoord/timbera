import type { CollectionConfig } from 'payload'

export const Hero: CollectionConfig = {
  slug: 'hero',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'heading',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'buttons',
      type: 'group',
      fields: [
        {
          name: 'primary',
          type: 'group',
          fields: [
            {
              name: 'text',
              type: 'text',
            },
            {
              name: 'url',
              type: 'text',
            },
          ],
        },
        {
          name: 'secondary',
          type: 'group',
          fields: [
            {
              name: 'text',
              type: 'text',
            },
            {
              name: 'url',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
