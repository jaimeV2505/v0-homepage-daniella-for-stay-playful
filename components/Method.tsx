"use client"

import { motion, MotionValue, useScroll, useTransform } from "framer-motion"
import { useMemo, useRef } from "react"

type MethodCard = {
  id: string
  title: string
  subtitle: string
  description: string
  accent: string
  rotation: string
  tag: string
}

const windows: MethodCard[] = [
  {
    id: "01",
    title: "About Me",
    subtitle: "The person behind Stay Playful",
    description:
      "I’m Daniella, and Stay Playful was created to offer a softer, more human approach to wellbeing — one rooted in balance, self-trust, and a healthier relationship with food, body, and everyday life.",
    accent: "#FFABFF",
    rotation: "-rotate-[1.2deg]",
    tag: "Soft support",
  },
  {
    id: "02",
    title: "The Goal",
    subtitle: "What this work is here to support",
    description:
      "The goal is not perfection, pressure, or constant self-monitoring. It’s helping you build something that feels sustainable, personal, and joyful — support that fits your real life.",
    accent: "#00E2FF",
    rotation: "rotate-[1deg]",
    tag: "Real life fit",
  },
  {
    id: "03",
    title: "The Strategy",
    subtitle: "How we approach change",
    description:
      "We use curiosity, reflection, and thoughtful guidance to create lasting shifts. No rigid rules, no extremes — just a grounded process that helps you move forward with more ease and clarity.",
    accent: "#FFBD17",
    rotation: "-rotate-[0.9deg]",
    tag: "Gentle structure",
  },
]

export function Method() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -120])
  const bgOpacity = useTransform(scrollYProgress, [0, 0.25, 1], [0.08, 0.14, 0.2])
  const headingY = useTransform(scrollYProgress, [0, 1], [0, -26])

  const repeatedRows = useMemo(() => Array.from({ length: 7 }, (_, i) => i), [])

  return (
    <section
      ref={sectionRef}
      id="method"
      aria-labelledby="method-title"
      className="relative overflow-hidden bg-[#F5F0E6] py-20 sm:py-24 lg:py-28 xl:py-32"
    >
      {/* background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#FFF8EF_0%,#F5F0E6_48%,#ECE3D4_100%)]" />
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.06)_49.5%,transparent_50%,transparent_100%)]" />
        <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.08)_100%)]" />
      </div>

      {/* repeated editorial text */}
      <motion.div
        style={{ y: bgY, opacity: bgOpacity }}
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute inset-0 px-4 py-8 font-sans text-[3rem] font-black uppercase leading-[0.8] tracking-[-0.09em] text-[#DDD3C2] sm:text-[4.5rem] lg:text-[7.4rem] xl:text-[9rem] 2xl:text-[10.5rem]">
          <div className="space-y-2 sm:space-y-3 lg:space-y-4">
            {repeatedRows.map((row) => (
              <div key={row} className="whitespace-nowrap">
                STAY PLAYFUL STAY PLAYFUL STAY PLAYFUL STAY PLAYFUL STAY PLAYFUL
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* subtle frame lines */}
      <div className="pointer-events-none absolute inset-y-0 left-[4%] hidden w-px bg-black/5 xl:block" />
      <div className="pointer-events-none absolute inset-y-0 right-[4%] hidden w-px bg-black/5 xl:block" />

      <div className="relative mx-auto max-w-[1640px] px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <motion.div
          style={{ y: headingY }}
          className="relative z-10 mx-auto max-w-5xl text-center"
        >
          <p className="text-sm font-black uppercase tracking-[0.24em] text-black/60">
            Stay Playful
          </p>

          <h2
            id="method-title"
            className="mt-4 font-sans text-[2.8rem] font-black uppercase leading-[0.86] tracking-[-0.09em] text-black sm:text-[4.1rem] lg:text-[5.8rem] xl:text-[6.5rem]"
          >
            THREE LAYERS
            <br />
            OF THE WORK
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-black/70 sm:text-lg">
            The heart of Stay Playful comes down to three simple things — who I am,
            what this work is meant to support, and the way we create change with
            more curiosity, more care, and far less pressure.
          </p>
        </motion.div>

        {/* mobile */}
        <div className="relative z-10 mt-12 grid gap-6 lg:hidden">
          {windows.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="overflow-hidden rounded-[28px] border-[4px] border-black bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)]"
            >
              <WindowCard item={item} mobile />
            </motion.article>
          ))}
        </div>

        {/* desktop scroll-story layout */}
        <div className="relative z-10 mt-16 hidden lg:block xl:mt-20">
          <div className="mx-auto max-w-[1100px]">
            {windows.map((item, index) => (
              <ScrollLayerCard
                key={item.id}
                item={item}
                index={index}
                total={windows.length}
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

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start 88%", "end 22%"],
  })

  const y = useTransform(scrollYProgress, [0, 0.35, 1], [120, 35, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.25, 1], [0.35, 0.75, 1])
  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [index % 2 === 0 ? -2 : 2, 0]
  )

  const topMap = ["top-[120px]", "top-[150px]", "top-[180px]"]
  const zMap = ["z-[30]", "z-[20]", "z-[10]"]

  return (
    <div
      ref={wrapperRef}
      className={`relative ${index !== total - 1 ? "h-[108vh]" : "h-[92vh]"}`}
    >
      <motion.article
        style={{ y, scale, opacity, rotate }}
        className={`sticky ${topMap[index] ?? "top-[130px]"} ${zMap[index] ?? "z-[10]"}`}
      >
        <div
          className={`relative overflow-hidden rounded-[34px] border-[4px] border-black bg-white shadow-[14px_14px_0_0_rgba(0,0,0,1)] ${item.rotation}`}
        >
          <WindowCard item={item} />
        </div>
      </motion.article>
    </div>
  )
}

function WindowCard({
  item,
  mobile = false,
}: {
  item: MethodCard
  mobile?: boolean
}) {
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

      <div className={`flex flex-1 flex-col ${mobile ? "p-6 sm:p-7" : "p-7 xl:p-8"}`}>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-black/55">
            Stay Playful
          </p>

          <div className="rounded-full border-[3px] border-black bg-[#F8F3EA] px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-black/70 sm:text-xs">
            {item.tag}
          </div>
        </div>

        <div
          className={`mt-6 grid gap-8 ${mobile ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-[1.1fr_0.7fr]"
            }`}
        >
          <div>
            <h3
              className={`font-sans font-black uppercase leading-[0.9] tracking-[-0.07em] text-black ${mobile
                  ? "text-[2rem] sm:text-[2.2rem]"
                  : "text-[2.4rem] xl:text-[3rem]"
                }`}
            >
              {item.title}
            </h3>

            <p className="mt-3 text-sm font-black uppercase tracking-[0.16em] text-black/50">
              {item.subtitle}
            </p>

            <p
              className={`mt-6 max-w-[42rem] text-black/78 ${mobile ? "text-base leading-8" : "text-[1.04rem] leading-8 xl:text-[1.08rem]"
                }`}
            >
              {item.description}
            </p>
          </div>

          <div className="flex flex-col justify-between gap-6">
            <div className="rounded-[24px] border-[3px] border-black bg-[#F9F4EA] p-5">
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-black/50">
                Layer {item.id}
              </p>
              <p className="mt-4 text-sm leading-7 text-black/72">
                A more grounded and playful way to create change — designed to feel
                supportive, clear, and realistic.
              </p>
            </div>

            <div className="rounded-[24px] border-[3px] border-black bg-white p-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-[0.16em] text-black/65">
                  Stay Playful
                </span>

                <span
                  className="inline-flex h-4 w-4 rounded-full border-[3px] border-black"
                  style={{ backgroundColor: item.accent }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t-[3px] border-black pt-4">
          <div className="flex items-center justify-between gap-4">
            <span className="text-xs font-black uppercase tracking-[0.16em] text-black/65">
              Editorial scrolling card
            </span>

            <span className="text-xs font-black uppercase tracking-[0.16em] text-black/45">
              {item.id} / 03
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}