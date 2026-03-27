"use client"

import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"

type MethodCard = {
  id: string
  eyebrow: string
  title: string
  subtitle: string
  description: string
  points: string[]
  accent: string
  panel: string
}

const methodCards: MethodCard[] = [
  {
    id: "001",
    eyebrow: "ABOUT ME",
    title: "The Person Behind Stay Playful.",
    subtitle: "A softer, more human approach to wellbeing.",
    description:
      "I'm Daniella, and Stay Playful was created to offer a more grounded and compassionate approach to wellbeing — one rooted in balance, self-trust, and a healthier relationship with food, body, and everyday life.",
    points: [
      "Gentle support without extremes",
      "A more sustainable relationship with wellbeing",
      "Guidance built for real life, not perfection",
    ],
    accent: "#FFABFF",
    panel: "#F6C8F4",
  },
  {
    id: "002",
    eyebrow: "THE GOAL",
    title: "Support That Feels Sustainable.",
    subtitle: "Less pressure. More clarity. More joy.",
    description:
      "The goal is not perfection, pressure, or constant self-monitoring. It's helping you build something that feels personal, sustainable, and joyful — support that actually fits your life.",
    points: [
      "A realistic path you can actually maintain",
      "More trust in yourself and your process",
      "Wellbeing that feels supportive, not controlling",
    ],
    accent: "#00E2FF",
    panel: "#D9F9FF",
  },
  {
    id: "003",
    eyebrow: "THE STRATEGY",
    title: "Change Through Curiosity, Not Force.",
    subtitle: "A calmer process with lasting shifts.",
    description:
      "We use curiosity, reflection, and thoughtful guidance to create change that lasts. No rigid rules, no extremes — just a grounded process that helps you move forward with more ease and clarity.",
    points: [
      "Thoughtful support instead of strict rules",
      "Small shifts that create real momentum",
      "A process built around care, reflection, and trust",
    ],
    accent: "#FFBD17",
    panel: "#FFE7A0",
  },
]

export function Method() {
  const sectionRef = useRef<HTMLElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.45,
  })

  return (
    <section
      ref={sectionRef}
      id="method"
      aria-labelledby="method-title"
      className="relative bg-[#F5F0E6]"
      style={{ height: "300vh" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#FFF8EF_0%,#F5F0E6_48%,#EEE6D8_100%)]" />

        <div className="relative mx-auto flex h-full max-w-[1400px] flex-col px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <header className="relative z-30 mb-6 text-center sm:mb-8">
            <span className="mb-2 inline-block text-xs font-bold uppercase tracking-[0.2em] text-black/60 sm:text-sm">
              Stay Playful
            </span>

            <h2
              id="method-title"
              className="mx-auto font-sans text-[2.2rem] font-black uppercase leading-[0.88] tracking-[-0.06em] text-black sm:text-[3rem] lg:text-[4rem]"
            >
              <span className="block">Three Layers</span>
              <span className="block">Of The Work</span>
            </h2>

            <p className="mx-auto mt-3 max-w-[600px] text-sm leading-relaxed text-black/70 sm:mt-4 sm:text-base">
              The heart of Stay Playful comes down to three simple things — who I am,
              what this work is here to support, and the way we create change with
              more curiosity, more care, and far less pressure.
            </p>
          </header>

          <div className="relative z-20 mb-4 sm:mb-6">
            <div className="mx-auto max-w-[800px] rounded-full border-[3px] border-black bg-[#14532D] px-4 py-2.5 shadow-[0_4px_0_0_rgba(0,0,0,1)] sm:px-6 sm:py-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-[0.1em] text-white sm:text-xs">
                  Stay Playful Method
                </span>

                <div className="flex items-center gap-2">
                  {methodCards.map((card, i) => (
                    <ProgressDot
                      key={card.id}
                      index={i}
                      progress={smoothProgress}
                      total={methodCards.length}
                    />
                  ))}
                </div>

                <span className="text-[10px] font-black uppercase tracking-[0.1em] text-white sm:text-xs">
                  Three Layers
                </span>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex flex-1 items-center justify-center">
            <div className="relative h-[420px] w-full max-w-[1000px] sm:h-[460px] lg:h-[500px]">
              {methodCards.map((card, index) => (
                <MethodCardPanel
                  key={card.id}
                  card={card}
                  index={index}
                  total={methodCards.length}
                  progress={smoothProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProgressDot({
  index,
  progress,
  total,
}: {
  index: number
  progress: ReturnType<typeof useScroll>["scrollYProgress"]
  total: number
}) {
  const segment = 1 / total
  const start = index * segment
  const end = (index + 1) * segment
  const mid = start + segment / 2

  const opacity = useTransform(
    progress,
    [start - 0.04, start + 0.04, mid, end - 0.04, end + 0.04],
    [0.35, 0.7, 1, 0.7, 0.35]
  )

  const scale = useTransform(
    progress,
    [start - 0.04, start + 0.04, mid, end - 0.04, end + 0.04],
    [0.95, 1.05, 1.28, 1.05, 0.95]
  )

  return (
    <motion.span
      className="h-2 w-2 rounded-full bg-white sm:h-2.5 sm:w-2.5"
      style={{ opacity, scale }}
    />
  )
}

function MethodCardPanel({
  card,
  index,
  total,
  progress,
}: {
  card: MethodCard
  index: number
  total: number
  progress: ReturnType<typeof useScroll>["scrollYProgress"]
}) {
  const segment = 1 / total
  const start = index * segment
  const end = (index + 1) * segment
  const mid = start + segment / 2

  const enterStart = Math.max(0, start - 0.08)
  const enterEnd = start + 0.06
  const exitStart = end - 0.06
  const exitEnd = Math.min(1, end + 0.08)

  const opacity = useTransform(
    progress,
    [enterStart, enterEnd, mid, exitStart, exitEnd],
    [0.2, 1, 1, 1, 0.2]
  )

  const y = useTransform(
    progress,
    [enterStart, enterEnd, mid, exitStart, exitEnd],
    [26, 0, 0, 0, -26]
  )

  const scale = useTransform(
    progress,
    [enterStart, enterEnd, mid, exitStart, exitEnd],
    [0.985, 1, 1, 1, 0.985]
  )

  const rotate = useTransform(
    progress,
    [enterStart, enterEnd, mid, exitStart, exitEnd],
    [0.35, 0, 0, 0, -0.35]
  )

  const contentOpacity = useTransform(
    progress,
    [enterStart, enterEnd, mid, exitStart, exitEnd],
    [0.85, 1, 1, 1, 0.85]
  )

  const leftX = useTransform(
    progress,
    [enterStart, enterEnd, mid, exitStart, exitEnd],
    [10, 0, 0, 0, -10]
  )

  const rightX = useTransform(
    progress,
    [enterStart, enterEnd, mid, exitStart, exitEnd],
    [-10, 0, 0, 0, 10]
  )

  return (
    <motion.article
      className="absolute inset-0"
      style={{
        opacity,
        y,
        scale,
        rotate,
        zIndex: total - index,
      }}
    >
      <motion.div
        className="h-full overflow-hidden rounded-[20px] border-[3px] border-black bg-[#FDFAF5] shadow-[0_6px_0_0_rgba(0,0,0,1)] sm:rounded-[24px]"
        style={{ opacity: contentOpacity }}
      >
        <div
          className="flex items-center justify-between border-b-[3px] border-black px-4 py-2.5 sm:px-5 sm:py-3"
          style={{ backgroundColor: card.accent }}
        >
          <span className="text-xs font-black uppercase tracking-[-0.01em] text-black sm:text-sm">
            {card.eyebrow}
          </span>
          <span className="text-xs font-black uppercase tracking-[-0.01em] text-black sm:text-sm">
            [{card.id}]
          </span>
        </div>

        <div className="grid h-[calc(100%-44px)] sm:h-[calc(100%-48px)] lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            className="flex flex-col justify-center overflow-y-auto p-4 sm:p-6 lg:p-8"
            style={{ x: leftX }}
          >
            <h3 className="max-w-[16ch] font-sans text-[1.5rem] font-black leading-[0.92] tracking-[-0.04em] text-black sm:text-[2rem] lg:text-[2.4rem]">
              {card.title}
            </h3>

            <p className="mt-3 max-w-[32rem] text-sm font-semibold leading-snug text-black/90 sm:mt-4 sm:text-base lg:text-lg">
              {card.subtitle}
            </p>

            <p className="mt-3 max-w-[36rem] text-xs leading-relaxed text-black/70 sm:mt-4 sm:text-sm lg:text-base">
              {card.description}
            </p>

            <div className="mt-4 sm:mt-5">
              <p className="text-[10px] font-black uppercase tracking-wide text-black sm:text-xs">
                What this means:
              </p>

              <ul className="mt-2 space-y-1.5 sm:mt-3 sm:space-y-2">
                {card.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-xs leading-snug text-black/80 sm:text-sm"
                  >
                    <span
                      className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full border-[2px] border-black sm:h-2.5 sm:w-2.5"
                      style={{ backgroundColor: card.accent }}
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="hidden border-l-[3px] border-black lg:flex lg:items-center lg:justify-center lg:p-5"
            style={{ backgroundColor: card.panel, x: rightX }}
          >
            <div className="w-full max-w-[240px] rounded-[16px] border-[3px] border-black bg-[#FDFAF5] shadow-[0_4px_0_0_rgba(0,0,0,1)]">
              <div
                className="flex items-center justify-between border-b-[2px] border-black px-3 py-2"
                style={{ backgroundColor: card.accent }}
              >
                <span className="text-[9px] font-black uppercase tracking-[0.1em] text-black/70">
                  Stay Playful
                </span>

                <div className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full border-[2px] border-black bg-white" />
                  <span className="h-2 w-2 rounded-full border-[2px] border-black bg-[#FFF4D6]" />
                  <span className="h-2 w-2 rounded-full border-[2px] border-black bg-[#D9FFF4]" />
                </div>
              </div>

              <div className="p-3">
                <div
                  className="flex aspect-[4/5] items-center justify-center rounded-[12px] border-[3px] border-black"
                  style={{ backgroundColor: card.accent }}
                >
                  <div className="px-3 text-center font-sans text-[1.3rem] font-black uppercase leading-[0.88] tracking-[-0.04em] text-[#14532D]">
                    <div>Stay</div>
                    <div>Playful</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t-[2px] border-black px-3 py-2">
                <span className="text-[9px] font-black uppercase tracking-[0.12em] text-black/50">
                  Layer {card.id}
                </span>
                <span
                  className="inline-flex h-2.5 w-2.5 rounded-full border-[2px] border-black"
                  style={{ backgroundColor: card.accent }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.article>
  )
}