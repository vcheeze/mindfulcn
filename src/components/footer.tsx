import { GithubLogoIcon, XIcon, XLogoIcon } from '@phosphor-icons/react'
import { Link } from '@tanstack/react-router'

import { BrandLogo } from '@/components/brand-logo'
import { site } from '@/lib/site'

export function Footer() {
  return (
    <footer className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Link
          to="/"
          search={(prev) => prev}
          className="flex justify-center"
          aria-label="mindfulcn home"
        >
          <BrandLogo markClassName="size-8" />
        </Link>

        <p className="text-center text-sm my-6">
          <span className="font-sans">shadcn/ui</span>{' '}
          <XIcon className="inline" /> Mindful Palettes{' '}
          <XIcon className="inline" /> tweakcn
        </p>
        <nav
          className="mb-8 flex flex-wrap justify-center gap-4 text-sm"
          aria-label="Footer"
        >
          <Link to="/" className="underline hover:text-primary">
            Home
          </Link>
          <Link to="/about" className="underline hover:text-primary">
            About
          </Link>
          <Link to="/dashboard" className="underline hover:text-primary">
            Dashboard
          </Link>
          <Link to="/components" className="underline hover:text-primary">
            Components
          </Link>
        </nav>
        <div className="space-y-2">
          <p className="text-center text-muted-foreground text-sm">
            Built for{' '}
            <a
              href={site.links.shadcn}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary"
            >
              shadcn/ui
            </a>
          </p>
          <p className="text-center text-muted-foreground text-sm">
            Mindful palettes by{' '}
            <a
              href={site.links.palettes}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary"
            >
              Alex Cristache
            </a>
          </p>
          <p className="text-center text-muted-foreground text-sm">
            Inspired by{' '}
            <a
              href={site.links.tweakcn}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary"
            >
              tweakcn
            </a>
          </p>
        </div>
        <div className="my-8 space-y-4" id="vcheeze">
          <p className="text-muted-foreground text-center text-sm">
            Built by{' '}
            <a
              href={site.author.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary"
            >
              {site.author.name}
            </a>
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href={site.author.twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X/Twitter"
              className="text-muted-foreground hover:text-primary block"
            >
              <XLogoIcon className="size-6" />
            </a>
            <a
              href={site.author.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary block"
            >
              <GithubLogoIcon className="size-6" />
            </a>
          </div>
        </div>
        <span className="text-muted-foreground block text-center text-sm">
          © {new Date().getFullYear()} mindfulcn, All rights reserved
        </span>
      </div>
    </footer>
  )
}
