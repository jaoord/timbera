import React from 'react'
import { cn } from '@/lib/utils'

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6
type HeadingProps = {
  level?: HeadingLevel
  children: React.ReactNode
  className?: string
}

const defaultStyles = 'font-heading'
const sizeStyles = {
  1: 'text-4xl font-bold',
  2: 'text-3xl font-bold',
  3: 'text-2xl font-medium',
  4: 'text-xl font-medium',
  5: 'text-lg font-bold',
  6: 'text-base font-bold',
} as const

export function Heading({ level = 1, children, className }: HeadingProps) {
  const Tag = `h${level}` as const
  const combinedClassName = cn(defaultStyles, sizeStyles[level], className)

  return <Tag className={combinedClassName}>{children}</Tag>
}
