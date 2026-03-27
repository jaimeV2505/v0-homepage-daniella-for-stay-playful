"use client"

import { useEffect, useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote } from "lucide-react"

type Testimonial = {
  id: string
  quote: string
  shortQuote: string
  author: string
  role: string
  badge: string
  initial: string
  highlight?: string
}

const testimonials: Testimonial[] = [
  {
    id: "emma",
    quote:
      "For the first time in my life, I actually enjoy eating without guilt. This completely changed how I relate to food, my body, and my day-to-day life.",
    shortQuote: "The best investment in my wellbeing I’ve ever made.",
    author: "Emma L.",
    role: "12-Week Program Graduate",
    badge: "Life-changing",
    initial: "E",
    highlight: "wellbeing",
  },
  {
    id: "marcus",
    quote:
      "The approach is so refreshing — no calorie counting, no restrictions. Just genuine support and practical guidance that fits my busy life.",
    shortQuote:
      "Refreshing, practical, and finally something that fits real life.",
    author: "Marcus K.",
    role: "1:1 Coaching Client",
    badge: "Highly recommend",
    initial: "M",
    highlight: "real life",
  },
]

const tapeItems = [
  "TESTIMONIALS",
  "REAL STORIES",
  "CLIENT LOVE",
  "STAY PLAYFUL",
  "SOFTER WELLBEING",
  "TESTIMONIALS",
  "REAL STORIES",
  "CLIENT LOVE",
]

const tapeSequence = [...tapeItems, ...tapeItems, ...tapeItems]

const AUTO_ROTATE_MS = 4500

const tapeTextBaseClass =
  "mx-6 inline-block shrink-0 font-serif leading-none tracking-[-0.04em] text-[#2B1A16]"

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, AUTO_ROTATE_MS)

    return () => clearInterval(timer)
  }, [])

  const active = testimonials[activeIndex]

  const secondaryTestimonials = useMemo(
    () => testimonials.filter((_, index) => index !== activeIndex),
    [activeIndex]
  )

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#F7EAF2] py-20 sm:py-24 lg:py-28"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[8%] h-48 w-48 rounded-full bg-[#FFABFF]/18 blur-3xl" />
        <div className="absolute right-[10%] top-[22%] h-56 w-56 rounded-full bg-[#FF008E]/10 blur-3xl" />
        <div className="absolute bottom-[10%] left-[28%] h-64 w-64 rounded-full bg-white/25 blur-3xl" />
      </div>

      {/* Decorative tape */}
      <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-[190px] overflow-visible lg:block">
        <div className="absolute left-1/2 top-2 w-[130vw] -translate-x-1/2 rotate-[-4deg] border-y-2 border-[#2B1A16] bg-[#E7A9D3] py-4">
          <div className="overflow-hidden whitespace-nowrap">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="flex w-max items-center"
            >
              {repeatedTapeItems.map((item, index) => (
                <span
                  key={`${item}-${index}-top`}
                  className={`${tapeTextBaseClass} text-[2.5rem]`}
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="absolute left-1/2 top-16 w-[135vw] -translate-x-1/2 rotate-[3deg] border-y-2 border-[#2B1A16] bg-[#F4DCE9] py-4 opacity-95">
          <div className="overflow-hidden whitespace-nowrap">
            <motion.div
              initial={{ x: "-50%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex w-max items-center"
            >
              {repeatedTapeItems.map((item, index) => (
                <span
                  key={`${item}-${index}-bottom`}
                  className={`${tapeTextBaseClass} text-[2.15rem]`}
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-4xl pt-8 text-center lg:pt-36"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#FF008E]">
            Testimonials
          </p>

          <h2 className="font-serif text-[2.9rem] leading-[0.95] tracking-[-0.05em] text-[#2B1A16] sm:text-[4rem] lg:text-[5.2rem]">
            What clients <span className="italic">say</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#2B1A16]/70">
            Real words from people who wanted a gentler, more sustainable
            relationship with health — and found a way of doing it that actually
            fits real life.
          </p>
        </motion.div>

        {/* Main rotating card */}
        <div className="relative mx-auto mt-14 max-w-5xl">
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] bg-[#FF008E]/10 blur-[1px]" />

          <div className="relative overflow-hidden rounded-[2rem] border-[2.5px] border-[#2B1A16] bg-[#FFFDF9]/88 shadow-[10px_10px_0_0_rgba(0,0,0,0.08)] backdrop-blur-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 24, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.985 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="grid lg:grid-cols-[0.95fr_1.05fr]"
              >
                {/* Left block */}
                <div className="flex flex-col items-center justify-center border-b-[2.5px] border-[#2B1A16] px-8 py-12 text-center lg:border-b-0 lg:border-r-[2.5px] lg:px-12 lg:py-16">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border-[2px] border-[#2B1A16] bg-[#F4E7F7] text-2xl font-bold text-[#2B1A16] shadow-[4px_4px_0_0_rgba(0,0,0,0.06)]">
                    {active.initial}
                  </div>

                  <blockquote className="max-w-[18ch] font-serif text-[2rem] leading-[1.02] tracking-[-0.05em] text-[#2B1A16] sm:text-[2.5rem] lg:text-[3.1rem]">
                    “{renderHighlightedQuote(active.shortQuote, active.highlight)}
                    ”
                  </blockquote>

                  <span className="mt-5 inline-flex rounded-full border-[2px] border-[#2B1A16] bg-[#FFBD17] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#2B1A16] shadow-[4px_4px_0_0_rgba(0,0,0,0.06)]">
                    {active.badge}
                  </span>
                </div>

                {/* Right block */}
                <div className="flex flex-col justify-center px-8 py-12 lg:px-12 lg:py-16">
                  <Quote className="mb-6 h-10 w-10 text-[#FF008E]/25" />

                  <p className="max-w-2xl text-lg leading-9 text-[#2B1A16]/78">
                    {active.quote}
                  </p>

                  <div className="mt-8">
                    <p className="font-serif text-[1.9rem] leading-none text-[#2B1A16]">
                      {active.author}
                    </p>
                    <p className="mt-2 text-base text-[#2B1A16]/62">
                      {active.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Rotation indicators */}
        <div className="mt-6 flex items-center justify-center gap-3">
          {testimonials.map((item, index) => {
            const isActive = index === activeIndex

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show testimonial from ${item.author}`}
                className={`h-3 rounded-full border border-[#2B1A16]/25 transition-all duration-300 ${isActive
                  ? "w-10 bg-[#FF008E]"
                  : "w-3 bg-white/70 hover:bg-[#E7A9D3]"
                  }`}
              />
            )
          })}
        </div>

        {/* Smooth divider */}
        <div className="my-12 flex items-center justify-center">
          <div className="h-px w-full max-w-5xl bg-[#2B1A16]/12" />
        </div>

        {/* Secondary card - only one when using 2 testimonials */}
        <div className="mx-auto max-w-3xl">
          {secondaryTestimonials.map((testimonial) => (
            <motion.article
              key={`${testimonial.id}-${activeIndex}`}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
              }}
              className="group relative"
            >
              <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-[2rem] bg-[#FFABFF]/22 transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3" />

              <div className="relative h-full rounded-[2rem] border-[2.5px] border-[#2B1A16] bg-[#FFFDF9]/88 p-7 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-transform duration-300 group-hover:-translate-y-1">
                <button
                  type="button"
                  onClick={() => {
                    const realIndex = testimonials.findIndex(
                      (t) => t.id === testimonial.id
                    )
                    if (realIndex !== -1) setActiveIndex(realIndex)
                  }}
                  className="absolute -top-3 right-5 rounded-full border-[2px] border-[#2B1A16] bg-[#FF008E] px-4 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-white shadow-[3px_3px_0_0_rgba(0,0,0,0.06)]"
                >
                  {testimonial.badge}
                </button>

                <Quote className="mb-5 h-9 w-9 text-[#E7A9D3]" />

                <blockquote className="text-[1.08rem] leading-9 text-[#2B1A16]/78">
                  “{testimonial.quote}”
                </blockquote>

                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-[2px] border-[#2B1A16] bg-[#F4E7F7] text-sm font-bold text-[#2B1A16]">
                    {testimonial.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-[#2B1A16]">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-[#2B1A16]/58">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom soft divider */}
        <div className="mt-14 flex justify-center">
          <div className="h-[2px] w-32 rounded-full bg-[#FF008E]/24" />
        </div>
      </div>
    </section>
  )
}

function renderHighlightedQuote(text: string, highlight?: string) {
  if (!highlight) return text

  const escaped = highlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  const regex = new RegExp(`(${escaped})`, "gi")
  const parts = text.split(regex)

  return parts.map((part, index) => {
    const isHighlight = part.toLowerCase() === highlight.toLowerCase()

    if (!isHighlight) {
      return <span key={`${part}-${index}`}>{part}</span>
    }

    return (
      <span
        key={`${part}-${index}`}
        className="bg-[#DDF0D5] px-2 text-[#2B1A16]"
      >
        {part}
      </span>
    )
  })
}