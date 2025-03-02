import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface Hero1Props {
  heading: string
  description: string
  buttons?: {
    primary?: {
      text: string
      url: string
    }
    secondary?: {
      text: string
      url: string
    }
  }
  image: {
    src: string
    alt: string
  }
}

const Hero1 = ({
  heading = 'Blocks Built With Shadcn & Tailwind',
  description = 'Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.',
  buttons = {
    // primary: {
    //   text: 'Discover all components',
    //   url: 'https://www.shadcnblocks.com',
    // },
    // secondary: {
    //   text: 'View on GitHub',
    //   url: 'https://www.shadcnblocks.com',
    // },
  },
  image = {
    src: 'https://www.shadcnblocks.com/images/block/placeholder-1.svg',
    alt: 'Hero section demo image showing interface components',
  },
}: Hero1Props) => {
  return (
    <section className="py-2 md:py-4 lg:py-8 xl:py-16">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="my-6 text-pretty text-2xl font-bold lg:text-4xl">{heading}</h1>
            <p className="mb-8 max-w-xl lg:text-xl text-muted">{description}</p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {buttons.primary && (
                <Button asChild className="w-full sm:w-auto">
                  <a href={buttons.primary.url}>{buttons.primary.text}</a>
                </Button>
              )}
              {buttons.secondary && (
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <a href={buttons.secondary.url}>
                    {buttons.secondary.text}
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
          <img
            src={image.src}
            alt={image.alt}
            className="max-h-96 w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export { Hero1 }
