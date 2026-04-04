"use client"

import { useLanguageSafe } from "@/lib/use-language"
import type { Language } from "@/lib/config"

export function LanguageSwitcher() {
  const { language, setLanguage, mounted } = useLanguageSafe()

  const languages: { code: Language; label: string }[] = [
    { code: "sv", label: "SV" },
    { code: "en", label: "EN" },
  ]

  return (
    <div className="flex items-center gap-1 border-[2px] border-black rounded-full bg-white/80 p-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-3 py-1 text-xs font-black uppercase tracking-widest transition-all ${
            language === lang.code
              ? "bg-[#E3488B] text-white rounded-full"
              : "text-black hover:text-[#E3488B]"
          }`}
          aria-label={`Switch to ${lang.label}`}
          aria-current={language === lang.code ? "page" : undefined}
        >
          {lang.label}
        </button>
      ))}
    </div>
  )
}
