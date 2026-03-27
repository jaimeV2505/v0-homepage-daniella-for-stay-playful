"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
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
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  })

  return (
    <section
      ref={sectionRef}
      id="method"
      aria-labelledby="method-title"
      className="relative bg-[#F5F0E6]"
      style={{ height: "280vh" }}
    >
      {/* Minimal neutral top divider */}
      <div className="relative z-20 px-5 pt-6 pb-2 sm:px-8 sm:pt-8 sm:pb-3 lg:px-12 lg:pt-10 lg:pb-4">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4">
          <span className="text-[10px] font-black uppercase tracking-[0.28em] text-black/30 sm:text-xs">
            Stay Playful Method
          </span>

          <div className="flex items-center gap-3">
            <span className="h-[2px] w-6 rounded-full bg-black/10" />

            <div className="flex items-center gap-1.5">
              {methodCards.map((card, i) => (
                <ProgressDot
                  key={card.id}
                  index={i}
                  progress={smoothProgress}
                  accent={card.accent}
                />
              ))}
            </div>

            <span className="h-[2px] w-6 rounded-full bg-black/10" />
          </div>

          <span className="text-[10px] font-black uppercase tracking-[0.28em] text-black/30 sm:text-xs">
            Three Layers
          </span>
        </div>
      </div>

      {/* Sticky cards viewport */}
      <div className="sticky top-0 h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_0%,#FFF8EF_0%,#F5F0E6_100%)]" />

        <div className="relative h-full w-full">
          {methodCards.map((card, index) => (
            <MethodCardComponent
              key={card.id}
              card={card}
              index={index}
              total={methodCards.length}
              progress={smoothProgress}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProgressDot({
  index,
  progress,
  accent,
}: {
  index: number
  progress: ReturnType<typeof useSpring>
  accent: string
}) {
  const segment = 1 / 3
  const start = index * segment
  const end = (index + 1) * segment

  const scale = useTransform(
    progress,
    [start - 0.05, start, start + segment / 2, end, end + 0.05],
    [0.7, 1.2, 1.35, 1.2, 0.7]
  )

  const bgOpacity = useTransform(
    progress,
    [start - 0.05, start, end, end + 0.05],
    [0.25, 1, 1, 0.25]
  )

  return (
    <motion.div className="relative h-3 w-3 sm:h-4 sm:w-4" style={{ scale }}>
      <span className="absolute inset-0 rounded-full border-2 border-black/22" />
      <motion.span
        className="absolute inset-[2px] rounded-full"
        style={{ backgroundColor: accent, opacity: bgOpacity }}
      />
    </motion.div>
  )
}

function MethodCardComponent({
  card,
  index,
  total,
  progress,
}: {
  card: MethodCard
  index: number
  total: number
  progress: ReturnType<typeof useSpring>
}) {
  const segment = 1 / total
  const start = index * segment
  const end = (index + 1) * segment

  const enterEnd = start + 0.06
  const exitStart = end - 0.06
  const exitEnd = end

  const opacity = useTransform(
    progress,
    index === 0
      ? [0, 0.01, exitStart, exitEnd]
      : index === total - 1
        ? [start, enterEnd, 1, 1]
        : [start, enterEnd, exitStart, exitEnd],
    index === 0
      ? [1, 1, 1, 0]
      : index === total - 1
        ? [0, 1, 1, 1]
        : [0, 1, 1, 0]
  )

  const y = useTransform(
    progress,
    index === 0
      ? [0, exitStart, exitEnd]
      : index === total - 1
        ? [start, enterEnd, 1]
        : [start, enterEnd, exitStart, exitEnd],
    index === 0
      ? [0, 0, -60]
      : index === total - 1
        ? [60, 0, 0]
        : [60, 0, 0, -60]
  )

  const scale = useTransform(
    progress,
    index === 0
      ? [0, exitStart, exitEnd]
      : index === total - 1
        ? [start, enterEnd, 1]
        : [start, enterEnd, exitStart, exitEnd],
    index === 0
      ? [1, 1, 0.96]
      : index === total - 1
        ? [0.96, 1, 1]
        : [0.96, 1, 1, 0.96]
  )

  const zIndex = useTransform(progress, (p) => {
    if (p >= start && p < end) return 20
    if (p >= end) return 10 - index
    return index
  })

  return (
    <motion.article
      className="absolute inset-x-5 bottom-6 top-[8.5rem] will-change-transform sm:inset-x-8 sm:bottom-8 sm:top-[9.5rem] lg:inset-x-14 lg:bottom-10 lg:top-[10.5rem] xl:inset-x-20"
      style={{ opacity, y, scale, zIndex }}
    >
      <div
        className="flex h-full flex-col overflow-hidden rounded-[20px] border-[3px] border-black bg-[#FDFAF5] sm:rounded-[24px] lg:rounded-[28px]"
        style={{
          boxShadow: "0 10px 0 0 rgba(0,0,0,1), 0 30px 80px -20px rgba(0,0,0,0.18)",
        }}
      >
        {/* Card Header */}
        <div
          className="flex shrink-0 items-center justify-between border-b-[3px] border-black px-4 py-3 sm:px-6 sm:py-3.5"
          style={{ backgroundColor: card.accent }}
        >
          <span className="text-xs font-black uppercase tracking-[0.1em] text-black sm:text-sm">
            {card.eyebrow}
          </span>
          <span className="text-xs font-black tracking-[0.02em] text-black/50 sm:text-sm">
            [{card.id}]
          </span>
        </div>

        {/* Card Body */}
        <div className="grid min-h-0 flex-1 overflow-hidden lg:grid-cols-[1.3fr_0.7fr]">
          <div className="flex min-h-0 flex-col justify-center overflow-y-auto p-6 sm:p-8 lg:p-10 xl:p-12">
            <h3
              className="max-w-[14ch] font-sans leading-[0.88] tracking-[-0.045em] text-black"
              style={{ fontSize: "clamp(1.9rem, 4.2vw, 3.2rem)", fontWeight: 900 }}
            >
              {card.title}
            </h3>

            <p className="mt-4 max-w-[34rem] text-sm font-semibold leading-snug text-black/82 sm:text-base lg:text-lg">
              {card.subtitle}
            </p>

            <p className="mt-4 max-w-[38rem] text-sm leading-relaxed text-black/62 sm:text-base">
              {card.description}
            </p>

            <div className="mt-5 sm:mt-6">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-black/38 sm:text-xs">
                What this means:
              </p>

              <ul className="mt-3 space-y-2 sm:space-y-2.5">
                {card.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm leading-snug text-black/72"
                  >
                    <span
                      className="mt-1 inline-block h-2.5 w-2.5 shrink-0 rounded-full border-2 border-black"
                      style={{ backgroundColor: card.accent }}
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="hidden border-l-[3px] border-black lg:flex lg:items-center lg:justify-center"
            style={{ backgroundColor: card.panel }}
          >
            <div className="w-full max-w-[230px] rounded-[16px] border-[3px] border-black bg-[#FDFAF5] shadow-[0_6px_0_0_rgba(0,0,0,1)] xl:max-w-[250px]">
              <div
                className="flex items-center justify-between border-b-[2px] border-black px-3 py-1.5"
                style={{ backgroundColor: card.accent }}
              >
                <span className="text-[8px] font-black uppercase tracking-widest text-black/70">
                  Stay Playful
                </span>
                <div className="flex gap-0.5">
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      className="h-1.5 w-1.5 rounded-full border border-black bg-white"
                    />
                  ))}
                </div>
              </div>

              <div className="p-3">
                <div
                  className="flex aspect-[4/5] items-center justify-center rounded-[14px] border-[2px] border-black"
                  style={{ backgroundColor: card.accent }}
                >
                  <div className="text-center font-sans text-lg font-black uppercase leading-[0.85] tracking-[-0.03em] text-[#14532D] xl:text-[1.35rem]">
                    <div>Stay</div>
                    <div>Playful</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t-[2px] border-black px-3 py-1.5">
                <span className="text-[8px] font-bold uppercase tracking-wider text-black/40">
                  Layer {card.id}
                </span>
                <span
                  className="h-2 w-2 rounded-full border border-black"
                  style={{ backgroundColor: card.accent }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}