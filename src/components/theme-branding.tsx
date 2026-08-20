import { useEffect } from 'react'

type ThemeBrandingProps = {
  theme?: string
  mode?: string
}

function readToken(
  styles: CSSStyleDeclaration,
  token: string,
  fallback: string
) {
  return styles.getPropertyValue(token).trim() || fallback
}

function createFavicon(
  background: string,
  foreground: string,
  primary: string
) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="${background}"/><path d="M5 25V12a5 5 0 0 1 10 0v13" fill="none" stroke="${foreground}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 25V12a5 5 0 0 1 10 0v13" fill="none" stroke="${primary}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`

  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

export function ThemeBranding({
  theme,
  mode,
}: ThemeBrandingProps): React.ReactNode {
  useEffect(() => {
    const styles = getComputedStyle(document.documentElement)
    const background = readToken(styles, '--background', '#ffffff')
    const foreground = readToken(styles, '--foreground', '#171717')
    const primary = readToken(styles, '--primary', foreground)
    const favicon = document.querySelector<HTMLLinkElement>(
      'link[data-theme-favicon]'
    )
    const themeColor = document.querySelector<HTMLMetaElement>(
      'meta[data-theme-color]'
    )

    favicon?.setAttribute(
      'href',
      createFavicon(background, foreground, primary)
    )
    themeColor?.setAttribute('content', background)
  }, [theme, mode])

  return null
}
