import { CircleHalfIcon } from '@phosphor-icons/react'
import { useNavigate, useRouterState } from '@tanstack/react-router'

import { Button } from '@/components/ui/button'

export const ModeToggle = () => {
  const routerState = useRouterState()
  const navigate = useNavigate()

  return (
    <Button
      size="icon"
      variant="outline"
      onClick={() =>
        navigate({
          to: '.',
          search: (prev) => ({
            ...prev,
            mode:
              routerState.location.search.mode !== 'dark' ? 'dark' : 'light',
          }),
        })
      }
    >
      <CircleHalfIcon className="size-4 dark:rotate-180 transition-transform duration-200" />
    </Button>
  )
}
