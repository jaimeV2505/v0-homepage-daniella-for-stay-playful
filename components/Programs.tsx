"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const programs = [
  {
    id: "coaching",
    step: "01",
    eyebrow: "Personal Guidance",
    title: "1:1 Coaching",
    description:
      "Tailored support designed around your unique needs, lifestyle, and goals. Direct access to personalized nutrition and wellness coaching.",
    image: "/1pro.jpg",
    accent: "bg-[#E7DDF6]",
    panelAccent: "bg-[#F3ECFB]",
    chip: "Tailored support",
  },
  {
    id: "program-6",
    step: "02",
    eyebrow: "Focused Support",
    title: "6-Week Program",
    description:
      "A supportive reset designed to help you create momentum, build confidence, and establish practical shifts that feel realistic in everyday life.",
    image: "/1pro.jpg",
    accent: "bg-[#F6E6EF]",
    panelAccent: "bg-[#FBEFF5]",
    chip: "Steady support",
  },
  {
    id: "program-8",
    step: "03",
    eyebrow: "Foundation Builder",
    title: "8-Week Program",
    description:
      "A structured journey to establish healthy habits and transform your relationship with food. Perfect for those ready to commit to change.",
    image: "/1pro.jpg",
    accent: "bg-[#D8EDF6]",
    panelAccent: "bg-[#ECF8FC]",
    chip: "Build momentum",
  },
  {
    id: "program-12",
    step: "04",
    eyebrow: "Deep Transformation",
    title: "12-Week Program",
    description:
      "The comprehensive experience for lasting change. Extended support, deeper work, and the time needed for true transformation.",
    image: "/1pro.jpg",
    accent: "bg-[#F7E1EA]",
    panelAccent: "bg-[#FDF0F5]",
    chip: "Lasting change",
  },
]

export function Programs() {
  const [activeIndex, setActiveIndex] = useState(0)

  const activeProgram = useMemo(() => programs[activeIndex], [activeIndex])

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? programs.length - 1 : prev - 1))
  }

  const goNext = () => {
    setActiveIndex((prev) => (prev === programs.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="programs" className="bg-[#7D151E] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1400px]">
        {/* TOP BAR */}
        <div className="rounded-full border-[3px] border-[#2B1A16] bg-[#F8F2E8] px-6 py-4 shadow-[0_4px_0_rgba(0,0,0,0.08)]">
          <div className="flex items-center justify-between gap-4 text-center">
            <span className="text-sm font-black uppercase tracking-[0.12em] text-[#2B1A16] sm:text-base">
              Programs
            </span>
            <span className="hidden text-sm font-black uppercase tracking-[0.12em] text-[#2B1A16] md:block">
              Stay Playful Programs
            </span>
            <span className="text-sm font-black uppercase tracking-[0.12em] text-[#2B1A16] sm:text-base">
              Choose Your Support
            </span>
          </div>
        </div>

        {/* SMALL CARDS */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {programs.map((program, index) => {
            const isActive = activeIndex === index

            return (
              <button
                key={program.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "rounded-[2rem] border-[3px] p-6 text-left transition-all duration-200",
                  "shadow-[0_8px_0_rgba(0,0,0,0.08)] hover:-translate-y-1",
                  isActive
                    ? "border-[#2B1A16] ring-2 ring-[#FF2B6A]/20"
                    : "border-[#CFC3D7]",
                  program.accent
                )}
              >
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#FF2B6A]">
                  {program.step}
                </p>

                <h3 className="mt-6 font-serif text-[2rem] leading-[1.02] tracking-[-0.04em] text-[#2B1A16]">
                  {program.title}
                </h3>
              </button>
            )
          })}
        </div>

        {/* MAIN PANEL */}
        <div className="relative mt-8">
          {/* side arrows desktop */}
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous program"
            className="absolute left-[-20px] top-1/2 z-20 hidden h-24 w-24 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-[#2B1A16] bg-[#D7B48A] text-[#2B1A16] shadow-[0_8px_0_rgba(0,0,0,0.10)] transition-transform duration-200 hover:scale-105 lg:flex"
          >
            <ArrowLeft className="h-8 w-8" />
          </button>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next program"
            className="absolute right-[-20px] top-1/2 z-20 hidden h-24 w-24 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-[#2B1A16] bg-[#D7B48A] text-[#2B1A16] shadow-[0_8px_0_rgba(0,0,0,0.10)] transition-transform duration-200 hover:scale-105 lg:flex"
          >
            <ArrowRight className="h-8 w-8" />
          </button>

          <div className="grid overflow-hidden rounded-[2.2rem] border-[3px] border-[#2B1A16] bg-[#F8F2E8] shadow-[0_12px_0_rgba(0,0,0,0.10)] lg:grid-cols-[1.02fr_0.98fr]">
            {/* IMAGE PANEL */}
            <div className="relative min-h-[360px] sm:min-h-[460px] lg:min-h-[620px]">
              <Image
                src={activeProgram.image}
                alt={activeProgram.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>

            {/* TEXT PANEL */}
            <div
              className={cn(
                "flex flex-col justify-between border-t-[3px] border-[#2B1A16] p-6 sm:p-8 lg:border-l-[3px] lg:border-t-0 lg:p-10",
                activeProgram.panelAccent
              )}
            >
              <div>
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.22em] text-[#FF2B6A]">
                      {activeProgram.eyebrow}
                    </p>
                  </div>

                  <span className="font-serif text-[2rem] leading-none text-[#2B1A16]/35">
                    {activeProgram.step}
                  </span>
                </div>

                <h2 className="font-serif text-[2.7rem] leading-[0.95] tracking-[-0.05em] text-[#2B1A16] sm:text-[3.4rem] xl:text-[4rem]">
                  {activeProgram.title}
                </h2>

                <p className="mt-6 max-w-[32ch] text-lg leading-8 text-[#2B1A16]/82 sm:text-[1.2rem]">
                  {activeProgram.description}
                </p>
              </div>

              <div className="mt-10 space-y-6">
                <span className="inline-flex rounded-full border-[2px] border-[#2B1A16] bg-[#FFFDF8] px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-[#2B1A16]">
                  {activeProgram.chip}
                </span>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full border-[3px] border-[#2B1A16] bg-[#FF2B6A] px-7 py-3 text-sm font-black uppercase tracking-[0.08em] text-white shadow-[0_8px_0_rgba(0,0,0,0.12)] transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    Learn More
                  </a>

                  <div className="flex items-center gap-2 lg:hidden">
                    <button
                      type="button"
                      onClick={goPrev}
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-[#2B1A16] bg-[#D7B48A] text-[#2B1A16]"
                      aria-label="Previous program"
                    >
                      <ArrowLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={goNext}
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-[#2B1A16] bg-[#D7B48A] text-[#2B1A16]"
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

        {/* OPTIONAL SUPPORT COPY */}
        <div className="mx-auto mt-8 max-w-[760px] text-center">
          <p className="text-lg leading-8 text-white/88 sm:text-[1.15rem]">
            Different levels of support, one consistent approach: personal,
            thoughtful, and designed to fit real life.
          </p>
        </div>
      </div>
    </section>
  )
}