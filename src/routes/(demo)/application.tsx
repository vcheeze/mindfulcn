import { createFileRoute } from '@tanstack/react-router'
import { Application } from '@/components/examples/application'
import { pageHead } from '@/lib/seo'
import { routes } from '@/lib/site'

const page = routes.find((route) => route.path === '/application')!

export const Route = createFileRoute('/(demo)/application')({
  head: () =>
    pageHead({
      title: page.title,
      description: page.description,
      path: '/application',
    }),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <h1 className="sr-only">{page.title} of mindfulcn shadcn/ui themes</h1>
      <Application />
    </>
  )
}
