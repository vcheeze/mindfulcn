import { ListIcon } from '@phosphor-icons/react'
import { Link, useRouterState } from '@tanstack/react-router'
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

  const demoPages = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Components', path: '/components' },
    { name: 'Gradients', path: '/gradients' },
  ]

  return (
    <nav>
      <div className="flex items-center justify-between py-4 px-6 border-b max-sm:hidden">
        <Link
          to="/"
          className="font-mono"
          search={(prev) => prev}
          viewTransition
        >
          mindfulcn
        </Link>
        <div className="flex items-center gap-1">
          {demoPages.map((page) => (
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
        </div>
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
                  mindfulcn
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex gap-2"></DropdownMenuItem>
              <DropdownMenuGroup>
                <DropdownMenuLabel>Demo Pages</DropdownMenuLabel>
                <DropdownMenuItem>
                  <Link to="/dashboard">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/components">Components</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/gradients">Gradients</Link>
                </DropdownMenuItem>
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
    </nav>
  )
}
