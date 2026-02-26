import {
  BracketsCurlyIcon,
  EyedropperSampleIcon,
  EyeIcon,
  PiggyBankIcon,
} from '@phosphor-icons/react'

export function Features() {
  return (
    <section className="overflow-hidden py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-4xl lg:text-5xl">
            Built for the shadcn Ecosystem
          </h2>
          <p className="mt-6 text-lg">
            Not a generic CSS theme pack. Stay in your stack. You just get
            better defaults.
          </p>
        </div>
        {/* <div className="mask-b-from-75% mask-l-from-75% mask-b-to-95% mask-l-to-95% relative -mx-4 pr-3 pt-3 md:-mx-12">
          <div className="perspective-midrange">
            <div className="rotate-x-6 -skew-2">
              <div className="aspect-88/36 relative">
                <img
                  src="/mail-upper.png"
                  className="absolute inset-0 z-10"
                  alt="payments illustration dark"
                  width={2797}
                  height={1137}
                />
                <img
                  src="/mail-back.png"
                  className="hidden dark:block"
                  alt="payments illustration dark"
                  width={2797}
                  height={1137}
                />
                <img
                  src="/mail-back-light.png"
                  className="dark:hidden"
                  alt="payments illustration light"
                  width={2797}
                  height={1137}
                />
              </div>
            </div>
          </div>
        </div> */}
        <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <EyeIcon className="size-4" />
              <h3 className="text-sm font-medium">Preview in Context</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Don't guess how colors will look — see them on actual pages and
              components in both light and dark modes.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <BracketsCurlyIcon className="size-4" />
              <h3 className="text-sm font-medium">tweakcn-Ready</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Every theme exports in the exact format tweakcn expects. No
              reformatting, no friction.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <EyedropperSampleIcon className="size-4" />
              <h3 className="text-sm font-medium">Built Mindfully</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Alex Cristache's Mindful Palettes prioritize readability,
              contrast, and semantic meaning.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <PiggyBankIcon className="size-4" />

              <h3 className="text-sm font-medium">Free to Use</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Start building beautiful interfaces today. No account needed, no
              credit card required.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
