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

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.05])
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 30])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 18])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#F7EFE9]">
      <div className="relative min-h-[92vh] overflow-hidden border-b-[3px] border-[#2B1A16]">
        {/* BACKGROUND IMAGE */}
        <motion.div
          style={{ scale: bgScale, y: bgY }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.pexels.com/photos/6899549/pexels-photo-6899549.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt="Editorial background for Stay Playful"
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>

        {/* SOFT OVERLAY */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,12,10,0.14)_0%,rgba(20,12,10,0.10)_35%,rgba(20,12,10,0.28)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.12),transparent_30%)]" />

        {/* SUBTLE FRAME */}
        <div className="pointer-events-none absolute inset-4 border border-[#FFF7EF]/40 sm:inset-6 lg:inset-8" />

        {/* CENTERED CONTENT */}
        <motion.div
          style={{ y: contentY }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10 flex min-h-[92vh] flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8"
        >
          {/* LOGO */}
          <div className="w-[290px] sm:w-[360px] lg:w-[500px] xl:w-[620px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo1-JcaoSTEJKw2rySZFIaOZpeEs1Hjq3O.png"
              alt="Stay Playful logo"
              width={1400}
              height={1400}
              priority
              className="h-auto w-full drop-shadow-[0_18px_40px_rgba(0,0,0,0.22)]"
            />
          </div>

          {/* COPY */}
          <div className="mt-8 max-w-[760px]">
            <p className="text-base font-medium leading-8 text-white/92 sm:text-lg lg:text-[1.2rem]">
              A softer, more personal approach to wellbeing — centered on
              balance, curiosity, and a sustainable relationship with food,
              movement, and yourself.
            </p>
          </div>

          {/* CTA */}
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
              className="h-14 rounded-full border-[3px] border-[#2B1A16] bg-[#FFF7EF]/86 px-8 text-sm font-black uppercase tracking-[0.08em] text-[#2B1A16] shadow-[8px_8px_0_0_rgba(0,0,0,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FFF7EF]"
            >
              <Link href="#programs">Explore Programs</Link>
            </Button>
          </div>

          {/* SMALL META */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-white backdrop-blur-sm">
              Balance over restriction
            </span>
            <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-white backdrop-blur-sm">
              Stockholm, Sweden
            </span>
            <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-white backdrop-blur-sm">
              Health Coaching
            </span>
          </div>
        </motion.div>

        {/* TICKER */}
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