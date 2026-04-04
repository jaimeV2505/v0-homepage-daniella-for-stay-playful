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

        <div className="text-center mb-14">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#E84D8A] mb-3">{t("programs.eyebrow")}</p>
          <h2 className="font-serif text-[3rem] sm:text-[4.5rem] lg:text-[6rem] leading-[0.9] tracking-tighter text-[#3A2B2B]">
            {t("programs.heading")} <span className="italic text-[#E84D8A]">{t("programs.headingAccent")}</span>
          </h2>
        </div>

        <div className="flex justify-center gap-4 sm:gap-8 mb-14 px-4">
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
                    : "bg-white/40 border-[#3A2B2B]/10"
                )}
              >
                <span className="font-serif text-[0.9rem] sm:text-[1.2rem] font-bold leading-tight text-[#3A2B2B] whitespace-pre-line text-center">
                  {p.circleTitle}
                </span>
                {isActive && (
                  <motion.div layoutId="programDot" className="absolute -bottom-2 h-5 w-5 rounded-full border-[3px] border-[#3A2B2B] bg-white shadow-sm" />
                )}
              </button>
            )
          })}
        </div>

        <div className="relative mx-auto max-w-[800px]">
          <button onClick={prev} className={cn(navBtn, "absolute -left-20 top-1/2 -translate-y-1/2 h-14 w-14 hidden xl:flex")}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button onClick={next} className={cn(navBtn, "absolute -right-20 top-1/2 -translate-y-1/2 h-14 w-14 hidden xl:flex")}>
            <ArrowRight className="w-6 h-6" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className={cn(
                "rounded-[1.5rem] sm:rounded-[2.5rem] border-[3px] sm:border-[4px] border-[#3A2B2B] p-6 sm:p-16 shadow-[8px_8px_0_#3A2B2B] sm:shadow-[16px_16px_0_#3A2B2B]",
                active.cardBg
              )}
            >
              <div className="flex flex-col items-center text-center">
                <h3 className="text-[2.8rem] sm:text-[4rem] lg:text-[4.8rem] font-bold leading-[1] tracking-tight text-[#3A2B2B] mb-8 uppercase">
                  {active.title}
                </h3>
                <p className="text-[1.1rem] sm:text-[1.5rem] leading-[1.3] text-[#3A2B2B] mb-10 max-w-[600px] font-medium">
                  {active.description}
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-8 w-full justify-center">
                  <div className="flex gap-4 xl:hidden">
                    <button onClick={prev} className={cn(navBtn, "h-12 w-12")}><ArrowLeft className="w-5 h-5" /></button>
                    <button onClick={next} className={cn(navBtn, "h-12 w-12")}><ArrowRight className="w-5 h-5" /></button>
                  </div>
                  <a href="#contact" className="group bg-[#5C5252] px-12 py-5 rounded-full text-lg font-black text-white transition-all duration-300 hover:bg-[#E84D8A] hover:translate-y-[-4px] shadow-lg">
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
