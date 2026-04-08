"use client"

import { useMemo, useState } from "react"
import { ArrowLeft, ArrowRight, Asterisk } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { useLanguageSafe } from "@/lib/use-language"

const programKeys = ["coaching", "program6", "program8", "specialaren"] as const
const programAccents = [
  { accent: "bg-[#DDBAF0]", cardBg: "bg-[#F0E2FA]" },
  { accent: "bg-[#ffbd17]", cardBg: "bg-[#F5C94A]" },
  { accent: "bg-[#00e2ff]", cardBg: "bg-[#8FEAF4]" },
  { accent: "bg-[#ffabff]", cardBg: "bg-[#F2C6F2]" },
]

const navBtn = "inline-flex items-center justify-center rounded-full border-[3px] border-[#3A2B2B] bg-[#FFF] text-[#3A2B2B] transition-all duration-300 hover:bg-[#E84D8A] hover:text-white hover:translate-y-[-4px] active:translate-y-[2px] shadow-[6px_6px_0_#3A2B2B] hover:shadow-[8px_8px_0_#3A2B2B] active:shadow-none"

export function Programs() {
  const [activeIndex, setActiveIndex] = useState(0)
  const { t } = useLanguageSafe()

  const programs = useMemo(() => programKeys.map((key, i) => ({
    id: key,
    title: t(`programs.items.${key}.title`),
    circleTitle: t(`programs.items.${key}.circleTitle`),
    description: t(`programs.items.${key}.description`),
    ...programAccents[i],
  })), [t])

  const active = useMemo(() => programs[activeIndex], [activeIndex, programs])

  const prev = () => setActiveIndex((i) => (i === 0 ? programs.length - 1 : i - 1))
  const next = () => setActiveIndex((i) => (i === programs.length - 1 ? 0 : i + 1))

  return (
    <section id="programs" className="relative bg-[#F3F1EE] px-4 sm:px-6 pb-24 overflow-hidden pt-0">

      {/* DIVIDER DECORATIVO */}
      <div className="w-full py-10 flex items-center justify-center bg-[#F3F1EE]">
        <div className="w-full max-w-[1100px] flex items-center justify-center gap-4 px-6 opacity-30">
          <div className="h-[1px] flex-1 bg-black" />
          <div className="flex items-center gap-2">
            <Asterisk className="w-4 h-4" />
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-[#E84D8A]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#00E2FF]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#FFBD17]" />
            </div>
            <Asterisk className="w-4 h-4" />
          </div>
          <div className="h-[1px] flex-1 bg-black" />
        </div>
      </div>

      <div className="relative mx-auto max-w-[1100px] z-20 mt-4">

        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#E84D8A] mb-3">
            {t("programs.eyebrow")}
          </p>
          <h2 className="font-serif text-[2.8rem] sm:text-[4.5rem] lg:text-[6rem] leading-[0.9] tracking-tighter text-[#3A2B2B]">
            {t("programs.heading")}
            <br /> {/* Salto de línea agregado aquí */}
            <span className="italic text-[#E84D8A] text-[2rem] sm:text-[3rem] lg:text-[4rem] block sm:mt-2">
              {t("programs.headingAccent")}
            </span>
          </h2>
        </div>

        {/* SELECTOR DE PROGRAMAS (CIRCULOS) */}
        <div className="hidden sm:flex justify-center gap-4 sm:gap-10 mb-14 px-4 py-4 overflow-visible">
          {programs.map((p, i) => {
            const isActive = i === activeIndex
            return (
              <button
                key={p.id}
                onClick={() => setActiveIndex(i)}
                className={cn(
                  "relative flex h-24 w-24 sm:h-36 sm:w-36 shrink-0 items-center justify-center rounded-full border-[3px] border-[#3A2B2B] transition-all duration-500",
                  isActive
                    ? cn(p.accent, "scale-110 shadow-[10px_10px_0_#3A2B2B] z-10")
                    : "bg-white/40 border-[#3A2B2B]/10 hover:border-[#3A2B2B]/40"
                )}
              >
                <span className="font-serif text-[0.8rem] sm:text-[1.1rem] font-bold leading-tight text-[#3A2B2B] whitespace-pre-line text-center px-2">
                  {p.circleTitle}
                </span>
                {isActive && (
                  <motion.div layoutId="programDot" className="absolute -bottom-2 h-5 w-5 rounded-full border-[3px] border-[#3A2B2B] bg-white shadow-sm" />
                )}
              </button>
            )
          })}
        </div>

        {/* CONTENEDOR DE LA CARD */}
        <div className="relative mx-auto max-w-[850px]">
          {/* NAVEGACIÓN DESKTOP (FLECHAS LATERALES) */}
          <button onClick={prev} className={cn(navBtn, "absolute -left-20 top-1/2 -translate-y-1/2 h-14 w-14 hidden xl:flex")}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button onClick={next} className={cn(navBtn, "absolute -right-20 top-1/2 -translate-y-1/2 h-14 w-14 hidden xl:flex")}>
            <ArrowRight className="w-6 h-6" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className={cn(
                "rounded-[2rem] sm:rounded-[2.5rem] border-[3px] sm:border-[4px] border-[#3A2B2B] p-8 sm:p-16 shadow-[10px_10px_0_#3A2B2B] sm:shadow-[16px_16px_0_#3A2B2B] min-h-[450px] flex items-center",
                active.cardBg
              )}
            >
              <div className="flex flex-col items-center text-center w-full">
                {/* INDICADOR DE PASO PARA MOBILE */}
                <div className="flex gap-2 mb-6 sm:hidden">
                  {programs.map((_, i) => (
                    <div key={i} className={cn("h-1.5 rounded-full transition-all duration-300", i === activeIndex ? "w-8 bg-[#3A2B2B]" : "w-2 bg-[#3A2B2B]/20")} />
                  ))}
                </div>

                <h3 className="text-[2.2rem] sm:text-[4rem] lg:text-[4.8rem] font-[900] leading-[1] tracking-tight text-[#3A2B2B] mb-6 sm:mb-8 uppercase">
                  {active.title}
                </h3>

                <p className="text-[1.1rem] sm:text-[1.5rem] leading-[1.4] text-[#3A2B2B] mb-10 max-w-[620px] font-medium italic sm:not-italic">
                  {active.description}
                </p>

                <div className="flex flex-col items-center gap-8 w-full justify-center">
                  {/* NAVEGACIÓN MOBILE */}
                  <div className="flex gap-6 xl:hidden">
                    <button onClick={prev} className={cn(navBtn, "h-14 w-14")} aria-label="Anterior">
                      <ArrowLeft className="w-6 h-6" />
                    </button>
                    <button onClick={next} className={cn(navBtn, "h-14 w-14")} aria-label="Siguiente">
                      <ArrowRight className="w-6 h-6" />
                    </button>
                  </div>

                  <a
                    href="#contact"
                    className="group relative bg-[#3A2B2B] px-10 py-5 rounded-full text-sm sm:text-lg font-black text-white transition-all duration-300 hover:bg-[#E84D8A] hover:translate-y-[-4px] shadow-[6px_6px_0_rgba(0,0,0,0.2)] active:translate-y-0 uppercase tracking-widest"
                  >
                    {t("programs.bookCta")}
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}