import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'
import { Hero1 } from '@/components/frontend/Hero1'

import config from '@/payload.config'
import './styles.css'

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const hero = await payload.find({
    collection: 'hero',
    depth: 1,
    limit: 1,
    sort: '-createdAt',
  })

  const heroData = hero.docs[0]

  return (
    <div>
      <div className="container mx-auto lg:mt-8">
        <Hero1
          heading={heroData.heading}
          description={heroData.description}
          image={{
            src: heroData.image.url,
            alt: 'test',
          }}
        />
        <div className="flex flex-wrap my-4">
          <div className="w-full">
            <h1 className="font-heading text-2xl font-bold">Een duurzame woning voor iedereen!</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
