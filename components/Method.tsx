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

const WATERMARK_ROWS = [
  "STAY PLAYFUL STAY PLAYFUL STAY PLAYFUL",
  "STAY PLAYFUL STAY PLAYFUL STAY PLAYFUL",
  "STAY PLAYFUL STAY PLAYFUL STAY PLAYFUL",
  "STAY PLAYFUL STAY PLAYFUL STAY PLAYFUL",
]

export function Method() {
  const sectionRef = useRef<HTMLElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    mass: 0.35,
  })

  const blobLeftY = useTransform(smoothProgress, [0, 1], [-12, 30])
  const blobRightY = useTransform(smoothProgress, [0, 1], [16, -22])
  const blobLeftRotate = useTransform(smoothProgress, [0, 1], [-4, 5])
  const blobRightRotate = useTransform(smoothProgress, [0, 1], [5, -4])
  const blobScale = useTransform(smoothProgress, [0, 0.5, 1], [0.96, 1, 1.04])

  return (
    <section
      ref={sectionRef}
      id="method"
      aria-labelledby="method-title"
      className="relative bg-[#F5F0E6] py-20 sm:py-24 lg:py-28"
      style={{ height: "320vh" }}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#F5F0E6]" />

        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-[1800px] flex-col justify-between px-4 py-6 sm:px-6 lg:px-8">
            {WATERMARK_ROWS.map((row, i) => (
              <div
                key={i}
                className="select-none text-center font-sans text-[4.6rem] font-black uppercase leading-none tracking-[-0.08em] text-black/[0.025] sm:text-[7rem] lg:text-[9.5rem]"
              >
                {row}
              </div>
            ))}
          </div>
        </div>

        <motion.div
          style={{
            y: blobLeftY,
            rotate: blobLeftRotate,
            scale: blobScale,
          }}
          className="absolute left-[2%] top-[6.5rem] z-0 hidden h-[420px] w-[36%] min-w-[280px] lg:block"
        >
          <div
            className="relative h-full w-full"
            style={{
              clipPath:
                "polygon(8% 10%, 30% 8%, 47% 16%, 70% 10%, 88% 22%, 92% 45%, 86% 65%, 92% 86%, 72% 96%, 52% 88%, 30% 96%, 14% 82%, 4% 62%, 8% 40%, 2% 22%)",
              backgroundColor: "#E59BEA",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center px-8 text-center">
              <div className="font-sans text-[4rem] font-black uppercase leading-[0.82] tracking-[-0.08em] text-[#14532D] xl:text-[4.8rem]">
                <div>Stay</div>
                <div>Playful</div>
                <div>Stay</div>
                <div>Playful</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          style={{
            y: blobRightY,
            rotate: blobRightRotate,
            scale: blobScale,
          }}
          className="absolute right-[3%] top-[8rem] z-0 hidden h-[360px] w-[23%] min-w-[220px] lg:block"
        >
          <div
            className="relative h-full w-full"
            style={{
              clipPath:
                "polygon(14% 14%, 36% 6%, 58% 14%, 80% 6%, 94% 22%, 100% 42%, 90% 62%, 100% 86%, 84% 100%, 62% 92%, 42% 100%, 22% 86%, 8% 68%, 10% 46%, 2% 26%)",
              backgroundColor: "#E59BEA",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
              <div className="font-sans text-[2.6rem] font-black uppercase leading-[0.88] tracking-[-0.08em] text-[#14532D] xl:text-[3.2rem]">
                <div>Stay</div>
                <div>Playful</div>
                <div>Stay</div>
                <div>Playful</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="sticky top-0 flex h-screen items-center">
        <div className="relative mx-auto w-full max-w-[1380px] px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 mx-auto max-w-6xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-black/60 sm:text-base">
              Stay Playful
            </p>

            <h2
              id="method-title"
              className="mt-4 font-sans text-[3.4rem] font-black uppercase leading-[0.84] tracking-[-0.1em] text-black sm:text-[5.5rem] lg:text-[8rem] xl:text-[9rem]"
            >
              THREE LAYERS
              <br />
              OF THE WORK
            </h2>

            <p className="mx-auto mt-6 max-w-4xl text-[1.2rem] leading-9 text-black/65 sm:text-[1.5rem] sm:leading-10">
              The heart of Stay Playful comes down to three simple things — who I am,
              what this work is meant to support, and the way we create change with
              more curiosity, more care, and far less pressure.
            </p>
          </div>

          <div className="mt-12 sm:mt-14 lg:mt-16">
            <div className="relative z-40 mb-4 sm:mb-5 lg:mb-6">
              <div className="rounded-full border-[4px] border-black bg-[#14532D] px-6 py-4 shadow-[0_6px_0_0_rgba(0,0,0,1)]">
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

            <div className="relative h-[620px] sm:h-[680px] lg:h-[720px]">
              {methodCards.map((card, index) => (
                <ParallaxMethodCard
                  key={card.id}
                  card={card}
                  index={index}
                  progress={smoothProgress}
                  total={methodCards.length}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ParallaxMethodCard({
  card,
  index,
  progress,
  total,
}: {
  card: MethodCard
  index: number
  progress: MotionValue<number>
  total: number
}) {
  const step = 1 / total
  const start = index * step
  const mid = start + step / 2
  const end = start + step

  const prev = Math.max(0, start - step * 0.55)
  const next = Math.min(1, end + step * 0.55)

  const y = useTransform(
    progress,
    [prev, start, mid, end, next],
    [110, 44, 0, -44, -110]
  )

  const scale = useTransform(
    progress,
    [prev, start, mid, end, next],
    [0.94, 0.975, 1, 0.985, 0.955]
  )

  const opacity = useTransform(
    progress,
    [prev, start, mid, end, next],
    [0.88, 0.96, 1, 0.96, 0.88]
  )

  const rotate = useTransform(
    progress,
    [prev, start, mid, end, next],
    [1.6, 0.8, 0, -0.8, -1.6]
  )

  const blur = useTransform(
    progress,
    [prev, start, mid, end, next],
    [2.2, 0.8, 0, 0.8, 2.2]
  )

  const contentY = useTransform(
    progress,
    [prev, start, mid, end, next],
    [22, 10, 0, -10, -22]
  )

  const panelY = useTransform(
    progress,
    [prev, start, mid, end, next],
    [34, 14, 0, -14, -34]
  )

  const innerScale = useTransform(
    progress,
    [prev, start, mid, end, next],
    [0.992, 0.997, 1, 0.997, 0.992]
  )

  const zIndex = total - index

  return (
    <motion.article
      style={{
        y,
        scale,
        opacity,
        rotate,
        zIndex,
        filter: useTransform(blur, (v) => `blur(${v}px)`),
      }}
      className="absolute inset-0 will-change-transform"
    >
      <motion.div
        style={{ scale: innerScale }}
        className="overflow-hidden rounded-[28px] border-[4px] border-black bg-[#F7F1E6] shadow-[0_10px_0_0_rgba(0,0,0,1)] sm:rounded-[32px]"
      >
        <div
          className="flex items-center justify-between gap-3 border-b-[4px] border-black px-4 py-3 sm:px-6"
          style={{ backgroundColor: card.accent }}
        >
          <span className="text-sm font-black uppercase tracking-[0.08em] text-black sm:text-[1.05rem]">
            {card.eyebrow}
          </span>

          <span className="text-sm font-black uppercase tracking-[0.08em] text-black sm:text-[1.05rem]">
            [{card.id}]
          </span>
        </div>

        <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            style={{ y: contentY }}
            className="p-6 sm:p-8 lg:p-10 will-change-transform"
          >
            <h3 className="max-w-[12ch] font-sans text-[2.15rem] font-black uppercase leading-[0.88] tracking-[-0.08em] text-[#14532D] sm:text-[3rem] lg:text-[4.2rem]">
              {card.title}
            </h3>

            <p className="mt-6 max-w-[34rem] text-lg font-semibold leading-8 text-black/90 sm:text-[1.45rem]">
              {card.subtitle}
            </p>

            <p className="mt-6 max-w-[42rem] text-base leading-8 text-black/78 sm:text-[1.04rem]">
              {card.description}
            </p>

            <div className="mt-8">
              <p className="text-[1rem] font-black uppercase tracking-[0.05em] text-black">
                What this means:
              </p>

              <ul className="mt-4 space-y-3">
                {card.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-[1rem] leading-7 text-black/82"
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
          </motion.div>

          <motion.div
            style={{ y: panelY }}
            className="border-t-[4px] border-black lg:border-l-[4px] lg:border-t-0 will-change-transform"
          >
            <div
              className="flex h-full min-h-[320px] items-center justify-center p-6 sm:min-h-[360px] sm:p-8 lg:min-h-[100%] lg:p-10"
              style={{ backgroundColor: card.panel }}
            >
              <div className="w-full rounded-[24px] border-[4px] border-black bg-[#F5F0E6] p-5 shadow-[0_6px_0_0_rgba(0,0,0,1)] sm:p-6">
                <div className="flex items-center justify-between border-b-[3px] border-black pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3.5 w-3.5 rounded-full border-[2px] border-black bg-white" />
                    <span className="h-3.5 w-3.5 rounded-full border-[2px] border-black bg-[#FFF4D6]" />
                    <span className="h-3.5 w-3.5 rounded-full border-[2px] border-black bg-[#D9FFF4]" />
                  </div>

                  <span className="text-[11px] font-black uppercase tracking-[0.16em] text-black/60">
                    Stay Playful
                  </span>
                </div>

                <div className="py-8 sm:py-10">
                  <div
                    className="mx-auto flex aspect-[5/4] max-w-[430px] items-center justify-center rounded-[26px] border-[4px] border-black text-center"
                    style={{ backgroundColor: card.accent }}
                  >
                    <div className="px-6 font-sans text-[2rem] font-black uppercase leading-[0.84] tracking-[-0.06em] text-[#14532D] sm:text-[2.5rem] lg:text-[3rem]">
                      <div>Stay</div>
                      <div>Playful</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t-[3px] border-black pt-4">
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
      </motion.div>
    </motion.article>
  )
}