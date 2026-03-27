"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 18])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-visible bg-[#FFFFED]"
      aria-label="Stay Playful hero"
    >
      <div className="relative overflow-visible border-b-[3px] border-[#2B1A16] bg-[#FFFFED]">
        {/* soft frame */}
        <div className="pointer-events-none absolute inset-x-4 top-6 bottom-6 border border-black/8 sm:inset-x-6 lg:inset-x-8 lg:top-8 lg:bottom-8" />

        <motion.div
          style={{ y: heroY }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10 mx-auto max-w-[1600px] px-4 pb-24 pt-12 sm:px-6 sm:pb-28 sm:pt-16 lg:px-8 lg:pb-36 lg:pt-20 xl:pb-40"
        >
          {/* MOBILE / TABLET */}
          <div className="lg:hidden">
            <div className="mx-auto flex max-w-[760px] flex-col items-center">
              {/* top lockup */}
              <div className="relative flex w-full items-end justify-center">
                <div className="relative z-20 mr-[-10px] w-[112px] shrink-0 sm:w-[138px]">
                  <Image
                    src="/logo2.png"
                    alt="Stay Playful symbol"
                    width={900}
                    height={900}
                    priority
                    className="h-auto w-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.10)]"
                  />
                </div>

                <div className="relative z-10 text-left">
                  <div className="hero-wordmark-mobile text-[#111111]">
                    <span className="block">Tay</span>
                    <span className="block">PLAYFUL</span>
                  </div>
                </div>
              </div>

              {/* image lowered more */}
              <div className="relative z-20 mt-6 w-[78vw] max-w-[390px] translate-y-10 sm:translate-y-14">
                <div className="relative aspect-[4/5] overflow-hidden bg-white shadow-[0_22px_44px_rgba(0,0,0,0.14)]">
                  <Image
                    src="/1pro.jpg"
                    alt="Editorial portrait for Stay Playful"
                    fill
                    priority
                    sizes="(max-width: 768px) 78vw, 390px"
                    className="object-cover object-center"
                  />
                </div>
                {/* subtle caption line */}
                <div className="mt-3 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.18em] text-black/50">
                  <span>Stay Playful</span>
                  <span>Soft wellbeing</span>
                </div>
              </div>

              {/* support copy */}
              <div className="mt-16 max-w-[360px] text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FF2B6A]">
                  A softer way to feel well
                </p>
                <p className="mt-3 text-base leading-7 text-black/72 sm:text-lg">
                  A more personal approach to wellbeing — centered on balance,
                  curiosity, and a sustainable relationship with food, movement,
                  and yourself.
                </p>
              </div>
            </div>
          </div>

          {/* DESKTOP */}
          <div className="hidden lg:block">
            <div className="relative mx-auto min-h-[760px] max-w-[1500px] xl:min-h-[820px]">
              {/* left editorial phrase */}
              <div className="absolute left-[1%] top-[12%] z-10">
                <div className="hero-side-title text-[#FF2B6A]">
                  <span className="block">FEEL</span>
                  <span className="block">WELL</span>
                </div>
              </div>

              {/* lockup */}
              <div className="absolute left-[6%] top-[34%] z-20 flex items-end xl:left-[7%] xl:top-[35%]">
                <div className="relative z-20 mr-[-20px] w-[190px] xl:w-[230px]">
                  <Image
                    src="/logo2.png"
                    alt="Stay Playful symbol"
                    width={1200}
                    height={1200}
                    priority
                    className="h-auto w-full drop-shadow-[0_12px_24px_rgba(0,0,0,0.10)]"
                  />
                </div>

                <div className="relative z-10">
                  <div className="hero-wordmark-desktop text-[#111111]">
                    <span className="block">Tay</span>
                    <span className="block">PLAYFUL</span>
                  </div>
                </div>
              </div>

              {/* portrait lowered more */}
              <div className="absolute left-[44%] top-[14%] z-30 w-[32vw] max-w-[470px] min-w-[330px] translate-y-[92px] xl:left-[45%] xl:max-w-[520px] xl:translate-y-[112px]">
                <div className="relative aspect-[4/5] overflow-hidden bg-white shadow-[0_26px_56px_rgba(0,0,0,0.16)]">
                  <Image
                    src="/1pro.jpg"
                    alt="Editorial portrait for Stay Playful"
                    fill
                    priority
                    sizes="(max-width: 1279px) 32vw, 520px"
                    className="object-cover object-center"
                  />
                </div>

                {/* small image meta */}
                <div className="mt-3 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.18em] text-black/48">
                  <span>Stay Playful</span>
                  <span>Stockholm, Sweden</span>
                </div>
              </div>

              {/* refined support copy */}
              <div className="absolute bottom-[8%] right-[3%] z-20 max-w-[340px] xl:right-[4%]">
                <p className="text-[14px] font-semibold uppercase tracking-[0.18em] text-[#FF2B6A]">
                  Soft editorial wellbeing
                </p>
                <p className="mt-3 text-[15px] leading-[1.5] text-black/72">
                  A softer, more personal approach to wellbeing — centered on
                  balance, curiosity, and a sustainable relationship with food,
                  movement, and yourself.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .hero-wordmark-desktop {
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 500;
          line-height: 0.82;
          letter-spacing: -0.065em;
          font-size: clamp(6rem, 8.4vw, 10rem);
          text-transform: none;
          color: #111111;
        }

        .hero-wordmark-mobile {
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 500;
          line-height: 0.84;
          letter-spacing: -0.065em;
          font-size: clamp(3.8rem, 13vw, 5.9rem);
          text-transform: none;
          color: #111111;
        }

        .hero-wordmark-desktop span:last-child,
        .hero-wordmark-mobile span:last-child {
          letter-spacing: -0.055em;
        }

        .hero-side-title {
          font-family: Arial, Helvetica, sans-serif;
          font-weight: 900;
          text-transform: uppercase;
          line-height: 0.82;
          letter-spacing: -0.08em;
          font-size: clamp(4rem, 6vw, 7rem);
          color: #ff2b6a;
        }
      `}</style>
    </section>
  )
}