import { PlayIcon } from '@phosphor-icons/react'

import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="py-12 lg:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 lg:gap-16 lg:px-8">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-4 text-center">
          <span className="border-border bg-background rounded-4xl border px-2 py-0.5 text-xs font-medium">
            New features released
          </span>
          <h2 className="text-4xl font-medium tracking-tight text-balance lg:text-6xl">
            Make Better Decisions, With Ease
          </h2>
          <p className="text-muted-foreground max-w-xl text-lg text-pretty">
            Acme Inc&apos;s personal AI helps you cut through the noise, speed
            up delivery, and stay focused without switching contexts.
          </p>
          <div className="flex w-full flex-col gap-2 sm:w-fit sm:flex-row">
            <Button render={<a href="#pricing" />}>Get Started</Button>
          </div>
        </div>

        <div className="bg-muted relative aspect-[5/3] w-full overflow-hidden rounded-xl">
          <img
            src="/examples/marketing/hero.webp"
            alt="Product showcase"
            className="size-full object-cover"
          />

          <button
            type="button"
            className="bg-background group absolute inset-0 z-10 m-auto flex size-16 items-center justify-center rounded-full p-3 shadow-2xs"
            aria-label="Play video"
          >
            <PlayIcon className="size-6 transition-transform duration-300 motion-safe:group-hover:scale-110" />
          </button>
        </div>
      </div>
    </section>
  )
}
