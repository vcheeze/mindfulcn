import type { SVGProps } from 'react'

import { cn } from '@/lib/utils'

type BrandMarkProps = SVGProps<SVGSVGElement>

export function BrandMark({
  className,
  ...props
}: BrandMarkProps): React.ReactNode {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={cn('shrink-0', className)}
      {...props}
    >
      <rect width="32" height="32" rx="7" className="fill-background" />
      <path
        d="M5 25V12a5 5 0 0 1 10 0v13"
        className="stroke-foreground"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 25V12a5 5 0 0 1 10 0v13"
        className="stroke-primary"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

type BrandLogoProps = {
  className?: string
  markClassName?: string
}

export function BrandLogo({
  className,
  markClassName,
}: BrandLogoProps): React.ReactNode {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 font-mono font-bold tracking-tight',
        className
      )}
    >
      <BrandMark className={cn('size-7', markClassName)} />
      <span>mindfulcn</span>
    </span>
  )
}
