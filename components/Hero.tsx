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
        {/* COLOR BLOCKS */}
        <div className="absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-[58%] bg-[#F6B8D1]" />
          <div className="absolute inset-x-0 bottom-0 h-[42%] bg-[#FFFFED]" />
        </div>

        <motion.div
          style={{ y: heroY }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85 }}
          className="relative z-10 mx-auto max-w-[1500px] px-4 pb-16 pt-12 sm:px-6 sm:pb-18 sm:pt-16 lg:px-8 lg:pb-20 lg:pt-20"
        >
          {/* DESKTOP */}
          <div className="relative mx-auto min-h-[760px] max-w-[1400px] xl:min-h-[820px]">

            {/* BACK WORD */}
            <div className="pointer-events-none absolute left-1/2 top-[6%] z-10 -translate-x-1/2">
              <div className="hero-top text-[#FFF3E8]/90">STAY</div>
            </div>

            {/* IMAGE */}
            <div className="absolute left-1/2 top-[12%] z-20 -translate-x-1/2 translate-y-[70px]">
              <div className="relative w-[460px] xl:w-[520px]">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#F05B4F] shadow-[0_24px_50px_rgba(0,0,0,0.12)]">
                  <Image
                    src="/1pro.jpg"
                    alt="Editorial portrait"
                    fill
                    priority
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* FRONT WORD */}
            <div className="pointer-events-none absolute left-1/2 top-[54%] z-30 -translate-x-1/2">
              <div className="hero-front text-[#D8A51C]">PLAYFUL</div>
            </div>

            {/* STATEMENT */}
            <div className="absolute bottom-[6%] left-1/2 z-30 max-w-[680px] -translate-x-1/2 text-center">
              <p className="text-[1.8rem] leading-[1.2] tracking-[-0.03em] text-black/75 xl:text-[2rem]">
                A softer, more personal approach to wellbeing.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .hero-top {
          font-family: Georgia, serif;
          font-weight: 600;
          font-size: clamp(9rem, 14vw, 15rem);
          letter-spacing: -0.05em;
          text-transform: uppercase;
        }

        .hero-front {
          font-family: Georgia, serif;
          font-weight: 600;
          font-size: clamp(8rem, 13vw, 13rem);
          letter-spacing: -0.05em;
          text-transform: uppercase;
        }
      `}</style>
    </section>
  )
}