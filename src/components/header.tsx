import { ListIcon } from '@phosphor-icons/react'
import { Link, useRouterState } from '@tanstack/react-router'

import { BrandLogo } from '@/components/brand-logo'
import { CopyDialog } from '@/components/copy-dialog'
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useSidebar } from '@/components/ui/sidebar'
import { brandNav, demoNav } from '@/lib/site'
import { themes } from '@/lib/themes'
import { cn } from '@/lib/utils'

const headerNav = [...brandNav, ...demoNav]

function NavLabel({
  children,
  active,
}: {
  children: string
  active: boolean
}) {
  return (
    <span className="grid">
      <span
        className="invisible col-start-1 row-start-1 font-semibold"
        aria-hidden="true"
      >
        {children}
      </span>
      <span
        className={cn(
          'col-start-1 row-start-1 font-normal',
          active && 'font-semibold',
        )}
      >
        {children}
      </span>
    </span>
  )
}

export function Header() {
  const routerState = useRouterState()
  const { toggleSidebar } = useSidebar()
  const pathname = routerState.location.pathname

  return (
    <header className="font-mono tracking-tight">
      <div className="flex items-center justify-between py-4 px-6 border-b max-sm:hidden">
        <Link
          to="/"
          className="font-mono"
          search={(prev) => prev}
          viewTransition
        >
          <BrandLogo />
        </Link>
        <nav className="flex items-center gap-1" aria-label="Primary">
          {headerNav.map((page) => {
            const isActive = pathname === page.path

            return (
              <Button
                key={page.path}
                variant="link"
                render={
                  <Link to={page.path} search={(prev) => prev} viewTransition />
                }
                aria-current={isActive ? 'page' : undefined}
                className="font-normal text-foreground hover:text-primary transition-colors"
              >
                <NavLabel active={isActive}>{page.name}</NavLabel>
              </Button>
            )
          })}
        </nav>
        <div className="flex items-center gap-2">
          <CopyDialog />
          <ModeToggle />
          <Button variant="outline" onClick={toggleSidebar}>
            <div className="flex -gap-1">
              {['bg-primary', 'bg-secondary', 'bg-accent', 'bg-muted'].map(
                (item) => (
                  <div
                    key={item}
                    className={`rounded-full size-4  -ml-1 first:ml-0 ring-2 ring-background ${item}`}
                  />
                )
              )}
            </div>
            {routerState.location.search.theme
              ? themes.find(
                  (theme) => theme.id === routerState.location.search.theme
                )?.name
              : 'Select Theme'}
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between p-4 border-b md:hidden">
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button variant="outline" size="icon">
                  <ListIcon />
                </Button>
              }
            />
            <DropdownMenuContent className="w-40 font-mono">
              <DropdownMenuItem
                render={
                  <Link to="/" search={(prev) => prev} viewTransition />
                }
              >
                <BrandLogo markClassName="size-5" />
              </DropdownMenuItem>
              {headerNav.map((page) => {
                const isActive = pathname === page.path

                return (
                  <DropdownMenuItem
                    key={page.path}
                    render={
                      <Link
                        to={page.path}
                        search={(prev) => prev}
                        viewTransition
                      />
                    }
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <NavLabel active={isActive}>{page.name}</NavLabel>
                  </DropdownMenuItem>
                )
              })}
            </DropdownMenuContent>
          </DropdownMenu>
          <ModeToggle />
          <CopyDialog />
        </div>

        <Button variant="outline" onClick={toggleSidebar}>
          <div className="flex -gap-1">
            {['bg-primary', 'bg-secondary', 'bg-accent', 'bg-muted'].map(
              (item) => (
                <div
                  key={item}
                  className={`rounded-full size-4  -ml-1 first:ml-0 ring-2 ring-background ${item}`}
                />
              )
            )}
          </div>
          {routerState.location.search.theme
            ? themes.find(
                (theme) => theme.id === routerState.location.search.theme
              )?.name
            : 'Select Theme'}
        </Button>
      </div>
    </header>
  )
}
