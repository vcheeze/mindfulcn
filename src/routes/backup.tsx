import { createFileRoute } from '@tanstack/react-router'
import { Components } from '@/components/examples/components'
import PreviewContainer from '@/components/preview-container'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Dashboard } from '../components/examples/dashboard/dashboard'

export const Route = createFileRoute('/backup')({ component: App })

export default function App() {
  return (
    <main className="p-8 lg:p-16 xl:p-20 space-y-8">
      <Tabs>
        <TabsList>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="components">Components</TabsTrigger>
        </TabsList>
        <div className="relative isolate size-full overflow-hidden rounded-lg border">
          <TabsContent value="dashboard" className="@container m-0 size-full">
            <PreviewContainer className="size-full">
              <ScrollArea className="size-full h-[1000px]">
                <div className="size-full min-w-[1400px]">
                  <Dashboard />
                </div>
              </ScrollArea>
            </PreviewContainer>
          </TabsContent>
          <TabsContent value="components" className="@container p-8 size-full">
            <PreviewContainer className="size-full">
              <ScrollArea className="size-full h-[1000px]">
                <div className="size-full min-w-[1400px]">
                  <Components />
                </div>
              </ScrollArea>
            </PreviewContainer>
          </TabsContent>
        </div>
        {/* <TabsContent value="dashboard">
        <ScrollArea className="h-250 w-full">
          <iframe src="/dashboard" className="h-full w-full" />
        </ScrollArea>
      </TabsContent> */}
      </Tabs>
    </main>
  )
}
