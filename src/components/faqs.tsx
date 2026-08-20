import {
  CheckCircleIcon,
  CoinsIcon,
  PaintRollerIcon,
  PaletteIcon,
  QuestionIcon,
  SlidersIcon,
  UserCircleIcon,
} from '@phosphor-icons/react'
import type { ReactNode } from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { faqs } from '@/lib/faqs'

const faqIcons: Record<string, ReactNode> = {
  mindfulcn: <PaintRollerIcon className="m-auto size-4" />,
  'how-to-use': <QuestionIcon className="m-auto size-4" />,
  'mindful-palettes': <PaletteIcon className="m-auto size-4" />,
  tweakcn: <SlidersIcon className="m-auto size-4" />,
  account: <UserCircleIcon className="m-auto size-4" />,
  usage: <CheckCircleIcon className="m-auto size-4" />,
  pricing: <CoinsIcon className="m-auto size-4" />,
}

export function FAQs() {
  return (
    <section className="py-20" id="faq" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          <div className="md:w-1/3">
            <div className="sticky top-20">
              <h2 id="faq-heading" className="mt-4 text-3xl font-bold">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground mt-4">
                Can&apos;t find what you&apos;re looking for?{' '}
                <a
                  href="#vcheeze"
                  className="text-primary font-medium hover:underline"
                >
                  Reach out to me.
                </a>
              </p>
            </div>
          </div>
          <div className="md:w-2/3">
            <Accordion className="w-full space-y-2">
              {faqs.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="bg-background shadow-xs rounded-lg border px-4 last:border-b"
                >
                  <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="flex size-6">{faqIcons[item.id]}</div>
                      <span className="text-base">{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5" keepMounted>
                    <div className="px-9">
                      <p className="text-base">{item.answer}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
