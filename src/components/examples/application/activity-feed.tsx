import {
  CalendarBlankIcon,
  CheckCircleIcon,
  MagnifyingGlassIcon,
  PaperclipIcon,
} from '@phosphor-icons/react'
import { useMemo, useState } from 'react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

type ActivityType = 'file-upload' | 'task-completed' | 'event-scheduled'

interface ActivityItem {
  type: ActivityType
  actor: { name: string }
  action: string
  target: string
  badge: string
  timestamp: string
}

const activityIcons = {
  'file-upload': PaperclipIcon,
  'task-completed': CheckCircleIcon,
  'event-scheduled': CalendarBlankIcon,
} as const

const activityItems: Array<ActivityItem> = [
  {
    type: 'event-scheduled',
    actor: { name: 'Nathaniel Caldwell' },
    action: 'booked a call tomorrow at',
    target: '4:00 PM - 5:00 PM',
    badge: 'Team meeting',
    timestamp: '2 mins ago',
  },
  {
    type: 'task-completed',
    actor: { name: 'Lucy Aniston' },
    action: 'completed',
    target: 'Sprint 12',
    badge: 'All tasks completed',
    timestamp: '9 mins ago',
  },
  {
    type: 'file-upload',
    actor: { name: 'Lucy Aniston' },
    action: 'uploaded a file to',
    target: 'Legal folder',
    badge: 'Report.pdf',
    timestamp: '10 mins ago',
  },
  {
    type: 'file-upload',
    actor: { name: 'Jackson Lee' },
    action: 'uploaded a file to',
    target: 'Design assets',
    badge: 'Homepage_v3.fig',
    timestamp: '24 mins ago',
  },
  {
    type: 'event-scheduled',
    actor: { name: 'Emma Wilson' },
    action: 'scheduled a review on Friday at',
    target: '10:00 AM - 11:00 AM',
    badge: 'Quarterly review',
    timestamp: '1 hour ago',
  },
  {
    type: 'task-completed',
    actor: { name: 'William Kim' },
    action: 'completed',
    target: 'Onboarding flow',
    badge: 'All tasks completed',
    timestamp: '2 hours ago',
  },
]

const typeFilters = [
  {
    value: 'all',
    label: 'All',
    types: ['file-upload', 'task-completed', 'event-scheduled'],
  },
  { value: 'tasks', label: 'Tasks', types: ['task-completed', 'file-upload'] },
  { value: 'meetings', label: 'Meetings', types: ['event-scheduled'] },
] as const

export function ActivityFeed() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all')
  const [search, setSearch] = useState('')

  const filteredItems = useMemo(() => {
    const filter = typeFilters.find(
      (typeFilter) => typeFilter.value === selectedFilter,
    )
    return activityItems.filter(
      (item) =>
        (filter?.types as ReadonlyArray<ActivityType> | undefined)?.includes(
          item.type,
        ) && item.actor.name.toLowerCase().includes(search.trim().toLowerCase()),
    )
  }, [selectedFilter, search])

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Activity</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-3">
        <InputGroup>
          <InputGroupAddon>
            <MagnifyingGlassIcon />
          </InputGroupAddon>
          <InputGroupInput
            placeholder="Search by name"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            aria-label="Search activity"
          />
        </InputGroup>

        <ButtonGroup className="w-full">
          {typeFilters.map((filter) => (
            <Button
              key={filter.value}
              variant="outline"
              size="sm"
              className={cn(
                'flex-1',
                selectedFilter === filter.value && 'bg-muted',
              )}
              aria-pressed={selectedFilter === filter.value}
              onClick={() => setSelectedFilter(filter.value)}
            >
              {filter.label}
            </Button>
          ))}
        </ButtonGroup>
      </CardContent>

      <CardContent className="flex flex-col">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <ActivityFeedItem
              key={`${item.actor.name}-${item.timestamp}-${item.target}`}
              {...item}
            />
          ))
        ) : (
          <Empty className="py-10">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <MagnifyingGlassIcon />
              </EmptyMedia>
              <EmptyTitle>Activity feed is empty</EmptyTitle>
              <EmptyDescription>
                No activities found matching your search. Try adjusting your
                filters.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSearch('')}
              >
                Reset search
              </Button>
            </EmptyContent>
          </Empty>
        )}
      </CardContent>
    </Card>
  )
}

function ActivityFeedItem({
  type,
  actor,
  action,
  target,
  badge,
  timestamp,
}: ActivityItem) {
  const Icon = activityIcons[type]
  const initials = actor.name
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .slice(0, 2)
    .join('')

  return (
    <div className="group/activity-feed-item relative flex gap-3">
      <div className="relative flex shrink-0 flex-col items-center gap-1">
        <Avatar>
          <AvatarFallback className="uppercase">{initials}</AvatarFallback>
        </Avatar>
        <Separator
          orientation="vertical"
          className="mx-auto flex-1 group-last/activity-feed-item:hidden"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-2 pb-8 group-last/activity-feed-item:pb-0">
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between gap-1">
            <span className="truncate text-sm font-medium">{actor.name}</span>
            <span className="text-muted-foreground shrink-0 text-xs">
              {timestamp}
            </span>
          </div>
          <span className="text-muted-foreground text-sm text-pretty">
            {action} <span className="text-foreground">{target}</span>
          </span>
        </div>

        <Badge variant="outline" className="text-muted-foreground max-w-full">
          <Icon className={cn(type === 'task-completed' && 'text-chart-2')} />
          <span className="truncate">{badge}</span>
        </Badge>
      </div>
    </div>
  )
}
