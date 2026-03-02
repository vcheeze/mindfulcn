import { ArrowRightIcon } from '@phosphor-icons/react'
import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { useSidebar } from '@/components/ui/sidebar'

export function Hero() {
  const { toggleSidebar } = useSidebar()

  return (
    <main className="my-8">
      <section className="overflow-hidden">
        <div className="relative mx-auto max-w-5xl px-6 py-28 lg:py-20">
          <div className="lg:flex lg:items-center lg:gap-12">
            <div className="relative z-10 mx-auto max-w-xl text-center lg:ml-0 lg:w-1/2 lg:text-left">
              <Link
                to="."
                search={{ theme: '223' }}
                className="rounded-lg mx-auto flex w-fit items-center gap-2 border p-1 pr-3 lg:ml-0"
              >
                <span className="bg-muted rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs">
                  New theme
                </span>
                <span className="text-sm">indigo atelier</span>
                <span className="bg-(--color-border) block h-4 w-px"></span>

                <ArrowRightIcon className="size-4" />
              </Link>

              <h1 className="mt-10 text-balance text-4xl font-bold md:text-5xl xl:text-5xl">
                Mindful <span className="font-sans font-normal">shadcn/ui</span>{' '}
                Themes
              </h1>
              <p className="mt-8">
                Curated color palettes meet shadcn's design system. Preview,
                compare, and copy themes built with Alex Cristache's mindful
                palettes — ready for tweakcn.
              </p>

              <div className="mt-12 flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button onClick={toggleSidebar} size="lg">
                  Browse Themes
                </Button>
                <Button
                  render={<Link to="/" hash="how-it-works" />}
                  size="lg"
                  variant="outline"
                >
                  See How It Works
                </Button>
              </div>

              <div className="my-8 lg:my-12">
                <ul className="list-inside lg:list-disc space-y-2">
                  <li>mindful</li>
                  <li>curated</li>
                  <li>tweakcn-ready</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 -mx-4 rounded-3xl p-3 lg:col-span-3">
            <div className="relative">
              <div className="bg-radial-[at_65%_25%] to-background z-1 -inset-17 absolute from-transparent to-40%"></div>
              <img
                className="hidden dark:block"
                src="https://pbs.twimg.com/media/HBotuMzWEAA21gJ?format=jpg&name=4096x4096"
                alt="app illustration"
              />
              <img
                className="dark:hidden"
                src="https://pbs.twimg.com/media/G8xaoWhWAAADyzA?format=png&name=medium"
                alt="app illustration"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
