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

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 16])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-visible bg-[#FFFFED]"
      aria-label="Stay Playful hero"
    >
      <div className="relative overflow-visible border-b-[3px] border-[#2B1A16] bg-[#FFFFED]">
        {/* subtle frame */}
        <div className="pointer-events-none absolute inset-x-4 top-6 bottom-6 border border-black/8 sm:inset-x-6 lg:inset-x-8 lg:top-8 lg:bottom-8" />

        <motion.div
          style={{ y: heroY }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10 mx-auto max-w-[1600px] px-4 pb-20 pt-12 sm:px-6 sm:pb-24 sm:pt-16 lg:px-8 lg:pb-28 lg:pt-20 xl:pb-32"
        >
          {/* MOBILE / TABLET */}
          <div className="lg:hidden">
            <div className="mx-auto flex max-w-[760px] flex-col items-center">
              {/* top lockup */}
              <div className="relative flex w-full items-end justify-center">
                <div className="relative z-20 mr-[-8px] w-[110px] shrink-0 sm:w-[135px]">
                  <Image
                    src="/logo2.png"
                    alt="Stay Playful symbol"
                    width={900}
                    height={900}
                    priority
                    className="h-auto w-full"
                  />
                </div>

                <div className="relative z-10 text-left">
                  <div className="hero-wordmark-mobile text-[#111111]">
                    <span className="block">Tay</span>
                    <span className="block">PLAYFUL</span>
                  </div>
                </div>
              </div>

              {/* image */}
              <div className="relative z-20 mt-6 w-[78vw] max-w-[380px] translate-y-4 sm:translate-y-6">
                <div className="relative aspect-[4/5] overflow-hidden bg-white shadow-[0_18px_38px_rgba(0,0,0,0.12)]">
                  <Image
                    src="/1pro.jpg"
                    alt="Editorial portrait for Stay Playful"
                    fill
                    priority
                    sizes="(max-width: 768px) 78vw, 380px"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* support copy */}
              <div className="mt-10 max-w-[340px] text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FF2B6A]">
                  Stay Playful
                </p>
                <p className="mt-3 text-base leading-7 text-black/72 sm:text-lg">
                  A softer, more personal approach to wellbeing — centered on
                  balance, curiosity, and a sustainable relationship with food,
                  movement, and yourself.
                </p>
              </div>
            </div>
          </div>

          {/* DESKTOP */}
          <div className="hidden lg:block">
            <div className="relative mx-auto min-h-[720px] max-w-[1500px] xl:min-h-[760px]">
              {/* left lockup */}
              <div className="absolute left-[2%] top-[30%] z-20 flex items-end">
                <div className="relative z-20 mr-[-20px] w-[190px] xl:w-[230px]">
                  <Image
                    src="/logo2.png"
                    alt="Stay Playful symbol"
                    width={1200}
                    height={1200}
                    priority
                    className="h-auto w-full"
                  />
                </div>

                <div className="relative z-10">
                  <div className="hero-wordmark-desktop text-[#111111]">
                    <span className="block">Tay</span>
                    <span className="block">PLAYFUL</span>
                  </div>
                </div>
              </div>

              {/* center-right portrait */}
              <div className="absolute left-[46%] top-[12%] z-30 w-[32vw] max-w-[450px] min-w-[320px] translate-y-[34px] xl:left-[47%] xl:max-w-[500px] xl:translate-y-[44px]">
                <div className="relative aspect-[4/5] overflow-hidden bg-white shadow-[0_24px_50px_rgba(0,0,0,0.14)]">
                  <Image
                    src="/1pro.jpg"
                    alt="Editorial portrait for Stay Playful"
                    fill
                    priority
                    sizes="(max-width: 1279px) 32vw, 500px"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* small editorial copy */}
              <div className="absolute bottom-[10%] right-[3%] z-20 max-w-[330px] xl:right-[4%]">
                <p className="text-[15px] leading-[1.45] text-black/72">
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
          letter-spacing: -0.06em;
          font-size: clamp(6rem, 8.4vw, 10rem);
          text-transform: none;
          color: #111111;
        }

        .hero-wordmark-mobile {
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 500;
          line-height: 0.84;
          letter-spacing: -0.06em;
          font-size: clamp(3.8rem, 13vw, 5.8rem);
          text-transform: none;
          color: #111111;
        }

        .hero-wordmark-desktop span:last-child,
        .hero-wordmark-mobile span:last-child {
          letter-spacing: -0.05em;
        }
      `}</style>
    </section>
  )
}