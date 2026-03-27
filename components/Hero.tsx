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
        {/* outer frame */}
        <div className="pointer-events-none absolute inset-x-4 top-6 bottom-6 border border-black/10 sm:inset-x-6 lg:inset-x-8 lg:top-8 lg:bottom-8" />

        <motion.div
          style={{ y: heroY }}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="relative z-10 mx-auto max-w-[1600px] px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-20"
        >
          {/* MOBILE */}
          <div className="lg:hidden">
            <div className="mx-auto flex max-w-[760px] flex-col items-center">
              <div className="relative w-full max-w-[430px]">
                {/* image first on mobile */}
                <div className="relative mx-auto w-[78vw] max-w-[340px] translate-y-4 sm:translate-y-6">
                  <div className="relative aspect-[4/5] overflow-hidden bg-white">
                    <Image
                      src="/1pro.jpg"
                      alt="Editorial portrait for Stay Playful"
                      fill
                      priority
                      sizes="(max-width: 768px) 78vw, 340px"
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                {/* lockup */}
                <div className="relative z-20 mx-auto mt-[-34px] flex items-end justify-center">
                  <div className="relative z-30 mr-[-10px] w-[105px] shrink-0 sm:w-[125px]">
                    <Image
                      src="/logo2.png"
                      alt="Stay Playful symbol"
                      width={900}
                      height={900}
                      priority
                      className="h-auto w-full"
                    />
                  </div>

                  <div className="relative z-20 text-left">
                    <div className="hero-wordmark-mobile text-[#111111]">
                      <span className="block">Tay</span>
                      <span className="block">PLAYFUL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DESKTOP */}
          <div className="hidden lg:block">
            <div className="relative mx-auto min-h-[760px] max-w-[1500px] xl:min-h-[820px]">
              {/* left lockup */}
              <div className="absolute left-[5%] top-[44%] z-20 flex items-end xl:left-[6%]">
                <div className="relative z-30 mr-[-18px] w-[180px] xl:w-[210px]">
                  <Image
                    src="/logo2.png"
                    alt="Stay Playful symbol"
                    width={1200}
                    height={1200}
                    priority
                    className="h-auto w-full"
                  />
                </div>

                <div className="relative z-20">
                  <div className="hero-wordmark-desktop text-[#111111]">
                    <span className="block">Tay</span>
                    <span className="block">PLAYFUL</span>
                  </div>
                </div>
              </div>

              {/* portrait */}
              <div className="absolute left-[46%] top-[12%] z-30 w-[31vw] max-w-[500px] min-w-[330px] translate-y-[86px] xl:left-[47%] xl:max-w-[540px] xl:translate-y-[104px]">
                <div className="relative aspect-[4/5] overflow-hidden bg-white">
                  <Image
                    src="/1pro.jpg"
                    alt="Editorial portrait for Stay Playful"
                    fill
                    priority
                    sizes="(max-width: 1279px) 31vw, 540px"
                    className="object-cover object-center"
                  />
                </div>
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
          letter-spacing: -0.055em;
          font-size: clamp(6.4rem, 8.6vw, 10.2rem);
          text-transform: none;
          color: #111111;
        }

        .hero-wordmark-mobile {
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 500;
          line-height: 0.84;
          letter-spacing: -0.055em;
          font-size: clamp(3.8rem, 12vw, 5.4rem);
          text-transform: none;
          color: #111111;
        }

        .hero-wordmark-desktop span:last-child,
        .hero-wordmark-mobile span:last-child {
          letter-spacing: -0.045em;
        }
      `}</style>
    </section>
  )
}