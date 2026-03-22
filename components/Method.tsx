"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Heart, Sparkles, Compass, Leaf, Users } from "lucide-react"

const principles = [
  {
    icon: Heart,
    title: "Relationship First",
    description:
      "We start with your relationship with food and body, not calories or restrictions. Healing begins with understanding, not control.",
    className: "lg:absolute lg:left-[7%] lg:top-[4%] lg:w-[31rem]",
    badgeSide: "left" as const,
  },
  {
    icon: Sparkles,
    title: "Curiosity Over Control",
    description:
      "Instead of rigid rules, we cultivate curiosity. What makes you feel energized? What brings you joy? Let’s explore together.",
    className: "lg:absolute lg:right-[6%] lg:top-[2%] lg:w-[30rem]",
    badgeSide: "right" as const,
  },
  {
    icon: Leaf,
    title: "Sustainable Change",
    description:
      "Quick fixes don’t last. We focus on gradual, sustainable shifts that can become natural parts of your everyday life.",
    className: "lg:absolute lg:left-[10%] lg:top-[34%] lg:w-[33rem]",
    badgeSide: "left" as const,
  },
  {
    icon: Compass,
    title: "Your Unique Path",
    description:
      "No one-size-fits-all solutions. Your support is shaped around your life, preferences, values, culture, and what genuinely works for you.",
    className: "lg:absolute lg:right-[10%] lg:top-[28%] lg:w-[34rem]",
    badgeSide: "right" as const,
  },
  {
    icon: Users,
    title: "Supported Journey",
    description:
      "You’re never alone in this. Whether through 1:1 work or a guided program, you have thoughtful support every step of the way.",
    className: "lg:absolute lg:left-1/2 lg:top-[58%] lg:w-[34rem] lg:-translate-x-1/2",
    badgeSide: "right" as const,
  },
]

export function Method() {
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Header motion
  const headingY = useTransform(scrollYProgress, [0, 1], [40, -24])
  const headingOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.9],
    [0.55, 1, 1]
  )

  // Background motion
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.14])
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -38])

  // Sticker motion
  const stickerY = useTransform(scrollYProgress, [0, 1], [0, -18])

  // Cards parallax
  const card1Y = useTransform(scrollYProgress, [0, 1], [34, -24])
  const card2Y = useTransform(scrollYProgress, [0, 1], [16, -38])
  const card3Y = useTransform(scrollYProgress, [0, 1], [46, -12])
  const card4Y = useTransform(scrollYProgress, [0, 1], [26, -46])
  const card5Y = useTransform(scrollYProgress, [0, 1], [54, -22])

  const card1R = useTransform(scrollYProgress, [0, 1], [-2, -0.8])
  const card2R = useTransform(scrollYProgress, [0, 1], [1.5, 2.2])
  const card3R = useTransform(scrollYProgress, [0, 1], [1, -0.4])
  const card4R = useTransform(scrollYProgress, [0, 1], [-1, 1])
  const card5R = useTransform(scrollYProgress, [0, 1], [0.6, -0.5])

  const cardTransforms = [
    { y: card1Y, rotate: card1R },
    { y: card2Y, rotate: card2R },
    { y: card3Y, rotate: card3R },
    { y: card4Y, rotate: card4R },
    { y: card5Y, rotate: card5R },
  ]

  return (
    <section
      ref={ref}
      id="method"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{
        background:
          "linear-gradient(180deg, #8B667B 0%, #7A566E 34%, #6D4C64 62%, #5E4259 100%)",
      }}
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <motion.div style={{ scale: bgScale, y: bgY }} className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-rdne-6923359-4Q5goPk3c5AoyUX2Is1D7zQZINzFDw.jpg"
            alt="Editorial background for Stay Playful method section"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-[0.11]"
            priority={false}
          />
        </motion.div>

        {/* soft mauve/lilac atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#A77F96_0%,#866179_36%,#6A4B61_68%,#583E53_100%)] opacity-95" />

        {/* warm wash */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,244,236,0.06)_0%,rgba(255,255,255,0)_30%,rgba(45,24,16,0.12)_100%)]" />

        {/* soft glows */}
        <div className="absolute -left-10 top-10 h-56 w-56 rounded-full bg-[#FF008E]/9 blur-3xl" />
        <div className="absolute right-[6%] top-[12%] h-72 w-72 rounded-full bg-[#FFBD17]/10 blur-3xl" />
        <div className="absolute bottom-[15%] left-[18%] h-64 w-64 rounded-full bg-[#00E2FF]/8 blur-3xl" />
        <div className="absolute bottom-[10%] right-[22%] h-52 w-52 rounded-full bg-[#FFABFF]/10 blur-3xl" />

        {/* subtle vertical light bands */}
        <div className="absolute inset-0 opacity-[0.09] bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.14)_18%,transparent_30%,transparent_100%)]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(90deg,transparent_49%,rgba(255,255,255,0.12)_50%,transparent_51%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          style={{ y: headingY, opacity: headingOpacity }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/80">
            The Method
          </p>

          <h2 className="mt-4 font-sans text-[2.7rem] font-black uppercase leading-[0.9] tracking-[-0.07em] text-white sm:text-[4.4rem] lg:text-[5.9rem] xl:text-[6.5rem]">
            HEALTH THAT
            <br />
            FEELS MORE
            <br />
            HUMAN.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/84 sm:text-lg">
            A warm, thoughtful way of working together — built on support,
            curiosity, and change that lasts, instead of pressure,
            obsession, or rigid rules.
          </p>

          <div className="mt-6 flex justify-center">
            <span className="inline-flex items-center rounded-full border-2 border-white/18 bg-white/8 px-5 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/90 backdrop-blur-sm">
              Soft guidance • real life • sustainable change
            </span>
          </div>
        </motion.div>

        {/* COMPOSITION WRAPPER */}
        <div className="relative mt-12 rounded-[34px] border border-white/10 bg-white/0 px-3 py-6 sm:px-5 sm:py-8 lg:mt-14">
          {/* rotating sticker */}
          <motion.div
            style={{ y: stickerY }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
            className="absolute -right-2 -top-6 z-30 hidden h-28 w-28 items-center justify-center rounded-full border-[3px] border-sp-deep-brown bg-[#F0DD8A] shadow-[8px_8px_0_0_rgba(0,0,0,0.14)] lg:flex"
          >
            <span className="font-serif text-[1.05rem] font-bold italic text-black [writing-mode:vertical-rl] rotate-180 tracking-tight">
              Stay Playful!
            </span>
          </motion.div>

          {/* MOBILE/TABLET */}
          <div className="grid gap-5 lg:hidden">
            {principles.map((principle, index) => {
              const Icon = principle.icon
              return (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                >
                  <MethodCard
                    Icon={Icon}
                    title={principle.title}
                    description={principle.description}
                    badgeSide={principle.badgeSide}
                  />
                </motion.div>
              )
            })}

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center border-[3px] border-sp-deep-brown bg-[#BFD9F2] px-6 py-3 font-sans text-sm font-black uppercase tracking-[0.08em] text-black shadow-[6px_6px_0_0_rgba(0,0,0,0.18)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Work with Daniella
              </a>
            </div>
          </div>

          {/* DESKTOP */}
          <div className="hidden lg:block">
            <div className="relative min-h-[640px]">
              {principles.map((principle, index) => {
                const Icon = principle.icon
                const transformStyle = cardTransforms[index]

                return (
                  <motion.div
                    key={principle.title}
                    className={principle.className}
                    style={{
                      y: transformStyle.y,
                      rotate: transformStyle.rotate,
                    }}
                    initial={{ opacity: 0, y: 30, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.18 }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                  >
                    <MethodCard
                      Icon={Icon}
                      title={principle.title}
                      description={principle.description}
                      badgeSide={principle.badgeSide}
                    />
                  </motion.div>
                )
              })}

              {/* CTA */}
              <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], [18, -8]) }}
                className="absolute bottom-[4%] left-1/2 -translate-x-1/2"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center border-[3px] border-sp-deep-brown bg-[#BFD9F2] px-7 py-3 font-sans text-sm font-black uppercase tracking-[0.08em] text-black shadow-[6px_6px_0_0_rgba(0,0,0,0.18)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Work with Daniella
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MethodCard({
  Icon,
  title,
  description,
  badgeSide,
}: {
  Icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  badgeSide: "left" | "right"
}) {
  return (
    <div className="relative rounded-[2.3rem] border-[3px] border-sp-deep-brown bg-white px-7 py-7 shadow-[10px_10px_0_0_rgba(0,0,0,0.18)]">
      <div
        className={`absolute -top-4 ${
          badgeSide === "left" ? "-left-3" : "-right-3"
        } flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-sp-deep-brown bg-sp-hot-pink shadow-[4px_4px_0_0_rgba(0,0,0,0.14)]`}
      >
        <Icon className="h-5 w-5 text-white" />
      </div>

      <h3 className="pt-2 font-sans text-lg font-black uppercase tracking-[0.08em] text-sp-deep-brown sm:text-xl">
        {title}
      </h3>

      <p className="mt-4 text-base leading-8 text-sp-deep-brown/80 sm:text-lg">
        {description}
      </p>
    </div>
  )
}