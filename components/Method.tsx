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
    rotation: "-rotate-[1.5deg]",
  },
  {
    id: "02",
    title: "The Goal",
    subtitle: "What this work is here to support",
    description:
      "The goal is not perfection, pressure, or constant self-monitoring. It’s helping you build something that feels sustainable, personal, and joyful — support that fits your real life.",
    accent: "#00E2FF",
    rotation: "rotate-[1.2deg]",
  },
  {
    id: "03",
    title: "The Strategy",
    subtitle: "How we approach change",
    description:
      "We use curiosity, reflection, and thoughtful guidance to create lasting shifts. No rigid rules, no extremes — just a grounded process that helps you move forward with more ease and clarity.",
    accent: "#FFBD17",
    rotation: "-rotate-[1deg]",
  },
]

export function Method() {
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -90])
  const bgOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [0.18, 0.24, 0.3])
  const headingY = useTransform(scrollYProgress, [0, 1], [0, -28])
  const headingRotate = useTransform(scrollYProgress, [0, 1], [0, -0.6])

  const blob1Y = useTransform(scrollYProgress, [0, 1], [0, -30])
  const blob2Y = useTransform(scrollYProgress, [0, 1], [0, 22])
  const blob3Y = useTransform(scrollYProgress, [0, 1], [0, -18])

  return (
    <section
      ref={ref}
      id="method"
      aria-labelledby="method-title"
      className="relative overflow-hidden bg-[#F5F0E6] py-20 sm:py-24 lg:py-28 xl:py-32"
    >
      {/* layered background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#FFF8EF_0%,#F5F0E6_45%,#EEE6D8_100%)]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.06)_49.5%,transparent_50%,transparent_100%)]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.06)_100%)]" />
      </div>

      {/* repeated type */}
      <motion.div
        style={{ y: bgY, opacity: bgOpacity }}
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute inset-0 px-4 py-10 font-sans text-[3.3rem] font-black uppercase leading-[0.8] tracking-[-0.09em] text-[#E8E0CF] sm:text-[5rem] lg:text-[8rem] xl:text-[10rem] 2xl:text-[11rem]">
          <RepeatedStayPlayful />
        </div>
      </motion.div>

      {/* decorative blobs */}
      <motion.div
        style={{ y: blob1Y }}
        className="pointer-events-none absolute left-[3%] top-[9%] hidden lg:block"
      >
        <BlobText
          className="h-[260px] w-[370px] xl:h-[320px] xl:w-[470px]"
          bg="#FFABFF"
          textColor="#14532D"
          variant="large"
        />
      </motion.div>

      <motion.div
        style={{ y: blob2Y }}
        className="pointer-events-none absolute right-[8%] top-[12%] hidden lg:block"
      >
        <BlobText
          className="h-[180px] w-[220px] xl:h-[220px] xl:w-[270px]"
          bg="#FFABFF"
          textColor="#14532D"
          variant="small"
        />
      </motion.div>

      <motion.div
        style={{ y: blob3Y }}
        className="pointer-events-none absolute bottom-[10%] right-[16%] hidden xl:block"
      >
        <BlobSolid className="h-[90px] w-[110px]" bg="#FF65FF" />
      </motion.div>

      <div className="relative mx-auto max-w-[1680px] px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <motion.div
          style={{ y: headingY, rotate: headingRotate }}
          className="relative z-10 mx-auto max-w-5xl text-center"
        >
          <p className="text-sm font-black uppercase tracking-[0.24em] text-black/65">
            Stay Playful
          </p>

          <h2
            id="method-title"
            className="mt-4 font-sans text-[2.9rem] font-black uppercase leading-[0.86] tracking-[-0.09em] text-black sm:text-[4.3rem] lg:text-[5.9rem] xl:text-[6.7rem]"
          >
            THREE LAYERS
            <br />
            OF THE WORK
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-black/70 sm:text-lg">
            The heart of Stay Playful comes down to three simple things — who I
            am, what this work is meant to support, and the way we create change
            with more curiosity, more care, and far less pressure.
          </p>
        </motion.div>

        {/* mobile */}
        <div className="relative z-10 mt-12 grid gap-6 lg:hidden">
          {windows.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="overflow-hidden rounded-[28px] border-[4px] border-black bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)]"
            >
              <WindowCard item={item} />
            </motion.article>
          ))}
        </div>

        {/* desktop */}
        <div className="relative z-10 mt-16 hidden lg:block xl:mt-20">
          <div className="grid grid-cols-3 items-start gap-6 xl:gap-8">
            {windows.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 56, rotate: index === 1 ? 1.5 : -1.5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className={`group relative overflow-hidden rounded-[30px] border-[4px] border-black bg-white shadow-[10px_10px_0_0_rgba(0,0,0,1)] transition-transform duration-300 hover:-translate-y-1 ${item.rotation}`}
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
      {/* top window bar */}
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

      <div className="flex flex-1 flex-col p-6 xl:p-7">
        <p className="text-[11px] font-black uppercase tracking-[0.16em] text-black/55">
          Stay Playful
        </p>

        <h3 className="mt-5 font-sans text-[2rem] font-black uppercase leading-[0.9] tracking-[-0.07em] text-black xl:text-[2.35rem]">
          {item.title}
        </h3>

        <p className="mt-3 text-sm font-black uppercase tracking-[0.16em] text-black/50">
          {item.subtitle}
        </p>

        <p className="mt-6 text-base leading-8 text-black/78 xl:text-[1.04rem]">
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
  variant,
}: {
  className?: string
  bg: string
  textColor: string
  variant: "large" | "small"
}) {
  const clipPath =
    variant === "large"
      ? "polygon(12% 2%,35% 0%,52% 10%,76% 4%,96% 18%,100% 40%,92% 60%,100% 80%,84% 96%,58% 92%,36% 100%,16% 88%,0% 70%,4% 46%,0% 20%)"
      : "polygon(28% 0%,52% 8%,72% 0%,88% 14%,100% 36%,90% 58%,100% 80%,80% 100%,56% 92%,34% 100%,16% 84%,0% 64%,8% 40%,0% 18%,16% 6%)"

  return (
    <div
      className={`relative overflow-hidden flex items-center justify-center ${className ?? ""}`}
      style={{
        backgroundColor: bg,
        clipPath,
      }}
    >
      {/* CONTENT WRAPPER centrado REAL */}
      <div
        className={`text-center font-sans font-black uppercase leading-[0.85] tracking-[-0.06em] ${variant === "large"
            ? "max-w-[70%] text-[3.2rem] xl:text-[4.2rem]"
            : "max-w-[65%] text-[1.8rem] xl:text-[2.4rem]"
          }`}
        style={{ color: textColor }}
      >
        <div>stay</div>
        <div>playful</div>
        <div>stay</div>
        <div>playful</div>
      </div>
    </div>
  )
}

function BlobSolid({
  className,
  bg,
}: {
  className?: string
  bg: string
}) {
  return (
    <div
      className={className}
      style={{
        backgroundColor: bg,
        clipPath:
          "polygon(28% 0%,56% 8%,80% 0%,96% 18%,100% 46%,88% 70%,100% 88%,74% 100%,44% 92%,18% 100%,0% 78%,8% 48%,0% 18%)",
      }}
    />
  )
}