import { Link, useRouterState } from '@tanstack/react-router'

import { CopyDialog } from '@/components/copy-dialog'
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { themes } from '@/lib/themes'

type HeaderProps = {
  onSelectTheme?: () => void
}

export function Header({ onSelectTheme }: HeaderProps) {
  const routerState = useRouterState()

  const demoPages = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Components', path: '/components' },
    { name: 'Gradients', path: '/gradients' },
  ]

  return (
    <nav className="flex items-center justify-between py-4 px-6 border-b">
      <Link to="/" className="font-mono" search={(prev) => prev} viewTransition>
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
        <Button variant="outline" onClick={onSelectTheme}>
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
