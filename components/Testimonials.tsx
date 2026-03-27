"use client"

import { useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
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
]

const AUTO_ROTATE_MS = 4500

const headingMotion = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, ease: "easeOut" as const },
}

const cardSwapMotion = {
  initial: { opacity: 0, y: 24, scale: 0.985 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -16, scale: 0.985 },
  transition: { duration: 0.45, ease: "easeOut" as const },
}

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (testimonials.length <= 1) return

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, AUTO_ROTATE_MS)

    return () => window.clearInterval(timer)
  }, [])

  const active = testimonials[activeIndex]

  const secondaryTestimonial = useMemo(
    () => testimonials.find((_, index) => index !== activeIndex),
    [activeIndex]
  )

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#F7EAF2] py-16 sm:py-20 lg:py-24"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[8%] h-32 w-32 rounded-full bg-[#FFABFF]/18 blur-3xl sm:h-40 sm:w-40 lg:h-48 lg:w-48" />
        <div className="absolute right-[8%] top-[18%] h-40 w-40 rounded-full bg-[#FF008E]/10 blur-3xl sm:h-48 sm:w-48 lg:h-56 lg:w-56" />
        <div className="absolute bottom-[8%] left-[24%] h-44 w-44 rounded-full bg-white/25 blur-3xl sm:h-52 sm:w-52 lg:h-64 lg:w-64" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/10 to-transparent" />
      </div>

      {/* Decorative editorial background word */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[10.5rem] hidden -translate-x-1/2 select-none font-serif text-[9rem] italic leading-none tracking-[-0.08em] text-[#2B1A16]/[0.045] lg:block xl:text-[11rem]">
          StayPlayful
        </div>
        <div className="absolute left-1/2 top-[15.5rem] hidden -translate-x-1/2 select-none font-serif text-[7rem] italic leading-none tracking-[-0.08em] text-[#FF008E]/[0.035] lg:block xl:text-[8.5rem]">
          StayPlayful
        </div>
        <div className="absolute left-1/2 top-[8.75rem] -translate-x-1/2 select-none font-serif text-[3.8rem] italic leading-none tracking-[-0.08em] text-[#2B1A16]/[0.04] sm:text-[5rem] lg:hidden">
          StayPlayful
        </div>
      </div>

      {/* Single decorative tape */}
      <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-[120px] overflow-visible lg:block">
        <div className="absolute left-1/2 top-8 w-[145vw] -translate-x-1/2 rotate-[-3deg] border-y-2 border-[#2B1A16] bg-[#E7A9D3] py-4">
          <div className="flex items-center justify-center whitespace-nowrap">
            {[...tapeItems, ...tapeItems].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="mx-6 inline-block shrink-0 font-serif text-[2.35rem] leading-none tracking-[-0.04em] text-[#2B1A16]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          {...headingMotion}
          className="mx-auto max-w-4xl pt-4 text-center lg:pt-24"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#FF008E] sm:text-sm">
            Testimonials
          </p>

          <h2 className="font-serif text-[2.55rem] leading-[0.95] tracking-[-0.05em] text-[#2B1A16] sm:text-[3.6rem] lg:text-[5rem]">
            What clients <span className="italic">say</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#2B1A16]/70 sm:mt-5 sm:text-lg sm:leading-8">
            Real words from people who wanted a gentler, more sustainable
            relationship with health — and found a way of doing it that actually
            fits real life.
          </p>
        </motion.div>

        {/* Main rotating card */}
        <div className="relative mx-auto mt-10 max-w-5xl sm:mt-12 lg:mt-14">
          <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-[1.75rem] bg-[#FF008E]/10 blur-[1px] sm:translate-x-3 sm:translate-y-3 sm:rounded-[2rem]" />

          <div className="relative overflow-hidden rounded-[1.75rem] border-[2.5px] border-[#2B1A16] bg-[#FFFDF9]/88 shadow-[8px_8px_0_0_rgba(0,0,0,0.08)] backdrop-blur-sm sm:rounded-[2rem] sm:shadow-[10px_10px_0_0_rgba(0,0,0,0.08)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={cardSwapMotion.initial}
                animate={cardSwapMotion.animate}
                exit={cardSwapMotion.exit}
                transition={cardSwapMotion.transition}
                className="grid lg:grid-cols-[0.95fr_1.05fr]"
              >
                {/* Left block */}
                <div className="flex flex-col items-center justify-center border-b-[2.5px] border-[#2B1A16] px-5 py-10 text-center sm:px-8 sm:py-12 lg:border-b-0 lg:border-r-[2.5px] lg:px-12 lg:py-16">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border-[2px] border-[#2B1A16] bg-[#F4E7F7] text-xl font-bold text-[#2B1A16] shadow-[4px_4px_0_0_rgba(0,0,0,0.06)] sm:mb-6 sm:h-20 sm:w-20 sm:text-2xl">
                    {active.initial}
                  </div>

                  <blockquote className="max-w-[18ch] font-serif text-[1.75rem] leading-[1.02] tracking-[-0.05em] text-[#2B1A16] sm:text-[2.2rem] lg:text-[3.1rem]">
                    “{renderHighlightedQuote(active.shortQuote, active.highlight)}
                    ”
                  </blockquote>

                  <span className="mt-5 inline-flex rounded-full border-[2px] border-[#2B1A16] bg-[#FFBD17] px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#2B1A16] shadow-[4px_4px_0_0_rgba(0,0,0,0.06)] sm:text-xs">
                    {active.badge}
                  </span>
                </div>

                {/* Right block */}
                <div className="flex flex-col justify-center px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
                  <Quote className="mb-5 h-8 w-8 text-[#FF008E]/25 sm:mb-6 sm:h-10 sm:w-10" />

                  <p className="max-w-2xl text-base leading-8 text-[#2B1A16]/78 sm:text-lg sm:leading-9">
                    {active.quote}
                  </p>

                  <div className="mt-7 sm:mt-8">
                    <p className="font-serif text-[1.55rem] leading-none text-[#2B1A16] sm:text-[1.9rem]">
                      {active.author}
                    </p>
                    <p className="mt-2 text-sm text-[#2B1A16]/62 sm:text-base">
                      {active.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Rotation indicators */}
        <div className="mt-5 flex items-center justify-center gap-3 sm:mt-6">
          {testimonials.map((item, index) => {
            const isActive = index === activeIndex

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show testimonial from ${item.author}`}
                aria-pressed={isActive}
                className={`h-3 rounded-full border border-[#2B1A16]/25 transition-all duration-300 ${isActive
                    ? "w-10 bg-[#FF008E]"
                    : "w-3 bg-white/70 hover:bg-[#E7A9D3]"
                  }`}
              />
            )
          })}
        </div>

        {/* Divider */}
        <div className="my-10 flex items-center justify-center sm:my-12">
          <div className="h-px w-full max-w-5xl bg-[#2B1A16]/12" />
        </div>

        {/* Secondary card */}
        {secondaryTestimonial && (
          <div className="mx-auto max-w-3xl">
            <motion.article
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="group relative"
            >
              <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-[1.75rem] bg-[#FFABFF]/22 transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3 sm:rounded-[2rem]" />

              <div className="relative h-full rounded-[1.75rem] border-[2.5px] border-[#2B1A16] bg-[#FFFDF9]/88 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-transform duration-300 group-hover:-translate-y-1 sm:rounded-[2rem] sm:p-7">
                <button
                  type="button"
                  onClick={() => {
                    const realIndex = testimonials.findIndex(
                      (item) => item.id === secondaryTestimonial.id
                    )
                    if (realIndex !== -1) setActiveIndex(realIndex)
                  }}
                  className="absolute -top-3 right-4 rounded-full border-[2px] border-[#2B1A16] bg-[#FF008E] px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-white shadow-[3px_3px_0_0_rgba(0,0,0,0.06)] sm:right-5 sm:text-xs"
                >
                  {secondaryTestimonial.badge}
                </button>

                <Quote className="mb-4 h-8 w-8 text-[#E7A9D3] sm:mb-5 sm:h-9 sm:w-9" />

                <blockquote className="text-[1rem] leading-8 text-[#2B1A16]/78 sm:text-[1.08rem] sm:leading-9">
                  “{secondaryTestimonial.quote}”
                </blockquote>

                <div className="mt-7 flex items-center gap-4 sm:mt-8">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border-[2px] border-[#2B1A16] bg-[#F4E7F7] text-sm font-bold text-[#2B1A16] sm:h-12 sm:w-12">
                    {secondaryTestimonial.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-[#2B1A16]">
                      {secondaryTestimonial.author}
                    </p>
                    <p className="text-sm text-[#2B1A16]/58">
                      {secondaryTestimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        )}

        {/* Bottom accent */}
        <div className="mt-12 flex justify-center sm:mt-14">
          <div className="h-[2px] w-24 rounded-full bg-[#FF008E]/24 sm:w-32" />
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
        className="rounded-sm bg-[#DDF0D5] px-2 text-[#2B1A16]"
      >
        {part}
      </span>
    )
  })
}