/* ============================================================
   Language context — provider + hook
   ============================================================ */

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { pt, type Dict } from './pt'
import { en } from './en'

export type Language = 'pt' | 'en'

/** Texto armazenado em dois idiomas, usado nos arquivos de dados. */
export type LocalizedText = { pt: string; en: string }

type LanguageContextValue = {
  lang: Language
  t: Dict
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'portfolio-lang'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return stored === 'en' ? 'en' : 'pt'
  })

  useEffect(() => {
    document.documentElement.lang = lang
    window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      t: lang === 'pt' ? pt : en,
      toggleLang: () => setLang((prev) => (prev === 'pt' ? 'en' : 'pt')),
    }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage deve ser usado dentro de <LanguageProvider>')
  }
  return ctx
}
