import { createFileRoute } from '@tanstack/react-router'
import { Components } from '@/components/examples/components'
import { pageHead } from '@/lib/seo'
import { routes } from '@/lib/site'

const page = routes.find((route) => route.path === '/components')!

export const Route = createFileRoute('/(demo)/components')({
  head: () =>
    pageHead({
      title: page.title,
      description: page.description,
      path: '/components',
    }),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <h1 className="sr-only">{page.title} with mindfulcn themes</h1>
      <Components />
    </>
  )
}
