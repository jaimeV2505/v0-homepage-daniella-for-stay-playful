"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const windows = [
  {
    id: "01",
    title: "About Me",
    subtitle: "The person behind Stay Playful",
    description:
      "I’m Daniella, and Stay Playful was created to offer a softer, more human approach to wellbeing — one rooted in balance, self-trust, and a healthier relationship with food, body, and everyday life.",
    accent: "#FFABFF",
    rotation: "-rotate-2",
  },
  {
    id: "02",
    title: "The Goal",
    subtitle: "What this work is here to support",
    description:
      "The goal is not perfection, pressure, or constant self-monitoring. It’s helping you build something that feels sustainable, personal, and joyful — support that fits your real life.",
    accent: "#00E2FF",
    rotation: "rotate-2",
  },
  {
    id: "03",
    title: "The Strategy",
    subtitle: "How we approach change",
    description:
      "We use curiosity, reflection, and thoughtful guidance to create lasting shifts. No rigid rules, no extremes — just a grounded process that helps you move forward with more ease and clarity.",
    accent: "#FFBD17",
    rotation: "-rotate-1",
  },
]

export function Method() {
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const textY = useTransform(scrollYProgress, [0, 1], [0, -40])
  const blob1Y = useTransform(scrollYProgress, [0, 1], [0, -24])
  const blob2Y = useTransform(scrollYProgress, [0, 1], [0, 30])

  return (
    <section
      ref={ref}
      id="method"
      className="relative overflow-hidden bg-[#F5F0E6] py-20 sm:py-24 lg:py-28"
      aria-labelledby="method-title"
    >
      {/* BACKGROUND TYPOGRAPHY */}
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-[0.22]">
          <div className="select-none px-4 py-8 font-sans text-[3.3rem] font-black uppercase leading-[0.82] tracking-[-0.08em] text-[#EFE8DA] sm:text-[5rem] lg:text-[8rem] xl:text-[10rem]">
            <RepeatedStayPlayful />
          </div>
        </div>
      </motion.div>

      {/* DECORATIVE BLOBS */}
      <motion.div
        style={{ y: blob1Y }}
        className="pointer-events-none absolute left-[4%] top-[10%] hidden lg:block"
      >
        <BlobText
          className="h-[260px] w-[360px] xl:h-[320px] xl:w-[460px]"
          bg="#FFABFF"
          textColor="#1E4D1A"
        />
      </motion.div>

      <motion.div
        style={{ y: blob2Y }}
        className="pointer-events-none absolute right-[7%] top-[18%] hidden lg:block"
      >
        <BlobText
          className="h-[190px] w-[210px] xl:h-[230px] xl:w-[260px]"
          bg="#FFABFF"
          textColor="#1E4D1A"
          small
        />
      </motion.div>

      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          style={{ y: textY }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <p className="text-sm font-black uppercase tracking-[0.24em] text-black/70">
            Stay Playful
          </p>

          <h2
            id="method-title"
            className="mt-4 font-sans text-[2.8rem] font-black uppercase leading-[0.88] tracking-[-0.08em] text-black sm:text-[4.2rem] lg:text-[5.6rem] xl:text-[6.4rem]"
          >
            A SOFTER WAY
            <br />
            TO MOVE
            <br />
            FORWARD
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-black/70 sm:text-lg">
            Three simple layers behind the work — who I am, what this is here to
            help with, and the way we approach change with more curiosity, less
            pressure, and a lot more humanity.
          </p>
        </motion.div>

        {/* MOBILE */}
        <div className="relative z-10 mt-12 grid gap-6 lg:hidden">
          {windows.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-[28px] border-[4px] border-black bg-white p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)]"
            >
              <WindowCard item={item} />
            </motion.article>
          ))}
        </div>

        {/* DESKTOP */}
        <div className="relative z-10 mt-16 hidden lg:block">
          <div className="grid grid-cols-3 gap-6 xl:gap-8">
            {windows.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 50, rotate: index === 1 ? 1 : -1 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className={`relative rounded-[30px] border-[4px] border-black bg-white p-7 shadow-[10px_10px_0_0_rgba(0,0,0,1)] xl:p-8 ${item.rotation}`}
              >
                <WindowCard item={item} />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function WindowCard({
  item,
}: {
  item: {
    id: string
    title: string
    subtitle: string
    description: string
    accent: string
  }
}) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-start justify-between gap-4">
        <span
          className="inline-flex min-w-[54px] justify-center border-[3px] border-black px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
          style={{ backgroundColor: item.accent }}
        >
          {item.id}
        </span>

        <div
          className="h-5 w-5 shrink-0 rounded-full border-[3px] border-black"
          style={{ backgroundColor: item.accent }}
        />
      </div>

      <h3 className="mt-8 font-sans text-[2rem] font-black uppercase leading-[0.9] tracking-[-0.06em] text-black xl:text-[2.3rem]">
        {item.title}
      </h3>

      <p className="mt-3 text-sm font-black uppercase tracking-[0.16em] text-black/55">
        {item.subtitle}
      </p>

      <p className="mt-6 text-base leading-8 text-black/78 xl:text-[1.04rem]">
        {item.description}
      </p>

      <div className="mt-8 border-t-[3px] border-black pt-4">
        <span className="text-xs font-black uppercase tracking-[0.18em] text-black/70">
          Stay Playful
        </span>
      </div>
    </div>
  )
}

function RepeatedStayPlayful() {
  const rows = Array.from({ length: 6 }, (_, i) => i)

  return (
    <div className="space-y-2 sm:space-y-3 lg:space-y-4">
      {rows.map((row) => (
        <div key={row} className="whitespace-nowrap">
          STAY PLAYFUL STAY PLAYFUL STAY PLAYFUL STAY PLAYFUL STAY PLAYFUL
        </div>
      ))}
    </div>
  )
}

function BlobText({
  className,
  bg,
  textColor,
  small = false,
}: {
  className?: string
  bg: string
  textColor: string
  small?: boolean
}) {
  return (
    <div
      className={`relative overflow-hidden ${className ?? ""}`}
      style={{
        backgroundColor: bg,
        clipPath: small
          ? "polygon(32% 0%, 58% 6%, 74% 0%, 88% 13%, 100% 34%, 88% 57%, 96% 79%, 78% 100%, 54% 92%, 35% 100%, 20% 84%, 0% 70%, 8% 45%, 0% 22%, 18% 8%)"
          : "polygon(18% 0%, 52% 8%, 76% 0%, 100% 18%, 92% 44%, 100% 72%, 82% 100%, 48% 92%, 22% 100%, 0% 78%, 8% 48%, 0% 22%)",
      }}
    >
      <div
        className={`absolute inset-0 select-none font-sans font-black uppercase leading-[0.82] tracking-[-0.07em] ${small
            ? "p-4 text-[2.2rem] sm:text-[2.6rem]"
            : "p-5 text-[3.4rem] xl:p-7 xl:text-[4.4rem]"
          }`}
        style={{ color: textColor }}
      >
        <div>stay playful</div>
        <div>stay playful</div>
        <div>stay playful</div>
        {!small && <div>stay playful</div>}
      </div>
    </div>
  )
}