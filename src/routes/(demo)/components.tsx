import { createFileRoute } from '@tanstack/react-router'
import { Components } from '@/components/examples/components'

export const Route = createFileRoute('/(demo)/components')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="p-4">
      <Components />
    </div>
  )
}
