import {
  BankIcon,
  BuildingsIcon,
  CurrencyCircleDollarIcon,
  WalletIcon,
} from '@phosphor-icons/react'

import { FeaturedIcon } from '@/components/examples/application/featured-icon'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'

const dateRanges = [
  { label: 'Last 24 hours', value: 'last-day' },
  { label: 'Last 7 days', value: 'last-week' },
  { label: 'Last month', value: 'last-month' },
  { label: 'Last year', value: 'last-year' },
  { label: 'Year to date', value: 'year-to-date' },
] as const

const transactions = [
  {
    icon: BankIcon,
    title: 'Tax Refund',
    description: '2024 Income Tax Refund',
    amount: 542,
    date: 'Dec 20',
  },
  {
    icon: WalletIcon,
    title: 'Freelance Payment',
    description: 'Payment for Invoice #INV-4421 - Website redesign project',
    amount: 800,
    date: 'Dec 14',
  },
  {
    icon: BuildingsIcon,
    title: 'Salary Payment',
    description: 'Monthly salary - Acme Corporation SRL, Payroll November 2025',
    amount: 2500,
    date: 'Dec 01',
  },
]

export function Transactions() {
  return (
    <Card className="w-full">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="flex items-center gap-1.5">
          <CurrencyCircleDollarIcon className="text-muted-foreground size-4" />
          Transactions
        </CardTitle>
        <CardAction className="self-center">
          <Select defaultValue="last-month" items={[...dateRanges]}>
            <SelectTrigger size="sm" aria-label="Transaction date range">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {dateRanges.map((range) => (
                  <SelectItem key={range.value} value={range.value}>
                    {range.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>

      <Separator />

      <CardContent>
        <Tabs defaultValue="completed">
          <TabsList>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardContent>

      <CardContent className="flex flex-col gap-5">
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.title} {...transaction} />
        ))}
      </CardContent>

      <CardFooter>
        <Button variant="secondary" className="w-full">
          View all
        </Button>
      </CardFooter>
    </Card>
  )
}

function TransactionItem({
  icon: Icon,
  title,
  description,
  amount,
  date,
}: (typeof transactions)[number]) {
  const isPositive = amount >= 0
  const formattedAmount = `${isPositive ? '+' : '-'}$${Math.abs(amount).toFixed(2)}`

  return (
    <div className="flex gap-2.5">
      <FeaturedIcon>
        <Icon />
      </FeaturedIcon>

      <div className="flex flex-1 flex-col gap-1">
        <h3 className="text-sm font-medium">{title}</h3>
        <p className="text-muted-foreground line-clamp-2 text-xs">
          {description}
        </p>
      </div>

      <div className="flex flex-col items-end gap-1">
        <span
          className={cn(
            'text-sm font-medium tabular-nums',
            isPositive ? 'text-chart-2' : 'text-destructive',
          )}
        >
          {formattedAmount}
        </span>
        <span className="text-muted-foreground text-xs">{date}</span>
      </div>
    </div>
  )
}
