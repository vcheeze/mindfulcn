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
import { themes } from '@/lib/themes'

const themeModules = import.meta.glob('../themes/*.css', {
  query: '?raw',
  import: 'default',
})

console.log('themeModules :>> ', themeModules)

export const CopyDialog = () => {
  const routerState = useRouterState()
  const [css, setCss] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const theme = themes.find(
    (theme) => theme.id === routerState.location.search.theme
  )

  const handleOpenChange = async (open: boolean) => {
    if (!open || !theme) return
    const load = themeModules[`/src/themes/${theme.id}.css`]
    if (load) setCss((await load()) as string)
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
        <pre className="max-h-96 overflow-auto rounded-md bg-muted p-4 text-sm">
          {css ?? 'Loading...'}
        </pre>
        <Button onClick={handleCopy} disabled={!css}>
          {copied ? 'Copied!' : 'Copy'}
        </Button>
      </DialogContent>
    </Dialog>
  )
}
