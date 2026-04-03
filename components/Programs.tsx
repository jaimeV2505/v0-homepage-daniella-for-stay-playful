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
    description: "1:1Första tillfället är en kostnadsfri konsultation på ca 20 min, där vi går igenom vilken hjälp du behöver och vad jag kan göra för att hjälpa dig.",
    accent: "bg-[#DDBAF0]",
    cardBg: "bg-[#F0E2FA]",
    chip: "INDIVIDUELL RÅDGIVNING",
    note: "Privat, personlig och anpassad efter ditt liv.",
  },
  {
    id: "program-6",
    step: "02",
    eyebrow: "FOKUSERAT STÖD",
    title: "6-VECKORS PROGRAM",
    circleTitle: "6-\nveckors\nprogram",
    description: "För att faktiskt kunna göra någon skillnad så behöver vi lägga upp en plan.",
    accent: "bg-[#ffbd17]",
    cardBg: "bg-[#F5C94A]",
    chip: "STRUKTURERAT STÖD",
    note: "En tydlig plan för att skapa verklig förändring.",
  },
  {
    id: "program-8",
    step: "03",
    eyebrow: "GRUND FÖR FÖRÄNDRING",
    title: "8-VECKORS PROGRAM",
    circleTitle: "8-\nveckors\nprogram",
    description: "För att ge dig själv bästa förutsättningar för både resultat och den nya livsstilen.",
    accent: "bg-[#00e2ff]",
    cardBg: "bg-[#8FEAF4]",
    chip: "BYGG HÅLLBARA VANOR",
    note: "En stabil grund för en livsstil som håller över tid.",
  },
  {
    id: "specialaren",
    step: "04",
    eyebrow: "FÖRDJUPAT STÖD",
    title: "SPECIALAREN",
    circleTitle: "Specialaren",
    description: "Fråga om Specialaren om:Du är anhörig/förälder som behöver stöd om kost till dina barn (med/utan koppling till ev diagnos och kost-problematik).Om du har tävlat inom fitness (eller är nära en tävling) och behöver stöd efter långvarig diet.",
    accent: "bg-[#ffabff]",
    cardBg: "bg-[#F2C6F2]",
    chip: "INDIVIDANPASSAT STÖD",
    note: "För specifika behov och situationer...",
  },
]

const navBtn =
  "inline-flex items-center justify-center rounded-full border-[3px] border-[#3A2B2B] bg-[#D7B48A] text-[#3A2B2B] transition-all duration-300 ease-out hover:scale-110 hover:shadow-[0_8px_18px_rgba(0,0,0,0.12)] active:scale-[0.96]"

export function Programs() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = useMemo(() => programs[activeIndex], [activeIndex])

  const prev = () =>
    setActiveIndex((i) => (i === 0 ? programs.length - 1 : i - 1))

  const next = () =>
    setActiveIndex((i) => (i === programs.length - 1 ? 0 : i + 1))

  return (
    <section className="relative overflow-hidden bg-[#F3F1EE] px-4 py-16">

      {/* WATERMARK */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="select-none font-serif text-[18vw] leading-none text-[#3A2B2B]/[0.04]">
          STAY PLAYFUL
        </span>
      </div>

      {/* TOP DIVIDER */}
      <div className="mx-auto mb-10 max-w-[900px]">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#3A2B2B]/30 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1100px]">

        {/* HEADER */}
        <div className="mx-auto max-w-[820px] text-center">
          <p className="text-[13px] font-black uppercase tracking-[0.32em] text-[#E84D8A]">
            Programs
          </p>

          <h2 className="mt-4 font-serif text-[3.2rem] leading-[0.95] tracking-[-0.04em] text-[#3A2B2B] sm:text-[4.2rem] lg:text-[5rem]">
            Din väg till
            <span className="mx-auto mt-3 block w-fit bg-[#DDF0D5] px-4 py-1 italic text-[#E84D8A]">
              välmående
            </span>
          </h2>

          <p className="mt-6 text-[1.15rem] leading-8 text-[#3A2B2B]/70 sm:text-[1.25rem]">
            Välj det stöd som passar dig bäst och bygg något som faktiskt håller.
          </p>
        </div>

        {/* CIRCLES */}
        <div className="mt-12 flex flex-wrap justify-center gap-5">
          {programs.map((p, i) => {
            const activeCircle = i === activeIndex

            return (
              <button
                key={p.id}
                onClick={() => setActiveIndex(i)}
                className={cn(
                  "relative flex h-[150px] w-[150px] items-center justify-center rounded-full border-[5px] text-center transition-all duration-300 lg:h-[180px] lg:w-[180px]",
                  "hover:scale-[1.06] hover:shadow-[0_16px_0_rgba(0,0,0,0.06)] active:scale-[0.98]",
                  activeCircle
                    ? "scale-105 border-[#3A2B2B] shadow-[0_12px_0_rgba(0,0,0,0.06)]"
                    : "border-[#D6CACA]",
                  p.accent
                )}
              >
                <span className="whitespace-pre-line px-2 font-serif text-[1.3rem] leading-[0.9] lg:text-[1.6rem]">
                  {p.circleTitle}
                </span>

                {activeCircle && (
                  <span className="absolute -bottom-[10px] h-5 w-5 rounded-full border-[4px] border-[#3A2B2B] bg-[#F3F1EE]" />
                )}
              </button>
            )
          })}
        </div>

        {/* CARD */}
        <div className="relative mx-auto mt-10 max-w-[900px]">

          {/* LEFT ARROW */}
          <button
            onClick={prev}
            className={cn(
              navBtn,
              "absolute -left-10 top-1/2 z-20 hidden h-20 w-20 -translate-y-1/2 shadow-[0_12px_30px_rgba(0,0,0,0.15)] lg:inline-flex"
            )}
          >
            <ArrowLeft className="h-8 w-8" />
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={next}
            className={cn(
              navBtn,
              "absolute -right-10 top-1/2 z-20 hidden h-20 w-20 -translate-y-1/2 shadow-[0_12px_30px_rgba(0,0,0,0.15)] lg:inline-flex"
            )}
          >
            <ArrowRight className="h-8 w-8" />
          </button>

          <div
            className={cn(
              "rounded-[2rem] border-[4px] border-[#3A2B2B] shadow-[10px_10px_0_rgba(0,0,0,0.06)] transition-colors duration-300",
              active.cardBg
            )}
          >
            <div className="relative px-6 py-8 md:px-10">

              {/* NUMBERS */}
              <span className="absolute left-6 top-5 text-[1.2rem] font-black text-[#E84D8A]">
                {active.step}
              </span>
              <span className="absolute right-6 top-5 text-[1.2rem] font-black text-[#E84D8A]">
                {active.step}
              </span>

              <div className="mx-auto max-w-[640px] text-center">

                <p className="text-xs font-black uppercase tracking-[0.3em] text-[#E84D8A]">
                  {active.eyebrow}
                </p>

                <h3 className="mt-4 text-[3rem] font-black leading-[0.9] tracking-[-0.04em] lg:text-[4rem]">
                  {active.title}
                </h3>

                <p className="mt-6 text-[1.25rem] leading-[1.8] text-[#665E59] lg:text-[1.5rem]">
                  {active.description}
                </p>

                <div className="mt-7">
                  <span className="rounded-full border-[4px] border-[#3A2B2B] bg-[#E7DDCC] px-6 py-3 text-sm font-black tracking-[0.2em]">
                    {active.chip}
                  </span>
                </div>

                <p className="mt-6 text-[1.1rem] text-[#665E59]">
                  {active.note}
                </p>

                <div className="mt-8 flex items-center justify-between">

                  <div className="flex gap-3">
                    <button onClick={prev} className={cn(navBtn, "h-12 w-12")}>
                      <ArrowLeft className="h-5 w-5" />
                    </button>
                    <button onClick={next} className={cn(navBtn, "h-12 w-12")}>
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>

                  {/* CTA GRANDE */}
                  <a className="rounded-full bg-[#E84D8A] px-12 py-5 text-[1.2rem] font-black tracking-[0.05em] text-white shadow-[0_18px_40px_rgba(232,77,138,0.28)] transition-all duration-300 hover:scale-[1.08] hover:shadow-[0_22px_50px_rgba(232,77,138,0.32)] active:scale-[0.96]">
                    Läs mer
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM DIVIDER */}
      <div className="mx-auto mt-14 max-w-[900px]">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#3A2B2B]/30 to-transparent" />
      </div>

    </section>
  )
}