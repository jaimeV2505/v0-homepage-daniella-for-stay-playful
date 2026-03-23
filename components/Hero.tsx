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
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 12])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#F7EFE9]">
      <div className="relative min-h-[92vh] overflow-hidden border-b-[3px] border-[#2B1A16]">

        {/* BACKGROUND IMAGE */}
        <motion.div style={{ scale: bgScale, y: bgY }} className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Abstract minimal background"
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>

        {/* SUPER SOFT OVERLAY */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0.12)_100%)]" />

        {/* FRAME */}
        <div className="pointer-events-none absolute inset-4 border border-white/30 sm:inset-6 lg:inset-8" />

        {/* CENTER CONTENT */}
        <motion.div
          style={{ y: contentY }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 flex min-h-[92vh] flex-col items-center justify-center px-4 text-center"
        >

          {/* LOGO */}
          <div className="w-[300px] sm:w-[380px] lg:w-[520px] xl:w-[620px]">
            <Image
              src="/logo1.png"
              alt="Stay Playful logo"
              width={1400}
              height={1400}
              priority
              className="h-auto w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
            />
          </div>

          {/* TEXT */}
          <p className="mt-8 max-w-[640px] text-lg leading-8 text-black/80 sm:text-[1.15rem]">
            A softer, more personal approach to wellbeing — centered on balance,
            curiosity, and a sustainable relationship with food, movement, and yourself.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
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
              className="h-14 rounded-full border-[3px] border-black bg-white/80 px-8 text-sm font-black uppercase tracking-[0.08em] text-black shadow-[8px_8px_0_0_rgba(0,0,0,0.08)] transition hover:-translate-y-1"
            >
              <Link href="#programs">Explore Programs</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}