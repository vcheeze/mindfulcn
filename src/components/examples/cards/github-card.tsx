import { CircleIcon, StarIcon } from '@phosphor-icons/react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { site } from '@/lib/site'

export function GithubCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1.5">
            <CardTitle>mindfulcn</CardTitle>
            <CardDescription>
              Curated shadcn/ui themes from mindful palettes. Accessible.
              Customizable. Open Source.
            </CardDescription>
          </div>
          <div className="bg-secondary text-secondary-foreground flex min-w-20 shrink-0 items-center space-x-1 rounded-md">
            <Button
              variant="secondary"
              className="flex items-center gap-2 px-3 shadow-none"
              render={
                <a
                  href={site.links.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <StarIcon />
              Star
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-muted-foreground flex space-x-4 text-sm">
          <div className="flex items-center">
            <CircleIcon
              weight="fill"
              className="mr-1 size-3 fill-sky-400 text-sky-400"
            />
            TypeScript
          </div>
          <div className="flex items-center">
            <StarIcon className="mr-1 size-3" />
            Open source
          </div>
          <div>Updated 2026</div>
        </div>
      </CardContent>
    </Card>
  )
}
