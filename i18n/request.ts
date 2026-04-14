import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async ({ requestLocale }) => {
  // Récupère le locale depuis la requête
  let locale = await requestLocale

  // Fallback sur 'fr' si undefined
  if (!locale || !['fr', 'en'].includes(locale)) {
    locale = 'fr'
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})