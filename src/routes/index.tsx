import { createFileRoute } from '@tanstack/react-router'
import { FAQs } from '@/components/faqs'
import { Features } from '@/components/features'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { HowItWorks } from '@/components/how-it-works'

export const Route = createFileRoute('/')({ component: App })

export default function App() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Features />
      <FAQs />
      <Footer />
    </>
  )
}
