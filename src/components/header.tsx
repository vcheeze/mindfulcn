import { ListIcon } from '@phosphor-icons/react'
import { Link, useRouterState } from '@tanstack/react-router'

import { BrandLogo } from '@/components/brand-logo'
import { CopyDialog } from '@/components/copy-dialog'
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useSidebar } from '@/components/ui/sidebar'
import { themes } from '@/lib/themes'

export function Header() {
  const routerState = useRouterState()
  const { toggleSidebar } = useSidebar()

  const navPages = [
    { name: 'About', path: '/about' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Components', path: '/components' },
    { name: 'Gradients', path: '/gradients' },
  ] as const

  return (
    <header>
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
          {navPages.map((page) => (
            <Button
              key={page.path}
              variant="link"
              render={
                <Link to={page.path} search={(prev) => prev} viewTransition />
              }
              className="text-foreground hover:text-primary transition-colors"
            >
              {page.name}
            </Button>
          ))}
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
            <DropdownMenuContent className="w-40">
              <DropdownMenuItem>
                <Link
                  to="/"
                  className="font-mono"
                  search={(prev) => prev}
                  viewTransition
                >
                  <BrandLogo markClassName="size-5" />
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex gap-2"></DropdownMenuItem>
              <DropdownMenuGroup>
                <DropdownMenuLabel>Pages</DropdownMenuLabel>
                {navPages.map((page) => (
                  <DropdownMenuItem key={page.path}>
                    <Link to={page.path}>{page.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
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
