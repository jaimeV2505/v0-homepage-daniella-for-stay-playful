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

  // Smooth spring for buttery animations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
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
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,#FFF8EF_0%,#F5F0E6_50%,#EEE6D8_100%)]" />

        <div className="relative mx-auto flex h-full max-w-[1400px] flex-col px-4 pb-6 pt-6 sm:px-6 sm:pt-10 lg:px-8 lg:pt-12">
          {/* Header */}
          <header className="relative z-30 mb-4 text-center sm:mb-5">
            <motion.span
              className="mb-2 inline-block rounded-full border-2 border-[#14532D]/30 bg-[#14532D]/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.3em] text-[#14532D] sm:text-xs"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Stay Playful
            </motion.span>
            <motion.h2
              id="method-title"
              className="mx-auto font-sans uppercase leading-[0.82] tracking-[-0.06em] text-black"
              style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", fontWeight: 900 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="block">Three Layers</span>
              <span
                className="relative block"
                style={{
                  WebkitTextStroke: "3px black",
                  color: "transparent",
                }}
              >
                Of The Work
                <motion.span
                  className="absolute inset-0 block"
                  style={{ color: "#14532D", WebkitTextStroke: "0px" }}
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  Of The Work
                </motion.span>
              </span>
            </motion.h2>
            <motion.p
              className="mx-auto mt-2 max-w-[500px] text-xs leading-relaxed text-black/55 sm:mt-3 sm:text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              The heart of Stay Playful comes down to three simple things — who I am, what this work is here to support, and the way we create change with more curiosity.
            </motion.p>
          </header>

          {/* Pill Bar - Sticky Navigation */}
          <div className="relative z-40 mb-4 sm:mb-5">
            <div className="mx-auto max-w-[700px] rounded-full border-[3px] border-black bg-[#14532D] px-4 py-2 shadow-[0_4px_0_0_rgba(0,0,0,1)] sm:px-6 sm:py-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-black uppercase tracking-[0.12em] text-white/90 sm:text-[11px]">
                  Stay Playful Method
                </span>
                
                {/* Progress Bar */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  {methodCards.map((card, i) => (
                    <ProgressIndicator key={card.id} index={i} progress={smoothProgress} accent={card.accent} />
                  ))}
                </div>
                
                <span className="text-[9px] font-black uppercase tracking-[0.12em] text-white/90 sm:text-[11px]">
                  Three Layers
                </span>
              </div>
            </div>
          </div>

          {/* Cards Container */}
          <div className="relative z-10 min-h-0 flex-1 px-0">
            <div className="relative h-full w-full max-w-[960px] mx-auto">
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
        </div>
      </div>
    </section>
  )
}

function ProgressIndicator({ 
  index, 
  progress,
  accent 
}: { 
  index: number
  progress: ReturnType<typeof useSpring>
  accent: string
}) {
  const segment = 1 / 3
  const start = index * segment
  const center = start + segment / 2
  const end = (index + 1) * segment

  // Active state with smooth transition
  const isActive = useTransform(progress, (p) => {
    return p >= start - 0.02 && p < end + 0.02
  })
  
  const scale = useTransform(
    progress,
    [start - 0.05, start, center, end, end + 0.05],
    [0.8, 1.2, 1.3, 1.2, 0.8]
  )

  const opacity = useTransform(
    progress,
    [start - 0.05, start, end, end + 0.05],
    [0.3, 1, 1, 0.3]
  )

  return (
    <motion.div
      className="relative h-3 w-3 sm:h-3.5 sm:w-3.5"
      style={{ scale }}
    >
      <motion.span
        className="absolute inset-0 rounded-full border-2 border-white/50"
        style={{ opacity }}
      />
      <motion.span
        className="absolute inset-0.5 rounded-full"
        style={{ 
          backgroundColor: accent,
          opacity,
        }}
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
  
  // CLEAN transitions - no overlap
  // Each card: fade in → stay visible → fade out
  const enterStart = start
  const enterEnd = start + 0.08
  const exitStart = end - 0.08
  const exitEnd = end

  // Opacity: Sharp transitions, no mixing
  const opacity = useTransform(
    progress,
    index === 0 
      ? [0, 0.01, exitStart, exitEnd] // First card starts visible
      : index === total - 1
        ? [enterStart, enterEnd, 1, 1] // Last card stays visible
        : [enterStart, enterEnd, exitStart, exitEnd], // Middle cards
    index === 0 
      ? [1, 1, 1, 0]
      : index === total - 1
        ? [0, 1, 1, 1]
        : [0, 1, 1, 0]
  )

  // Y movement: Slide up from bottom, exit up
  const y = useTransform(
    progress,
    index === 0
      ? [0, exitStart, exitEnd]
      : index === total - 1
        ? [enterStart, enterEnd, 1]
        : [enterStart, enterEnd, exitStart, exitEnd],
    index === 0
      ? [0, 0, -80]
      : index === total - 1
        ? [80, 0, 0]
        : [80, 0, 0, -80]
  )

  // Scale: Subtle zoom effect
  const scale = useTransform(
    progress,
    index === 0
      ? [0, exitStart, exitEnd]
      : index === total - 1
        ? [enterStart, enterEnd, 1]
        : [enterStart, enterEnd, exitStart, exitEnd],
    index === 0
      ? [1, 1, 0.92]
      : index === total - 1
        ? [0.92, 1, 1]
        : [0.92, 1, 1, 0.92]
  )

  // Blur on exit (optional subtle effect)
  const filter = useTransform(
    progress,
    index === 0
      ? [exitStart, exitEnd]
      : index === total - 1
        ? [enterStart, enterEnd]
        : [enterStart, enterEnd, exitStart, exitEnd],
    index === 0
      ? ["blur(0px)", "blur(4px)"]
      : index === total - 1
        ? ["blur(4px)", "blur(0px)"]
        : ["blur(4px)", "blur(0px)", "blur(0px)", "blur(4px)"]
  )

  // Z-index management
  const zIndex = useTransform(progress, (p) => {
    if (p >= start && p < end) return 20
    if (p >= end) return 10 - index
    return index
  })

  return (
    <motion.article
      className="absolute inset-0 will-change-transform"
      style={{
        opacity,
        y,
        scale,
        filter,
        zIndex,
      }}
    >
        <div
          className="flex h-full flex-col overflow-hidden rounded-[16px] border-[3px] border-black bg-[#FDFAF5] sm:rounded-[20px] lg:rounded-[24px]"
        style={{
          boxShadow: `0 8px 0 0 rgba(0,0,0,1), 0 20px 60px -15px rgba(0,0,0,0.15)`,
        }}
      >
        {/* Card Header */}
        <div
          className="flex items-center justify-between border-b-[3px] border-black px-4 py-2 sm:px-5 sm:py-2.5"
          style={{ backgroundColor: card.accent }}
        >
          <span className="text-[10px] font-black uppercase tracking-[0.05em] text-black sm:text-xs">
            {card.eyebrow}
          </span>
          <span className="text-[10px] font-black uppercase tracking-[0.02em] text-black/70 sm:text-xs">
            [{card.id}]
          </span>
        </div>

        {/* Card Body */}
        <div className="grid min-h-0 flex-1 overflow-y-auto lg:grid-cols-[1.2fr_0.8fr]">
          {/* Text Content */}
          <div className="flex flex-col justify-center p-5 sm:p-6 lg:p-8">
            <h3 className="max-w-[18ch] font-sans text-[1.6rem] font-black leading-[0.9] tracking-[-0.04em] text-black sm:text-[2.2rem] lg:text-[2.6rem]">
              {card.title}
            </h3>

            <p className="mt-3 max-w-[28rem] text-sm font-semibold leading-snug text-black/85 sm:mt-4 sm:text-base lg:text-lg">
              {card.subtitle}
            </p>

            <p className="mt-3 max-w-[32rem] text-xs leading-relaxed text-black/65 sm:mt-4 sm:text-sm">
              {card.description}
            </p>

            <div className="mt-4 sm:mt-5">
              <p className="text-[9px] font-black uppercase tracking-[0.15em] text-black/50 sm:text-[10px]">
                What this means:
              </p>
              <ul className="mt-2 space-y-1.5 sm:mt-2.5">
                {card.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-xs leading-snug text-black/75 sm:text-sm"
                  >
                    <span
                      className="mt-[3px] inline-block h-2 w-2 shrink-0 rounded-full border-2 border-black sm:h-2.5 sm:w-2.5"
                      style={{ backgroundColor: card.accent }}
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Visual Panel - Desktop */}
          <div
            className="hidden border-l-[3px] border-black lg:flex lg:items-center lg:justify-center"
            style={{ backgroundColor: card.panel }}
          >
            <div className="w-full max-w-[200px] rounded-[14px] border-[3px] border-black bg-[#FDFAF5] shadow-[0_4px_0_0_rgba(0,0,0,1)]">
              {/* Mini Header */}
              <div
                className="flex items-center justify-between border-b-2 border-black px-3 py-1.5"
                style={{ backgroundColor: card.accent }}
              >
                <span className="text-[8px] font-black uppercase tracking-[0.1em] text-black/60">
                  Stay Playful
                </span>
                <div className="flex gap-1">
                  <span className="h-1.5 w-1.5 rounded-full border border-black bg-white" />
                  <span className="h-1.5 w-1.5 rounded-full border border-black bg-white" />
                  <span className="h-1.5 w-1.5 rounded-full border border-black bg-white" />
                </div>
              </div>

              {/* Mini Content */}
              <div className="p-3">
                <div
                  className="flex aspect-[4/5] items-center justify-center rounded-lg border-[3px] border-black"
                  style={{ backgroundColor: card.accent }}
                >
                  <div className="text-center font-sans text-lg font-black uppercase leading-[0.85] tracking-[-0.03em] text-[#14532D]">
                    <div>Stay</div>
                    <div>Playful</div>
                  </div>
                </div>
              </div>

              {/* Mini Footer */}
              <div className="flex items-center justify-between border-t-2 border-black px-3 py-1.5">
                <span className="text-[8px] font-bold uppercase tracking-wider text-black/40">
                  Layer {card.id}
                </span>
                <span
                  className="h-2 w-2 rounded-full border-2 border-black"
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
