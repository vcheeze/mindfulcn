import type { SitePath } from '@/lib/site'
import { faqs } from '@/lib/faqs'
import { absoluteUrl, site } from '@/lib/site'
import { themes } from '@/lib/themes'

interface PageSeoInput {
  title: string
  description: string
  path?: SitePath
  image?: string
  type?: 'website' | 'article'
  noIndex?: boolean
}

export interface HeadConfig {
  meta: Array<Record<string, string>>
  links: Array<Record<string, string>>
  scripts?: Array<{ type: string; children: string }>
}

export function jsonLdScript(data: unknown): {
  type: string
  children: string
} {
  return {
    type: 'application/ld+json',
    children: JSON.stringify(data),
  }
}

export function pageHead({
  title,
  description,
  path = '/',
  image,
  type = 'website',
  noIndex = false,
}: PageSeoInput): HeadConfig {
  const url = absoluteUrl(path)
  const ogImage = image ?? absoluteUrl('/og.jpg')
  const fullTitle =
    title === site.title || title.includes(site.name)
      ? title
      : `${title} · ${site.name}`

  return {
    meta: [
      { title: fullTitle },
      { name: 'description', content: description },
      { name: 'author', content: site.author.name },
      {
        name: 'robots',
        content: noIndex ? 'noindex, follow' : 'index, follow',
      },
      { property: 'og:site_name', content: site.name },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:type', content: type },
      { property: 'og:url', content: url },
      { property: 'og:image', content: ogImage },
      { property: 'og:image:alt', content: fullTitle },
      { property: 'og:image:type', content: 'image/jpeg' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '800' },
      { property: 'og:locale', content: site.locale },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: site.author.twitter },
      { name: 'twitter:creator', content: site.author.twitter },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
      { name: 'twitter:image:alt', content: fullTitle },
    ],
    links: [
      { rel: 'canonical', href: url },
      {
        rel: 'alternate',
        type: 'text/plain',
        href: absoluteUrl('/llms.txt'),
        title: 'LLM information',
      },
    ],
  }
}

export function websiteJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${site.url}/#website`,
        name: site.name,
        url: site.url,
        description: site.description,
        inLanguage: 'en',
        publisher: { '@id': `${site.url}/#person` },
      },
      {
        '@type': 'Person',
        '@id': `${site.url}/#person`,
        name: site.author.name,
        url: site.author.url,
        sameAs: [site.author.twitterUrl, site.author.github],
      },
      {
        '@type': 'WebApplication',
        '@id': `${site.url}/#app`,
        name: site.name,
        url: site.url,
        description: site.description,
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Web',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        featureList: [
          'Preview shadcn/ui themes in light and dark mode',
          'Copy tweakcn-ready CSS',
          "Themes built from Alex Cristache's mindful palettes",
          'No account required',
        ],
        author: { '@id': `${site.url}/#person` },
      },
    ],
  }
}

export function faqJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function themeListJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'mindfulcn shadcn/ui themes',
    description:
      "Curated shadcn/ui themes based on Alex Cristache's mindful palettes.",
    numberOfItems: themes.length,
    itemListElement: themes.map((theme, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: theme.name,
      description: theme.description,
      url: `${site.url}/?theme=${theme.id}`,
    })),
  }
}

export function aboutJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About mindfulcn',
    url: absoluteUrl('/about'),
    description:
      "mindfulcn turns Alex Cristache's mindful palettes into tweakcn-ready shadcn/ui themes.",
    mainEntity: {
      '@id': `${site.url}/#app`,
    },
  }
}
