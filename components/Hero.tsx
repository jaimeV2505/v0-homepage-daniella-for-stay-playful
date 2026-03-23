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

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.04])
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 24])
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 12])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#F7EFE9]">
      <div className="relative min-h-[88vh] overflow-hidden border-b-[3px] border-[#2B1A16] sm:min-h-[92vh]">
        {/* BACKGROUND */}
        <motion.div style={{ scale: bgScale, y: bgY }} className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Stay Playful hero background"
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>

        {/* VERY SOFT OVERLAY */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.03)_35%,rgba(0,0,0,0.08)_100%)]" />

        {/* SUBTLE FRAME */}
        <div className="pointer-events-none absolute inset-4 border border-white/35 sm:inset-6 lg:inset-8" />

        {/* HERO CONTENT */}
        <motion.div
          style={{ y: heroY }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10 flex min-h-[88vh] items-center justify-center px-4 py-12 sm:min-h-[92vh] sm:px-6 lg:px-8"
        >
          <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 lg:flex-row lg:items-center lg:gap-6 xl:gap-8">
            {/* SYMBOL */}
            <div className="w-[150px] shrink-0 sm:w-[190px] md:w-[220px] lg:w-[250px] xl:w-[280px]">
              <Image
                src="/logo2.png"
                alt="Stay Playful symbol"
                width={1200}
                height={1200}
                priority
                className="h-auto w-full drop-shadow-[0_20px_35px_rgba(0,0,0,0.22)]"
              />
            </div>

            {/* WORDMARK */}
            <div className="text-center lg:text-left">
              <div className="hero-wordmark text-[#1E1E1E]">
                <span className="block">stay</span>
                <span className="block">playful</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .hero-wordmark {
          font-family: Arial, Helvetica, sans-serif;
          font-weight: 900;
          text-transform: lowercase;
          line-height: 0.82;
          letter-spacing: -0.08em;
          font-size: clamp(4.4rem, 10vw, 10rem);
          text-shadow:
            0 1px 0 rgba(255,255,255,0.35),
            1px 1px 0 rgba(255,255,255,0.14),
            2px 2px 0 rgba(0,0,0,0.04),
            3px 3px 0 rgba(0,0,0,0.04),
            4px 4px 0 rgba(0,0,0,0.035),
            5px 5px 0 rgba(0,0,0,0.03),
            8px 8px 20px rgba(0,0,0,0.14);
          filter: drop-shadow(0 10px 18px rgba(0,0,0,0.10));
          transform: translateZ(0);
        }

        @media (max-width: 1024px) {
          .hero-wordmark {
            text-align: center;
            font-size: clamp(4rem, 14vw, 7rem);
            line-height: 0.84;
          }
        }

        @media (max-width: 640px) {
          .hero-wordmark {
            font-size: clamp(3.6rem, 16vw, 5.6rem);
            letter-spacing: -0.09em;
            text-shadow:
              0 1px 0 rgba(255,255,255,0.32),
              1px 1px 0 rgba(255,255,255,0.10),
              2px 2px 0 rgba(0,0,0,0.04),
              3px 3px 10px rgba(0,0,0,0.12);
          }
        }
      `}</style>
    </section>
  )
}