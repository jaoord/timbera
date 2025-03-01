import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Heading } from '@/components/frontend/Heading'

export default async function Page() {
  const payload = await getPayload({ config: configPromise })
  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 9,
    select: {
      title: true,
      slug: true,
      featuredImage: true,
    },
    sort: '-createdAt', // Sort by creation date in descending order
  })

  return (
    <div className="space-y-8 mt-12">
      <div className="container mx-auto mb-12">
        <Heading level={1}>Nieuws en referenties</Heading>
      </div>

      <div className="bg-muted text-muted-foreground pt-8 pb-20">
        <div className="container mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {/* todo: move to component */}
            {posts.docs.map((post) => (
              <Link
                key={post.id}
                href={`/inzichten/${post.slug}`}
                className="group relative block aspect-[4/3] overflow-hidden rounded-sm lg:min-h-[265px] lg:w-[100%] lg:aspect-video"
              >
                <div className="absolute top-0 left-0 z-10">
                  <span className="bg-muted px-3 py-1 text-sm text-muted-foreground font-medium uppercase tracking-wider">
                    Nieuws
                  </span>
                </div>
                {post.featuredImage && (
                  <Image
                    src={post.featuredImage.url}
                    alt={post.title}
                    fill
                    className="object-cover transition-all duration-300 group-hover:brightness-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-[#f0f0f0] font-medium leading-[30px] font-heading">
                    {post.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
