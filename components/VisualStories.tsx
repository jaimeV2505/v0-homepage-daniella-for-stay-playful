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
                      onClick={() => setActiveId(pillar.id)}
                      className="flex w-full items-center justify-between px-6 py-6 text-left transition-all duration-200 sm:px-8 sm:py-7"
                    >
                      <div className="pr-6">
                        <span className="block font-serif text-[1.9rem] leading-none text-black sm:text-[2.15rem] lg:text-[2.35rem]">
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

                    {/* EXPANDED CONTENT INSIDE SAME PANEL */}
                    <div
                      className={cn(
                        "grid transition-all duration-500 ease-in-out",
                        isActive
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      )}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t-[3px] border-sp-deep-brown bg-[#F6E4E1] p-5 sm:p-6 lg:p-7">
                          <div className="border-[3px] border-sp-deep-brown bg-[#F7EAEA] p-6 shadow-[8px_8px_0_0_rgba(0,0,0,0.10)] sm:p-7 lg:p-8">
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
                                    className="inline-flex w-fit items-center justify-center border-[3px] border-sp-deep-brown bg-[#BFD9F2] px-5 py-3 text-sm font-bold uppercase tracking-wide text-black shadow-[6px_6px_0_0_rgba(0,0,0,0.12)] transition-transform duration-200 hover:-translate-y-0.5"
                                  >
                                    {pillar.buttonLabel}
                                  </a>

                                  <span className="inline-flex w-fit items-center rounded-full border-2 border-sp-deep-brown/20 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-sp-deep-brown sm:text-xs">
                                    {pillar.note}
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
                    </div>
                  </div>
                )
              })}
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="relative min-h-[420px] border-t-[3px] border-sp-deep-brown lg:min-h-full lg:border-l-[3px] lg:border-t-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-vazhnik-7561675-yh4DRq7k07uswUhZC1ZwjnB0O01zmE.jpg"
                alt="Expressive editorial visual for Stay Playful"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
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