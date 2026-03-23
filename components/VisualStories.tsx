"use client"

import Image from "next/image"
import { useMemo, useState } from "react"
import { cn } from "@/lib/utils"

type Pillar = {
  id: string
  title: string
  color: string
  buttonLabel: string
  description: string
  accent: string
  eyebrow: string
  note: string
}

const pillars: Pillar[] = [
  {
    id: "playful-balance",
    title: "Playful Balance",
    color: "bg-[#BFD9F2]",
    buttonLabel: "Explore Balance",
    description:
      "Health should not feel like punishment. This pillar is about creating balance through joy, flexibility, and real life — helping you feel well without obsession, perfectionism, or rigid control.",
    accent: "bg-[#BFD9F2]",
    eyebrow: "Balance without pressure",
    note: "Gentle structure, not rigid rules.",
  },
  {
    id: "lifestyle-support",
    title: "Lifestyle Support",
    color: "bg-[#1FA35A]",
    buttonLabel: "See Lifestyle Support",
    description:
      "Support goes beyond food. This pillar focuses on routines, rest, stress, self-awareness, and the other parts of life that deeply affect wellbeing. It is a more holistic approach to feeling better.",
    accent: "bg-[#1FA35A]",
    eyebrow: "Support for real life",
    note: "Wellbeing is bigger than nutrition alone.",
  },
  {
    id: "creativity-and-curiosity",
    title: "Creativity and Curiosity",
    color: "bg-[#F0DD8A]",
    buttonLabel: "Discover Creativity",
    description:
      "Stay Playful is not just about nutrition — it is about making space for creativity, curiosity, expression, and personal meaning. This pillar helps clients reconnect with the parts of life that energize them.",
    accent: "bg-[#F0DD8A]",
    eyebrow: "More joy, more aliveness",
    note: "Creativity is part of feeling well.",
  },
  {
    id: "relationship-with-food",
    title: "Relationship with Food",
    color: "bg-[#E7A9D3]",
    buttonLabel: "Food Relationship",
    description:
      "Understand your patterns around food with more compassion and less pressure. This pillar supports clients in reducing fixation, guilt, and all-or-nothing thinking, while building a gentler and more sustainable relationship with eating.",
    accent: "bg-[#E7A9D3]",
    eyebrow: "A softer relationship with food",
    note: "Less fixation. More freedom.",
  },
]

export function VisualStories() {
  const [activeId, setActiveId] = useState<string>(pillars[0].id)

  const activePillar = useMemo(() => {
    return pillars.find((pillar) => pillar.id === activeId) ?? pillars[0]
  }, [activeId])

  return (
    <section id="stories" className="bg-sp-cream py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-sp-hot-pink">
            Core Pillars
          </p>
          <h2 className="font-serif text-3xl text-sp-deep-brown sm:text-4xl lg:text-5xl">
            The foundations of <span className="italic">Stay Playful</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-sp-deep-brown/75 sm:text-lg">
            A more human, playful, and sustainable approach to wellbeing —
            built around balance, support, curiosity, and a gentler relationship
            with food.
          </p>
        </div>

        {/* Main block */}
        <div className="overflow-hidden border-[3px] border-sp-deep-brown bg-sp-cream">
          <div className="grid lg:grid-cols-[1.02fr_0.98fr]">
            {/* LEFT SIDE */}
            <div className="flex min-h-[640px] flex-col lg:min-h-[680px]">
              {/* Top blocks */}
              <div className="border-b-[3px] border-sp-deep-brown">
                {pillars.map((pillar) => {
                  const isActive = activeId === pillar.id

                  return (
                    <button
                      key={pillar.id}
                      type="button"
                      onClick={() => setActiveId(pillar.id)}
                      className={cn(
                        "flex w-full items-center justify-between border-b-[3px] border-sp-deep-brown px-6 py-6 text-left transition-all duration-200 last:border-b-0 sm:px-8 sm:py-7",
                        pillar.color,
                        isActive && "relative"
                      )}
                    >
                      <div className="pr-6">
                        <span className="block font-serif text-[1.9rem] leading-none text-black sm:text-[2.15rem] lg:text-[2.35rem]">
                          {pillar.title}
                        </span>
                        {isActive && (
                          <span className="mt-3 block text-[11px] font-semibold uppercase tracking-[0.22em] text-black/65 sm:text-xs">
                            {pillar.eyebrow}
                          </span>
                        )}
                      </div>

                      <span className="ml-4 shrink-0 text-4xl leading-none text-black">
                        {isActive ? "−" : "+"}
                      </span>
                    </button>
                  )
                })}
              </div>

              {/* Bottom content area */}
              <div className="relative flex-1 bg-sp-cream p-4 sm:p-5 lg:p-6">
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  <div className="absolute left-6 top-6 h-14 w-14 rounded-full bg-sp-hot-pink/8" />
                  <div className="absolute right-8 top-10 h-20 w-20 rounded-full bg-[#00E2FF]/8" />
                  <div className="absolute bottom-8 left-10 h-16 w-16 rounded-[26px] bg-[#FFBD17]/10" />
                </div>

                <div className="relative h-full border-[3px] border-sp-deep-brown bg-[#F6E4E1] p-6 shadow-[10px_10px_0_0_rgba(0,0,0,0.12)] sm:p-7 lg:p-8">
                  <div className="flex h-full flex-col justify-between gap-6">
                    <div>
                      <div className="mb-4 flex items-center gap-3">
                        <span
                          className={cn(
                            "inline-block h-4 w-4 rounded-full border-2 border-sp-deep-brown",
                            activePillar.accent
                          )}
                        />
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sp-hot-pink sm:text-xs">
                          Stay Playful Pillar
                        </p>
                      </div>

                      <h3 className="font-serif text-[2.1rem] leading-tight text-black sm:text-[2.4rem] lg:text-[2.7rem]">
                        {activePillar.title}
                      </h3>

                      <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-sp-deep-brown/65 sm:text-xs">
                        {activePillar.eyebrow}
                      </p>

                      <p className="mt-5 max-w-2xl text-[1rem] leading-7 text-sp-deep-brown sm:text-[1.05rem] sm:leading-8">
                        {activePillar.description}
                      </p>
                    </div>

                    <div className="grid gap-4 lg:grid-cols-[auto_1fr] lg:items-end lg:gap-6">
                      <div className="flex flex-col gap-4">
                        <a
                          href="#contact"
                          className="inline-flex w-fit items-center justify-center border-[3px] border-sp-deep-brown bg-[#BFD9F2] px-5 py-3 text-sm font-bold uppercase tracking-wide text-black shadow-[6px_6px_0_0_rgba(0,0,0,0.12)] transition-transform duration-200 hover:-translate-y-0.5"
                        >
                          {activePillar.buttonLabel}
                        </a>

                        <span className="inline-flex w-fit items-center rounded-full border-2 border-sp-deep-brown/20 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-sp-deep-brown sm:text-xs">
                          {activePillar.note}
                        </span>
                      </div>

                      <p className="max-w-md text-sm leading-6 text-sp-deep-brown/75">
                        A softer path to health that gives space to curiosity,
                        expression, flexibility, and sustainable support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="relative min-h-[420px] border-t-[3px] border-sp-deep-brown lg:min-h-[680px] lg:border-l-[3px] lg:border-t-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-vazhnik-7561675-yh4DRq7k07uswUhZC1ZwjnB0O01zmE.jpg"
                alt="Expressive editorial visual for Stay Playful"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

              <div className="absolute right-4 top-4 max-w-[220px] border-[3px] border-sp-deep-brown bg-sp-cream px-4 py-3 shadow-[6px_6px_0_0_rgba(0,0,0,0.12)] sm:right-6 sm:top-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sp-hot-pink">
                  Stay Playful
                </p>
                <p className="mt-2 text-sm leading-6 text-sp-deep-brown">
                  Balance, expression, support, and a more playful way to feel
                  well.
                </p>
              </div>

              <div className="absolute bottom-4 left-4 border-[3px] border-sp-deep-brown bg-[#FDF8F3]/95 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-black shadow-[4px_4px_0_0_rgba(0,0,0,0.12)] sm:bottom-6 sm:left-6">
                Live with more color
              </div>

              <div className="absolute left-4 top-4 rounded-full bg-[#FFBD17]/90 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-black shadow-[4px_4px_0_0_rgba(0,0,0,0.12)] sm:left-6 sm:top-6">
                Feel well
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}