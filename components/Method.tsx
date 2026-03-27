"use client"

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

type MethodCard = {
  id: string
  title: string
  subtitle: string
  description: string
  accent: string
  tilt: string
}

const cards: MethodCard[] = [
  {
    id: "01",
    title: "About Me",
    subtitle: "The person behind Stay Playful",
    description:
      "I’m Daniella, and Stay Playful was created to offer a softer, more human approach to wellbeing — one rooted in balance, self-trust, and a healthier relationship with food, body, and everyday life.",
    accent: "#FFABFF",
    tilt: "-rotate-[1.6deg]",
  },
  {
    id: "02",
    title: "The Goal",
    subtitle: "What this work is here to support",
    description:
      "The goal is not perfection, pressure, or constant self-monitoring. It’s helping you build something that feels sustainable, personal, and joyful — support that fits your real life.",
    accent: "#00E2FF",
    tilt: "rotate-[1.2deg]",
  },
  {
    id: "03",
    title: "The Strategy",
    subtitle: "How we approach change",
    description:
      "We use curiosity, reflection, and thoughtful guidance to create lasting shifts. No rigid rules, no extremes — just a grounded process that helps you move forward with more ease and clarity.",
    accent: "#FFBD17",
    tilt: "-rotate-[1deg]",
  },
]

export function Method() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const titleY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, -24])
  const titleRotate = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, -0.5])

  return (
    <section
      ref={sectionRef}
      id="method"
      aria-labelledby="method-title"
      className="relative overflow-visible bg-[#F5F0E6] py-20 sm:py-24 lg:py-28 xl:py-32"
    >
      {/* background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#FFF8EF_0%,#F5F0E6_42%,#EEE6D8_100%)]" />
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.05)_49.5%,transparent_50%,transparent_100%)]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.06)_100%)]" />
      </div>

      {/* soft blob behind heading */}
      <div className="pointer-events-none absolute left-1/2 top-10 z-0 h-[220px] w-[88%] max-w-[980px] -translate-x-1/2 rounded-[42%_58%_52%_48%/49%_38%_62%_51%] bg-[#E7A7F0]/70 blur-[2px] sm:h-[260px] lg:h-[320px]" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <motion.div
          style={{ y: titleY, rotate: titleRotate }}
          className="mx-auto max-w-5xl text-center"
        >
          <p className="text-sm font-black uppercase tracking-[0.24em] text-black/60">
            Stay Playful
          </p>

          <h2
            id="method-title"
            className="mt-4 font-sans text-[2.9rem] font-black uppercase leading-[0.86] tracking-[-0.09em] text-[#14532D] sm:text-[4.1rem] lg:text-[5.7rem] xl:text-[6.5rem]"
          >
            STAY
            <br />
            PLAYFUL
            <br />
            METHOD
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-black/70 sm:text-lg">
            The heart of Stay Playful comes down to three simple things — who I am,
            what this work is meant to support, and the way we create change with
            more curiosity, more care, and far less pressure.
          </p>
        </motion.div>

        {/* mobile */}
        <div className="relative mt-12 grid gap-6 lg:hidden">
          {cards.map((item, index) => (
            <motion.article
              key={item.id}
              initial={reduceMotion ? false : { opacity: 0, y: 34 }}
              whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-[28px] border-[4px] border-black bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                <WindowCard item={item} />
              </div>
            </motion.article>
          ))}
        </div>

        {/* desktop sticky stack */}
        <div className="relative mt-16 hidden lg:block xl:mt-20">
          <div className="relative">
            {cards.map((item, index) => (
              <ScrollLayerCard
                key={item.id}
                item={item}
                index={index}
                total={cards.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ScrollLayerCard({
  item,
  index,
  total,
}: {
  item: MethodCard
  index: number
  total: number
}) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start end", "end center"],
  })

  const y = useTransform(
    scrollYProgress,
    [0, 0.25, 0.65, 1],
    reduceMotion ? [0, 0, 0, 0] : [160, 90, 25, 0]
  )

  const scale = useTransform(
    scrollYProgress,
    [0, 0.35, 1],
    reduceMotion ? [1, 1, 1] : [0.9, 0.96, 1]
  )

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.4, 1],
    reduceMotion ? [1, 1, 1, 1] : [0.35, 0.7, 0.95, 1]
  )

  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [index % 2 === 0 ? -2 : 2, 0]
  )

  const cardTop = 120 + index * 34

  return (
    <div
      ref={wrapperRef}
      className="relative"
      style={{
        height: index === total - 1 ? "120vh" : "135vh",
      }}
    >
      <div
        className="sticky"
        style={{
          top: `${cardTop}px`,
          zIndex: 20 + index,
        }}
      >
        <motion.article
          style={{ y, scale, opacity, rotate }}
          className={`relative mx-auto max-w-[980px] ${item.tilt}`}
        >
          <div className="overflow-hidden rounded-[30px] border-[4px] border-black bg-white shadow-[12px_12px_0_0_rgba(0,0,0,1)]">
            <WindowCard item={item} />
          </div>
        </motion.article>
      </div>
    </div>
  )
}

function WindowCard({ item }: { item: MethodCard }) {
  return (
    <div className="flex h-full flex-col">
      <div
        className="flex items-center justify-between border-b-[4px] border-black px-5 py-4 sm:px-6"
        style={{ backgroundColor: item.accent }}
      >
        <div className="flex items-center gap-2">
          <span className="h-3.5 w-3.5 rounded-full border-[2px] border-black bg-white" />
          <span className="h-3.5 w-3.5 rounded-full border-[2px] border-black bg-[#FFF4D6]" />
          <span className="h-3.5 w-3.5 rounded-full border-[2px] border-black bg-[#D9FFF4]" />
        </div>

        <span className="text-[11px] font-black uppercase tracking-[0.16em] text-black">
          {item.id}
        </span>
      </div>

      <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col p-6 sm:p-7 xl:p-8">
          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-black/55">
            Stay Playful
          </p>

          <h3 className="mt-5 font-sans text-[2rem] font-black uppercase leading-[0.9] tracking-[-0.07em] text-[#14532D] sm:text-[2.2rem] xl:text-[2.7rem]">
            {item.title}
          </h3>

          <p className="mt-3 text-sm font-black uppercase tracking-[0.16em] text-black/50">
            {item.subtitle}
          </p>

          <p className="mt-6 max-w-[58ch] text-base leading-8 text-black/78 xl:text-[1.04rem]">
            {item.description}
          </p>

          <div className="mt-8 flex items-center justify-between border-t-[3px] border-black pt-4">
            <span className="text-xs font-black uppercase tracking-[0.16em] text-black/65">
              Stay Playful
            </span>

            <span
              className="inline-flex h-4 w-4 rounded-full border-[3px] border-black"
              style={{ backgroundColor: item.accent }}
            />
          </div>
        </div>

        <div className="border-t-[4px] border-black bg-[#F9F5EC] lg:border-l-[4px] lg:border-t-0">
          <div className="flex h-full min-h-[280px] flex-col justify-between p-6 sm:p-7 xl:p-8">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-black/45">
                Layer {item.id}
              </p>

              <div
                className="mt-5 h-[170px] w-full rounded-[24px] border-[4px] border-black"
                style={{ backgroundColor: item.accent }}
              >
                <div className="flex h-full items-center justify-center p-6 text-center">
                  <div className="font-sans text-[2rem] font-black uppercase leading-[0.86] tracking-[-0.06em] text-[#14532D] xl:text-[2.5rem]">
                    <div>Stay</div>
                    <div>Playful</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-[18px] border-[3px] border-black bg-white px-4 py-3">
                <p className="text-[10px] font-black uppercase tracking-[0.14em] text-black/45">
                  Focus
                </p>
                <p className="mt-1 text-sm font-black uppercase tracking-[-0.03em] text-black">
                  Personal
                </p>
              </div>

              <div className="rounded-[18px] border-[3px] border-black bg-white px-4 py-3">
                <p className="text-[10px] font-black uppercase tracking-[0.14em] text-black/45">
                  Style
                </p>
                <p className="mt-1 text-sm font-black uppercase tracking-[-0.03em] text-black">
                  Gentle
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}