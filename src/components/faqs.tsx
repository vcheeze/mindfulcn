import {
  CheckCircleIcon,
  CoinsIcon,
  PaintRollerIcon,
  PaletteIcon,
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

type FAQItem = {
  id: string
  icon: ReactNode
  question: string
  answer: string
}

export function FAQs() {
  const faqItems: FAQItem[] = [
    {
      id: 'mindfulcn',
      icon: <PaintRollerIcon className="m-auto size-4" />,
      question: 'What is mindfulcn?',
      answer:
        "mindfulcn is a curated showcase of shadcn themes built with Alex Cristache's mindful palettes. It helps you preview and export themes without the guesswork.",
    },
    {
      id: 'mindful-palettes',
      icon: <PaletteIcon className="m-auto size-4" />,
      question: 'What are mindful palettes?',
      answer:
        "Mindful palettes are color systems created by Alex Cristache that emphasize harmony, accessibility, and intentional design. They're built to work across light and dark modes with consistent semantics.",
    },
    {
      id: 'tweakcn',
      icon: <SlidersIcon className="m-auto size-4" />,
      question: "What's tweakcn?",
      answer:
        'tweakcn is a tool for customizing shadcn themes. Our themes export directly in tweakcn format so you can make further adjustments without reformatting.',
    },
    {
      id: 'account',
      icon: <UserCircleIcon className="m-auto size-4" />,
      question: 'Do I need an account?',
      answer: 'Nope. Browse, preview, and copy themes instantly.',
    },
    {
      id: 'usage',
      icon: <CheckCircleIcon className="m-auto size-4" />,
      question: 'Can I use these themes in production?',
      answer:
        'Yes! These themes are free to use in personal and commercial projects.',
    },
    {
      id: 'pricing',
      icon: <CoinsIcon className="m-auto size-4" />,
      question: 'Will this always be free?',
      answer:
        'The core theme library is free. We may introduce premium features or expanded collections in the future, but the fundamentals will remain accessible.',
    },
  ]

  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          <div className="md:w-1/3">
            <div className="sticky top-20">
              <h2 className="mt-4 text-3xl font-bold">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground mt-4">
                Can't find what you're looking for?{' '}
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
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="bg-background shadow-xs rounded-lg border px-4 last:border-b"
                >
                  <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="flex size-6">{item.icon}</div>
                      <span className="text-base">{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
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
