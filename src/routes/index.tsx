import { createFileRoute } from '@tanstack/react-router'
import { FAQs } from '@/components/faqs'
import { Features } from '@/components/features'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { HowItWorks } from '@/components/how-it-works'
import { faqJsonLd, jsonLdScript, pageHead, themeListJsonLd } from '@/lib/seo'
import { site } from '@/lib/site'

export const Route = createFileRoute('/')({
  head: () => ({
    ...pageHead({
      title: site.title,
      description: site.description,
      path: '/',
    }),
    scripts: [jsonLdScript(faqJsonLd()), jsonLdScript(themeListJsonLd())],
  }),
  component: App,
})

function App() {
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
