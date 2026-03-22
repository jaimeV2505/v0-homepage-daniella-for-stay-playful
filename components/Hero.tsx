"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const tickerItems = [
  "HEALTH SHOULD FEEL PLAYFUL",
  "BALANCE OVER RESTRICTION",
  "CURIOSITY OVER CONTROL",
  "SOFTER WELLBEING",
  "STOCKHOLM BASED",
  "PERSONAL • PLAYFUL • SUSTAINABLE",
]

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 40])
  const logoY = useTransform(scrollYProgress, [0, 1], [0, 26])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -24])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F7EFE9]"
    >
      {/* top soft bar */}
      <div className="h-6 bg-[#F4E7F7]" />
      <div className="border-t-[3px] border-[#2B1A16]" />

      <div className="relative min-h-[92vh] overflow-hidden border-b-[3px] border-[#2B1A16]">
        {/* BACKGROUND IMAGE */}
        <motion.div
          style={{ scale: bgScale, y: bgY }}
          className="absolute inset-0"
        >
          <Image
            src="https://pexels-rb-audiovisual-1819938.jpg"
            alt="Editorial background for Stay Playful"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        {/* overlays */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,11,8,0.28)_0%,rgba(20,11,8,0.22)_26%,rgba(20,11,8,0.40)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,171,255,0.14),transparent_22%),radial-gradient(circle_at_82%_15%,rgba(0,226,255,0.12),transparent_20%),radial-gradient(circle_at_50%_85%,rgba(255,127,0,0.10),transparent_22%)]" />

        {/* editorial frame */}
        <div className="pointer-events-none absolute inset-4 border border-[#FFF7EF]/55 sm:inset-6 lg:inset-8" />

        {/* CONTENT LAYER */}
        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-[1700px] items-center px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid w-full items-end gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            {/* LEFT VISUAL / LOGO */}
            <motion.div
              style={{ y: logoY }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative flex min-h-[420px] items-center justify-center lg:min-h-[640px]"
            >
              {/* soft spotlight */}
              <div className="absolute h-[300px] w-[300px] rounded-full bg-[#FFF7EF]/14 blur-3xl sm:h-[380px] sm:w-[380px] lg:h-[460px] lg:w-[460px]" />

              {/* BIG LOGO */}
              <div className="relative z-10 w-[270px] sm:w-[360px] lg:w-[470px] xl:w-[560px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo1-JcaoSTEJKw2rySZFIaOZpeEs1Hjq3O.png"
                  alt="Stay Playful logo"
                  width={1200}
                  height={1200}
                  priority
                  className="h-auto w-full drop-shadow-[0_18px_40px_rgba(0,0,0,0.28)]"
                />
              </div>

              {/* subtle floating orb */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[12%] right-[10%] hidden h-16 w-16 rounded-[40%_60%_55%_45%/50%_45%_55%_50%] bg-[radial-gradient(circle_at_30%_30%,#FFFFFF_0%,#FFABFF_38%,#FF7F00_100%)] opacity-95 blur-[0.2px] lg:block"
              />
            </motion.div>

            {/* RIGHT TEXT BLOCK */}
            <motion.div
              style={{ y: contentY }}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.12 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="w-full max-w-[650px] rounded-[28px] border-[3px] border-[#2B1A16] bg-[#FFF7EF]/86 p-6 shadow-[10px_10px_0_0_rgba(0,0,0,0.14)] backdrop-blur-md sm:p-8 lg:p-10">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="inline-flex rounded-full border-[2px] border-[#2B1A16] bg-[#FDF3EA] px-4 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-[#FF008E]">
                    Stay Playful
                  </span>
                  <span className="inline-flex rounded-full border border-[#2B1A16]/16 bg-white/60 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#2B1A16]/68">
                    Health Coaching
                  </span>
                </div>

                <h1 className="font-serif text-[3.2rem] leading-[0.92] tracking-[-0.06em] text-[#2B1A16] sm:text-[4.4rem] lg:text-[5.3rem]">
                  Feel well
                  <br />
                  in a more{" "}
                  <span className="bg-[#DDF0D5] px-2 italic text-[#FF008E]">
                    playful
                  </span>{" "}
                  way
                </h1>

                <p className="mt-6 max-w-[42ch] text-lg leading-8 text-[#2B1A16]/76 sm:text-[1.12rem]">
                  A softer, more personal approach to wellbeing — centered on
                  balance, curiosity, and a sustainable relationship with food,
                  movement, and yourself.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button
                    asChild
                    className="h-14 rounded-full border-[3px] border-[#2B1A16] bg-[#FF008E] px-8 text-sm font-black uppercase tracking-[0.08em] text-white shadow-[8px_8px_0_0_rgba(0,0,0,0.14)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#E10080]"
                  >
                    <Link href="#contact">
                      Book a Free Call
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="h-14 rounded-full border-[3px] border-[#2B1A16] bg-[#FFF7EF]/80 px-8 text-sm font-black uppercase tracking-[0.08em] text-[#2B1A16] shadow-[8px_8px_0_0_rgba(0,0,0,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FFF7EF]"
                  >
                    <Link href="#programs">Explore Programs</Link>
                  </Button>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <div className="rounded-[18px] border-[2px] border-[#2B1A16] bg-white/72 px-4 py-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FF008E]">
                      Focus
                    </p>
                    <p className="mt-2 text-sm font-semibold text-[#2B1A16]">
                      Balance over restriction
                    </p>
                  </div>

                  <div className="rounded-[18px] border-[2px] border-[#2B1A16] bg-white/72 px-4 py-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FF7F00]">
                      Style
                    </p>
                    <p className="mt-2 text-sm font-semibold text-[#2B1A16]">
                      Gentle and sustainable
                    </p>
                  </div>

                  <div className="rounded-[18px] border-[2px] border-[#2B1A16] bg-white/72 px-4 py-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00E2FF]">
                      Based in
                    </p>
                    <p className="mt-2 text-sm font-semibold text-[#2B1A16]">
                      Stockholm, Sweden
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* MOVING TAPE */}
        <div className="absolute bottom-0 left-0 right-0 z-20 border-t-[3px] border-[#2B1A16] bg-[#F8E7EE]">
          <div className="overflow-hidden py-3">
            <motion.div
              initial={{ x: "0%" }}
              animate={{ x: "-50%" }}
              transition={{
                duration: 26,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex min-w-max items-center gap-6 whitespace-nowrap"
            >
              {[...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => (
                <div key={`${item}-${index}`} className="flex items-center gap-6">
                  <span className="text-sm font-black uppercase tracking-[0.18em] text-[#B985D6]">
                    {item}
                  </span>
                  <span className="text-[#B985D6]">☺</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}