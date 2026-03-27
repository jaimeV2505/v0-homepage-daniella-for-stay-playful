"use client"

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion"
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
    tilt: "-rotate-[2deg]",
  },
  {
    id: "02",
    title: "The Goal",
    subtitle: "What this work is here to support",
    description:
      "The goal is not perfection, pressure, or constant self-monitoring. It’s helping you build something that feels sustainable, personal, and joyful — support that fits your real life.",
    accent: "#00E2FF",
    tilt: "rotate-[1.6deg]",
  },
  {
    id: "03",
    title: "The Strategy",
    subtitle: "How we approach change",
    description:
      "We use curiosity, reflection, and thoughtful guidance to create lasting shifts. No rigid rules, no extremes — just a grounded process that helps you move forward with more ease and clarity.",
    accent: "#FFBD17",
    tilt: "-rotate-[1.2deg]",
  },
]

export function Method() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, -180]
  )

  const blobY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, -120]
  )

  const titleY = useTransform(
    scrollYProgress,
    [0, 0.25, 1],
    reduceMotion ? [0, 0, 0] : [0, -30, -80]
  )

  const titleScale = useTransform(
    scrollYProgress,
    [0, 0.25, 1],
    reduceMotion ? [1, 1, 1] : [1, 0.985, 0.95]
  )

  const titleRotate = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, -0.6]
  )

  const introOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3],
    reduceMotion ? [1, 1, 1] : [1, 1, 0.55]
  )

  return (
    <section
      ref={sectionRef}
      id="method"
      aria-labelledby="method-title"
      className="relative overflow-visible bg-[#F5F0E6]"
    >
      <div className="relative min-h-[100svh] overflow-hidden py-20 sm:py-24 lg:min-h-[300svh] lg:py-0">
        {/* background */}
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            style={{ y: bgY }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_top,#FFF8EF_0%,#F5F0E6_42%,#EEE6D8_100%)]"
          />

          <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.05)_49.5%,transparent_50%,transparent_100%)]" />
          <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.06)_100%)]" />

          <motion.div
            style={{ y: blobY }}
            className="absolute left-1/2 top-10 h-[220px] w-[88%] max-w-[1040px] -translate-x-1/2 rounded-[42%_58%_52%_48%/49%_38%_62%_51%] bg-[#E8A8F0]/75 blur-[2px] sm:h-[260px] lg:top-14 lg:h-[340px]"
          />

          <motion.div
            style={{ y: useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 80]) }}
            className="absolute -left-20 bottom-10 hidden h-[260px] w-[260px] rounded-full bg-[#00E2FF]/10 blur-3xl lg:block"
          />

          <motion.div
            style={{ y: useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, -60]) }}
            className="absolute -right-12 top-[28%] hidden h-[280px] w-[280px] rounded-full bg-[#FFBD17]/10 blur-3xl lg:block"
          />
        </div>

        <div className="relative mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-8">
          {/* mobile */}
          <div className="lg:hidden">
            <motion.div
              style={{ y: titleY, scale: titleScale, rotate: titleRotate, opacity: introOpacity }}
              className="mx-auto max-w-5xl text-center"
            >
              <p className="text-sm font-black uppercase tracking-[0.24em] text-black/60">
                Stay Playful
              </p>

              <h2
                id="method-title"
                className="mt-4 font-sans text-[2.9rem] font-black uppercase leading-[0.84] tracking-[-0.09em] text-[#14532D] sm:text-[4rem]"
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

            <div className="mt-12 grid gap-6">
              {cards.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 40, scale: 0.98 }}
                  whileInView={reduceMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="overflow-hidden rounded-[28px] border-[4px] border-black bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)]"
                >
                  <WindowCard item={item} />
                </motion.article>
              ))}
            </div>
          </div>

          {/* desktop */}
          <div className="hidden lg:block">
            <div className="sticky top-0 flex min-h-svh items-center">
              <div className="grid w-full grid-cols-12 items-center gap-8 xl:gap-10">
                {/* left content */}
                <motion.div
                  style={{
                    y: titleY,
                    scale: titleScale,
                    rotate: titleRotate,
                    opacity: introOpacity,
                  }}
                  className="col-span-5 xl:col-span-4"
                >
                  <p className="text-sm font-black uppercase tracking-[0.24em] text-black/60">
                    Stay Playful
                  </p>

                  <h2
                    id="method-title"
                    className="mt-4 font-sans text-[5.2rem] font-black uppercase leading-[0.82] tracking-[-0.1em] text-[#14532D] xl:text-[6.2rem] 2xl:text-[6.8rem]"
                  >
                    STAY
                    <br />
                    PLAYFUL
                    <br />
                    METHOD
                  </h2>

                  <p className="mt-7 max-w-[34rem] text-[1.05rem] leading-8 text-black/70 xl:text-[1.08rem]">
                    The heart of Stay Playful comes down to three simple things — who I
                    am, what this work is meant to support, and the way we create change
                    with more curiosity, more care, and far less pressure.
                  </p>
                </motion.div>

                {/* right stack */}
                <div className="relative col-span-7 xl:col-span-8">
                  <div className="relative h-[78svh] min-h-[720px]">
                    {cards.map((item, index) => (
                      <PinnedParallaxCard
                        key={item.id}
                        item={item}
                        progress={scrollYProgress}
                        index={index}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PinnedParallaxCard({
  item,
  progress,
  index,
}: {
  item: MethodCard
  progress: MotionValue<number>
  index: number
}) {
  const reduceMotion = useReducedMotion()

  const ranges = [
    [0.02, 0.22, 0.34, 0.48],
    [0.28, 0.46, 0.58, 0.74],
    [0.56, 0.72, 0.84, 1],
  ] as const

  const [start, mid1, mid2, end] = ranges[index]

  const y = useTransform(
    progress,
    [start, mid1, mid2, end],
    reduceMotion
      ? [0, 0, 0, 0]
      : index === 0
        ? [180, 80, -18, -120]
        : index === 1
          ? [220, 100, -6, -105]
          : [250, 120, 8, -90]
  )

  const x = useTransform(
    progress,
    [start, mid1, mid2, end],
    reduceMotion
      ? [0, 0, 0, 0]
      : index === 0
        ? [80, 26, 0, -16]
        : index === 1
          ? [45, 10, 0, 10]
          : [90, 22, 0, 18]
  )

  const scale = useTransform(
    progress,
    [start, mid1, mid2, end],
    reduceMotion
      ? [1, 1, 1, 1]
      : index === 0
        ? [0.82, 0.92, 1, 0.97]
        : index === 1
          ? [0.8, 0.92, 1, 0.975]
          : [0.78, 0.9, 1, 0.98]
  )

  const rotate = useTransform(
    progress,
    [start, mid1, mid2, end],
    reduceMotion
      ? [0, 0, 0, 0]
      : index === 0
        ? [-8, -4, -1.2, -3]
        : index === 1
          ? [7, 3.5, 0.6, 2.2]
          : [-6.5, -3, -0.4, -1.8]
  )

  const opacity = useTransform(
    progress,
    [start, mid1, mid2, end],
    reduceMotion ? [1, 1, 1, 1] : [0.2, 0.78, 1, 0.92]
  )

  const blur = useTransform(
    progress,
    [start, mid1, mid2, end],
    reduceMotion ? [0, 0, 0, 0] : [10, 4, 0, 1]
  )

  const shadowY = 12 + index * 2
  const zIndex = 30 + index

  return (
    <motion.article
      style={{
        y,
        x,
        scale,
        rotate,
        opacity,
        filter: blur.to((v) => `blur(${v}px)`),
        zIndex,
      }}
      className={`absolute left-0 top-1/2 w-full max-w-[980px] -translate-y-1/2 ${item.tilt}`}
    >
      <div
        className="overflow-hidden rounded-[32px] border-[4px] border-black bg-white"
        style={{
          boxShadow: `${shadowY}px ${shadowY}px 0 0 rgba(0,0,0,1)`,
        }}
      >
        <WindowCard item={item} />
      </div>
    </motion.article>
  )
}

function WindowCard({ item }: { item: MethodCard }) {
  return (
    <div className="flex h-full flex-col">
      {/* top bar */}
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

      <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
        {/* text side */}
        <div className="flex flex-col p-6 sm:p-7 xl:p-8">
          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-black/55">
            Stay Playful
          </p>

          <h3 className="mt-5 font-sans text-[2rem] font-black uppercase leading-[0.9] tracking-[-0.07em] text-[#14532D] sm:text-[2.2rem] xl:text-[2.8rem]">
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

        {/* visual side */}
        <div className="border-t-[4px] border-black bg-[#F9F5EC] lg:border-l-[4px] lg:border-t-0">
          <div className="flex h-full min-h-[300px] flex-col justify-between p-6 sm:p-7 xl:p-8">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-black/45">
                Layer {item.id}
              </p>

              <div
                className="mt-5 relative h-[180px] w-full overflow-hidden rounded-[24px] border-[4px] border-black xl:h-[210px]"
                style={{ backgroundColor: item.accent }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.45),transparent_35%)]" />
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/25 blur-2xl" />
                <div className="absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-black/5 blur-2xl" />

                <div className="relative flex h-full items-center justify-center p-6 text-center">
                  <div className="font-sans text-[2rem] font-black uppercase leading-[0.86] tracking-[-0.06em] text-[#14532D] xl:text-[2.6rem]">
                    <div>Stay</div>
                    <div>Playful</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <InfoMiniCard label="Focus" value={miniCardValue(item.id, 0)} />
              <InfoMiniCard label="Style" value={miniCardValue(item.id, 1)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function InfoMiniCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[18px] border-[3px] border-black bg-white px-4 py-3">
      <p className="text-[10px] font-black uppercase tracking-[0.14em] text-black/45">
        {label}
      </p>
      <p className="mt-1 text-sm font-black uppercase tracking-[-0.03em] text-black">
        {value}
      </p>
    </div>
  )
}

function miniCardValue(id: string, slot: number) {
  if (id === "01") return slot === 0 ? "Identity" : "Grounded"
  if (id === "02") return slot === 0 ? "Support" : "Joyful"
  return slot === 0 ? "Process" : "Sustainable"
}