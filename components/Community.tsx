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

const bottomRibbon = [
  "QUESTIONS ANSWERED",
  "STAY PLAYFUL",
  "CALM SUPPORT",
  "REAL LIFE WELLNESS",
  "QUESTIONS ANSWERED",
  "STAY PLAYFUL",
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

      {/* Top divider / ribbon */}
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
                  key={`${item}-${index}-top`}
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
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mx-auto mb-14 max-w-4xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#FF008E]">
            Before you book
          </p>

          <h2 className="font-serif text-[2.9rem] leading-[0.96] tracking-[-0.05em] text-[#2B1A16] sm:text-[4rem] lg:text-[5rem]">
            A few things people{" "}
            <span className="italic">always ask</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#2B1A16]/68">
            The gentle version of frequently asked questions — so you can feel
            clear, calm, and informed before taking the next step.
          </p>
        </motion.div>

        {/* Main layout */}
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
          {/* Left editorial block */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] bg-[#FFBD17]/20 blur-[1px]" />

            <div className="relative overflow-hidden rounded-[2rem] border-[2.5px] border-[#2B1A16] bg-[#9C1B24] shadow-[10px_10px_0_0_rgba(0,0,0,0.12)]">
              <div className="border-b-[2.5px] border-[#2B1A16] px-5 py-3">
                <div className="inline-flex rounded-full border-[2px] border-[#2B1A16] bg-[#FFF8F2] px-5 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#2B1A16] shadow-[4px_4px_0_0_rgba(0,0,0,0.08)]">
                  4 questions answered
                </div>
              </div>

              <div className="grid md:grid-cols-[0.78fr_1fr]">
                <div className="relative min-h-[280px] border-b-[2.5px] border-[#2B1A16] md:border-b-0 md:border-r-[2.5px]">
                  <img
                    src="https://images.pexels.com/photos/7081150/pexels-photo-7081150.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Editorial portrait"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent" />
                </div>

                <div className="bg-[#FFF7EF] p-7 sm:p-9">
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-[#9C1B24]">
                        Quick clarity
                      </p>

                      <h3 className="max-w-[14ch] font-sans text-[2rem] font-black uppercase leading-[0.92] tracking-[-0.05em] text-[#2B1A16] sm:text-[2.5rem]">
                        Do I need to be “perfect” for this to work?
                      </h3>

                      <p className="mt-5 text-[1rem] leading-7 text-[#2B1A16]/78 sm:text-[1.05rem]">
                        Nope — not even a little. This work is designed for real
                        life, real routines, and real people. Progress here
                        comes from support, flexibility, and consistency — not
                        from obsession or doing everything flawlessly.
                      </p>
                    </div>

                    <div className="mt-8 flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border-[2.5px] border-[#2B1A16] bg-[#DDF0D5] text-sm font-black text-[#2B1A16] shadow-[4px_4px_0_0_rgba(0,0,0,0.08)]">
                        x4
                      </div>

                      <p className="max-w-[18ch] text-sm leading-6 text-[#2B1A16]/68">
                        Thoughtful answers to the questions people usually have
                        before reaching out.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right accordion */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
            className="space-y-4"
          >
            {faqItems.map((item, index) => {
              const isOpen = openId === item.id

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.06,
                  }}
                  className="group relative"
                >
                  <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-[1.8rem] bg-[#FFABFF]/18 transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3" />

                  <div className="relative overflow-hidden rounded-[1.8rem] border-[2.5px] border-[#2B1A16] bg-[#FFFDF9] shadow-[0_12px_28px_rgba(0,0,0,0.04)]">
                    <button
                      type="button"
                      onClick={() => toggleItem(item.id)}
                      className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left sm:px-8 sm:py-7"
                    >
                      <div className="flex items-start gap-4">
                        <span className={cn("mt-1 h-3 w-3 rounded-full", item.accent)} />
                        <h3 className="font-serif text-[1.5rem] leading-[1.1] text-[#2B1A16] sm:text-[1.9rem]">
                          {item.question}
                        </h3>
                      </div>

                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#2B1A16]/18 bg-white text-[#2B1A16]">
                        {isOpen ? (
                          <Minus className="h-5 w-5" />
                        ) : (
                          <Plus className="h-5 w-5" />
                        )}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-[#2B1A16]/10 px-6 pb-6 pt-1 sm:px-8 sm:pb-8">
                            <p className="max-w-3xl text-[1rem] leading-8 text-[#2B1A16]/74 sm:text-[1.04rem]">
                              {item.answer}
                            </p>
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )
            })}

            {/* Mini CTA */}
            <div className="pt-4">
              <div className="rounded-[1.8rem] border-[2.5px] border-[#2B1A16] bg-[#FFF8F2] px-6 py-6 shadow-[6px_6px_0_0_rgba(0,0,0,0.06)] sm:px-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#FF008E]">
                      Still wondering?
                    </p>
                    <p className="mt-2 text-[1.05rem] leading-7 text-[#2B1A16]/74">
                      If you’d rather talk it through than read another FAQ,
                      that works too.
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full border-[2.5px] border-[#2B1A16] bg-[#FF008E] px-6 py-3 text-sm font-black uppercase tracking-[0.08em] text-white shadow-[4px_4px_0_0_rgba(0,0,0,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#E30081]"
                  >
                    Let’s talk
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom divider */}
        <div className="pointer-events-none relative mt-16 hidden h-24 lg:block">
          <div className="absolute left-[-6%] right-[-6%] top-6 rotate-[2deg] border-y-2 border-[#2B1A16] bg-[#E7A9D3] py-3 shadow-[0_8px_18px_rgba(0,0,0,0.04)]">
            <div className="flex overflow-hidden whitespace-nowrap">
              <motion.div
                initial={{ x: "-50%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="flex min-w-max items-center"
              >
                {[...bottomRibbon, ...bottomRibbon, ...bottomRibbon].map(
                  (item, index) => (
                    <span
                      key={`${item}-${index}-bottom`}
                      className="mx-6 font-serif text-[2rem] leading-none tracking-[-0.04em] text-[#2B1A16]"
                    >
                      {item}
                    </span>
                  )
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}