"use client"

import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion"
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

  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.5,
  })

  return (
    <section
      ref={sectionRef}
      id="method"
      aria-labelledby="method-title"
      className="relative bg-[#F5F0E6]"
      style={{ height: "240vh" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#FFF8EF_0%,#F5F0E6_48%,#EEE6D8_100%)]" />

      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="mx-auto flex h-full max-w-[1400px] flex-col px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24">
          {/* Header / Title Area */}
          <header className="relative z-30 mb-8 text-center sm:mb-10 lg:mb-12">
            <span className="mb-3 inline-block text-sm font-bold uppercase tracking-[0.2em] text-black/60 sm:text-base">
              Stay Playful
            </span>
            <h2
              id="method-title"
              className="mx-auto font-sans text-[2.8rem] font-black uppercase leading-[0.88] tracking-[-0.06em] text-black sm:text-[4rem] lg:text-[5.5rem]"
            >
              <span className="block">Three Layers</span>
              <span className="block">Of The Work</span>
            </h2>
            <p className="mx-auto mt-5 max-w-[680px] text-base leading-relaxed text-black/70 sm:mt-6 sm:text-lg sm:leading-relaxed">
              The heart of Stay Playful comes down to three simple things — who I am, what this work is here to support, and the way we create change with more curiosity, more care, and far less pressure.
            </p>
          </header>

          {/* Pill Bar */}
          <div className="relative z-20 mb-6 sm:mb-8">
            <div className="mx-auto max-w-[900px] rounded-full border-[3px] border-black bg-[#14532D] px-5 py-3 shadow-[0_6px_0_0_rgba(0,0,0,1)] sm:px-6 sm:py-4">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-black uppercase tracking-[0.12em] text-white sm:text-sm">
                  Stay Playful Method
                </span>
                <span className="text-xs font-black uppercase tracking-[0.12em] text-white sm:text-sm">
                  Three Layers
                </span>
              </div>
            </div>
          </div>

          {/* Card Stage */}
          <div className="relative z-10 flex-1">
            <div className="relative mx-auto h-[480px] max-w-[1100px] sm:h-[520px] lg:h-[540px]">
              {methodCards.map((card, index) => (
                <MethodCard
                  key={card.id}
                  card={card}
                  index={index}
                  total={methodCards.length}
                  progress={progress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MethodCard({
  card,
  index,
  total,
  progress,
}: {
  card: MethodCard
  index: number
  total: number
  progress: MotionValue<number>
}) {
  const segment = 1 / total
  const start = index * segment
  const center = start + segment / 2
  const end = start + segment

  const enter = Math.max(0, start - segment * 0.15)
  const exit = Math.min(1, end + segment * 0.15)

  const input = [enter, start, center, end, exit]

  const y = useTransform(progress, input, [40, 15, 0, -15, -40])
  const scale = useTransform(progress, input, [0.98, 0.995, 1, 0.995, 0.98])
  const opacity = useTransform(progress, input, [0.85, 0.95, 1, 0.95, 0.85])
  const rotate = useTransform(progress, input, [0.3, 0.1, 0, -0.1, -0.3])

  return (
    <motion.article
      className="absolute inset-0 will-change-transform"
      style={{
        y,
        scale,
        opacity,
        rotate,
        zIndex: total - index,
      }}
    >
      <div className="h-full overflow-hidden rounded-[24px] border-[3px] border-black bg-[#FDFAF5] shadow-[0_8px_0_0_rgba(0,0,0,1)] sm:rounded-[28px]">
        {/* Card Header */}
        <div
          className="flex items-center justify-between border-b-[3px] border-black px-4 py-3 sm:px-6 sm:py-3.5"
          style={{ backgroundColor: card.accent }}
        >
          <span className="text-sm font-black uppercase tracking-[-0.02em] text-black sm:text-base">
            {card.eyebrow}
          </span>
          <span className="text-sm font-black uppercase tracking-[-0.02em] text-black sm:text-base">
            [{card.id}]
          </span>
        </div>

        {/* Card Content */}
        <div className="grid h-[calc(100%-52px)] lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center p-5 sm:p-7 lg:p-8">
            <h3 className="max-w-[14ch] font-sans text-[1.8rem] font-black leading-[0.92] tracking-[-0.05em] text-black sm:text-[2.4rem] lg:text-[2.8rem]">
              {card.title}
            </h3>

            <p className="mt-4 max-w-[36rem] text-base font-semibold leading-snug text-black/90 sm:mt-5 sm:text-lg">
              {card.subtitle}
            </p>

            <p className="mt-4 max-w-[38rem] text-sm leading-relaxed text-black/70 sm:text-base sm:leading-relaxed">
              {card.description}
            </p>

            <div className="mt-5 sm:mt-6">
              <p className="text-xs font-black uppercase tracking-wide text-black sm:text-sm">
                What this means:
              </p>
              <ul className="mt-3 space-y-2">
                {card.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm leading-snug text-black/80 sm:text-base"
                  >
                    <span
                      className="mt-1.5 inline-block h-2.5 w-2.5 shrink-0 rounded-full border-[2px] border-black"
                      style={{ backgroundColor: card.accent }}
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Visual Panel */}
          <div
            className="hidden border-l-[3px] border-black lg:flex lg:items-center lg:justify-center lg:p-6"
            style={{ backgroundColor: card.panel }}
          >
            <div className="w-full max-w-[280px] rounded-[20px] border-[3px] border-black bg-[#FDFAF5] shadow-[0_5px_0_0_rgba(0,0,0,1)]">
              <div
                className="flex items-center justify-between border-b-[2px] border-black px-4 py-3"
                style={{ backgroundColor: card.accent }}
              >
                <span className="text-[10px] font-black uppercase tracking-[0.12em] text-black/70">
                  Stay Playful
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full border-[2px] border-black bg-white" />
                  <span className="h-2.5 w-2.5 rounded-full border-[2px] border-black bg-[#FFF4D6]" />
                  <span className="h-2.5 w-2.5 rounded-full border-[2px] border-black bg-[#D9FFF4]" />
                </div>
              </div>

              <div className="p-4">
                <div
                  className="flex aspect-[4/5] items-center justify-center rounded-[16px] border-[3px] border-black"
                  style={{ backgroundColor: card.accent }}
                >
                  <div className="px-4 text-center font-sans text-[1.6rem] font-black uppercase leading-[0.88] tracking-[-0.05em] text-[#14532D]">
                    <div>Stay</div>
                    <div>Playful</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t-[2px] border-black px-4 py-3">
                <span className="text-[10px] font-black uppercase tracking-[0.14em] text-black/50">
                  Layer {card.id}
                </span>
                <span
                  className="inline-flex h-3 w-3 rounded-full border-[2px] border-black"
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
