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
  "STOCKHOLM BASED",
  "1:1 COACHING • 8-WEEK • 12-WEEK",
  "A SOFTER RELATIONSHIP WITH FOOD",
]

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 60])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -30])
  const logoY = useTransform(scrollYProgress, [0, 1], [0, 24])
  const bgGlow = useTransform(scrollYProgress, [0, 1], [0.22, 0.4])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F7EFE9]"
    >
      {/* Top soft band */}
      <div className="h-6 bg-[#F4E7F7]" />
      <div className="border-t-[3px] border-[#2B1A16]" />

      <div className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(120deg,#F7EFE9_0%,#F7EFE9_48%,#DDF0D5_48%,#DDF0D5_100%)] lg:bg-[linear-gradient(90deg,#F7EFE9_0%,#F7EFE9_52%,#DDF0D5_52%,#DDF0D5_100%)]" />
          <motion.div
            style={{ opacity: bgGlow }}
            className="pointer-events-none absolute -left-16 top-20 h-72 w-72 rounded-full bg-[#FFABFF] blur-3xl"
          />
          <motion.div
            style={{ opacity: bgGlow }}
            className="pointer-events-none absolute right-10 top-14 h-80 w-80 rounded-full bg-[#00E2FF] blur-3xl"
          />
          <motion.div
            style={{ opacity: bgGlow }}
            className="pointer-events-none absolute bottom-10 left-[38%] h-64 w-64 rounded-full bg-[#FFBD17] blur-3xl"
          />
        </div>

        {/* Editorial guide lines */}
        <div className="pointer-events-none absolute inset-y-0 left-[4%] hidden w-px bg-[#2B1A16]/10 xl:block" />
        <div className="pointer-events-none absolute inset-y-0 right-[4%] hidden w-px bg-[#2B1A16]/10 xl:block" />

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-4rem)] max-w-[1700px] grid-cols-1 lg:grid-cols-[1.02fr_0.98fr]">
          {/* LEFT SIDE — IMAGE / LOGO */}
          <div className="relative order-2 flex min-h-[46vh] items-end overflow-hidden border-t-[3px] border-[#2B1A16] lg:order-1 lg:min-h-[calc(100vh-4rem)] lg:border-r-[3px] lg:border-t-0">
            {/* Main image */}
            <motion.div
              style={{ y: imageY }}
              className="absolute inset-0"
            >
              <Image
                src="https://images.pexels.com/photos/7081150/pexels-photo-7081150.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Editorial lifestyle portrait for Stay Playful"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(43,26,22,0.12),rgba(43,26,22,0.18))]" />
            </motion.div>

            {/* Soft frame */}
            <div className="pointer-events-none absolute inset-6 border border-[#FFF7EF]/60" />

            {/* Floating logo block */}
            <motion.div
              style={{ y: logoY }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-20 m-6 w-[220px] rounded-[28px] border-[3px] border-[#2B1A16] bg-[#FFF7EF]/90 p-4 shadow-[10px_10px_0_0_rgba(0,0,0,0.16)] backdrop-blur-md sm:m-8 sm:w-[250px] lg:m-10 lg:w-[300px]"
            >
              <Image
                src="/logo1.png"
                alt="Stay Playful logo"
                width={520}
                height={520}
                className="h-auto w-full"
                priority
              />
            </motion.div>

            {/* Small flower/blob detail */}
            <div className="pointer-events-none absolute bottom-5 right-5 z-20 hidden h-24 w-24 rounded-[40%_60%_55%_45%/50%_40%_60%_50%] bg-[radial-gradient(circle_at_30%_30%,#FFFFFF_0%,#FFABFF_40%,#FF7F00_100%)] opacity-90 blur-[0.2px] sm:block" />
          </div>

          {/* RIGHT SIDE — CONTENT */}
          <div className="order-1 flex items-center border-b-[3px] border-[#2B1A16] px-5 py-12 sm:px-8 sm:py-14 lg:order-2 lg:min-h-[calc(100vh-4rem)] lg:border-b-0 lg:px-14 xl:px-20">
            <motion.div
              style={{ y: contentY }}
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
              className="w-full max-w-[760px]"
            >
              {/* Eyebrow */}
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="inline-flex rounded-full border-[2px] border-[#2B1A16] bg-[#FFF7EF] px-4 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-[#FF008E] shadow-[4px_4px_0_0_rgba(0,0,0,0.1)]">
                  Health Coaching
                </span>
                <span className="inline-flex rounded-full border border-[#2B1A16]/20 bg-white/55 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#2B1A16]/65">
                  Playful • Personal • Sustainable
                </span>
              </div>

              {/* Headline */}
              <h1 className="max-w-[12ch] font-serif text-[3.6rem] leading-[0.9] tracking-[-0.06em] text-[#2B1A16] sm:text-[5rem] lg:text-[6.2rem] xl:text-[7rem]">
                A softer way
                <br />
                to feel{" "}
                <span className="bg-[#FFABFF]/45 px-2 italic text-[#FF008E]">
                  well
                </span>
              </h1>

              {/* Supporting text */}
              <p className="mt-7 max-w-[640px] text-lg leading-8 text-[#2B1A16]/76 sm:text-[1.22rem] sm:leading-9">
                Not another diet. Not another rigid system. Stay Playful offers
                a more thoughtful and human approach to wellbeing — helping you
                build balance through life, not pressure.
              </p>

              {/* CTA row */}
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
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
                  className="h-14 rounded-full border-[3px] border-[#2B1A16] bg-[#FFF7EF]/70 px-8 text-sm font-black uppercase tracking-[0.08em] text-[#2B1A16] shadow-[8px_8px_0_0_rgba(0,0,0,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FFF7EF]"
                >
                  <Link href="#programs">Explore Programs</Link>
                </Button>
              </div>

              {/* Trust row */}
              <div className="mt-9 grid max-w-[620px] grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-[20px] border-[2px] border-[#2B1A16] bg-[#FFF7EF]/85 px-4 py-4 shadow-[5px_5px_0_0_rgba(0,0,0,0.08)]">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#FF008E]">
                    Focus
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#2B1A16]">
                    Relationship with food
                  </p>
                </div>

                <div className="rounded-[20px] border-[2px] border-[#2B1A16] bg-[#FFF7EF]/85 px-4 py-4 shadow-[5px_5px_0_0_rgba(0,0,0,0.08)]">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#FF7F00]">
                    Approach
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#2B1A16]">
                    Curiosity over control
                  </p>
                </div>

                <div className="rounded-[20px] border-[2px] border-[#2B1A16] bg-[#FFF7EF]/85 px-4 py-4 shadow-[5px_5px_0_0_rgba(0,0,0,0.08)]">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#00E2FF]">
                    Based in
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#2B1A16]">
                    Stockholm, Sweden
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Moving editorial tape */}
        <div className="relative z-20 border-y-[3px] border-[#2B1A16] bg-[#F8E7EE]">
          <div className="overflow-hidden py-3">
            <motion.div
              initial={{ x: "0%" }}
              animate={{ x: "-50%" }}
              transition={{
                duration: 28,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="flex min-w-max items-center gap-6 whitespace-nowrap"
            >
              {[...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="flex items-center gap-6"
                >
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