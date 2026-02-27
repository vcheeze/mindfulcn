import { EyesIcon, LightningIcon } from '@phosphor-icons/react'
import { useNavigate, useRouterState } from '@tanstack/react-router'

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from '@/components/ui/field'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { themes } from '@/lib/themes'

export function HowItWorks() {
  const routerState = useRouterState()
  const navigate = useNavigate()

  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
          Stop spending hours tweaking colors.
        </h2>
        <div className="relative">
          <div className="relative z-10 space-y-4 md:w-1/2">
            <p>
              Start with themes designed for clarity, accessibility, and beauty.
            </p>
            <p>
              Every theme uses Alex Cristache's mindful palettes — color systems
              designed for harmony and readability, not just aesthetics.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
              {/* <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <PaletteIcon className="size-4" />
                  <h3 className="text-sm font-medium">Thoughtfully Curated</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Every theme uses Alex Cristache's mindful palettes—color
                  systems designed for harmony and readability, not just
                  aesthetics.
                </p>
              </div> */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <EyesIcon className="size-4" />
                  <h3 className="text-sm font-medium">See Before You Commit</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Toggle between light and dark modes. See your theme on real
                  components. No surprises when you ship.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <LightningIcon className="size-4" />
                  <h3 className="text-sm font-medium">Copy & Customize</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  One-click copy in tweakcn format. Take what works, tweak what
                  doesn't. Your workflow, amplified.
                </p>
              </div>
            </div>
          </div>
          <div className="md:mask-l-from-35% md:mask-l-to-55% mt-12 h-fit md:absolute md:-inset-y-12 md:inset-x-0 md:mt-0">
            <div className="border-border/50 relative rounded-2xl border border-dotted p-2 flex justify-end">
              <RadioGroup
                defaultValue={routerState.location.search.theme ?? 'default'}
                onValueChange={(value: string) => {
                  document.documentElement.classList.forEach((className) => {
                    if (className.startsWith('theme-')) {
                      document.documentElement.classList.remove(className)
                    }
                  })
                  document.documentElement.classList.add(`theme-${value}`)

                  navigate({
                    to: '.',
                    search: (prev) => ({ ...prev, theme: value }),
                  })
                }}
              >
                {themes.slice(1, 4).map((theme) => (
                  <FieldLabel key={theme.id} htmlFor={`theme-${theme.id}`}>
                    <Field orientation="horizontal">
                      <FieldContent className="hover:opacity-80 hover:cursor-pointer">
                        <FieldTitle className="mb-1">
                          {theme.name}{' '}
                          <span className="text-muted-foreground italic text-xs">
                            #{theme.id}
                          </span>
                        </FieldTitle>
                        <FieldDescription className="mb-2">
                          {theme.description}
                        </FieldDescription>
                        <div className="flex gap-1">
                          {theme.colors.map((color) => (
                            <div
                              key={color}
                              className="flex-1 h-12 rounded border border-gray-200 dark:border-gray-800"
                              style={{ backgroundColor: color }}
                            />
                          ))}
                        </div>
                      </FieldContent>
                      <RadioGroupItem
                        value={theme.id}
                        id={`theme-${theme.id}`}
                      />
                    </Field>
                  </FieldLabel>
                ))}
              </RadioGroup>
              {/* <img
                src="/images/how-it-works.png"
                className="hidden rounded-2xl dark:block"
                alt="payments illustration dark"
              />
              <img
                src="/images/how-it-works-light.png"
                className="rounded-2xl shadow dark:hidden"
                alt="payments illustration light"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
