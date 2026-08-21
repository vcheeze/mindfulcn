import { LightningIcon, LinkedinLogoIcon, XLogoIcon } from '@phosphor-icons/react'

import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

const navigation = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#benefits' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Integrations', href: '#benefits', badge: 'New' },
      { label: 'Demo', href: '#top' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#faq' },
      { label: 'Careers', href: '#faq' },
      { label: 'Blog', href: '#insights' },
      { label: 'Press', href: '#faq' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Help Center', href: '#faq' },
      { label: 'FAQs', href: '#faq' },
      { label: 'Guides', href: '#insights' },
      { label: 'Community', href: '#faq' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#faq' },
      { label: 'Terms of Service', href: '#faq' },
      { label: 'Security', href: '#faq' },
      { label: 'Cookie Settings', href: '#faq' },
    ],
  },
]

export function Footer() {
  return (
    <footer
      className="bg-background w-full py-12 lg:py-20"
      aria-label="Demo footer"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 lg:gap-9 lg:px-8">
        <nav
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-9"
          aria-label="Demo footer"
        >
          {navigation.map((section) => (
            <div key={section.title} className="flex flex-col gap-2.5">
              <h3 className="text-muted-foreground text-sm font-medium">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.label} className="text-base">
                    <a href={link.href} className="flex items-center gap-1">
                      {link.label}
                      {'badge' in link && (
                        <Badge variant="outline">{link.badge}</Badge>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <Separator aria-hidden="true" />

        <div className="flex flex-col gap-9 md:flex-row md:items-center md:justify-between">
          <a
            href="#top"
            aria-label="Go to home page"
            className="flex shrink-0 items-center gap-1"
          >
            <LightningIcon className="text-primary size-5" />
            <span className="text-primary text-sm font-medium whitespace-nowrap">
              Acme Inc.
            </span>
          </a>

          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="flex items-center gap-3 md:gap-4">
              <a href="#" aria-label="LinkedIn">
                <LinkedinLogoIcon className="size-4" />
              </a>
              <a href="#" aria-label="X">
                <XLogoIcon className="size-4" />
              </a>
            </div>
            <p className="text-muted-foreground text-sm">
              &copy; Copyright Acme Inc. 2025. All right reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
