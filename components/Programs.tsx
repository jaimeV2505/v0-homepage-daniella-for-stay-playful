"use client"

import { useMemo, useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

type Program = {
  id: string
  step: string
  eyebrow: string
  title: string
  circleTitle: string
  description: string
  accent: string
  cardBg: string
  chip: string
  note: string
}

const programs: Program[] = [
  {
    id: "coaching",
    step: "01",
    eyebrow: "PERSONLIG VÄGLEDNING",
    title: "1:1 COACHING",
    circleTitle: "1:1\nCoaching",
    description:
      "Första tillfället är en kostnadsfri konsultation på ca 20 min, där vi går igenom vilken hjälp du behöver och vad jag kan göra för att hjälpa dig.",
    accent: "bg-[#DDBAF0]",
    cardBg: "bg-[#DDBAF0]",
    chip: "INDIVIDUELL RÅDGIVNING",
    note: "Privat, personlig och anpassad efter ditt liv.",
  },
  {
    id: "program-6",
    step: "02",
    eyebrow: "FOKUSERAT STÖD",
    title: "6-VECKORS PROGRAM",
    circleTitle: "6-\nveckors\nprogram",
    description:
      "För att faktiskt kunna göra någon skillnad så behöver vi lägga upp en plan.",
    accent: "bg-[#ffbd17]",
    cardBg: "bg-[#ffbd17]",
    chip: "STRUKTURERAT STÖD",
    note: "En tydlig plan för att skapa verklig förändring.",
  },
  {
    id: "program-8",
    step: "03",
    eyebrow: "GRUND FÖR FÖRÄNDRING",
    title: "8-VECKORS PROGRAM",
    circleTitle: "8-\nveckors\nprogram",
    description:
      "För att ge dig själv bästa förutsättningar för både resultat och den nya livsstilen.",
    accent: "bg-[#00e2ff]",
    cardBg: "bg-[#00e2ff]",
    chip: "BYGG HÅLLBARA VANOR",
    note: "En stabil grund för en livsstil som håller över tid.",
  },
  {
    id: "specialaren",
    step: "04",
    eyebrow: "FÖRDJUPAT STÖD",
    title: "SPECIALAREN",
    circleTitle: "Specialaren",
    description:
      "Fråga om Specialaren om: Du är anhörig/förälder som behöver stöd om kost till dina barn, eller om du har tävlat inom fitness och behöver stöd efter långvarig diet.",
    accent: "bg-[#ffabff]",
    cardBg: "bg-[#ffabff]",
    chip: "INDIVIDANPASSAT STÖD",
    note: "För specifika behov och situationer som kräver extra stöd.",
  },
]

const navigationButtonClass =
  "inline-flex items-center justify-center rounded-full border-[3px] border-[#3A2B2B] bg-[#D7B48A] text-[#3A2B2B] transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"

export function Programs() {
  const [activeIndex, setActiveIndex] = useState(0)

  const activeProgram = useMemo(() => programs[activeIndex], [activeIndex])

  const setProgram = (index: number) => setActiveIndex(index)

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? programs.length - 1 : prev - 1))
  }

  const goNext = () => {
    setActiveIndex((prev) => (prev === programs.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="programs" className="bg-[#F3F1EE] px-4 py-14 md:px-8 md:py-18 xl:px-10 xl:py-20">
      <div className="mx-auto max-w-[1180px]">
        {/* TITLE */}
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-4 text-[11px] font-black uppercase tracking-[0.32em] text-[#E84D8A] sm:text-xs">
            Programs
          </p>

          <h2 className="font-serif text-[2.9rem] leading-[0.96] tracking-[-0.05em] text-[#3A2B2B] sm:text-[4rem] xl:text-[4.8rem]">
            Din väg till
            <span className="mx-auto mt-3 block w-fit bg-[#DDF0D5] px-3 py-1 italic text-[#E84D8A]">
              välmående
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[680px] text-base leading-8 text-[#3A2B2B]/72 sm:text-[1.05rem]">
            Min rådgivning är individuell och anpassas efter din utgångspunkt.
            Välj det stöd som passar dig bäst.
          </p>
        </div>

        {/* CIRCLES */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 lg:gap-6">
          {programs.map((program, index) => {
            const isActive = activeIndex === index

            return (
              <button
                key={program.id}
                type="button"
                onClick={() => setProgram(index)}
                aria-pressed={isActive}
                aria-label={`Select ${program.title}`}
                className={cn(
                  "group relative flex h-[154px] w-[154px] shrink-0 flex-col items-center justify-center rounded-full border-[4px] text-center transition-all duration-300 ease-out lg:h-[188px] lg:w-[188px]",
                  "shadow-[0_8px_0_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-[0_12px_0_rgba(0,0,0,0.05)]",
                  isActive ? "border-[#3A2B2B]" : "border-[#D6CACA]",
                  program.accent
                )}
              >
                <span className="absolute left-6 top-6 text-[0.82rem] font-black uppercase tracking-[0.16em] text-[#E84D8A] lg:left-7 lg:top-7 lg:text-[0.9rem]">
                  {program.step}
                </span>

                <span className="whitespace-pre-line px-4 font-serif text-[1.5rem] leading-[0.92] tracking-[-0.04em] text-[#3A2B2B] lg:text-[1.75rem]">
                  {program.circleTitle}
                </span>

                {isActive && (
                  <span className="absolute -bottom-[9px] left-1/2 h-5 w-5 -translate-x-1/2 rounded-full border-[3px] border-[#3A2B2B] bg-[#F3F1EE]" />
                )}
              </button>
            )
          })}
        </div>

        {/* MAIN CARD */}
        <div className="mx-auto mt-10 max-w-[1080px]">
          <div
            className={cn(
              "overflow-hidden rounded-[2.2rem] border-[4px] border-[#3A2B2B] shadow-[10px_10px_0_rgba(0,0,0,0.06)] transition-colors duration-300",
              activeProgram.cardBg
            )}
          >
            <div className="relative px-6 py-7 md:px-10 md:py-10 xl:px-12 xl:py-11">
              <span className="pointer-events-none absolute left-5 top-5 text-[0.92rem] font-black uppercase tracking-[0.18em] text-[#E84D8A] md:left-7 md:top-7">
                {activeProgram.step}
              </span>

              <span className="pointer-events-none absolute right-5 top-5 text-[0.92rem] font-black uppercase tracking-[0.18em] text-[#E84D8A] md:right-7 md:top-7">
                {activeProgram.step}
              </span>

              <div className="mx-auto max-w-[820px] pt-8 md:pt-10">
                <p className="text-[0.88rem] font-black uppercase tracking-[0.3em] text-[#E84D8A] md:text-[0.95rem]">
                  {activeProgram.eyebrow}
                </p>

                <h3 className="mt-5 font-sans text-[2.8rem] font-black uppercase leading-[0.9] tracking-[-0.08em] text-black sm:text-[3.5rem] lg:text-[4.25rem]">
                  {activeProgram.title}
                </h3>

                <p className="mt-9 max-w-[820px] text-[1.12rem] leading-[1.85] text-[#665E59] sm:text-[1.3rem] lg:text-[1.5rem]">
                  {activeProgram.description}
                </p>

                <div className="mt-10">
                  <span className="inline-flex rounded-full border-[4px] border-[#3A2B2B] bg-[#E7DDCC] px-6 py-3 text-[0.78rem] font-black uppercase tracking-[0.24em] text-[#3A2B2B] md:px-8 md:py-3.5 md:text-[0.88rem]">
                    {activeProgram.chip}
                  </span>
                </div>

                <p className="mt-10 max-w-[680px] text-[1.08rem] leading-[1.8] text-[#665E59] md:text-[1.25rem]">
                  {activeProgram.note}
                </p>

                <div className="mt-12 flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={goPrev}
                      className={cn(navigationButtonClass, "h-16 w-16 md:h-[72px] md:w-[72px]")}
                      aria-label="Previous program"
                    >
                      <ArrowLeft className="h-7 w-7 md:h-8 md:w-8" />
                    </button>

                    <button
                      type="button"
                      onClick={goNext}
                      className={cn(navigationButtonClass, "h-16 w-16 md:h-[72px] md:w-[72px]")}
                      aria-label="Next program"
                    >
                      <ArrowRight className="h-7 w-7 md:h-8 md:w-8" />
                    </button>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex w-fit items-center justify-center rounded-full bg-[#E84D8A] px-9 py-3.5 text-[0.92rem] font-black uppercase tracking-[0.14em] text-white shadow-[0_10px_24px_rgba(232,77,138,0.18)] transition-all duration-200 hover:-translate-y-0.5 md:px-11 md:py-4"
                  >
                    Läs mer
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}