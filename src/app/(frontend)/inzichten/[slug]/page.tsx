import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React, { cache } from 'react'

import type { Post } from '@/payload-types'

export default async function Post({ params: paramsPromise }: Args) {
  const { slug = '' } = await paramsPromise
  const post = await queryPostBySlug({ slug })

  //if (!post) return <PayloadRedirects url={url} />

  return (
    <article className="pt-16 pb-16">
      {/* <PageClient /> */}

      {/* Allows redirects for valid pages too */}
      {/* //<PayloadRedirects disableNotFound url={url} /> */}

      {/* <PostHero post={post} /> */}

      <div className="flex flex-col items-center gap-4 pt-8">
        <div className="container">blog post {post.title}</div>
      </div>
    </article>
  )
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'posts',
    limit: 1,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
