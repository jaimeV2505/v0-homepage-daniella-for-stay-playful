"use client"

import Image from "next/image"
import { useState } from "react"
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
  sideNote: string
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
    sideNote:
      "A softer path to health that gives space to curiosity, expression, flexibility, and sustainable support.",
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
    sideNote:
      "Making room for creativity can restore energy, meaning, and a deeper sense of connection with yourself.",
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
    sideNote:
      "This work creates more ease, more trust, and a more sustainable way of nourishing yourself.",
  },
]

export function VisualStories() {
  const [activeId, setActiveId] = useState<string | null>(null)

  const togglePillar = (pillarId: string) => {
    setActiveId((prev) => (prev === pillarId ? null : pillarId))
  }

  return (
    <section id="stories" className="relative overflow-hidden bg-[#F8F4EF] py-16 sm:py-20">
      {/* top separator / editorial divider */}
      <div className="pointer-events-none absolute inset-x-0 top-0">
        <div className="h-px bg-sp-deep-brown/10" />
        <div className="relative mx-auto mt-5 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="h-[2px] flex-1 bg-sp-deep-brown/12" />
            <div className="rounded-full border border-sp-deep-brown/12 bg-white/70 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-sp-hot-pink sm:text-[11px]">
              Stay Playful Philosophy
            </div>
            <div className="h-[2px] flex-1 bg-sp-deep-brown/12" />
          </div>
        </div>
      </div>

      {/* soft atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[18%] h-32 w-32 rounded-full bg-[#E7A9D3]/10 blur-3xl sm:h-40 sm:w-40" />
        <div className="absolute right-[10%] top-[28%] h-40 w-40 rounded-full bg-[#BFD9F2]/14 blur-3xl sm:h-52 sm:w-52" />
        <div className="absolute bottom-[12%] left-[22%] h-44 w-44 rounded-full bg-[#F0DD8A]/10 blur-3xl sm:h-56 sm:w-56" />
      </div>

      {/* background editorial word */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[4%] top-[10.5rem] hidden select-none font-serif text-[8rem] italic leading-none tracking-[-0.08em] text-sp-deep-brown/[0.035] lg:block xl:text-[10rem]">
          Stay Playful
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="mb-10 pt-10 sm:mb-12 sm:pt-12">
          <div className="max-w-4xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-sp-hot-pink">
              Core Pillars
            </p>

            <h2 className="font-serif text-[2.5rem] leading-[0.96] tracking-[-0.04em] text-sp-deep-brown sm:text-4xl lg:text-[4.5rem]">
              The foundations of <span className="italic">Stay Playful</span>
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-7 text-sp-deep-brown/75 sm:text-lg sm:leading-8">
              A more human, playful, and sustainable approach to wellbeing —
              built around balance, support, curiosity, and a gentler
              relationship with food.
            </p>
          </div>
        </div>

        {/* Main block */}
        <div className="overflow-hidden rounded-[1.75rem] border-[3px] border-sp-deep-brown bg-[#F6E9E5] shadow-[10px_10px_0_0_rgba(0,0,0,0.08)] sm:rounded-[2rem]">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
            {/* LEFT SIDE */}
            <div className="flex flex-col">
              {pillars.map((pillar) => {
                const isActive = activeId === pillar.id

                return (
                  <div
                    key={pillar.id}
                    className={cn(
                      "border-b-[3px] border-sp-deep-brown last:border-b-0",
                      pillar.color
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => togglePillar(pillar.id)}
                      aria-expanded={isActive}
                      aria-controls={`pillar-panel-${pillar.id}`}
                      className="flex w-full items-center justify-between px-5 py-5 text-left transition-all duration-200 hover:bg-white/10 sm:px-8 sm:py-7"
                    >
                      <div className="pr-6">
                        <span className="block font-serif text-[1.8rem] leading-none text-black sm:text-[2.15rem] lg:text-[2.35rem]">
                          {pillar.title}
                        </span>

                        {!isActive && (
                          <span className="mt-3 block text-[11px] font-semibold uppercase tracking-[0.22em] text-black/55 sm:text-xs">
                            {pillar.eyebrow}
                          </span>
                        )}
                      </div>

                      <span className="ml-4 shrink-0 text-4xl leading-none text-black">
                        {isActive ? "−" : "+"}
                      </span>
                    </button>

                    <div
                      id={`pillar-panel-${pillar.id}`}
                      className={cn(
                        "grid transition-all duration-500 ease-in-out",
                        isActive
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      )}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t-[3px] border-sp-deep-brown bg-[#F1E2DE] p-4 sm:p-6 lg:p-7">
                          <div className="border-[3px] border-sp-deep-brown bg-[#F7EAEA] p-5 shadow-[8px_8px_0_0_rgba(0,0,0,0.10)] sm:p-7 lg:p-8">
                            <div className="flex flex-col gap-6">
                              <div>
                                <div className="mb-4 flex items-center gap-3">
                                  <span
                                    className={cn(
                                      "inline-block h-4 w-4 rounded-full border-2 border-sp-deep-brown",
                                      pillar.accent
                                    )}
                                  />
                                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sp-hot-pink sm:text-xs">
                                    Stay Playful Pillar
                                  </p>
                                </div>

                                <h3 className="font-serif text-[2rem] leading-tight text-black sm:text-[2.35rem] lg:text-[2.7rem]">
                                  {pillar.title}
                                </h3>

                                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-sp-deep-brown/65 sm:text-xs">
                                  {pillar.eyebrow}
                                </p>

                                <p className="mt-5 max-w-2xl text-[1rem] leading-7 text-sp-deep-brown sm:text-[1.05rem] sm:leading-8">
                                  {pillar.description}
                                </p>
                              </div>

                              <div className="grid gap-4 lg:grid-cols-[auto_1fr] lg:items-end lg:gap-6">
                                <div className="flex flex-col gap-4">
                                  <a
                                    href="#contact"
                                    className={cn(
                                      "inline-flex w-fit items-center justify-center border-[3px] border-sp-deep-brown px-5 py-3 text-sm font-bold uppercase tracking-wide text-black shadow-[6px_6px_0_0_rgba(0,0,0,0.12)] transition-transform duration-200 hover:-translate-y-0.5",
                                      pillar.accent
                                    )}
                                  >
                                    {pillar.buttonLabel}
                                  </a>

                                  <span className="inline-flex w-fit items-center rounded-full border-2 border-sp-deep-brown/20 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-sp-deep-brown sm:text-xs">
                                    {pillar.note}
                                  </span>
                                </div>

                                <p className="max-w-md text-sm leading-6 text-sp-deep-brown/75">
                                  {pillar.sideNote}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="relative min-h-[380px] border-t-[3px] border-sp-deep-brown lg:min-h-full lg:border-l-[3px] lg:border-t-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-vazhnik-7561675-yh4DRq7k07uswUhZC1ZwjnB0O01zmE.jpg"
                alt="Expressive editorial visual for Stay Playful"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
                priority={false}
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