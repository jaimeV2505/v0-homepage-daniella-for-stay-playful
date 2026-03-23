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

        {/* SOFT OVERLAY */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.03)_35%,rgba(0,0,0,0.08)_100%)]" />

        {/* SUBTLE FRAME */}
        <div className="pointer-events-none absolute inset-4 border border-white/35 sm:inset-6 lg:inset-8" />

        {/* FLOATING MICRO TEXT */}
        <div className="pointer-events-none absolute left-8 top-10 hidden lg:block">
          <p className="text-[11px] font-black uppercase tracking-[0.24em] text-black/60">
            Stockholm, Sweden
          </p>
        </div>

        <div className="pointer-events-none absolute right-10 top-10 hidden lg:block">
          <p className="text-[11px] font-black uppercase tracking-[0.24em] text-black/60">
            Health Coaching
          </p>
        </div>

        <div className="pointer-events-none absolute bottom-10 left-10 hidden lg:block">
          <p className="text-[11px] font-black uppercase tracking-[0.24em] text-black/60">
            Balance • Curiosity • Support
          </p>
        </div>

        {/* SMALL FLOATING BADGE */}
        <div className="absolute right-[12%] top-[24%] hidden lg:block">
          <div className="rounded-full border-[3px] border-black bg-[#FFBD17] px-5 py-2 shadow-[4px_4px_0_0_rgba(0,0,0,0.12)]">
            <span className="text-[11px] font-black uppercase tracking-[0.18em] text-black">
              Feel Well
            </span>
          </div>
        </div>

        {/* HERO CONTENT */}
        <motion.div
          style={{ y: heroY }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10 flex min-h-[88vh] items-center justify-center px-4 py-12 sm:min-h-[92vh] sm:px-6 lg:px-8"
        >
          <div className="flex flex-col items-center justify-center gap-4 sm:gap-5 lg:flex-row lg:items-end lg:gap-0">
            {/* SYMBOL = THE REAL S */}
            <div className="relative z-10 w-[118px] shrink-0 sm:w-[150px] md:w-[175px] lg:w-[205px] xl:w-[225px]">
              <Image
                src="/logo2.png"
                alt="Stay Playful symbol"
                width={1200}
                height={1200}
                priority
                className="h-auto w-full"
              />
            </div>

            {/* WORDMARK */}
            <div className="-mt-1 text-center lg:-ml-4 lg:mt-0 lg:mb-[18px] lg:text-left xl:-ml-5 xl:mb-[20px]">
              <div className="hero-wordmark text-[#1B1B1B]">
                <span className="block">tay</span>
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
          line-height: 0.8;
          letter-spacing: -0.09em;
          font-size: clamp(4.5rem, 10vw, 9.2rem);
          color: #1f1f1f;
          text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.12);
        }

        @media (max-width: 1024px) {
          .hero-wordmark {
            text-align: center;
            font-size: clamp(4rem, 14vw, 6.8rem);
            line-height: 0.82;
          }
        }

        @media (max-width: 640px) {
          .hero-wordmark {
            font-size: clamp(3.6rem, 16vw, 5.5rem);
            letter-spacing: -0.1em;
            line-height: 0.84;
          }
        }
      `}</style>
    </section>
  )
}