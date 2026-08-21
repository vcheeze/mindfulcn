import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(demo)')({
  component: DemoLayout,
})

function DemoLayout() {
  return (
    <div className="font-sans tracking-normal">
      <Outlet />
    </div>
  )
}
