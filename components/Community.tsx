"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

type FaqItem = {
  id: string
  question: string
  answer: string
  accent: string
}

const faqItems: FaqItem[] = [
  {
    id: "different",
    question: "What makes Stay Playful different from other wellness approaches?",
    answer:
      "Stay Playful is not built on restriction, guilt, or rigid food rules. The approach is softer, more personal, and designed to fit real life. Instead of chasing perfection, we focus on sustainable wellbeing, supportive structure, and a healthier relationship with food, body, and lifestyle.",
    accent: "bg-[#FF008E]",
  },
  {
    id: "who-for",
    question: "Who is this for?",
    answer:
      "This is for people who feel tired of all-or-nothing wellness. It’s especially helpful if you’ve tried plans that felt too strict, too clinical, or impossible to sustain. Whether you want private support or a structured program, the work is tailored to where you are now.",
    accent: "bg-[#FFABFF]",
  },
  {
    id: "diet",
    question: "Do I need to follow a specific diet or meal plan?",
    answer:
      "No. This is not about forcing you into a rigid system. Guidance is personalized and designed to support your routine, preferences, and needs. The goal is to build something sustainable — not hand you another plan you’ll want to abandon in two weeks.",
    accent: "bg-[#00E2FF]",
  },
]

const topRibbon = [
  "FREQUENTLY ASKED QUESTIONS",
  "REAL SUPPORT",
  "SOFTER WELLBEING",
  "FREQUENTLY ASKED QUESTIONS",
  "REAL SUPPORT",
  "SOFTER WELLBEING",
]

export function Community() {
  const [openId, setOpenId] = useState<string>(faqItems[0].id)

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id))
  }

  return (
    <section className="relative overflow-hidden bg-[#F7EFE9] py-20 sm:py-24 lg:py-28">
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[14%] h-48 w-48 rounded-full bg-[#FFABFF]/10 blur-3xl" />
        <div className="absolute right-[10%] top-[20%] h-56 w-56 rounded-full bg-[#FF008E]/8 blur-3xl" />
        <div className="absolute bottom-[8%] left-[30%] h-64 w-64 rounded-full bg-[#FFBD17]/8 blur-3xl" />
        <div className="absolute inset-y-0 left-[4%] hidden w-px bg-[#2B1A16]/6 xl:block" />
        <div className="absolute inset-y-0 right-[4%] hidden w-px bg-[#2B1A16]/6 xl:block" />
      </div>

      {/* Top ribbon */}
      <div className="pointer-events-none absolute inset-x-0 top-10 hidden h-24 lg:block">
        <div className="absolute left-[-6%] right-[-6%] top-4 rotate-[-2.5deg] border-y-2 border-[#2B1A16] bg-[#FFF8F2] py-3 shadow-[0_8px_18px_rgba(0,0,0,0.06)]">
          <div className="flex overflow-hidden whitespace-nowrap">
            <motion.div
              initial={{ x: "0%" }}
              animate={{ x: "-50%" }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="flex min-w-max items-center"
            >
              {[...topRibbon, ...topRibbon, ...topRibbon].map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="mx-6 font-sans text-sm font-black uppercase tracking-[0.14em] text-[#2B1A16]"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:pt-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mx-auto mb-14 max-w-4xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#FF008E]">
            Before you book
          </p>

          <h2 className="font-serif text-[2.9rem] leading-[0.96] tracking-[-0.05em] text-[#2B1A16] sm:text-[4rem] lg:text-[5rem]">
            A few things people <span className="italic">always ask</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#2B1A16]/68">
            The gentle version of frequently asked questions — so you can feel
            clear, calm, and informed before taking the next step.
          </p>
        </motion.div>

        {/* Layout */}
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
          {/* LEFT */}
          <div className="relative">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] bg-[#FFBD17]/20 blur-[1px]" />

            <div className="relative overflow-hidden rounded-[2rem] border-[2.5px] border-[#2B1A16] bg-[#9C1B24] shadow-[10px_10px_0_0_rgba(0,0,0,0.12)]">
              <div className="border-b-[2.5px] border-[#2B1A16] px-5 py-3">
                <div className="inline-flex rounded-full border-[2px] border-[#2B1A16] bg-[#FFF8F2] px-5 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#2B1A16]">
                  4 questions answered
                </div>
              </div>

              <div className="bg-[#FFF7EF] p-7">
                <h3 className="font-black text-2xl text-[#2B1A16]">
                  Do I need to be “perfect” for this to work?
                </h3>
                <p className="mt-4 text-[#2B1A16]/75">
                  Nope — not even a little. This work is designed for real life.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-4">
            {faqItems.map((item) => {
              const isOpen = openId === item.id

              return (
                <div key={item.id} className="relative">
                  <div className="relative overflow-hidden rounded-[1.8rem] border-[2.5px] border-[#2B1A16] bg-white">
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="flex w-full justify-between px-6 py-6"
                    >
                      <h3>{item.question}</h3>
                      {isOpen ? <Minus /> : <Plus />}
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                        >
                          <p className="px-6 pb-6">{item.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* NEW CLEAN DIVIDER */}
        <div className="mt-16 flex justify-center">
          <div className="flex w-full max-w-5xl items-center gap-4">
            <div className="h-px flex-1 bg-[#2B1A16]/12" />
            <div className="text-xs uppercase tracking-[0.2em] text-[#FF008E]">
              Stay Playful
            </div>
            <div className="h-px flex-1 bg-[#2B1A16]/12" />
          </div>
        </div>
      </div>
    </section>
  )
}