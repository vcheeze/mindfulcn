export interface FaqItem {
  id: string
  question: string
  answer: string
}

export const faqs: Array<FaqItem> = [
  {
    id: 'mindfulcn',
    question: 'What is mindfulcn?',
    answer:
      "mindfulcn is a free collection of curated shadcn/ui themes built from Alex Cristache's mindful palettes. It lets you preview each theme on real components in light and dark mode, then copy tweakcn-ready CSS without creating an account.",
  },
  {
    id: 'how-to-use',
    question: 'How do I use a mindfulcn theme?',
    answer:
      'Open the theme sidebar, choose a palette, and preview it on the dashboard, application, marketing, component gallery, and gradient pages. Copy the CSS in one click, then paste it into your project or import it in tweakcn to customize further.',
  },
  {
    id: 'mindful-palettes',
    question: 'What are mindful palettes?',
    answer:
      "Mindful palettes are color systems by Alex Cristache that emphasize harmony, accessibility, and intentional design. They are built to work across light and dark modes with consistent semantic tokens such as background, foreground, primary, and muted.",
  },
  {
    id: 'tweakcn',
    question: 'What is tweakcn?',
    answer:
      'tweakcn is a visual editor for customizing shadcn/ui themes. mindfulcn exports every theme in tweakcn format so you can keep adjusting colors, radius, and tokens without reformatting CSS by hand.',
  },
  {
    id: 'account',
    question: 'Do I need an account to copy a theme?',
    answer:
      'No. Browse, preview, and copy themes instantly. mindfulcn does not require signup, login, or a credit card.',
  },
  {
    id: 'usage',
    question: 'Can I use these themes in production?',
    answer:
      'Yes. The themes are free to use in personal and commercial projects. Copy the CSS, apply it to your shadcn/ui app, and ship.',
  },
  {
    id: 'pricing',
    question: 'Will mindfulcn always be free?',
    answer:
      'The core theme library is free. Premium features or expanded collections may be added later, but the existing palettes remain accessible.',
  },
]
