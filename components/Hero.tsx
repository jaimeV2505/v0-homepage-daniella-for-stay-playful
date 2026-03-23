"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.04])
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 25])
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 12])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#F7EFE9]">
      <div className="relative min-h-[92vh] overflow-hidden border-b-[3px] border-[#2B1A16]">
        {/* BACKGROUND */}
        <motion.div style={{ scale: bgScale, y: bgY }} className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Hero background"
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.04)_35%,rgba(0,0,0,0.12)_100%)]" />

        {/* FRAME */}
        <div className="pointer-events-none absolute inset-4 border border-white/30 sm:inset-6 lg:inset-8" />

        {/* CONTENT */}
        <motion.div
          style={{ y: heroY }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10 mx-auto flex min-h-[92vh] max-w-[1700px] items-center px-4 py-12 sm:px-6 lg:px-8"
        >
          <div className="grid w-full items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            {/* LEFT: LOGO + WORDMARK */}
            <div className="flex justify-center lg:justify-start">
              <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-5">
                {/* SYMBOL */}
                <div className="w-[180px] shrink-0 sm:w-[220px] lg:w-[260px] xl:w-[290px]">
                  <Image
                    src="/logo2.png"
                    alt="Stay Playful symbol"
                    width={900}
                    height={900}
                    priority
                    className="h-auto w-full drop-shadow-[0_18px_36px_rgba(0,0,0,0.25)]"
                  />
                </div>

                {/* WORDMARK BUILT IN TEXT */}
                <div className="text-center lg:text-left">
                  <div className="hero-3d text-[4.5rem] font-black uppercase leading-[0.8] tracking-[-0.08em] text-[#202020] sm:text-[5.8rem] lg:text-[7rem] xl:text-[8.2rem]">
                    <div>stay</div>
                    <div>playful</div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: COPY */}
            <div className="flex justify-center lg:justify-end">
              <div className="max-w-[520px] rounded-[26px] border-[3px] border-black bg-[#FFF7EF]/92 p-6 shadow-[10px_10px_0_0_rgba(0,0,0,0.14)] backdrop-blur-sm sm:p-8 lg:p-10">
                <p className="mb-4 text-[11px] font-black uppercase tracking-[0.24em] text-[#FF008E]">
                  Stay Playful
                </p>

                <h1 className="font-serif text-[2.8rem] leading-[0.94] tracking-[-0.05em] text-black sm:text-[3.8rem] lg:text-[4.7rem]">
                  Feel well
                  <br />
                  in a more{" "}
                  <span className="bg-[#DDF0D5] px-2 italic text-[#FF008E]">
                    playful
                  </span>{" "}
                  way
                </h1>

                <p className="mt-5 text-base leading-7 text-black/75 sm:text-[1.05rem] sm:leading-8">
                  A softer, more personal approach to wellbeing — centered on
                  balance, curiosity, and a sustainable relationship with food,
                  movement, and yourself.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    className="h-14 rounded-full border-[3px] border-black bg-[#FF008E] px-8 text-sm font-black uppercase tracking-[0.08em] text-white shadow-[8px_8px_0_0_rgba(0,0,0,0.15)] transition hover:-translate-y-1"
                  >
                    <Link href="#contact">
                      Book a Free Call
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="h-14 rounded-full border-[3px] border-black bg-white/85 px-8 text-sm font-black uppercase tracking-[0.08em] text-black shadow-[8px_8px_0_0_rgba(0,0,0,0.08)] transition hover:-translate-y-1"
                  >
                    <Link href="#programs">Explore Programs</Link>
                  </Button>
                </div>

                <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <div className="rounded-[16px] border-[2px] border-black bg-white/75 px-4 py-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FF008E]">
                      Focus
                    </p>
                    <p className="mt-2 text-sm font-semibold text-black">
                      Balance over restriction
                    </p>
                  </div>

                  <div className="rounded-[16px] border-[2px] border-black bg-white/75 px-4 py-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FF7F00]">
                      Style
                    </p>
                    <p className="mt-2 text-sm font-semibold text-black">
                      Gentle and sustainable
                    </p>
                  </div>

                  <div className="rounded-[16px] border-[2px] border-black bg-white/75 px-4 py-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00E2FF]">
                      Based in
                    </p>
                    <p className="mt-2 text-sm font-semibold text-black">
                      Stockholm, Sweden
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .hero-3d {
          text-shadow:
            1px 1px 0 rgba(255,255,255,0.18),
            2px 2px 0 rgba(0,0,0,0.05),
            3px 3px 0 rgba(0,0,0,0.05),
            4px 4px 0 rgba(0,0,0,0.05),
            5px 5px 0 rgba(0,0,0,0.04),
            6px 6px 14px rgba(0,0,0,0.16);
          filter: drop-shadow(0 8px 18px rgba(0,0,0,0.12));
        }
      `}</style>
    </section>
  )
}