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
    accent: "bg-[#FFE8D9]",
    panelAccent: "bg-[#FFF1E8]",
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
    <>
      {/* DESKTOP */}
      <section id="programs" className="relative hidden bg-sp-cream xl:block">
        {/* Background - SE MANTIENE */}
        <div className="absolute inset-0 bg-sp-cream" />

        {/* Soft editorial glow - SE MANTIENE */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-6%] top-[20%] h-64 w-64 rounded-full bg-[#FFABFF]/18 blur-3xl" />
          <div className="absolute left-[20%] bottom-[12%] h-72 w-72 rounded-full bg-[#DDF0D5]/24 blur-3xl" />
          <div className="absolute right-[10%] top-[16%] h-64 w-64 rounded-full bg-[#D8EDF6]/20 blur-3xl" />
          <div className="absolute right-[16%] bottom-[18%] h-56 w-56 rounded-full bg-[#F7E1EA]/22 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-[1450px] px-8 pb-20 pt-28">
          {/* HEADER */}
          <div className="grid grid-cols-[0.9fr_1.1fr] gap-10">
            <div className="max-w-[640px]">
              <p className="mb-4 text-sm font-black uppercase tracking-[0.28em] text-sp-hot-pink">
                Programs
              </p>

              <h2 className="font-serif text-[5.2rem] leading-[0.92] tracking-[-0.06em] text-sp-deep-brown">
                Your path to
                <span className="mt-3 block w-fit bg-[#DDF0D5] px-4 py-1 italic text-sp-hot-pink">
                  wellbeing
                </span>
              </h2>

              <p className="mt-6 max-w-[600px] text-[1.45rem] leading-[1.65] text-sp-deep-brown/72">
                Every journey is unique. Choose the level of support that fits
                your life and explore each pathway in a more intentional way.
              </p>
            </div>

            <div className="flex items-end justify-end">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous program"
                  className="inline-flex h-20 w-20 items-center justify-center rounded-full border-[3px] border-sp-deep-brown bg-[#D7B48A] text-sp-deep-brown shadow-[0_8px_0_rgba(0,0,0,0.08)] transition-transform duration-200 hover:scale-105"
                >
                  <ArrowLeft className="h-7 w-7" />
                </button>

                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next program"
                  className="inline-flex h-20 w-20 items-center justify-center rounded-full border-[3px] border-sp-deep-brown bg-[#D7B48A] text-sp-deep-brown shadow-[0_8px_0_rgba(0,0,0,0.08)] transition-transform duration-200 hover:scale-105"
                >
                  <ArrowRight className="h-7 w-7" />
                </button>
              </div>
            </div>
          </div>

          {/* SMALL CARDS */}
          <div className="mt-12 grid grid-cols-4 gap-6">
            {programs.map((program, index) => {
              const isActive = activeIndex === index

              return (
                <button
                  key={program.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "rounded-[2rem] border-[3px] p-8 text-left transition-all duration-200",
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

                  <h3 className="mt-8 font-serif text-[2.25rem] leading-[1.02] tracking-[-0.04em] text-sp-deep-brown">
                    {program.title}
                  </h3>
                </button>
              )
            })}
          </div>

          {/* MAIN PANEL */}
          <div className="mt-10 grid overflow-hidden rounded-[2.6rem] border-[3px] border-sp-deep-brown bg-white shadow-[12px_12px_0_rgba(0,0,0,0.08)] lg:grid-cols-[0.98fr_1.02fr]">
            {/* IMAGE */}
            <div className="relative min-h-[560px]">
              <Image
                src={activeProgram.image}
                alt={activeProgram.title}
                fill
                sizes="(max-width: 1280px) 100vw, 48vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>

            {/* CONTENT */}
            <div
              className={cn(
                "flex flex-col justify-between border-l-[3px] border-sp-deep-brown p-10",
                activeProgram.panelAccent
              )}
            >
              <div>
                <div className="mb-6 flex items-start justify-between gap-4">
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-sp-hot-pink">
                    {activeProgram.eyebrow}
                  </p>

                  <span className="font-serif text-[2rem] leading-none text-sp-deep-brown/35">
                    {activeProgram.step}
                  </span>
                </div>

                <h3 className="font-serif text-[4rem] leading-[0.95] tracking-[-0.05em] text-sp-deep-brown">
                  {activeProgram.title}
                </h3>

                <p className="mt-6 max-w-[30ch] text-[1.2rem] leading-9 text-sp-deep-brown/78">
                  {activeProgram.description}
                </p>
              </div>

              <div className="mt-10 flex items-end justify-between gap-6">
                <div className="space-y-4">
                  <span className="inline-flex rounded-full border-[2px] border-sp-deep-brown bg-white/80 px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-sp-deep-brown">
                    {activeProgram.chip}
                  </span>

                  <p className="max-w-[360px] text-sm leading-7 text-sp-deep-brown/65">
                    A thoughtful level of support designed to meet you where you
                    are and help you move forward with more clarity.
                  </p>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-sp-hot-pink px-7 py-3 text-sm font-black uppercase tracking-[0.08em] text-white shadow-[0_8px_24px_rgba(255,0,142,0.22)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE / TABLET */}
      <section className="bg-sp-cream px-4 py-16 xl:hidden">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.28em] text-sp-hot-pink">
            Programs
          </p>

          <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.05em] text-sp-deep-brown sm:text-6xl">
            Your path to
            <span className="mt-3 block w-fit bg-[#DDF0D5] px-3 py-1 italic text-sp-hot-pink">
              wellbeing
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-sp-deep-brown/72">
            Every journey is unique. Choose the level of support that fits your
            life.
          </p>

          {/* SMALL CARDS */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {programs.map((program, index) => {
              const isActive = activeIndex === index

              return (
                <button
                  key={program.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "rounded-[2rem] border-[3px] p-6 text-left transition-all duration-200",
                    "shadow-[0_8px_0_rgba(0,0,0,0.06)]",
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

          {/* ACTIVE PANEL */}
          <div className="mt-8 overflow-hidden rounded-[2rem] border-[3px] border-sp-deep-brown bg-white shadow-[8px_8px_0_0_rgba(0,0,0,0.08)]">
            <div className="relative h-[300px] sm:h-[360px]">
              <Image
                src={activeProgram.image}
                alt={activeProgram.title}
                fill
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>

            <div className={cn("p-6", activeProgram.panelAccent)}>
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

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <span className="inline-flex w-fit rounded-full border-2 border-sp-deep-brown bg-white/75 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-sp-deep-brown">
                  {activeProgram.chip}
                </span>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={goPrev}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-sp-deep-brown bg-[#D7B48A] text-sp-deep-brown"
                    aria-label="Previous program"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>

                  <button
                    type="button"
                    onClick={goNext}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-sp-deep-brown bg-[#D7B48A] text-sp-deep-brown"
                    aria-label="Next program"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>

                  <a
                    href="#contact"
                    className="rounded-full bg-sp-hot-pink px-5 py-3 text-sm font-black uppercase tracking-[0.08em] text-white"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}