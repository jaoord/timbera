import type { CollectionConfig, FieldHook, FieldHookArgs } from 'payload'

const formatSlug =
  (fallback: string): FieldHook =>
  ({ operation, data, originalDoc, value }: FieldHookArgs) => {
    const slugify = (val: string): string =>
      val
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '')
        .toLowerCase()

    if (typeof value === 'string') {
      return slugify(value)
    }

    if (operation === 'create') {
      const fallbackData = data?.[fallback] || originalDoc?.[fallback]

      if (fallbackData && typeof fallbackData === 'string') {
        return slugify(fallbackData)
      }
    }
  }

export const Posts: CollectionConfig = {
  slug: 'posts',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
      unique: true,
      hooks: {
        beforeValidate: [formatSlug('title')],
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
  ],
}
