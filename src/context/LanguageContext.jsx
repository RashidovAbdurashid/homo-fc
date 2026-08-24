import { createContext, useContext, useEffect, useState } from 'react'
import translations from '../i18n/translations.js'

const LanguageContext = createContext(null)

const LANGS = ['en', 'uz', 'ru']

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'en'
    const stored = window.localStorage.getItem('humo-lang')
    return stored && LANGS.includes(stored) ? stored : 'en'
  })

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang)
    window.localStorage.setItem('humo-lang', lang)
  }, [lang])

  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, langs: LANGS }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
