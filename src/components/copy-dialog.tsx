import { CopyIcon } from '@phosphor-icons/react'
import { useRouterState } from '@tanstack/react-router'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { themes } from '@/lib/themes'

function formatCssForTweakcn(rawCss: string, themeId: string): string {
  const withRoot = rawCss.replace(
    new RegExp(`^\\.theme-${themeId}\\b`, 'm'),
    ':root'
  )
  return withRoot.replace(
    new RegExp(`\\.dark\\.theme-${themeId}\\b`, 'g'),
    '.dark'
  ).trim()
}

const themeModules = import.meta.glob('../themes/*.css', {
  query: '?raw',
  import: 'default',
})

export const CopyDialog = () => {
  const routerState = useRouterState()
  const [css, setCss] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const theme = themes.find(
    (theme) => theme.id === routerState.location.search.theme
  )

  const handleOpenChange = async (open: boolean) => {
    if (!open || !theme) return
    const load = themeModules[`../themes/${theme.id}.css`]
    if (load) {
      const raw = (await load()) as string
      setCss(formatCssForTweakcn(raw, theme.id))
    }
  }

  const handleCopy = async () => {
    if (!css) return
    await navigator.clipboard.writeText(css)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Dialog onOpenChange={handleOpenChange}>
      <DialogTrigger
        render={<Button variant="outline" size="icon" disabled={!theme} />}
      >
        <CopyIcon />
      </DialogTrigger>
      <DialogContent className="max-w-2xl!">
        <DialogHeader>
          <DialogTitle>Styles</DialogTitle>
          <DialogDescription>
            Copy styles and paste in your CSS, or import in tweakcn to fine-tune
            it just the way you want!
          </DialogDescription>
        </DialogHeader>
        <div className="overflow-hidden rounded-md border border-border bg-muted/60">
          <div className="flex items-center justify-between border-b border-border bg-muted px-3 py-2">
            <span className="text-sm font-medium capitalize text-foreground">
              {theme?.name ?? '—'}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopy}
              disabled={!css}
            >
              <CopyIcon />
              {copied ? 'Copied!' : 'Copy'}
            </Button>
          </div>
          <ScrollArea className="h-96">
            <pre className="p-4 text-sm">{css ?? 'Loading...'}</pre>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  )
}
