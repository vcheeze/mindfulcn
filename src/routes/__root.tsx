import { TanStackDevtools } from '@tanstack/react-devtools'
import {
  createRootRoute,
  HeadContent,
  retainSearchParams,
  Scripts,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { useState } from 'react'
import z from 'zod'
import { Header } from '@/components/header'
import { ModeProvider } from '@/components/mode-provider'
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
import appCss from '../styles.css?url'

const appSearchSchema = z.object({
  theme: z.string().optional(), // TODO this only allows ?theme="231", can we allow z.number() too so ?theme=231 works?
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
        title: 'TanStack Start Starter',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,
  validateSearch: appSearchSchema,
  search: {
    middlewares: [retainSearchParams(['theme'])],
  },
  loader: async ({ location }) => {
    const theme = (location.search as { theme?: string }).theme // TODO how to get the proper type here?
    return { htmlClass: theme ? `theme-${theme}` : 'theme-default' }
  },
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const { htmlClass } = Route.useLoaderData()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev)
  }

  return (
    // TODO adding htmlClass like this right now removes the `dark` class from html when using `navigate` function. How do I preserve this?
    <html lang="en" className={`font-mono transition-colors ${htmlClass}`}>
      <head>
        <HeadContent />
      </head>
      <body>
        <ModeProvider>
          <TooltipProvider>
            <SidebarProvider open={isSidebarOpen}>
              <SidebarInset>
                <ScrollArea className="h-screen">
                  <Header onSelectTheme={toggleSidebar} />
                  <main>{children}</main>
                </ScrollArea>
              </SidebarInset>
              <Sidebar side="right">
                <SidebarHeader>
                  <div className="px-2 pt-2">Select Theme</div>
                </SidebarHeader>
                <SidebarContent className="p-4">
                  <ThemeSelector />
                </SidebarContent>
              </Sidebar>
            </SidebarProvider>
          </TooltipProvider>
        </ModeProvider>
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
