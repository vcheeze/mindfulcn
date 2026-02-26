import { createFileRoute, useRouterState } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'motion/react'

import { themes } from '@/lib/themes'

export const Route = createFileRoute('/(demo)/gradients')({
  component: RouteComponent,
})

function RouteComponent() {
  const routerState = useRouterState()
  const themeId = routerState.location.search.theme ?? themes[0].id
  const theme = themes.find((t) => t.id === themeId) || themes[0]
  console.log('theme :>> ', theme)

  return (
    <div className="container mx-auto p-8 flex items-center justify-center gap-4 h-[calc(100vh-65px)] max-sm:flex-col">
      <svg width="0" height="0">
        <title>Grain Filter</title>
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="1.2"
            numOctaves="2"
            stitchTiles="stitch"
          />
        </filter>
        <feColorMatrix type="saturate" values="0" />
        <feComponentTransfer>
          <feFuncR type="linear" slope="5" />
          <feFuncG type="linear" slope="5" />
          <feFuncB type="linear" slope="5" />
        </feComponentTransfer>
      </svg>
      <AnimatePresence mode="popLayout">
        {theme.gradients.map((gradient, index) => (
          <motion.div
            key={`theme-${themeId}-gradient-${index}`}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className={`relative rounded lg:rounded-xl w-full lg:w-40 h-24 lg:h-[80vh] bg-linear-100 lg:bg-linear-190 ${gradient}`}
          >
            <div className="absolute inset-0 opacity-8 filter-[url(#grain)] mix-blend-soft-light" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
