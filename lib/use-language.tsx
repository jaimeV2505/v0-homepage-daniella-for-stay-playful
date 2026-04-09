// Hook para manejo de idioma - FASE 4: Traducción
"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react"
import { getTranslation, type Language } from "@/lib/config"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  mounted: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("sv")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem("stayplayful-lang") as Language | null
    if (stored && (stored === "sv" || stored === "en")) {
      setLanguageState(stored)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("stayplayful-lang", lang)
  }

  const t = (key: string): string => {
    return getTranslation(language, key)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, mounted }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage debe usarse dentro de LanguageProvider")
  }
  return context
}

export function useLanguageSafe() {
  const context = useContext(LanguageContext)
  return context || { language: "sv" as Language, setLanguage: () => {}, t: (key: string) => key, mounted: false }
}
