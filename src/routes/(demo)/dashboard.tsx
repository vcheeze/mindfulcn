import { createFileRoute } from '@tanstack/react-router'
import { Dashboard } from '@/components/examples/dashboard/dashboard'

export const Route = createFileRoute('/(demo)/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Dashboard />
}
