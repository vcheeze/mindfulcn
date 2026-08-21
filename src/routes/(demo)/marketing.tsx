import { createFileRoute } from '@tanstack/react-router'
import { Marketing } from '@/components/examples/marketing'
import { pageHead } from '@/lib/seo'
import { routes } from '@/lib/site'

const page = routes.find((route) => route.path === '/marketing')!

export const Route = createFileRoute('/(demo)/marketing')({
  head: () =>
    pageHead({
      title: page.title,
      description: page.description,
      path: '/marketing',
    }),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <h1 className="sr-only">{page.title} of mindfulcn shadcn/ui themes</h1>
      <Marketing />
    </>
  )
}
