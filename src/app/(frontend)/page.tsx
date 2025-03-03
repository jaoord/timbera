import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'
import { Hero1 } from '@/components/blocks/Hero1'
import { Gallery6 } from '@/components/blocks/gallery6'

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

  const productData = {
    heading: 'Een duurzame oplossing voor iedereen!',
    items: [
      {
        id: 'item-1',
        title: 'Prefab gebouwschil',
        summary:
          'Een complete en integrale dakoplossing voor zowel seriematige nieuwbouw als renovatie.',
        url: '#',
        image: '/images/tmp/gebouwschil.svg',
      },
      {
        id: 'item-2',
        title: 'Wanden en gevels',
        summary:
          'Explore our library of customizable components built with shadcn/ui and Tailwind CSS.',
        url: '#',
        image: '/images/tmp/wanden-en-gevels.svg',
      },
      {
        id: 'item-3',
        title: 'Prefab woningconcept',
        summary:
          'Met dit innovatieve woningconcept kunnen we snel en betaalbare woningen realiseren.',
        url: '#',
        image: '/images/tmp/prefab-woningconcept.svg',
      },
      {
        id: 'item-4',
        title: 'Energieopwekking',
        summary: 'Het geïntegreerde zonnepaneelsysteem voor de woningbouw',
        url: '#',
        image: '/images/tmp/pv.svg',
      },
      {
        id: 'item-5',
        title: 'Zonnewarmte',
        summary:
          'Slimme warmteopwekkingstechnologie met een aantrekkelijke uitstraling, zonder de noodzaak van zware elektriciteitsaansluitingen',
        url: '#',
        image: 'https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg',
      },
    ],
  }

  return (
    <div>
      <div className="container mx-auto lg:mt-8 px-2">
        <Hero1
          heading={heroData.heading}
          description={heroData.description}
          image={{
            src: heroData.image.url,
            alt: 'test',
          }}
        />
        <Gallery6 {...productData} />
      </div>
    </div>
  )
}
