import { createFileRoute } from '@tanstack/react-router'
import { Dashboard } from '@/components/examples/dashboard/dashboard'
import { pageHead } from '@/lib/seo'
import { routes } from '@/lib/site'

const page = routes.find((route) => route.path === '/dashboard')!

export const Route = createFileRoute('/(demo)/dashboard')({
  head: () =>
    pageHead({
      title: page.title,
      description: page.description,
      path: '/dashboard',
    }),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <h1 className="sr-only">{page.title} of mindfulcn shadcn/ui themes</h1>
      <Dashboard />
    </>
  )
}
