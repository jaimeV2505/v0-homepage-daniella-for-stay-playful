"use client"

import { useMemo, useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

type Program = {
  id: string
  step: string
  eyebrow: string
  title: string
  description: string
  accent: string
  panelAccent: string
  chip: string
  note: string
  format: string
  focus: string
}

const programs: Program[] = [
  {
    id: "coaching",
    step: "01",
    eyebrow: "Personal Guidance",
    title: "1:1 Coaching",
    description:
      "Tailored support designed around your unique needs, lifestyle, and goals. Direct access to personalized nutrition and wellness coaching.",
    accent: "bg-[#E7DDF6]",
    panelAccent: "bg-[#F3ECFB]",
    chip: "Tailored support",
    note: "Private, personal, and fully adapted to your life.",
    format: "1:1 Support",
    focus: "Real Life Change",
  },
  {
    id: "program-6",
    step: "02",
    eyebrow: "Focused Support",
    title: "6-Week Program",
    description:
      "A supportive reset designed to help you create momentum, build confidence, and establish practical shifts that feel realistic in everyday life.",
    accent: "bg-[#FFE8D9]",
    panelAccent: "bg-[#FFF1E8]",
    chip: "Steady support",
    note: "A shorter container with structure, direction, and clarity.",
    format: "Guided Program",
    focus: "Confidence & Momentum",
  },
  {
    id: "program-8",
    step: "03",
    eyebrow: "Foundation Builder",
    title: "8-Week Program",
    description:
      "A structured journey to establish healthy habits and transform your relationship with food. Perfect for those ready to commit to change.",
    accent: "bg-[#D8EDF6]",
    panelAccent: "bg-[#ECF8FC]",
    chip: "Build momentum",
    note: "A grounded space to create habits that actually last.",
    format: "Structured Journey",
    focus: "Habit Building",
  },
  {
    id: "program-12",
    step: "04",
    eyebrow: "Deep Transformation",
    title: "12-Week Program",
    description:
      "The comprehensive experience for lasting change. Extended support, deeper work, and the time needed for true transformation.",
    accent: "bg-[#F7E1EA]",
    panelAccent: "bg-[#FDF0F5]",
    chip: "Lasting change",
    note: "A longer-term path for deeper support and sustainable change.",
    format: "Deep Support",
    focus: "Lasting Transformation",
  },
]

const editorialInfoCardClass =
  "rounded-[1.4rem] border-[2px] border-sp-deep-brown p-5 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.05)]"

const navigationButtonClass =
  "inline-flex items-center justify-center rounded-full border-[3px] border-sp-deep-brown bg-[#D7B48A] text-sp-deep-brown transition-all duration-200 hover:scale-105 active:scale-[0.98]"

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
    <>
      {/* DESKTOP */}
      <section id="programs" className="relative hidden bg-sp-cream xl:block">
        <div className="absolute inset-0 bg-sp-cream" />

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-6%] top-[20%] h-64 w-64 rounded-full bg-[#FFABFF]/18 blur-3xl" />
          <div className="absolute bottom-[12%] left-[20%] h-72 w-72 rounded-full bg-[#DDF0D5]/24 blur-3xl" />
          <div className="absolute right-[10%] top-[16%] h-64 w-64 rounded-full bg-[#D8EDF6]/20 blur-3xl" />
          <div className="absolute bottom-[18%] right-[16%] h-56 w-56 rounded-full bg-[#F7E1EA]/22 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-[1450px] px-8 pb-20 pt-28">
          <div className="mx-auto max-w-[900px] text-center">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.28em] text-sp-hot-pink">
              Programs
            </p>

            <h2 className="font-serif text-[5.2rem] leading-[0.92] tracking-[-0.06em] text-sp-deep-brown">
              Your path to
              <span className="mx-auto mt-3 block w-fit bg-[#DDF0D5] px-4 py-1 italic text-sp-hot-pink">
                wellbeing
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-[760px] text-[1.35rem] leading-[1.65] text-sp-deep-brown/72">
              Every journey is unique. Choose the level of support that fits
              your life and explore each pathway in a more intentional way.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-4 gap-6">
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
                    "rounded-[2rem] border-[3px] p-8 text-left transition-all duration-300 ease-out",
                    "shadow-[0_8px_0_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_12px_0_rgba(0,0,0,0.06)]",
                    isActive
                      ? "border-sp-deep-brown ring-2 ring-sp-hot-pink/20"
                      : "border-sp-deep-brown/10",
                    program.accent
                  )}
                >
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-sp-hot-pink">
                    {program.step}
                  </p>

                  <h3 className="mt-8 font-serif text-[2.2rem] leading-[1.02] tracking-[-0.04em] text-sp-deep-brown">
                    {program.title}
                  </h3>
                </button>
              )
            })}
          </div>

          <div className="relative mt-10">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous program"
              className={cn(
                navigationButtonClass,
                "absolute left-[-24px] top-1/2 z-20 h-24 w-24 -translate-y-1/2 shadow-[0_8px_0_rgba(0,0,0,0.08)]"
              )}
            >
              <ArrowLeft className="h-8 w-8" />
            </button>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next program"
              className={cn(
                navigationButtonClass,
                "absolute right-[-24px] top-1/2 z-20 h-24 w-24 -translate-y-1/2 shadow-[0_8px_0_rgba(0,0,0,0.08)]"
              )}
            >
              <ArrowRight className="h-8 w-8" />
            </button>

            <div className="overflow-hidden rounded-[2.6rem] border-[3px] border-sp-deep-brown bg-white shadow-[12px_12px_0_rgba(0,0,0,0.08)]">
              <div className="flex items-center justify-between border-b-[3px] border-sp-deep-brown bg-[#F8F2E8] px-8 py-5">
                <span className="text-sm font-black uppercase tracking-[0.18em] text-sp-deep-brown">
                  Stay Playful Programs
                </span>
                <span className="text-sm font-black uppercase tracking-[0.18em] text-sp-hot-pink">
                  {activeProgram.step}
                </span>
              </div>

              <div
                className={cn(
                  "grid min-h-[560px] grid-cols-[0.95fr_1.05fr] transition-colors duration-300",
                  activeProgram.panelAccent
                )}
              >
                <div className="relative flex flex-col justify-between border-r-[3px] border-sp-deep-brown p-10">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.22em] text-sp-hot-pink">
                      {activeProgram.eyebrow}
                    </p>

                    <h3 className="mt-6 font-serif text-[4.6rem] leading-[0.92] tracking-[-0.06em] text-sp-deep-brown">
                      {activeProgram.title}
                    </h3>

                    <div className="mt-10 max-w-[420px]">
                      <p className="text-[1.15rem] leading-9 text-sp-deep-brown/78">
                        {activeProgram.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-end justify-between gap-6">
                    <span className="inline-flex rounded-full border-[2px] border-sp-deep-brown bg-white/80 px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-sp-deep-brown transition-all duration-300">
                      {activeProgram.chip}
                    </span>

                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center rounded-full bg-sp-hot-pink px-7 py-3 text-sm font-black uppercase tracking-[0.08em] text-white shadow-[0_8px_24px_rgba(255,0,142,0.22)] transition-all duration-200 hover:-translate-y-0.5"
                    >
                      Learn more
                    </a>
                  </div>
                </div>

                <div className="relative overflow-hidden p-10">
                  <div className="absolute inset-0">
                    <div className="absolute left-[8%] top-[10%] h-[220px] w-[220px] rounded-full bg-white/45 blur-3xl" />
                    <div className="absolute right-[10%] top-[18%] h-[180px] w-[180px] rounded-full bg-[#FFABFF]/20 blur-3xl" />
                    <div className="absolute bottom-[8%] left-[14%] h-[200px] w-[200px] rounded-full bg-[#00E2FF]/16 blur-3xl" />
                  </div>

                  <div className="pointer-events-none absolute right-8 top-6 font-serif text-[12rem] leading-none text-sp-deep-brown/8 transition-all duration-300">
                    {activeProgram.step}
                  </div>

                  <div className="relative flex h-full flex-col justify-between rounded-[2.2rem] border-[3px] border-sp-deep-brown bg-white/70 p-8 shadow-[8px_8px_0_rgba(0,0,0,0.06)] backdrop-blur-sm">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-sp-hot-pink">
                        Program Overview
                      </p>

                      <div className="mt-6 grid grid-cols-2 gap-4">
                        <div
                          className={cn(
                            editorialInfoCardClass,
                            "bg-[#FFF8F4]"
                          )}
                        >
                          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-sp-hot-pink">
                            Format
                          </p>
                          <p className="mt-3 font-serif text-[1.5rem] leading-tight text-sp-deep-brown">
                            {activeProgram.format}
                          </p>
                        </div>

                        <div
                          className={cn(
                            editorialInfoCardClass,
                            "bg-[#F9FCFF]"
                          )}
                        >
                          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-sp-hot-pink">
                            Focus
                          </p>
                          <p className="mt-3 font-serif text-[1.5rem] leading-tight text-sp-deep-brown">
                            {activeProgram.focus}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 rounded-[1.6rem] border-[2px] border-sp-deep-brown bg-[#FFFDF8] p-6 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.05)]">
                        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-sp-hot-pink">
                          What this offers
                        </p>
                        <p className="mt-4 text-lg leading-8 text-sp-deep-brown/78">
                          {activeProgram.note}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 flex items-center justify-between gap-6">
                      <div className="max-w-[280px]">
                        <p className="text-sm leading-7 text-sp-deep-brown/65">
                          Choose the level of support that feels aligned with
                          where you are right now.
                        </p>
                      </div>

                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={goPrev}
                          className={cn(navigationButtonClass, "h-12 w-12")}
                          aria-label="Previous program"
                        >
                          <ArrowLeft className="h-5 w-5" />
                        </button>
                        <button
                          type="button"
                          onClick={goNext}
                          className={cn(navigationButtonClass, "h-12 w-12")}
                          aria-label="Next program"
                        >
                          <ArrowRight className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-[760px] text-center">
            <p className="text-lg leading-8 text-sp-deep-brown/78 sm:text-[1.15rem]">
              Different levels of support, one consistent approach: personal,
              thoughtful, and designed to fit real life.
            </p>
          </div>
        </div>
      </section>

      {/* MOBILE / TABLET */}
      <section className="bg-sp-cream px-4 py-16 xl:hidden">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.28em] text-sp-hot-pink">
              Programs
            </p>

            <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.05em] text-sp-deep-brown sm:text-6xl">
              Your path to
              <span className="mx-auto mt-3 block w-fit bg-[#DDF0D5] px-3 py-1 italic text-sp-hot-pink">
                wellbeing
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-sp-deep-brown/72">
              Every journey is unique. Choose the level of support that fits
              your life and explore each pathway in a more intentional way.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
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
                    "rounded-[2rem] border-[3px] p-6 text-left transition-all duration-300 ease-out",
                    "shadow-[0_8px_0_rgba(0,0,0,0.06)] hover:-translate-y-1",
                    isActive
                      ? "border-sp-deep-brown ring-2 ring-sp-hot-pink/20"
                      : "border-sp-deep-brown/10",
                    program.accent
                  )}
                >
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-sp-hot-pink">
                    {program.step}
                  </p>

                  <h3 className="mt-5 font-serif text-[2rem] leading-[1.05] tracking-[-0.04em] text-sp-deep-brown">
                    {program.title}
                  </h3>
                </button>
              )
            })}
          </div>

          <div className="mt-8 overflow-hidden rounded-[2rem] border-[3px] border-sp-deep-brown bg-white shadow-[8px_8px_0_0_rgba(0,0,0,0.08)]">
            <div
              className={cn(
                "p-6 transition-colors duration-300 sm:p-8",
                activeProgram.panelAccent
              )}
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-sp-hot-pink">
                  {activeProgram.eyebrow}
                </p>
                <span className="font-serif text-xl text-sp-deep-brown/40">
                  {activeProgram.step}
                </span>
              </div>

              <h3 className="font-serif text-3xl leading-[1] tracking-[-0.04em] text-sp-deep-brown sm:text-[3.2rem]">
                {activeProgram.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-sp-deep-brown/75">
                {activeProgram.description}
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div
                  className={cn(editorialInfoCardClass, "bg-[#FFF8F4]")}
                >
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-sp-hot-pink">
                    Format
                  </p>
                  <p className="mt-3 font-serif text-[1.35rem] leading-tight text-sp-deep-brown">
                    {activeProgram.format}
                  </p>
                </div>

                <div
                  className={cn(editorialInfoCardClass, "bg-[#F9FCFF]")}
                >
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-sp-hot-pink">
                    Focus
                  </p>
                  <p className="mt-3 font-serif text-[1.35rem] leading-tight text-sp-deep-brown">
                    {activeProgram.focus}
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-[1.5rem] border-[2px] border-sp-deep-brown bg-white/70 p-5 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.05)]">
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-sp-hot-pink">
                  What this offers
                </p>
                <p className="mt-3 text-base leading-7 text-sp-deep-brown/75">
                  {activeProgram.note}
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <span className="inline-flex w-fit rounded-full border-2 border-sp-deep-brown bg-white/75 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-sp-deep-brown transition-all duration-300">
                  {activeProgram.chip}
                </span>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={goPrev}
                    className={cn(navigationButtonClass, "h-12 w-12")}
                    aria-label="Previous program"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>

                  <button
                    type="button"
                    onClick={goNext}
                    className={cn(navigationButtonClass, "h-12 w-12")}
                    aria-label="Next program"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>

                  <a
                    href="#contact"
                    className="rounded-full bg-sp-hot-pink px-5 py-3 text-sm font-black uppercase tracking-[0.08em] text-white transition-all duration-200 hover:-translate-y-0.5"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-[760px] text-center">
            <p className="text-base leading-8 text-sp-deep-brown/78 sm:text-[1.05rem]">
              Different levels of support, one consistent approach: personal,
              thoughtful, and designed to fit real life.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}