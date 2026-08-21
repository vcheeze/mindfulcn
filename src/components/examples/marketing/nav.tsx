import { LightningIcon } from '@phosphor-icons/react'

import { Button } from '@/components/ui/button'

const links = [
  { label: 'Products', href: '#benefits' },
  { label: 'Solutions', href: '#benefits' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Company', href: '#faq' },
]

export function Nav() {
  return (
    <header className="bg-background sticky top-0 z-40 border-b">
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
        <a href="#top" className="flex shrink-0 items-center gap-1">
          <LightningIcon className="text-primary size-5" />
          <span className="text-primary text-sm font-medium whitespace-nowrap">
            Acme Inc.
          </span>
        </a>

        <nav className="hidden items-center md:flex" aria-label="Demo">
          {links.map((link) => (
            <Button
              key={link.label}
              variant="ghost"
              size="sm"
              render={<a href={link.href} />}
            >
              {link.label}
            </Button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            Login
          </Button>
          <Button size="sm" render={<a href="#pricing" />}>
            Get started
          </Button>
        </div>
      </div>
    </header>
  )
}
