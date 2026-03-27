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
      "I’m Daniella, and Stay Playful was created to offer a more grounded and compassionate approach to wellbeing — one rooted in balance, self-trust, and a healthier relationship with food, body, and everyday life.",
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
      "The goal is not perfection, pressure, or constant self-monitoring. It’s helping you build something that feels personal, sustainable, and joyful — support that actually fits your life.",
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
    stiffness: 90,
    damping: 24,
    mass: 0.5,
  })

  return (
    <section
      ref={sectionRef}
      id="method"
      aria-labelledby="method-title"
      className="relative bg-[#F5F0E6]"
      style={{ height: "340vh" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#FFF8EF_0%,#F5F0E6_48%,#EEE6D8_100%)]" />

      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="mx-auto flex h-full max-w-[1500px] flex-col px-4 pt-10 sm:px-6 sm:pt-12 lg:px-8 lg:pt-14">
          <div className="relative z-20 mb-6 sm:mb-8">
            <div className="rounded-full border-[4px] border-black bg-[#14532D] px-6 py-4 shadow-[0_8px_0_0_rgba(0,0,0,1)]">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-black uppercase tracking-[0.14em] text-white sm:text-base">
                  Stay Playful Method
                </span>
                <span className="text-sm font-black uppercase tracking-[0.14em] text-white sm:text-base">
                  Three Layers
                </span>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex-1">
            <div className="relative mx-auto h-[620px] max-w-[1360px] sm:h-[680px] lg:h-[720px]">
              {methodCards.map((card, index) => (
                <MethodParallaxCard
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

function MethodParallaxCard({
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
  const pad = segment * 0.55

  const input = [
    Math.max(0, start - pad),
    start,
    center,
    end,
    Math.min(1, end + pad),
  ]

  const y = useTransform(progress, input, [180, 80, 0, -80, -180])
  const scale = useTransform(progress, input, [0.9, 0.96, 1, 0.96, 0.9])
  const opacity = useTransform(progress, input, [0.78, 0.92, 1, 0.92, 0.78])
  const rotate = useTransform(progress, input, [2.5, 1, 0, -1, -2.5])
  const blur = useTransform(progress, input, [6, 2, 0, 2, 6])

  const contentY = useTransform(progress, input, [34, 14, 0, -14, -34])
  const mediaY = useTransform(progress, input, [48, 20, 0, -20, -48])

  return (
    <motion.article
      className="absolute inset-0 will-change-transform"
      style={{
        y,
        scale,
        opacity,
        rotate,
        zIndex: total - index,
        filter: useTransform(blur, (v) => `blur(${v}px)`),
      }}
    >
      <div className="overflow-hidden rounded-[30px] border-[4px] border-black bg-[#F6F0E5] shadow-[0_10px_0_0_rgba(0,0,0,1)]">
        <div className="flex items-center justify-between gap-4 border-b-[4px] border-black bg-[#F6F0E5] px-5 py-3 sm:px-6">
          <span className="text-lg font-black uppercase leading-none tracking-[-0.04em] text-black sm:text-[1.15rem]">
            {card.eyebrow}
          </span>
          <span className="text-lg font-black uppercase leading-none tracking-[-0.04em] text-black sm:text-[1.15rem]">
            [{card.id}]
          </span>
        </div>

        <div className="grid min-h-[560px] lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            className="p-7 sm:p-10 lg:p-12"
            style={{ y: contentY }}
          >
            <h2
              id={index === 0 ? "method-title" : undefined}
              className="max-w-[10ch] font-sans text-[2.8rem] font-black leading-[0.88] tracking-[-0.09em] text-black sm:text-[4rem] lg:text-[5.2rem]"
            >
              {card.title}
            </h2>

            <p className="mt-7 max-w-[38rem] text-[1.1rem] font-semibold leading-8 text-black sm:text-[1.45rem] sm:leading-9">
              {card.subtitle}
            </p>

            <div className="mt-8 max-w-[42rem] text-base leading-8 text-black/80 sm:text-[1.05rem]">
              <p>{card.description}</p>

              <div className="mt-8">
                <p className="text-[1rem] font-black text-black">
                  What this means:
                </p>

                <ul className="mt-4 space-y-3">
                  {card.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-[1rem] leading-7 text-black/85"
                    >
                      <span
                        className="mt-[0.45rem] inline-block h-3.5 w-3.5 shrink-0 rounded-full border-[2px] border-black"
                        style={{ backgroundColor: card.accent }}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="border-t-[4px] border-black lg:border-l-[4px] lg:border-t-0"
            style={{ y: mediaY }}
          >
            <div
              className="flex h-full min-h-[320px] items-center justify-center p-6 sm:p-8 lg:p-10"
              style={{ backgroundColor: card.panel }}
            >
              <div className="w-full rounded-[28px] border-[4px] border-black bg-[#F6F0E5] shadow-[0_6px_0_0_rgba(0,0,0,1)]">
                <div
                  className="flex items-center justify-between border-b-[3px] border-black px-5 py-4"
                  style={{ backgroundColor: card.accent }}
                >
                  <span className="text-[12px] font-black uppercase tracking-[0.14em] text-black/80">
                    Stay Playful
                  </span>

                  <div className="flex items-center gap-2">
                    <span className="h-3.5 w-3.5 rounded-full border-[2px] border-black bg-white" />
                    <span className="h-3.5 w-3.5 rounded-full border-[2px] border-black bg-[#FFF4D6]" />
                    <span className="h-3.5 w-3.5 rounded-full border-[2px] border-black bg-[#D9FFF4]" />
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div
                    className="flex aspect-[4/5] items-center justify-center rounded-[24px] border-[4px] border-black"
                    style={{ backgroundColor: card.accent }}
                  >
                    <div className="px-6 text-center font-sans text-[2.3rem] font-black uppercase leading-[0.84] tracking-[-0.07em] text-[#14532D] sm:text-[2.9rem] lg:text-[3.2rem]">
                      <div>Stay</div>
                      <div>Playful</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t-[3px] border-black px-5 py-4">
                  <span className="text-xs font-black uppercase tracking-[0.16em] text-black/60">
                    Layer {card.id}
                  </span>
                  <span
                    className="inline-flex h-4 w-4 rounded-full border-[3px] border-black"
                    style={{ backgroundColor: card.accent }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.article>
  )
}