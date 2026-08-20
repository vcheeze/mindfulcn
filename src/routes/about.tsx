import { createFileRoute } from '@tanstack/react-router'
import { Footer } from '@/components/footer'
import { aboutJsonLd, jsonLdScript, pageHead } from '@/lib/seo'
import { routes } from '@/lib/site'

const about = routes.find((route) => route.path === '/about')!

export const Route = createFileRoute('/about')({
  head: () => ({
    ...pageHead({
      title: about.title,
      description: about.description,
      path: '/about',
    }),
    scripts: [jsonLdScript(aboutJsonLd())],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <article className="p-6 lg:p-12 container mx-auto max-w-4xl">
        <h1 className="scroll-m-20 text-2xl lg:text-3xl">About mindfulcn</h1>
        <p className="mt-4">
          mindfulcn is a free gallery of shadcn/ui themes built from Alex
          Cristache&apos;s mindful palettes. Preview a theme on real components,
          then copy tweakcn-ready CSS in one click.
        </p>
        <p className="mt-4 text-muted-foreground">
          I like to think that I have some (minimal) level of aesthetic sense,
          but I am terrible at colors. I can build fast, I can ship fast, but I
          get stuck on creating the perfect palette.
        </p>
        <p className="mt-4 text-muted-foreground">
          That is, until I discovered Alex&apos;s mindful palettes on X.
          Life-changing, I tell you. This side project is an attempt to share
          the joy of using these palettes. The themes are built with shadcn&apos;s
          design system, and ready for tweakcn. You can preview, compare, and
          copy the themes — all in one place.
        </p>
        <h2 className="text-2xl lg:text-3xl mt-8">Credits</h2>
        <h3 className="scroll-m-20 text-xl lg:text-2xl mt-6">
          <a
            href="https://x.com/AlexCristache"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary"
          >
            Alex Cristache
          </a>
        </h3>
        <p className="mt-4 text-muted-foreground">
          The mastermind behind the mindful palettes. If you haven&apos;t checked
          out his work, do yourself a favor and explore his X profile. His color
          systems are not just visually stunning but also thoughtfully crafted
          with accessibility in mind.
        </p>
        <h3 className="scroll-m-20 text-xl lg:text-2xl mt-6">
          <a
            href="https://ui.shadcn.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary"
          >
            shadcn/ui
          </a>
        </h3>
        <p className="mt-4 text-muted-foreground">
          I remember my skepticism when I first discovered it five years ago.
          Novel concept, beautiful components. I tried it out, and am so glad to
          see the spike in popularity and adoption shortly thereafter.
        </p>
        <p className="mt-4 text-muted-foreground">
          Needs no further introduction. Just go use it.
        </p>
        <h3 className="scroll-m-20 text-xl lg:text-2xl mt-6">
          <a
            href="https://tweakcn.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary"
          >
            tweakcn
          </a>
        </h3>
        <p className="mt-4 text-muted-foreground">
          Borrowed certain demo components like the dashboard, etc. from
          tweakcn. The OG tool that makes it easy to customize and export
          themes. If you&apos;re looking to tweak your shadcn themes, tweakcn is
          the way to go.
        </p>
        <h3 className="scroll-m-20 text-xl lg:text-2xl mt-6">
          <a
            href="https://kigen.design/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary"
          >
            kigen
          </a>{' '}
          by{' '}
          <a
            href="https://overlayz.studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary"
          >
            Overlayz Studio
          </a>
        </h3>
        <p className="mt-4 text-muted-foreground">
          I use kigen&apos;s color generator for expanding Alex&apos;s beautiful
          colors. This allows me to find the best colors for background,
          foreground, muted, border, and more variables. You can choose between
          different color formats and algorithms. Super useful for exploring
          colors.
        </p>
      </article>
      <Footer />
    </>
  )
}
