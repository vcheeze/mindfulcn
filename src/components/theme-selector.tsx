import { useNavigate, useRouterState } from '@tanstack/react-router'

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from '@/components/ui/field'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { themes } from '@/lib/themes'

export function ThemeSelector() {
  const routerState = useRouterState()
  const navigate = useNavigate()

  return (
    <RadioGroup
      value={routerState.location.search.theme ?? 'default'}
      onValueChange={(value: string) => {
        // document.documentElement.classList.forEach((className) => {
        //   if (className.startsWith('theme-')) {
        //     document.documentElement.classList.remove(className)
        //   }
        // })
        // document.documentElement.classList.add(`theme-${value}`)

        if (value === 'default') {
          navigate({
            to: '.',
            search: (prev) => ({ ...prev, theme: undefined }),
          })
        } else {
          navigate({
            to: '.',
            search: (prev) => ({ ...prev, theme: value }),
          })
        }
      }}
    >
      <FieldLabel htmlFor="theme-default">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle className="mb-1">default</FieldTitle>
            <div className="flex gap-1">
              {[
                'oklch(1 0 0)',
                'oklch(0.922 0 0)',
                'oklch(0.708 0 0)',
                'oklch(0.556 0 0)',
                'oklch(0.205 0 0)',
                'oklch(0.145 0 0)',
              ].map((color) => (
                <div
                  key={color}
                  className="flex-1 h-12 rounded border border-gray-200 dark:border-gray-800"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </FieldContent>
          <RadioGroupItem value="default" id={`theme-default`} />
        </Field>
      </FieldLabel>
      {themes.map((theme) => (
        <FieldLabel key={theme.id} htmlFor={`theme-${theme.id}`}>
          <Field orientation="horizontal">
            <FieldContent>
              <FieldTitle className="mb-1">
                {theme.name}{' '}
                <span className="text-muted-foreground italic text-xs">
                  #{theme.id}
                </span>
              </FieldTitle>
              <FieldDescription className="mb-2">
                {theme.description}
              </FieldDescription>
              <div className="flex gap-1">
                {theme.colors.map((color) => (
                  <div
                    key={color}
                    className="flex-1 h-12 rounded border border-gray-200 dark:border-gray-800"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </FieldContent>
            <RadioGroupItem value={theme.id} id={`theme-${theme.id}`} />
          </Field>
        </FieldLabel>
      ))}
    </RadioGroup>
  )
}
