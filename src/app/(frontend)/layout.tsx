import React from 'react'
import './styles.css'
import Image from 'next/image'
import Link from 'next/link'
import { Inter, Nunito } from 'next/font/google'
import { Footer } from '@/components/frontend/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
})

export const metadata = {
  description: 'Timbera maakt prefab houten daken, wanden en volledige woningen.',
  title: 'Timbera',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="nl" className={`${inter.variable} ${nunito.variable}`}>
      <body>
        <header className="p-8">
          <div className="container mx-auto">
            <div className="flex flex-wrap -mx-2">
              <div className="w-full lg:w-4/12 px-2">
                <Image src="/images/logo.svg" alt="Timbera" width={179} height={41} />
              </div>
              <div className="w-full lg:w-8/12 px-2">
                <Link href="/">home</Link>| <Link href="/producten">producten</Link>|{' '}
                <Link href="/blog">blog</Link>
              </div>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
