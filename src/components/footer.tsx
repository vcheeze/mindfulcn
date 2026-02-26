import { GithubLogoIcon, XIcon, XLogoIcon } from '@phosphor-icons/react'

export function Footer() {
  return (
    <footer className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">mindfulcn</div>

        <p className="text-center text-sm my-6">
          <span className="font-sans">shadcn/ui</span>{' '}
          <XIcon className="inline" /> Mindful Palletes{' '}
          <XIcon className="inline" /> tweakcn
        </p>
        <div className="space-y-2">
          <p className="text-center text-muted-foreground text-sm">
            Built for{' '}
            <a
              href="https://ui.shadcn.com/"
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
              href="https://x.com/AlexCristache"
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
              href="https://tweakcn.com/"
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
              href="https://vcheeze.pages.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary"
            >
              vcheeze
            </a>
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="https://x.com/peterchenwei"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X/Twitter"
              className="text-muted-foreground hover:text-primary block"
            >
              <XLogoIcon className="size-6" />
            </a>
            <a
              href="https://github.com/vcheeze"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X/Twitter"
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
