import { CircleHalfIcon } from '@phosphor-icons/react'
import { useTheme } from './mode-provider'
import { Button } from './ui/button'

export const ModeToggle = () => {
  const { appTheme, setTheme } = useTheme()

  return (
    <Button
      size="icon"
      variant="outline"
      onClick={() => setTheme(appTheme === 'light' ? 'dark' : 'light')}
    >
      <CircleHalfIcon className="size-4 dark:rotate-180 transition-transform duration-200" />
    </Button>
  )
}
