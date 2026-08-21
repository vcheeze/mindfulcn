export const site = {
  name: 'mindfulcn',
  url: (import.meta.env.VITE_SITE_URL ?? 'https://mindfulcn.vercel.app').replace(
    /\/$/,
    '',
  ),
  title: 'mindfulcn — Mindful shadcn/ui Themes',
  description:
    "Free, curated shadcn/ui themes built from Alex Cristache's mindful palettes. Preview in light and dark mode, then copy tweakcn-ready CSS.",
  locale: 'en_US',
  author: {
    name: 'vcheeze',
    url: 'https://vcheeze.pages.dev',
    twitter: '@peterchenwei',
    twitterUrl: 'https://x.com/peterchenwei',
    github: 'https://github.com/vcheeze',
  },
  links: {
    githubRepo: 'https://github.com/vcheeze/mindfulcn',
    palettes: 'https://x.com/AlexCristache',
    shadcn: 'https://ui.shadcn.com/',
    tweakcn: 'https://tweakcn.com/',
  },
} as const

export function absoluteUrl(path = '/'): string {
  if (path === '/') {
    return site.url
  }

  return `${site.url}${path.startsWith('/') ? path : `/${path}`}`
}

export const routes = [
  {
    path: '/',
    title: site.title,
    description: site.description,
    changefreq: 'weekly',
    priority: '1.0',
  },
  {
    path: '/about',
    title: 'About mindfulcn',
    description:
      "Why mindfulcn exists: curated shadcn/ui themes from Alex Cristache's mindful palettes, ready for tweakcn. Credits, inspiration, and how the palettes were expanded.",
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/dashboard',
    title: 'Dashboard preview',
    description:
      'Preview mindfulcn shadcn/ui themes on a live dashboard with charts, tables, and cards in light and dark mode.',
    changefreq: 'monthly',
    priority: '0.6',
  },
  {
    path: '/application',
    title: 'Application preview',
    description:
      'Preview mindfulcn shadcn/ui themes on a live application with tickers, charts, transactions, activity, and messaging.',
    changefreq: 'monthly',
    priority: '0.6',
  },
  {
    path: '/marketing',
    title: 'Marketing preview',
    description:
      'Preview mindfulcn shadcn/ui themes on a live marketing site with hero, pricing, testimonials, and FAQ in light and dark mode.',
    changefreq: 'monthly',
    priority: '0.6',
  },
  {
    path: '/components',
    title: 'Component gallery',
    description:
      'Preview mindfulcn shadcn/ui themes on a live card gallery — forms, charts, tables, chat, and more in light and dark mode.',
    changefreq: 'monthly',
    priority: '0.6',
  },
  {
    path: '/gradients',
    title: 'Theme gradients',
    description:
      'Explore gradient swatches generated from each mindfulcn palette after you select a theme.',
    changefreq: 'monthly',
    priority: '0.5',
  },
] as const

export type SitePath = (typeof routes)[number]['path']

export const brandNav = [{ name: 'About', path: '/about' }] as const

export const demoNav = [
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Application', path: '/application' },
  { name: 'Marketing', path: '/marketing' },
  { name: 'Components', path: '/components' },
  { name: 'Gradients', path: '/gradients' },
] as const
