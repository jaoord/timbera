import React from 'react'
import Image from 'next/image'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

import type { Footer, Media } from '@/payload-types'

function isValidMedia(media: unknown): media is Media & { url: string } {
  return Boolean(media && typeof media === 'object' && 'url' in media && media.url)
}

export async function Footer() {
  const payload = await getPayload({ config: configPromise })
  const footerData = await payload.findGlobal({
    slug: 'footer',
    depth: 1, // Populate the media relation to get the URL
  })
  const logo = footerData?.logo

  return (
    <footer className="bg-accent text-accent-foreground p-8">
      <div className="container mx-auto">
        {isValidMedia(logo) && (
          <Image
            src={logo.url}
            alt="Footer Logo"
            width={100}
            height={23}
            className="object-contain"
          />
        )}
      </div>
    </footer>
  )
}
