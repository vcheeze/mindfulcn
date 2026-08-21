import { TanStackDevtools } from '@tanstack/react-devtools'
import {
  HeadContent,
  Scripts,
  createRootRoute,
  retainSearchParams,
  useRouterState,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import z from 'zod'

import appCss from '../styles.css?url'
import { Header } from '@/components/header'
import { ThemeBranding } from '@/components/theme-branding'
import { ThemeSelector } from '@/components/theme-selector'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
} from '@/components/ui/sidebar'
import { TooltipProvider } from '@/components/ui/tooltip'
import { jsonLdScript, websiteJsonLd } from '@/lib/seo'
import { site } from '@/lib/site'
import { cn } from '@/lib/utils'

const appSearchSchema = z.object({
  theme: z.coerce.string().optional(),
  mode: z.enum(['light', 'dark']).optional(),
})

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: site.title,
      },
      {
        name: 'description',
        content: site.description,
      },
      {
        name: 'theme-color',
        content: '#ffffff',
        'data-theme-color': '',
      },
      {
        name: 'color-scheme',
        content: 'light dark',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/mindfulcn-logo.svg',
        'data-theme-favicon': '',
      },
      {
        rel: 'apple-touch-icon',
        href: '/logo192.png',
      },
      {
        rel: 'manifest',
        href: '/manifest.json',
      },
      {
        rel: 'author',
        href: site.author.url,
      },
    ],
    scripts: [jsonLdScript(websiteJsonLd())],
  }),

  shellComponent: RootDocument,
  validateSearch: appSearchSchema,
  search: {
    middlewares: [retainSearchParams(['theme'])],
  },
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const { theme, mode } = Route.useSearch()
  const isDemo = useRouterState({
    select: (state) =>
      state.matches.some((match) => match.routeId.startsWith('/(demo)')),
  })
  const themeClass = theme ? `theme-${theme}` : 'theme-default'
  const modeClass = mode ?? 'light'

  return (
    // TODO adding themeClass like this right now removes the `dark` class from html when using `navigate` function. How do I preserve this?
    <html
      lang="en"
      className={cn(
        'transition-colors',
        isDemo ? 'demo font-sans' : 'font-mono',
        themeClass,
        modeClass,
      )}
    >
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeBranding theme={theme} mode={mode} />
        <a
          href="#main-content"
          className="bg-background text-foreground font-mono sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <TooltipProvider>
          <SidebarProvider defaultOpen={false}>
            <SidebarInset>
              <ScrollArea className="h-screen">
                <Header />
                <main id="main-content">{children}</main>
              </ScrollArea>
            </SidebarInset>
            <Sidebar side="right" className="font-mono tracking-tight">
              <SidebarHeader>
                <div className="px-2 pt-2">Select Theme</div>
              </SidebarHeader>
              <SidebarContent className="p-4">
                <ThemeSelector />
              </SidebarContent>
            </Sidebar>
          </SidebarProvider>
        </TooltipProvider>
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
