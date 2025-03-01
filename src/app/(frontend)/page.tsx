import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import './styles.css'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  return (
    <div className="container mx-auto mt-8">
      <div className="flex flex-wrap -mx-2">
        <div className="w-full">
          <h1 className="font-heading text-2xl font-bold">Een duurzame woning voor iedereen!</h1>
        </div>
      </div>
    </div>
  )
}
